import LISTAINVERSIONISTAS from "./listaInversionistas.jsx";
import MYNAVBAR from "../../componentsResources/MyNavbar/index.js";
import "./styles.css";
import { Row, Col, Input } from "rsuite"; // Importa el componente Input de rsuite
import { useState } from "react";

function INVERSIONISTAS() {
  const [searchValue, setSearchValue] = useState(""); // Estado para almacenar el valor de búsqueda

  const handleSearchChange = (value) => {
    setSearchValue(value); // Actualiza el estado del valor de búsqueda
  };

  return (
    <MYNAVBAR>
      <div>
        <Row>
          <Col xs={24} style={{ marginBottom: 10 }}> {/* Ajusta el espacio entre la barra de búsqueda y la tabla */}
            {/* Barra de búsqueda */}
            <Input style={{ marginLeft:"50%", marginTop:12}}
              placeholder="Buscar..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div
              className="card-container"
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Contenido de la tarjeta */}
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
            </div>
          </Col>
          <Col xs={12}>
            {/* Lista de inversionistas */}
            <LISTAINVERSIONISTAS searchValue={searchValue} /> {/* Pasa el valor de búsqueda como prop a la lista de inversionistas */}
          </Col>
        </Row>
      </div>
    </MYNAVBAR>
  );
}

export default INVERSIONISTAS;
