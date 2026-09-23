// 브라우저용 관계형 SQL 데이터베이스 모듈
// LocalStorage / IndexedDB persistence를 가진 경량 관계형 SQL 엔진

export interface QueryResult<T = any> {
  rows: T[]
  rowsAffected: number
  lastInsertId?: number
}

class RelationalDatabase {
  private dbName = 'science_study_db'
  private tables: Record<string, any[]> = {}

  constructor() {
    this.loadFromStorage()
    this.initTables()
  }

  private loadFromStorage() {
    try {
      const saved = localStorage.getItem(this.dbName)
      if (saved) {
        this.tables = JSON.parse(saved)
      }
    } catch (e) {
      console.error('Failed to load SQL database from storage:', e)
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(this.dbName, JSON.stringify(this.tables))
    } catch (e) {
      console.error('Failed to persist SQL database:', e)
    }
  }

  public initTables() {
    // 1. users 테이블
    if (!this.tables.users) {
      this.tables.users = [
        { id: 'usr-default', username: 'tester', created_at: new Date().toISOString() }
      ]
    }
    // 2. classes 테이블 (레슨 트랙)
    if (!this.tables.classes) {
      this.tables.classes = []
    }
    // 3. progress 테이블 (학습 진도)
    if (!this.tables.progress) {
      this.tables.progress = []
    }
    // 4. mistakes 테이블 (오답)
    if (!this.tables.mistakes) {
      this.tables.mistakes = []
    }
    // 5. terms 테이블 (과학 용어 사전)
    if (!this.tables.terms) {
      this.tables.terms = []
    }
    if (!this.tables.auth_users) {
      this.tables.auth_users = []
    }
    if (!this.tables.learning_records) {
      this.tables.learning_records = []
    }
    this.saveToStorage()
  }

  // 간단한 SQL 파서 및 실행기 (SELECT, INSERT, UPDATE, DELETE, CREATE 지원)
  public executeSql<T = any>(sql: string, params: any[] = []): QueryResult<T> {
    const trimmed = sql.trim()
    const upper = trimmed.toUpperCase()

    if (upper.startsWith('CREATE TABLE')) {
      const match = trimmed.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([a-zA-Z0-9_]+)/i)
      if (match) {
        const tableName = match[1].toLowerCase()
        if (!this.tables[tableName]) {
          this.tables[tableName] = []
          this.saveToStorage()
        }
      }
      return { rows: [], rowsAffected: 0 }
    }

    if (upper.startsWith('SELECT')) {
      return this.handleSelect<T>(trimmed)
    }

    if (upper.startsWith('INSERT INTO')) {
      return this.handleInsert(trimmed, params)
    }

    if (upper.startsWith('UPDATE')) {
      return this.handleUpdate(trimmed, params)
    }

    if (upper.startsWith('DELETE FROM')) {
      return this.handleDelete(trimmed)
    }

    return { rows: [], rowsAffected: 0 }
  }

  private handleSelect<T>(sql: string): QueryResult<T> {
    const match = sql.match(/SELECT\s+(.+?)\s+FROM\s+([a-zA-Z0-9_]+)(?:\s+WHERE\s+(.+?))?(?:\s+ORDER\s+BY\s+(.+?))?(?:\s+LIMIT\s+(\d+))?$/i)
    if (!match) {
      // 테이블 전체 스캔 폴백
      const tableMatch = sql.match(/FROM\s+([a-zA-Z0-9_]+)/i)
      if (tableMatch && this.tables[tableMatch[1].toLowerCase()]) {
        return { rows: [...this.tables[tableMatch[1].toLowerCase()]] as T[], rowsAffected: 0 }
      }
      return { rows: [], rowsAffected: 0 }
    }

    const [, fieldsStr, tableName, whereClause, orderBy, limitStr] = match
    const table = this.tables[tableName.toLowerCase()] || []

    let result = [...table]

    if (whereClause) {
      const whereCond = whereClause.trim()
      const eqMatch = whereCond.match(/([a-zA-Z0-9_]+)\s*=\s*'?(.*?)'?$/)
      if (eqMatch) {
        const [, key, val] = eqMatch
        result = result.filter((row) => String(row[key]) === String(val))
      }
    }

    if (orderBy) {
      const [col, dir] = orderBy.trim().split(/\s+/)
      result.sort((a, b) => {
        if (a[col] < b[col]) return dir?.toUpperCase() === 'DESC' ? 1 : -1
        if (a[col] > b[col]) return dir?.toUpperCase() === 'DESC' ? -1 : 1
        return 0
      })
    }

    if (limitStr) {
      result = result.slice(0, parseInt(limitStr, 10))
    }

    if (fieldsStr.trim() !== '*') {
      const fields = fieldsStr.split(',').map((f) => f.trim())
      result = result.map((row) => {
        const filtered: any = {}
        fields.forEach((f) => (filtered[f] = row[f]))
        return filtered
      })
    }

    return { rows: result as T[], rowsAffected: 0 }
  }

  private handleInsert(sql: string, params: any[]): QueryResult {
    const match = sql.match(/INSERT\s+INTO\s+([a-zA-Z0-9_]+)\s*\((.+?)\)\s*VALUES\s*\((.+?)\)/i)
    if (!match) return { rows: [], rowsAffected: 0 }

    const [, tableName, colsStr, valsStr] = match
    const tableKey = tableName.toLowerCase()
    if (!this.tables[tableKey]) this.tables[tableKey] = []

    const cols = colsStr.split(',').map((c) => c.trim())
    let vals: any[] = []

    if (params && params.length > 0) {
      vals = params
    } else {
      vals = valsStr.split(',').map((v) => v.trim().replace(/^'|'$/g, ''))
    }

    const row: Record<string, any> = {}
    cols.forEach((col, idx) => {
      row[col] = vals[idx]
    })

    // ID 중복시 덮어쓰기 (UPSERT)
    if (row.id) {
      const idx = this.tables[tableKey].findIndex((r) => r.id === row.id)
      if (idx >= 0) {
        this.tables[tableKey][idx] = { ...this.tables[tableKey][idx], ...row }
      } else {
        this.tables[tableKey].push(row)
      }
    } else {
      this.tables[tableKey].push(row)
    }

    this.saveToStorage()
    return { rows: [], rowsAffected: 1 }
  }

  private handleUpdate(sql: string, _params: any[]): QueryResult {
    const match = sql.match(/UPDATE\s+([a-zA-Z0-9_]+)\s+SET\s+(.+?)(?:\s+WHERE\s+(.+?))?$/i)
    if (!match) return { rows: [], rowsAffected: 0 }

    const [, tableName, setClause, whereClause] = match
    const tableKey = tableName.toLowerCase()
    const table = this.tables[tableKey] || []

    let count = 0
    table.forEach((row) => {
      let matches = true
      if (whereClause) {
        const eqMatch = whereClause.match(/([a-zA-Z0-9_]+)\s*=\s*'?(.*?)'?$/)
        if (eqMatch) {
          const [, key, val] = eqMatch
          if (String(row[key]) !== String(val)) matches = false
        }
      }

      if (matches) {
        setClause.split(',').forEach((setPair) => {
          const [k, v] = setPair.split('=').map((s) => s.trim().replace(/^'|'$/g, ''))
          row[k] = v
        })
        count++
      }
    })

    this.saveToStorage()
    return { rows: [], rowsAffected: count }
  }

  private handleDelete(sql: string): QueryResult {
    const match = sql.match(/DELETE\s+FROM\s+([a-zA-Z0-9_]+)(?:\s+WHERE\s+(.+?))?$/i)
    if (!match) return { rows: [], rowsAffected: 0 }

    const [, tableName, whereClause] = match
    const tableKey = tableName.toLowerCase()
    let table = this.tables[tableKey] || []

    let before = table.length
    if (whereClause) {
      const eqMatch = whereClause.match(/([a-zA-Z0-9_]+)\s*=\s*'?(.*?)'?$/)
      if (eqMatch) {
        const [, key, val] = eqMatch
        table = table.filter((row) => String(row[key]) !== String(val))
      }
    } else {
      table = []
    }

    this.tables[tableKey] = table
    this.saveToStorage()
    return { rows: [], rowsAffected: before - table.length }
  }

  public getAllTables(): Record<string, any[]> {
    return this.tables
  }
}

export const db = new RelationalDatabase()

export function executeQuery<T = any>(sql: string, params: any[] = []): QueryResult<T> {
  return db.executeSql<T>(sql, params)
}

export function upsertSqlUser(username: string, passwordHash: string) {
  return executeQuery(
    'INSERT INTO auth_users (id, username, password_hash, created_at) VALUES (?, ?, ?, ?)',
    [`user-${username}`, username, passwordHash, new Date().toISOString()]
  )
}

export function findSqlUser(username: string): { username: string; password_hash: string } | undefined {
  const normalized = username.trim().toLowerCase()
  const users = db.getAllTables().auth_users || []
  return users.find((user) => String(user.username).trim().toLowerCase() === normalized)
}

export function saveLearningRecord(record: Record<string, unknown>) {
  const id = String(record.id || `${record.type || 'record'}-${Date.now()}`)
  return executeQuery('INSERT INTO learning_records (id, type, payload, created_at) VALUES (?, ?, ?, ?)', [
    id,
    String(record.type || 'learning'),
    JSON.stringify(record),
    new Date().toISOString(),
  ])
}
