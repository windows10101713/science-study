import { NavLink, useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../lib/auth'

const NAV_ITEMS = [
  { to: '/', label: '홈', icon: '🏠', end: true },
  { to: '/lessons', label: '레슨', icon: '📚', end: false },
  { to: '/tools', label: '도구', icon: '🛠️', end: false },
  { to: '/library', label: '도서관', icon: '📖', end: false },
  { to: '/dictionary', label: '사전', icon: '🔤', end: false },
  { to: '/log', label: '로그', icon: '📝', end: false },
  { to: '/settings', label: '설정', icon: '⚙️', end: false },
  { to: '/ai-study', label: 'AI 학습', icon: '🤖', end: false },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const user = getCurrentUser()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="sidebar">
      <div className="sidebar-brand">🔬 Science Study</div>
      <ul className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      {user && (
        <div className="sidebar-user" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>👤 {user}</span>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: 'white',
              borderRadius: '0.25rem',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            로그아웃
          </button>
        </div>
      )}
    </nav>
  )
}
