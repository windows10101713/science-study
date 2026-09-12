import { useNavigate } from 'react-router-dom'
import { useLearningStore } from '../lib/store'
import { logout, getCurrentUser } from '../lib/auth'
import '../styles/index.css'

export default function SettingsPage() {
  const navigate = useNavigate()
  const { userPreferences, setUserPreference, resetProgress } = useLearningStore()
  const user = getCurrentUser()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleReset = () => {
    if (confirm('모든 학습 진도와 기록이 삭제됩니다. 계속할까요?')) {
      resetProgress()
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>⚙️ 설정</h1>
          <p>계정과 앱 환경을 관리하세요</p>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h3>계정</h3>
          <p>현재 로그인: <strong>{user}</strong></p>
          <button className="btn btn-secondary" onClick={handleLogout} style={{ marginTop: '1rem' }}>
            로그아웃
          </button>
        </div>

        <div className="card">
          <h3>화면</h3>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={userPreferences.darkMode}
              onChange={(e) => setUserPreference('darkMode', e.target.checked)}
            />
            <span>다크 모드</span>
          </label>
        </div>

        <div className="card" style={{ backgroundColor: '#fef2f2' }}>
          <h3 style={{ color: '#ef4444' }}>위험 구역</h3>
          <p>학습 진도, 세션, 오답 기록을 모두 초기화합니다.</p>
          <button className="btn btn-secondary" onClick={handleReset} style={{ marginTop: '1rem', color: '#ef4444' }}>
            🗑 학습 기록 초기화
          </button>
        </div>
      </main>
    </div>
  )
}
