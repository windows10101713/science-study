// 브라우저 SQL DB를 주 저장소로 사용하고 localStorage는 현재 세션 표시만 보관합니다.
import { findSqlUser, upsertSqlUser, executeQuery } from './db'
import { db } from './db'
import { pushLocalDatabase, remoteRequest, storeRemoteSession } from './remote'
interface StoredUser {
  username: string
  passwordHash: string
}

const USERS_KEY = 'auth_users'
const CURRENT_USER_KEY = 'auth_currentUser'

function normalizeUsername(username: string) {
  return username.trim().toLowerCase()
}

async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function getUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as StoredUser[]
  } catch {
    return []
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

async function migrateBrowserDatabase() {
  const tables = db.getAllTables()
  const records = Object.entries(tables).flatMap(([type, rows]) =>
    type === 'auth_users' ? [] : rows.map((row) => ({
      id: `${type}:${row.id || `${Date.now()}-${Math.random()}`}`,
      type,
      payload: row,
    }))
  )
  await pushLocalDatabase(records)
}

export async function signUp(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const trimmed = normalizeUsername(username)
  if (!trimmed || !password) {
    return { ok: false, error: '아이디와 비밀번호를 입력해주세요' }
  }
  if (password.length < 4) {
    return { ok: false, error: '비밀번호는 4자 이상이어야 합니다' }
  }
  const users = getUsers()
  if (users.some((u) => u.username === trimmed) || findSqlUser(trimmed)) {
    return { ok: false, error: '이미 존재하는 아이디입니다' }
  }
  const passwordHash = await hashPassword(password)
  const remote = await remoteRequest<any>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ username: trimmed, password }),
  })
  if (remote.ok && remote.data) {
    storeRemoteSession(remote.data)
    await migrateBrowserDatabase()
  } else if (!remote.unavailable && remote.status === 409) {
    return { ok: false, error: remote.data?.error || '이미 존재하는 아이디입니다' }
  }
  upsertSqlUser(trimmed, passwordHash)
  saveUsers([...users, { username: trimmed, passwordHash }])
  localStorage.setItem(CURRENT_USER_KEY, trimmed)
  return { ok: true }
}

export async function login(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const trimmed = normalizeUsername(username)
  const users = getUsers()
  const localUser = users.find((u) => normalizeUsername(u.username) === trimmed)
  const sqlUser = findSqlUser(trimmed)
  const user = localUser || (sqlUser ? { username: sqlUser.username, passwordHash: sqlUser.password_hash } : undefined)

  const remote = await remoteRequest<any>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username: trimmed, password }),
  })
  if (remote.ok && remote.data) {
    storeRemoteSession(remote.data)
    return { ok: true }
  }
  if (!remote.unavailable && remote.status !== 404) {
    return { ok: false, error: remote.data?.error || '로그인에 실패했습니다' }
  }

  // Existing localhost/file:// account: verify locally, then migrate it to Azure.
  if (remote.status === 404 && user) {
    const localHash = await hashPassword(password)
    if (user.passwordHash === localHash) {
      const migrated = await remoteRequest<any>('/auth/migrate', {
        method: 'POST',
        body: JSON.stringify({ username: trimmed, password }),
      })
      if (migrated.ok && migrated.data) {
        storeRemoteSession(migrated.data)
        await migrateBrowserDatabase()
        return { ok: true }
      }
    }
  }
  if (!user) {
    return {
      ok: false,
      error: '이 실행 주소의 저장소에서 계정을 찾지 못했습니다. 회원가입한 주소(file://, localhost, Azure)가 같은지 확인하거나 이 주소에서 다시 회원가입해주세요.',
    }
  }
  const passwordHash = await hashPassword(password)
  if (user.passwordHash !== passwordHash) {
    return { ok: false, error: '비밀번호가 올바르지 않습니다' }
  }
  localStorage.setItem(CURRENT_USER_KEY, trimmed)
  return { ok: true }
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY)
  localStorage.removeItem('auth_apiToken')
}

export function getCurrentUser(): string | null {
  return localStorage.getItem(CURRENT_USER_KEY)
}

export function deleteAccount(): boolean {
  const current = getCurrentUser()
  if (!current) return false
  const users = getUsers().filter((u) => normalizeUsername(u.username) !== normalizeUsername(current))
  executeQuery(`DELETE FROM auth_users WHERE username = '${current.replace(/'/g, "''")}'`)
  void remoteRequest('/auth/delete', { method: 'POST' })
  saveUsers(users)
  logout()
  return true
}
