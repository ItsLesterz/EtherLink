import React from "react";
import MYNAVBAR from "../../componentsResources/MyNavbar/index";

import LISTAEMPRENDEDORES from "../listaEmprendores/index.js";

import { Panel, Col, Row, Placeholder } from "rsuite";
const Card = (props) => (
  <Panel {...props} bordered header="Card title">
    <Placeholder.Paragraph />
  </Panel>
);
function HOME() {
  return (
    <MYNAVBAR>
      {" "}
      <h1>Home</h1>
      <div style={{ width: "96vw", backgroundColor: "red" }}>
        {" "}
        <Row>
          <Col md={6} sm={12}>
            <Card />
          </Col>
          <Col md={6} sm={12}>
            <Card />
          </Col>
          <Col md={6} sm={12}>
            <Card />
          </Col>
          <Col md={6} sm={12}>
            <Card />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Panel
              shaded
              bordered
              bodyFill
              style={{ display: "inline-block", width: 240 }}>
              <img src="https://via.placeholder.com/240x240" height="240" />

              <Panel header="RSUITE">
                <p>
                  <small>
                    A suite of React components, sensible UI design, and a
                    friendly development experience.
                  </small>
                </p>
              </Panel>
            </Panel>
          </Col>
          <Col>
            {" "}
            <Panel
              shaded
              bordered
              bodyFill
              style={{ display: "inline-block", width: 240 }}>
              <img src="https://via.placeholder.com/240x240" height="240" />

              <Panel header="RSUITE">
                <p>
                  <small>
                    A suite of React components, sensible UI design, and a
                    friendly development experience.
                  </small>
                </p>
              </Panel>
            </Panel>
          </Col>
        </Row>
      </div>
      <LISTAEMPRENDEDORES />
    </MYNAVBAR>
  );
}

export default HOME;
