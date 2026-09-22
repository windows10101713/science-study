import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import PageControls from './PageControls'

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <Outlet />
      </div>
      <PageControls />
    </div>
  )
}
