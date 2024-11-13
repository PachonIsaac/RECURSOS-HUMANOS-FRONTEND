import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './DashboardLayout.css';

export function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}