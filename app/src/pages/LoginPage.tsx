import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../lib/auth'
import '../styles/index.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await login(username, password)
    setLoading(false)
    if (!result.ok) {
      setError(result.error || '로그인에 실패했습니다')
      return
    }
    navigate('/')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🔬 Science Study</h1>
          <p>로그인하고 학습을 시작하세요</p>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '420px' }}>
        <form className="card" onSubmit={handleSubmit}>
          <h3>로그인</h3>
          <div className="form-group">
            <label>아이디</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디를 입력하세요"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          {error && (
            <div className="feedback incorrect" style={{ marginBottom: '1rem' }}>
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div className="card" style={{ textAlign: 'center' }}>
          <p>
            계정이 없으신가요? <Link to="/signup" style={{ color: '#667eea', fontWeight: 600 }}>회원가입</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
