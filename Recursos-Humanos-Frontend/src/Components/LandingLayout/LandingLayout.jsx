import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/navbar';
import { Footer } from '../Footer/Footer';
import styles from './landingLayout.module.css';

export function LandingLayout() {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}