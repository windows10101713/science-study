import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signUp } from '../lib/auth'
import '../styles/index.css'

export default function SignupPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다')
      return
    }
    setLoading(true)
    const result = await signUp(username, password)
    setLoading(false)
    if (!result.ok) {
      setError(result.error || '회원가입에 실패했습니다')
      return
    }
    navigate('/')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🔬 Science Study</h1>
          <p>회원가입하고 나만의 학습 경로를 만들어보세요</p>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '420px' }}>
        <form className="card" onSubmit={handleSubmit}>
          <h3>회원가입</h3>
          <div className="form-group">
            <label>아이디</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="사용할 아이디를 입력하세요"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="4자 이상 입력하세요"
            />
          </div>
          <div className="form-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>
          {error && (
            <div className="feedback incorrect" style={{ marginBottom: '1rem' }}>
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
            {loading ? '가입 중...' : '회원가입'}
          </button>
        </form>

        <div className="card" style={{ textAlign: 'center' }}>
          <p>
            이미 계정이 있으신가요? <Link to="/login" style={{ color: '#667eea', fontWeight: 600 }}>로그인</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
