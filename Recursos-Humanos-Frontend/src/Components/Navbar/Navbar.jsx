import IconHR from "../../Assets/Icons/IconHR.svg";
import { Link, useLocation } from 'react-router-dom';
import { PublicRoutes } from "../../Models";
import "./navbar.css";

export function Navbar() {
    const location = useLocation();

    return (
        <section className="Navbar">
            <Link to={`/${PublicRoutes.LANDING}`} className="Logo">
                <img className="IconoHR" src={IconHR} />
            </Link>
            <h1>HRMinder</h1>
            <div className="Options">
                <Link to={`/${PublicRoutes.JOBS}`} className={location.pathname === '/jobs' ? 'active' : ''}>Trabajos</Link>
                <Link to={`/${PublicRoutes.ABOUT_US}`} className={location.pathname === '/aboutUs' ? 'active' : ''}>Nosotros</Link>
                <Link to={`/${PublicRoutes.LOGIN}`} className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
            </div>
        </section>
    );
}
