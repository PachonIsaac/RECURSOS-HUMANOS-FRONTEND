import React from 'react';
import { Link } from 'react-router-dom';
import IconHR from '../../assets/icons/iconHR.svg';
import { PublicRoutes } from '../../models'
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={IconHR} alt='IconHR'/>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to={`/${PublicRoutes.DASHBOARD}`}>Menu</Link>
        </li>
        <li>
          <Link to={`/${PublicRoutes.DASHBOARD_POSTULACIONES}`}>Postulaciones</Link>
        </li>
        <li>
          <Link to={`/${PublicRoutes.DASHBOARD_PERSONAL}`}>Personal</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;