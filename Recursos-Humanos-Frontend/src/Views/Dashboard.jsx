import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h2>Section 1</h2>
                    <p>Content for section 1</p>
                </div>
                <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h2>Section 2</h2>
                    <p>Content for section 2</p>
                </div>
                <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h2>Section 3</h2>
                    <p>Content for section 3</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;