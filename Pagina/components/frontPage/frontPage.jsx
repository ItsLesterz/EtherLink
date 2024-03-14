import React from "react";

import "./Card.css"; // Archivo CSS para estilos de la tarjeta
import { useState } from "react";
import NAVBAR from "../../componentsResources/MyNavbar/index";
function frontPage() {
  return (
    <NAVBAR>
      <h1>Etherlink</h1>
      <div className="card">
        <h6>
          Nuestra aplicación ofrece microcréditos descentralizados para
          emprendedores locales en Honduras. Con acceso fácil y rápido,
          brindamos oportunidades de financiamiento que empoderan a los
          emprendedores, fomentando el crecimiento económico y la innovación en
          la comunidad.{" "}
        </h6>
      </div>
    </NAVBAR>
  );
}

export default frontPage;
