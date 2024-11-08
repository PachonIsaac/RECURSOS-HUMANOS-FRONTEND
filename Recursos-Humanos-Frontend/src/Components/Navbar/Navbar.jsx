import IconHR from "../../Assets/Icons/IconHR.svg";
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

export function Navbar() {
    const location = useLocation();

    return (
        <section className="Navbar">
            <img className="IconoHR" src={IconHR} />
            <h1>HRMinder</h1>
            <div className="Options">
                <Link to='/Jobs' className={location.pathname === '/Jobs' ? 'active' : ''}>Jobs</Link>
                <Link to='/AboutUs' className={location.pathname === '/AboutUs' ? 'active' : ''}>About Us</Link>
                <Link to='/Features' className={location.pathname === '/Features' ? 'active' : ''}>Features</Link>
                <Link to='/Login' className={location.pathname === '/Login' ? 'active' : ''}>Login</Link>
            </div>
        </section>
    );
}
