import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
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