import React from "react";
import "./Card.css";
import "./styles.css"; // Agrega un archivo FrontPage.css para manejar los estilos específicos de la página
import { useState } from "react";
import MYNAVBAR from "../../componentsResources/MyNavbar/index";
import { Col, Row, Panel, Placeholder } from "rsuite";

function Contact() {
  const [showButton, setShowButton] = useState(true);

  const handleMouseMove = () => {
    setShowButton(true);
  };

  const handleClick = () => {
    window.location.href = '/business'; // Navigate to the specified URL
  };

  const handleMouseLeave = () => {
    setShowButton(true);
  };
  return (
    <MYNAVBAR>
      <div className="background-image"></div>{" "}
      {/* Imagen de fondo que cubre todo el ancho */}
      <img
        style={{
          display: "block",
          margin: "0 auto",
          width: "100vw",
          height: "40vh", // Adjust the height as needed
          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://www.vidacamara.cl/images/default-source/default-album/puntos-de-contactos-header-min.png?sfvrsn=7354f8db_5"
        alt="Your Image"
      />
      <div
        style={{
          textAlign: "center",
          paddingLeft: "250px",
          paddingRight: "250px",
          paddingTop: "50px",
        }}>
        <h1>💬 Contáctanos</h1> {/* Nombre de la organización */}
        <p className="description" style={{ paddingTop: "50px", fontSize: "20px"}} >
          
¡Estamos aquí para escucharte y ayudarte en cada paso del camino! En EtherLink, entendemos la importancia de una comunicación abierta y transparente. Ya sea que tengas preguntas sobre nuestros servicios, necesites asistencia técnica o simplemente quieras saber más sobre cómo podemos colaborar, nuestro equipo está listo para atenderte. No dudes en ponerte en contacto con nosotros a través de nuestro canal de comunicación preferido. ¡Esperamos poder trabajar juntos para hacer realidad tus proyectos y alcanzar el éxito juntos!






        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            paddingTop: "50px",
          }}>
          <button class="btn" onClick={handleClick}>Obtiene más información aquí</button>
          <button class="btn">Contacta soporte técnico</button>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingLeft: "250px",
          paddingRight: "250px",
          paddingTop: "50px",
        }}>
       
      </div>
    </MYNAVBAR>
  );
}

export default Contact;
