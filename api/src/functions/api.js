import { app } from '@azure/functions'
import { CosmosClient } from '@azure/cosmos'
import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'

const databaseName = process.env.COSMOS_DATABASE || 'science_study'
const containerName = process.env.COSMOS_CONTAINER || 'records'
let containerPromise

function getContainer() {
  if (!containerPromise) {
    const client = new CosmosClient({
      endpoint: process.env.COSMOS_ENDPOINT,
      key: process.env.COSMOS_KEY,
    })
    containerPromise = client.database(databaseName).container(containerName)
  }
  return containerPromise
}

function normalizeUsername(value) {
  return String(value || '').trim().toLowerCase()
}

function hashPassword(password, salt = randomBytes(16).toString('hex')) {
  const hash = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

function verifyPassword(password, stored) {
  const [salt, expected] = String(stored || '').split(':')
  if (!salt || !expected) return false
  const actual = scryptSync(password, salt, 64)
  const expectedBuffer = Buffer.from(expected, 'hex')
  return actual.length === expectedBuffer.length && timingSafeEqual(actual, expectedBuffer)
}

function userId(username) {
  return `user:${createHash('sha256').update(username).digest('hex').slice(0, 32)}`
}

function json(status, body) {
  return { status, jsonBody: body, headers: { 'Content-Type': 'application/json' } }
}

function artifactId(kind, input) {
  return `ai:${kind}:${createHash('sha256').update(JSON.stringify(input)).digest('hex')}`
}

async function readArtifact(id, userId) {
  try {
    return (await (await getContainer()).item(id, userId).read()).resource
  } catch (error) {
    if (error.code === 404) return undefined
    throw error
  }
}

async function generateWithAzureOpenAI(system, userPrompt) {
  const endpoint = String(process.env.AZURE_OPENAI_ENDPOINT || '').replace(/\/$/, '')
  const key = process.env.AZURE_OPENAI_KEY
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21'
  if (!endpoint || !key || !deployment) throw new Error('AI provider is not configured')
  const response = await fetch(`${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': key },
    body: JSON.stringify({
      temperature: 0.2,
      response_format: { type: 'json_object' },
      messages: [{ role: 'system', content: system }, { role: 'user', content: userPrompt }],
    }),
  })
  if (!response.ok) throw new Error(`Azure OpenAI returned ${response.status}`)
  const result = await response.json()
  return JSON.parse(result.choices?.[0]?.message?.content || '{}')
}

async function createImmutableArtifact(user, kind, input, system, prompt) {
  const id = artifactId(kind, input)
  const existing = await readArtifact(id, user.id)
  if (existing) return { artifact: existing, reused: true }
  const generated = await generateWithAzureOpenAI(system, prompt)
  const artifact = {
    id,
    pk: user.id,
    type: 'ai-artifact',
    artifactType: kind,
    userId: user.id,
    input,
    content: generated,
    createdAt: new Date().toISOString(),
    immutable: true,
    model: process.env.AZURE_OPENAI_DEPLOYMENT,
    schemaVersion: 1,
  }
  await (await getContainer()).items.create(artifact)
  return { artifact, reused: false }
}

async function body(request) {
  try { return await request.json() } catch { return {} }
}

async function getUser(username) {
  try {
    return (await (await getContainer()).item(userId(username), userId(username)).read()).resource
  } catch (error) {
    if (error.code === 404) return undefined
    throw error
  }
}

async function createSession(user) {
  const token = randomBytes(32).toString('hex')
  const session = { id: `session:${token}`, pk: `session:${token}`, type: 'session', token, userId: user.id, username: user.username, expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30 }
  await (await getContainer()).items.create(session)
  return token
}

async function authenticatedUser(request) {
  const header = request.headers.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  if (!token) return undefined
  try {
    const session = (await (await getContainer()).item(`session:${token}`, `session:${token}`).read()).resource
    if (!session || session.expiresAt < Date.now()) return undefined
    return { id: session.userId, username: session.username }
  } catch (error) {
    if (error.code === 404) return undefined
    throw error
  }
}

async function saveUserRecord(user, type, sourceId, payload) {
  const safeSourceId = encodeURIComponent(String(sourceId)).replace(/%/g, '_')
  const id = `${user.id.replace(/[^a-zA-Z0-9_-]/g, '_')}_${type.replace(/[^a-zA-Z0-9_-]/g, '_')}_${safeSourceId}`
  await (await getContainer()).items.upsert({ id, pk: user.id, type: 'learning-record', recordType: type, sourceId: String(sourceId), userId: user.id, payload, updatedAt: new Date().toISOString() })
}

async function handle(request) {
  const route = String(request.params.route || '').replace(/^\//, '').split('/').filter(Boolean)
  const method = request.method.toUpperCase()
  const data = await body(request)
  const container = await getContainer()

  if (method === 'POST' && route.join('/') === 'auth/signup') {
    const username = normalizeUsername(data.username)
    const password = String(data.password || '')
    if (!username || password.length < 4) return json(400, { error: '아이디와 비밀번호는 필수이며 비밀번호는 4자 이상이어야 합니다.' })
    if (await getUser(username)) return json(409, { error: '이미 존재하는 아이디입니다.' })
    const user = { id: userId(username), pk: userId(username), type: 'user', username, passwordHash: hashPassword(password), createdAt: new Date().toISOString(), schemaVersion: 1 }
    await container.items.create(user)
    return json(201, { username, token: await createSession(user), migrated: false })
  }

  if (method === 'POST' && route.join('/') === 'auth/login') {
    const username = normalizeUsername(data.username)
    const user = await getUser(username)
    if (!user) return json(404, { code: 'USER_NOT_FOUND', error: '서버 DB에 계정이 없습니다.' })
    if (!verifyPassword(String(data.password || ''), user.passwordHash)) return json(401, { error: '비밀번호가 올바르지 않습니다.' })
    return json(200, { username: user.username, token: await createSession(user), migrated: true })
  }

  if (method === 'POST' && route.join('/') === 'auth/migrate') {
    const username = normalizeUsername(data.username)
    const password = String(data.password || '')
    if (await getUser(username)) return json(200, { username, token: await createSession(await getUser(username)), migrated: false })
    const user = { id: userId(username), pk: userId(username), type: 'user', username, passwordHash: hashPassword(password), createdAt: new Date().toISOString(), migratedFrom: 'localhost-browser-sql', schemaVersion: 1 }
    await container.items.create(user)
    return json(201, { username, token: await createSession(user), migrated: true })
  }

  const user = await authenticatedUser(request)
  if (!user) return json(401, { error: '인증이 필요합니다.' })

  if (method === 'POST' && route.join('/') === 'auth/delete') {
    const query = { query: 'SELECT c.id, c.pk FROM c WHERE c.userId = @userId OR c.id = @userId', parameters: [{ name: '@userId', value: user.id }] }
    const resources = (await container.items.query(query).fetchAll()).resources
    for (const resource of resources) await container.item(resource.id, resource.pk).delete().catch(() => undefined)
    return json(200, { ok: true })
  }

  if (method === 'POST' && route.join('/') === 'sync/import') {
    const records = Array.isArray(data.records) ? data.records : []
    for (const record of records) await saveUserRecord(user, String(record.type || 'learning'), record.id || `${Date.now()}-${Math.random()}`, record)
    return json(200, { ok: true, imported: records.length })
  }

  if (method === 'GET' && route.join('/') === 'sync/export') {
    const query = { query: 'SELECT c.recordType, c.sourceId, c.payload, c.updatedAt FROM c WHERE c.pk = @userId AND c.type = @type', parameters: [{ name: '@userId', value: user.id }, { name: '@type', value: 'learning-record' }] }
    const records = (await container.items.query(query, { partitionKey: user.id }).fetchAll()).resources
    return json(200, { username: user.username, records })
  }

  if (method === 'POST' && route.join('/') === 'ai/assessment') {
    const input = { survey: data.survey || {}, answers: data.answers || [], rubricVersion: 1 }
    const result = await createImmutableArtifact(
      user,
      'assessment',
      input,
      'You are a careful science placement assessor. Return JSON only with level, confidence, strengths, gaps, recommendedSubjects, and explanation. Never invent a diagnosis. Use levels basic, curriculum, advanced, expert, research.',
      `Assess this learner from the survey and diagnostic answers. Survey: ${JSON.stringify(input.survey)} Answers: ${JSON.stringify(input.answers)}`,
    )
    return json(200, result)
  }

  if (method === 'POST' && route.join('/') === 'ai/quiz') {
    const input = { topic: data.topic, subject: data.subject, level: data.level, profileArtifactId: data.profileArtifactId, count: Math.min(Number(data.count) || 6, 20), generationVersion: 1 }
    const result = await createImmutableArtifact(
      user,
      'quiz',
      input,
      'You create rigorous Korean science quizzes. Return JSON only: {title, questions}. Each question has id, type, question, options, answer, explanation, hint, difficulty. Include multiple_choice, short_answer, and calculation when appropriate. Do not include unsafe experiments or unsupported facts.',
      `Create ${input.count} immutable questions for ${input.subject}/${input.topic} at ${input.level} level. Learner profile artifact: ${input.profileArtifactId || 'none'}.`,
    )
    return json(200, result)
  }

  if (method === 'POST' && route.join('/') === 'ai/lesson') {
    const input = {
      lessonId: data.lessonId,
      topic: data.topic || data.lessonId,
      subject: data.subject || 'general',
      level: data.level || 'curriculum',
      language: 'ko',
      generationVersion: 1,
    }
    const result = await createImmutableArtifact(
      user,
      'lesson',
      input,
      'You create accurate Korean science lessons. Return JSON only with id, subject, grade, level, unit, title, summary, keywords, misconceptions, explanation {basic,curriculum,university}, deepDive, examples, observationActivity {title,description,prediction,materials,steps,safetyWarning}, and questions. Do not invent citations, unsafe experiments, or medical advice. Make the lesson teachable and concrete.',
      `Create one complete lesson for topic "${input.topic}" in subject "${input.subject}" at level "${input.level}". Include definitions, an intuitive explanation, a formula or worked example when relevant, common misconceptions, a safe observation activity, and six question IDs named from ${input.lessonId}-q01 through ${input.lessonId}-q06.`,
    )
    return json(200, result)
  }

  if (method === 'POST' && route.join('/') === 'ai/book') {
    const input = { title: data.title, subject: data.subject, audience: data.audience, pages: Math.min(Number(data.pages) || 8, 30), includeCode: Boolean(data.includeCode), includeFormulas: data.includeFormulas !== false, includeLinks: data.includeLinks !== false, generationVersion: 1 }
    const result = await createImmutableArtifact(
      user,
      'book',
      input,
      'You write accurate Korean educational science books. Return JSON only: {title, subtitle, audience, pages}. Each page has pageNumber, heading, paragraphs, terms, formulas, code, links, exercises. Use code only for programming topics. Links must be official or clearly marked search suggestions; never fabricate citations.',
      `Write a structured educational book titled ${input.title} about ${input.subject} for ${input.audience}. Produce ${input.pages} pages. Formulas: ${input.includeFormulas}. Code: ${input.includeCode}. Links: ${input.includeLinks}.`,
    )
    return json(200, result)
  }

  if (method === 'GET' && route[0] === 'ai' && route[1] === 'artifact' && route[2]) {
    const artifact = await readArtifact(decodeURIComponent(route[2]), user.id)
    return artifact ? json(200, { artifact, reused: true }) : json(404, { error: 'AI artifact not found' })
  }

  return json(404, { error: 'API 경로를 찾을 수 없습니다.' })
}

app.http('api', { methods: ['GET', 'POST'], authLevel: 'anonymous', route: '{*route}', handler: async (request) => {
  try {
    if (!process.env.COSMOS_ENDPOINT || !process.env.COSMOS_KEY) return json(503, { error: '서버 DB 설정이 아직 완료되지 않았습니다.' })
    return await handle(request)
  } catch (error) {
    console.error(error)
    return json(500, { error: '서버 처리 중 오류가 발생했습니다.' })
  }
} })
