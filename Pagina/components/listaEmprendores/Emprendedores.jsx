import LISTAEMPRENDEDORES from "./listaEmprendedores.jsx";
import MYNAVBAR from "../../componentsResources/MyNavbar/index.js";

import { Row, Col } from "rsuite";
function Emprendedores() {
  return (
    <MYNAVBAR>
      {" "}
      <div>
        <Row>
          <Col xs={12}></Col>{" "}
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
