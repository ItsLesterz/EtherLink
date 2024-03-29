import LISTAEMPRENDEDORES from "./listaEmprendedores.jsx";
import MYNAVBAR from "../../componentsResources/MyNavbar/index.js";
import { useState } from "react";
import { Row, Col } from "rsuite";
function Emprendedores() {
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
              faeafwfaef
            </div>
          </Col>{" "}
          <Col xs={12}>
            {" "}
            <LISTAEMPRENDEDORES />
          </Col>
        </Row>
      </div>
    </MYNAVBAR>
  );
}

export default Emprendedores;
