import React, { useState, useEffect } from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import RsuiteCol from "rsuite/Col";
import RsuiteRow from "rsuite/Row";

//import { useAuth } from "../../Context/AuthContext.jsx";

//import "react-toastify/dist/ReactToastify.css";
import "./LoginBox.css";
import "./styles.css";

//import { resendEmail } from "../../Services/Users.js";

function LOGIN() {
  function handleGoToRegister() {
    navigate("/register");
  }

  return (
    <>
      <Row>
        <RsuiteCol xs={12}>
          <div
            style={{
              textAlign: "center",
              width: "50vw",
              marginLeft: "5vw",
            }}>
            <div style={{ paddingTop: "80px", width: "35vw" }}>
              {" "}
              <img
                styles={{ width: "20px", height: "20px" }}
                src="LOGO.png"
                fluid
                className="floating-image"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Ubuntu+Mono"
                rel="stylesheet"
              />
              <div className="textpacific">EtherLink</div>
            </div>
          </div>
        </RsuiteCol>

        <RsuiteCol xs={12}>
          <div className="login-box">
            <img
              style={{ width: "300px", height: "auto" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"></img>{" "}
            <div
              style={{
                textAlign: "center",
                paddingLeft: "290px",
                paddingRight: "250px",
                paddingTop: "50px",
              }}>
              <button class="btn">Iniciar Sesion con MetaMask</button>
            </div>
          </div>
        </RsuiteCol>
      </Row>
    </>
  );
}

export default LOGIN;

/*


          {false == "User not Verified" ? (
            <div>
              We sent the email to {email}. Check your inbox to activate the
              account. If the confirmation email is not in your inbox, please
              check the Spam. Thank you.
            </div>
          ) : null}

*/
