import './Jobs.css';
import IconHR from "../Assets/Icons/IconHR.svg";
import { FaRegClock } from 'react-icons/fa';

export default function Jobs() {
    return (
        <div className="jobs-container">
            <h1 className="titulo">Encuentra el trabajo de tus sueños</h1>
            <div className="search-container">
                <input type="text" placeholder="Buscar..." className="search-input"/>
                <button className="search-button">Buscar</button>
            </div>
            <div className="containerCards">
                <div className="card">
                    <div className="card-header">
                        <img className="iconoHR" src={IconHR} />
                        <div className="card-info">
                        <h3 className="card-title">Título del trabajo</h3>
                        <div className="card-company-container">
                            <p className="card-company">Nombre de la empresa</p>
                            <p className="card-applicants">30 aplicantes</p>
                        </div>
                        </div>
                    </div>
                    <div className="card-tags">
                        <span className="card-tag card-tag-remoto">Remoto</span>
                        <span className="card-tag card-tag-other">Beneficios</span>
                        <span className="card-tag card-tag-other1">Beneficios</span>
                    </div>
                    <div className="card-content">
                        <p className="card-description">Trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo </p>
                    </div> 
                    <div class="linea-gris"></div>
                    <div className="job-row">
                        <div className="job-salary">$2.800.000</div>
                        <div className="job-time">
                            <FaRegClock className="clock-icon" />
                            <span>Posteado hace 3 días</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img className="iconoHR" src={IconHR} />
                        <div className="card-info">
                        <h3 className="card-title">Título del trabajo</h3>
                        <div className="card-company-container">
                            <p className="card-company">Nombre de la empresa</p>
                            <p className="card-applicants">30 aplicantes</p>
                        </div>
                        </div>
                    </div>
                    <div className="card-tags">
                        <span className="card-tag card-tag-remoto">Remoto</span>
                        <span className="card-tag card-tag-other">Beneficios</span>
                        <span className="card-tag card-tag-other1">Beneficios</span>
                    </div>
                    <div className="card-content">
                        <p className="card-description">Trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo </p>
                    </div> 
                    <div class="linea-gris"></div>
                    <div className="job-row">
                        <div className="job-salary">$2.800.000</div>
                        <div className="job-time">
                            <FaRegClock className="clock-icon" />
                            <span>Posteado hace 3 días</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img className="iconoHR" src={IconHR} />
                        <div className="card-info">
                        <h3 className="card-title">Título del trabajo</h3>
                        <div className="card-company-container">
                            <p className="card-company">Nombre de la empresa</p>
                            <p className="card-applicants">30 aplicantes</p>
                        </div>
                        </div>
                    </div>
                    <div className="card-tags">
                        <span className="card-tag card-tag-remoto">Remoto</span>
                        <span className="card-tag card-tag-other">Beneficios</span>
                        <span className="card-tag card-tag-other1">Beneficios</span>
                    </div>
                    <div className="card-content">
                        <p className="card-description">Trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo, trabajo, trabajo, mucho trabajo </p>
                    </div> 
                    <div class="linea-gris"></div>
                    <div className="job-row">
                        <div className="job-salary">$2.800.000</div>
                        <div className="job-time">
                            <FaRegClock className="clock-icon" />
                            <span>Posteado hace 3 días</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
