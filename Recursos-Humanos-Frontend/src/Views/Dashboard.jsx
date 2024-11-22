import React from 'react';
import CardDashboard from '../components/cardDashboard/cardDashboard';
import { FaPeopleGroup, FaIdCard } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import {PrivateRoutes} from '../models'
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.mainContent}>
        <CardDashboard title='Postulaciones' IconComponent={BsFillPersonPlusFill} url={`/${PrivateRoutes.ADMIN_POSTULACIONES}`}/>
        <CardDashboard title='Personal' IconComponent={FaPeopleGroup} url={`/${PrivateRoutes.ADMIN_PERSONAL}`}/>
        {/* <CardDashboard title='Puestos de trabajo' IconComponent={FaIdCard} /> */}
        
      </div>
    </div>
    
  );
}

export default Dashboard;