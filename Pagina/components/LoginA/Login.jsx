import React, { useState, useEffect } from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import RsuiteCol from "rsuite/Col";
import RsuiteRow from "rsuite/Row";

//import { useAuth } from "../../Context/AuthContext.jsx";
import Web3 from "web3";

//import { BrowserProvider } from "ethers";
//import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";

//import "react-toastify/dist/ReactToastify.css";
import "./LoginBox.css";
import "./styles.css";

//import { resendEmail } from "../../Services/Users.js";

function LOGIN() {
  const navigate = useNavigate(); // Utilizamos el hook useNavigate para la navegación

  function handleClick() {
    const web3 = new Web3(window.ethereum);

    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .enable()
        .then(function (accounts) {
          console.log("MetaMask enabled!");
          navigate("/frontPage"); // Redirigimos al usuario a la página '/frontPage' después de habilitar MetaMask
        })
        .catch(function (error) {
          console.error("Error habilitando Metamask:", error);
        });
    } else {
      console.error("MetaMask no está instalado.");
    }

    if (window.ethereum) {
      web3.eth
        .getAccounts()
        .then(function (accounts) {
          console.log("Accounts:", accounts);
          navigate("/frontPage"); // Redirigimos al usuario a la página '/frontPage' después de obtener las cuentas de MetaMask
        })
        .catch(function (error) {
          console.error("Error getting accounts:", error);
        });
    } else {
      console.error("MetaMask is not installed.");
    }
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
            }}
          >
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
            ></img>{" "}
            <div
              style={{
                textAlign: "center",
                paddingLeft: "290px",
                paddingRight: "250px",
                paddingTop: "50px",
              }}
            >
              <button class="btn" onClick={handleClick}>
                Iniciar Sesion con MetaMask
              </button>
            </div>
          </div>
        </RsuiteCol>
      </Row>
    </>
  );
}

export default LOGIN;
