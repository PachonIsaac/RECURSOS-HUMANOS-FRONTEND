import React from "react";
import "./AboutUs.css";
import PerfilJanca from "../Assets/PerfilJanca.png";
import PerfilCamila from "../Assets/PerfilCamila.png";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <header className="about-us-header">
        <h1>Nosotros</h1>
        <p>
          Bienvenidos a HRMinder, una herramienta creada para
          optimizar la gestión del talento humano en tu empresa. Nuestro
          objetivo es facilitar los procesos de recursos humanos, permitiendo a
          los equipos enfocarse en lo que realmente importa: las personas.
        </p>
      </header>

        <div className="mission">
          <h2>Nuestra Misión</h2>
          <p>
            Nuestra misión en HRMinder es consolidarnos como un referente en la
            transformación digital de la gestión del talento humano. Nos enfocaremos
            en desarrollar e implementar soluciones tecnológicas avanzadas que no
            solo optimicen, sino que también imaginen los procesos de selección, 
            evaluación, capacitación y permanencia del personal. 
            <br /> <br />
            Nuestro compromiso es asegurar que las empresas puedan alinearse más 
            efectivamente con sus objetivos estratégicos, mejorando la satisfacción 
            y el desarrollo profesional de sus empleados en un entorno empresarial 
            en constante evolución.
          </p>

        </div>
    
        <div className="vision">
          <h2>Nuestra Visión</h2>
          <p>
            Visualizamos en el 2029 a HRMinder como el líder indiscutible en el 
            mercado de soluciones tecnológicas para la gestión del talento humano, 
            reconocido por nuestra capacidad para innovar y adaptarnos a las 
            demandas cambiantes del entorno empresarial global. Aspiramos a que 
            nuestras herramientas no solo faciliten la automatización, sino que 
            también impulsen una gestión del talento humano más estratégica y centrada 
            en el desarrollo continuo de las capacidades de los empleados, contribuyendo 
            significativamente al éxito sostenible de las organizaciones con las que colaboramos.
          </p>
        </div>
      

      <section className="about-us-features">
        <h2>¿Qué Hacemos?</h2>
        <p>
          En HRMinder, proporcionamos una serie de herramientas
          para sistematizar y mejorar la gestión de recursos humanos, incluyendo
          funcionalidades como:
        </p>
        <ul>
          <li>Administración de personal y registros de empleados.</li>
          <li>Gestión de nóminas y beneficios.</li>
          <li>Automatización de procesos de contratación.</li>
          <li>Evaluaciones de desempeño y crecimiento profesional.</li>
          <li>Gestión de asistencia y control de horarios.</li>
        </ul>
      </section>

      <section className="about-us-team">
        <h2>Conoce a Nuestro Equipo</h2>
        <p>
          Nuestro equipo está compuesto por expertos en tecnología y recursos
          humanos, todos comprometidos con ofrecerte una plataforma eficaz y
          fácil de usar.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src="https://scontent.fpei3-1.fna.fbcdn.net/v/t39.30808-6/277819229_3151576611770945_6136770228714174012_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VT25aPoEZP4Q7kNvgFUuRdf&_nc_zt=23&_nc_ht=scontent.fpei3-1.fna&_nc_gid=Agm6jHArrBvDoI6ySBG136v&oh=00_AYCPfbNOpOrgGi6ic56r7Za0zRQYNAPxCZ_azy67gwn1BQ&oe=67396E3B" alt="Jefferson David Arteaga Bedoya" />
            <h3>Jefferson Arteaga</h3>
            <p>Programador Full Stack</p>
          </div>
          <div className="team-member">
            <img src="https://scontent.fpei1-1.fna.fbcdn.net/v/t39.30808-6/453010538_8009505332428288_2585731053932279438_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=vhaGeAAI6lgQ7kNvgEk0ZXo&_nc_zt=23&_nc_ht=scontent.fpei1-1.fna&_nc_gid=AEoJk6gIOEs-AmlHN1VBQEU&oh=00_AYAI5SoC_BIMaZhcnkK-AAnOCv89vBZVgoFlgWiMmeMriA&oe=67396A71" alt="Isaac Pachon Zuleta" />
            <h3>Isaac Pachon</h3>
            <p>Programador Full Stack</p>
          </div>
          <div className="team-member">
            <img src={PerfilCamila} alt="Camila Orozco Salazar" />
            <h3>Camila Orozco</h3>
            <p>Programadora Full Stack</p>
          </div>
          <div className="team-member">
            <img src={PerfilJanca} />
            <h3>Jancarlo Gallón</h3>
            <p>Programador Full Stack</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutUs;
