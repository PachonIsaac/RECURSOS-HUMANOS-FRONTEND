import React from 'react';
import { Link } from 'react-router-dom';
import IconHR from '../../assets/icons/iconHR.svg';
import { PrivateRoutes } from '../../models'
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={IconHR} alt='IconHR'/>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to={`/${PrivateRoutes.ADMIN_DASHBOARD}`}>Menu</Link>
        </li>
        <li>
          <Link to={`/${PrivateRoutes.ADMIN_POSTULACIONES}`}>Postulaciones</Link>
        </li>
        <li>
          <Link to={`/${PrivateRoutes.ADMIN_PERSONAL}`}>Personal</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;