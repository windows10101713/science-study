import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import PageControls from './PageControls'

export default function Layout() {
  const navigate = useNavigate()

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <div className="ai-quick-bar">
          <span className="ai-quick-label">🤖 AI 창작실</span>
          <button className="ai-quick-button" onClick={() => navigate('/ai-study?mode=lesson')}>➕ AI 레슨 만들기</button>
          <button className="ai-quick-button ai-quick-book" onClick={() => navigate('/ai-study?mode=book')}>📖 AI 책 만들기</button>
        </div>
        <Outlet />
      </div>
      <PageControls />
    </div>
  )
}
