import React from 'react';
import CardDashboard from '../Components/CardDashboard/CardDashboard';
import { FaPeopleGroup, FaIdCard } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import {PublicRoutes} from '../Models'
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.mainContent}>
        <CardDashboard title='Postulaciones' IconComponent={BsFillPersonPlusFill} url={`/${PublicRoutes.DASHBOARD_POSTULACIONES}`}/>
        <CardDashboard title='Personal' IconComponent={FaPeopleGroup} url={`/${PublicRoutes.DASHBOARD_PERSONAL}`}/>
        <CardDashboard title='Puestos de trabajo' IconComponent={FaIdCard} />
        <CardDashboard title='Postulaciones' IconComponent={BsFillPersonPlusFill} url={`/${PublicRoutes.DASHBOARD_POSTULACIONES}`}/>
        <CardDashboard title='Personal' IconComponent={FaPeopleGroup} url={`/${PublicRoutes.DASHBOARD_PERSONAL}`}/>
        <CardDashboard title='Puestos de trabajo' IconComponent={FaIdCard} />
      </div>
    </div>
    
  );
}

export default Dashboard;