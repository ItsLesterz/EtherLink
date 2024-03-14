import React from "react";
import "./Card.css";
import "./styles.css"; // Agrega un archivo FrontPage.css para manejar los estilos específicos de la página
import { useState } from "react";
import MYNAVBAR from "../../componentsResources/MyNavbar/index";
import { Col, Row, Panel, Placeholder } from "rsuite";

function FrontPage() {
  const [showButton, setShowButton] = useState(true);

  const handleMouseMove = () => {
    setShowButton(true);
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
        src="https://concepto.de/wp-content/uploads/2020/11/emprendimiento-e1676646804411.jpg"
        alt="Your Image"
      />
      <div
        style={{
          textAlign: "center",
          paddingLeft: "250px",
          paddingRight: "250px",
          paddingTop: "50px",
        }}>
        <h1>Etherlink</h1> {/* Nombre de la organización */}
        <p className="description" style={{ paddingTop: "50px" }}>
          Nuestra aplicación ofrece microcréditos descentralizados para
          emprendedores locales en Honduras. Con acceso fácil y rápido,
          brindamos oportunidades de financiamiento que empoderan a los
          emprendedores, fomentando el crecimiento económico y la innovación en
          la comunidad.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            paddingTop: "50px",
          }}>
          <button class="btn">Conocer Mas</button>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingLeft: "250px",
          paddingRight: "250px",
          paddingTop: "50px",
        }}>
        <Row>
          <Col xs={12}>
            {" "}
            <div
              className="card-container"
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "20px", // Adjust the border radius as needed
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for depth
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
              <img
                src="https://foroalfa.org/imagenes/ilustraciones/3652.jpg"
                className="card-image"
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "0.8",
                  transition: "opacity 0.3s ease",
                }}
                alt="Your Image"
              />
              {showButton && (
                <button
                  class="btn"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px 20px",
                  }}>
                  Soy Inversionista
                </button>
              )}
            </div>
          </Col>
          <Col xs={12}>
            {" "}
            <div
              className="card-container"
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "20px", // Adjust the border radius as needed
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for depth
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
              <img
                src="https://www.bim.mx/wp-content/uploads/2023/09/tipos-de-inversionistas-scaled.webp"
                className="card-image"
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "0.8",
                  transition: "opacity 0.3s ease",
                }}
                alt="Your Image"
              />
              {showButton && (
                <button
                  class="btn"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px 20px",
                  }}>
                  Soy Emprendedor
                </button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </MYNAVBAR>
  );
}

export default FrontPage;

/*
  
        <div
          className="card-container"
          style={{
            width: "auto",
            height: "auto",
            borderRadius: "20px", // Adjust the border radius as needed
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for depth
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          <img
            src="https://concepto.de/wp-content/uploads/2020/11/emprendimiento-e1676646804411.jpg"
            className="card-image"
            style={{
              width: "100%",
              height: "100%",
              opacity: "0.8",
              transition: "opacity 0.3s ease",
            }}
            alt="Your Image"
          />
          {showButton && (
            <button
              className="hidden-button"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px 20px",
                backgroundColor: "#fff",
                border: "1px solid #000",
                borderRadius: "5px",
              }}>
              Click me
            </button>
          )}
        </div>
        <div
          className="card-container"
          style={{
            width: "auto",
            height: "auto",
            borderRadius: "20px", // Adjust the border radius as needed
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for depth
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          <img
            src="https://concepto.de/wp-content/uploads/2020/11/emprendimiento-e1676646804411.jpg"
            className="card-image"
            style={{
              width: "100%",
              height: "100%",
              opacity: "0.8",
              transition: "opacity 0.3s ease",
            }}
            alt="Your Image"
          />
          {showButton && (
            <button
              className="hidden-button"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px 20px",
                backgroundColor: "#fff",
                border: "1px solid #000",
                borderRadius: "5px",
              }}>
              Click me
            </button>
          )}
        </div>{" "}
        <div
          className="card-container"
          style={{
            width: "auto",
            height: "auto",
            borderRadius: "20px", // Adjust the border radius as needed
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for depth
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          <img
            src="https://concepto.de/wp-content/uploads/2020/11/emprendimiento-e1676646804411.jpg"
            className="card-image"
            style={{
              width: "100%",
              height: "100%",
              opacity: "0.8",
              transition: "opacity 0.3s ease",
            }}
            alt="Your Image"
          />
          {showButton && (
            <button
              className="hidden-button"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px 20px",
                backgroundColor: "#fff",
                border: "1px solid #000",
                borderRadius: "5px",
              }}>
              Click me
            </button>
          )}
        </div>{" "}
        <div
          className="card-container"
          style={{
            width: "auto",
            height: "auto",
            borderRadius: "20px", // Adjust the border radius as needed
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for depth
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          <img
            src="https://concepto.de/wp-content/uploads/2020/11/emprendimiento-e1676646804411.jpg"
            className="card-image"
            style={{
              width: "100%",
              height: "100%",
              opacity: "0.8",
              transition: "opacity 0.3s ease",
            }}
            alt="Your Image"
          />
          {showButton && (
            <button
              className="hidden-button"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px 20px",
                backgroundColor: "#fff",
                border: "1px solid #000",
                borderRadius: "5px",
              }}>
              Click me
            </button>
          )}
        </div>

*/
