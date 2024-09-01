import IconHR from "../../Assets/Icons/Icon-HR.svg"
import "./Navbar.css"

export function Navbar() {

    return (
        <section className="Navbar">
                <img className="IconoHR"src={IconHR} />
                <h1>HRMinder</h1>
        
            <div className="Options">
                <h2> Home </h2>
                <h2> Features </h2>
                <h2> About Us </h2>
            </div>
        </section>
    )
}

