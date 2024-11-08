import './Jobs.css'

export default function Jobs() {
    return (
        <div className="jobs-container">
            <h1 className="titulo">Encuentra el trabajo de tus sueños</h1>
            <div className="search-container">
                <input type="text" placeholder="Buscar..." className="search-input"/>
                <button className="search-button">
                    Buscar
                </button>
            </div>
        </div>
    )
}
