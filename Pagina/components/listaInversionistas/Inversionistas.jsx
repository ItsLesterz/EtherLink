import LISTAINVERSIONISTAS from "./listaInversionistas.jsx";
import MYNAVBAR from "../../componentsResources/MyNavbar/index.js";
import "./styles.css";
import { Row, Col } from "rsuite";
import { useState } from "react";
function INVERSIONISTAS() {
  const [showButton, setShowButton] = useState(true);

  const handleMouseMove = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(true);
  };

  return (
    <MYNAVBAR>
      {" "}
      <div>
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
              faeafwfaef
            </div>
          </Col>{" "}
          <Col xs={12}>
            {" "}
            <LISTAINVERSIONISTAS />
          </Col>
        </Row>
      </div>
    </MYNAVBAR>
  );
}

export default INVERSIONISTAS;
