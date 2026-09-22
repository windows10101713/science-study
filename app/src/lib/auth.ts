// 브라우저 SQL DB를 주 저장소로 사용하고 localStorage는 현재 세션 표시만 보관합니다.
import { findSqlUser, upsertSqlUser, executeQuery } from './db'
interface StoredUser {
  username: string
  passwordHash: string
}

const USERS_KEY = 'auth_users'
const CURRENT_USER_KEY = 'auth_currentUser'

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

export async function signUp(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const trimmed = username.trim()
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
  upsertSqlUser(trimmed, passwordHash)
  saveUsers([...users, { username: trimmed, passwordHash }])
  localStorage.setItem(CURRENT_USER_KEY, trimmed)
  return { ok: true }
}

export async function login(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const trimmed = username.trim()
  const users = getUsers()
  const localUser = users.find((u) => u.username === trimmed)
  const sqlUser = findSqlUser(trimmed)
  const user = localUser || (sqlUser ? { username: sqlUser.username, passwordHash: sqlUser.password_hash } : undefined)
  if (!user) {
    return { ok: false, error: '존재하지 않는 아이디입니다' }
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
}

export function getCurrentUser(): string | null {
  return localStorage.getItem(CURRENT_USER_KEY)
}

export function deleteAccount(): boolean {
  const current = getCurrentUser()
  if (!current) return false
  const users = getUsers().filter((u) => u.username !== current)
  executeQuery(`DELETE FROM auth_users WHERE username = '${current.replace(/'/g, "''")}'`)
  saveUsers(users)
  logout()
  return true
}
