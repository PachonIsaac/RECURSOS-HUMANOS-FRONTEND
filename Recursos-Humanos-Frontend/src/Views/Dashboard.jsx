import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
                <Sidebar />
                <button onClick={toggleSidebar} className="toggle-btn">
                    {isSidebarOpen ? '<' : '>'}
                </button>
            </div>
            <div className={`dashboard-content ${isSidebarOpen ? '' : 'closed'}`}>
                <h1 className="dashboard-header">Dashboard</h1>
                <div className="dashboard-sections">
                    <div className="dashboard-section">
                        <h2>Section 1</h2>
                        <p>Content for section 1</p>
                    </div>
                    <div className="dashboard-section">
                        <h2>Section 2</h2>
                        <p>Content for section 2</p>
                    </div>
                    <div className="dashboard-section">
                        <h2>Section 3</h2>
                        <p>Content for section 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;