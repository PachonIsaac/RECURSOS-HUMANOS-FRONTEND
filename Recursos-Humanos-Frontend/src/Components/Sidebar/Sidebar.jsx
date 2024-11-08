import React, { useState } from 'react';
import IconHR from "../../Assets/Icons/IconHR.svg";
import './Sidebar.css'; // Make sure to create a corresponding CSS file for styling

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <img src={IconHR} alt="HRMinder Logo" className="logo" />
                <button onClick={toggleSidebar} className="toggle-btn">
                    {isOpen ? '<' : '>'}
                </button>
            </div>
            <ul className="sidebar-menu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
            </ul>
        </div>
    );
};

export default Sidebar;