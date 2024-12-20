import "./landing.css" 
import ManThinking from "../assets/manThinking.svg"
import { FeatureItem } from "../components/featureItem/featureItem"
import IconBriefing from "../assets/icons/iconBriefing.svg"
import IconBenefits from "../assets/icons/iconBenefits.svg"
import IconDataManagement from "../assets/icons/iconDataManagement.svg"
import IconOnlineInterview from "../assets/icons/iconOnlineInterview.svg"
import IconReport from "../assets/icons/iconReport.svg"

export function Landing() {

    return (
        <section className="Information">
            <div className="Part1"> 
                <div id="TextPart1">
                    <h1> Optimiza la gestión de tu talento humano con eficiencia y sencillez</h1>
                    <p> Nunca había sido tan sencillo manejar  el personal de tu empresa </p>
                    <button className="ButtonColor"> Contáctanos </button>
                </div>
                <img id="ManIlustration" src={ManThinking} />
            </div>
            
            <div className="Features">
                <h1> Descubre las funcionalidades clave<br /> de nuestra plataforma </h1>
                <p> Nuestro sistema de recursos humanos está diseñado para hacer tu trabajo más sencillo y eficiente </p>
                <div className="FeaturesItems">
                    <FeatureItem itemIcon={IconBriefing} itemText="Gestión Centralizada de Personal" /> 
                    <FeatureItem itemIcon={IconOnlineInterview} itemText="Control de Asistencias" /> 
                    <FeatureItem itemIcon={IconDataManagement} itemText="Procesos de Nómina Simplificados" /> 
                    <FeatureItem itemIcon={IconReport} itemText="Seguimiento de Desempeño" /> 
                    <FeatureItem itemIcon={IconBenefits} itemText="Integración con Beneficios" /> 

                </div>
            </div>
        </section>

               
    )
}