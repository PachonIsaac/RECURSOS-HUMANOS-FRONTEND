import IconHR from "../../Assets/Icons/IconHR.svg"
import { Link } from 'react-router-dom'
import "./Navbar.css"

export function Navbar() {

    return (
        <section className="Navbar">
            <img className="IconoHR"src={IconHR} />
            <h1>HRMinder</h1>
            <div className="Options">
                <Link to='/Features'>Features</Link>
                <Link to='/AboutUs'>About Us</Link>
                <Link to='/Features'>Features</Link>
                <Link to='/Login'>Login</Link>
            </div>
        </section>
    )
}

