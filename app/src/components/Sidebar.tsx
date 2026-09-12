import { NavLink } from 'react-router-dom'
import { getCurrentUser } from '../lib/auth'

const NAV_ITEMS = [
  { to: '/', label: '홈', icon: '🏠', end: true },
  { to: '/lessons', label: '레슨', icon: '📚', end: false },
  { to: '/log', label: '로그', icon: '📝', end: false },
  { to: '/settings', label: '설정', icon: '⚙️', end: false },
]

export default function Sidebar() {
  const user = getCurrentUser()

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
      {user && <div className="sidebar-user">👤 {user}</div>}
    </nav>
  )
}
