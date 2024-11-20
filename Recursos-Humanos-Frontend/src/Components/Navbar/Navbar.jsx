import IconHR from "../../Assets/Icons/IconHR.svg";
import { Link, useLocation } from 'react-router-dom';
import { PublicRoutes } from "../../Models";
import "./Navbar.css";

export function Navbar() {
    const location = useLocation();

    return (
        <section className="Navbar">
            <Link to={`/${PublicRoutes.LANDING}`} className="Logo">
                <img className="IconoHR" src={IconHR} />
            </Link>
            <h1>HRMinder</h1>
            <div className="Options">
                <Link to={`/${PublicRoutes.JOBS}`} className={location.pathname === '/Jobs' ? 'active' : ''}>Trabajos</Link>
                <Link to={`/${PublicRoutes.ABOUT_US}`} className={location.pathname === '/AboutUs' ? 'active' : ''}>Nosotros</Link>
                <Link to={`/${PublicRoutes.LOGIN}`} className={location.pathname === '/Login' ? 'active' : ''}>Login</Link>
            </div>
        </section>
    );
}
