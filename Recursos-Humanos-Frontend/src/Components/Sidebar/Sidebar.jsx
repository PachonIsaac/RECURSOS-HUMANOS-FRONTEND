import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/postulaciones">Postulaciones</Link>
        </li>
        <li>
          <Link to="/personal">Personal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;