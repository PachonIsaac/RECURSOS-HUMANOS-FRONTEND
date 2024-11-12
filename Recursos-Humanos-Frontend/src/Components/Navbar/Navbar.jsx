import IconHR from "../../Assets/Icons/IconHR.svg";
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

export function Navbar() {
    const location = useLocation();

    return (
        <section className="Navbar">
            <Link to='/' className="Logo">
                <img className="IconoHR" src={IconHR} />
            </Link>
            <h1>HRMinder</h1>
            <div className="Options">
                <Link to='/Jobs' className={location.pathname === '/Jobs' ? 'active' : ''}>Trabajos</Link>
                <Link to='/AboutUs' className={location.pathname === '/AboutUs' ? 'active' : ''}>Nosotros</Link>
                <Link to='/Login' className={location.pathname === '/Login' ? 'active' : ''}>Login</Link>
            </div>
        </section>
    );
}
