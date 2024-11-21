import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import styles from './dashboardLayout.module.css';

export function DashboardLayout() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
}