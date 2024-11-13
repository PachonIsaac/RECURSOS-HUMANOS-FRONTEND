import React from 'react';
import IconBriefing from "../Assets/Icons/IconBriefing.svg";
import IconDataManagement from "../Assets/Icons/IconDataManagement.svg";
import CardDashboard from '../Components/CardDashboard/CardDashboard';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <CardDashboard title='Postulaciones' iconName={IconBriefing} />
        <CardDashboard title='Personal' iconName={IconDataManagement} />
      </div>
    </div>
    
  );
}

export default Dashboard;