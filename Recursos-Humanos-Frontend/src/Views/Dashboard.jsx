import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import IconBriefing from "../Assets/Icons/IconBriefing.svg";
import IconDataManagement from "../Assets/Icons/IconDataManagement.svg";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        
        <div className='containerCards'>
            <div className='card'>
                <div className='card-header'>
                    <img className='iconoHR' src={IconDataManagement} />
                    <div className='card-info'>
                        <h3 className='card-title'>Personal</h3>
                        <div className='card-company-container'>
                            <p className='card-company'>Nombre de la empresa</p>
                            <p className='card-applicants'>30 aplicantes</p>
                        </div>
                    </div>    
                </div>
            </div>
               
            <div className='card'>
                <div className='card-header'>
                    <img className='iconoHR' src={IconBriefing} />
                    <div className='card-info'>
                        <h3 className='card-title'>Postulaciones</h3>
                        <div className='card-company-container'>
                            <p className='card-company'>Nombre de la empresa</p>
                            <p className='card-applicants'>30 aplicantes</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </div>
    
  );
}

export default Dashboard;