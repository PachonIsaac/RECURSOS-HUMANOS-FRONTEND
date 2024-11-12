import React, { useState } from 'react';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          
        </button>
        <h3 className="sidebar-title">Dashboard</h3>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <a href="#" className="logout-link">
          
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;