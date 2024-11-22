import React from 'react';
import CardDashboard from '../components/cardDashboard/cardDashboard';
import { FaFileSignature, FaFolder } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import {PublicRoutes} from '../models'
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.mainContent}>
        <CardDashboard title='Generar Certificados' IconComponent={FaFileSignature} />
      </div>
    </div>
    
  );
}

export default Dashboard;