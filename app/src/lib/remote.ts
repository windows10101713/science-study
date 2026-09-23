const deployedApi = 'https://func-science-study-ee47.azurewebsites.net/api'

function getApiBase() {
  if (typeof window === 'undefined') return deployedApi
  return deployedApi
}

export async function remoteRequest<T = any>(path: string, options: RequestInit = {}): Promise<{ ok: boolean; status: number; data?: T; unavailable?: boolean }> {
  try {
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'application/json')
    const token = localStorage.getItem('auth_apiToken')
    if (token) headers.set('Authorization', `Bearer ${token}`)
    const response = await fetch(`${getApiBase()}${path}`, { ...options, headers })
    const data = await response.json().catch(() => undefined)
    return { ok: response.ok, status: response.status, data }
  } catch {
    return { ok: false, status: 0, unavailable: true }
  }
}

export function storeRemoteSession(data: { token: string; username: string }) {
  localStorage.setItem('auth_apiToken', data.token)
  localStorage.setItem('auth_currentUser', data.username)
}

export async function pushLocalDatabase(records: Record<string, unknown>[]) {
  if (!localStorage.getItem('auth_apiToken') || records.length === 0) return
  await remoteRequest('/sync/import', {
    method: 'POST',
    body: JSON.stringify({ records }),
  })
}

export async function pushLearningRecord(record: Record<string, unknown>) {
  return pushLocalDatabase([record])
}

export async function pullRemoteDatabase() {
  const result = await remoteRequest<{ records?: Array<{ recordType: string; payload: Record<string, any>; sourceId: string }> }>('/sync/export')
  if (!result.ok || !result.data?.records) return result
  return result
}

export async function generateAIArtifact<T = any>(kind: string, payload: Record<string, unknown>) {
  return remoteRequest<{ artifact?: { id: string; content: T; createdAt: string }; reused?: boolean; error?: string }>(`/ai/${kind}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
