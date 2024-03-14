import React from "react";
import MYNAVBAR from "../../componentsResources/MyNavbar/index";
import { Col, Row, Panel, Placeholder } from "rsuite";

function BusinessCanvas() {
  return (
    <MYNAVBAR>
      <div className="background-image">
        <img
          src="https://i.imgur.com/yqZrsRM.png"
          alt="Your Image"
          style={{
            width: "100%", // Set image width to 100% of its container
            height: "auto", // Maintain aspect ratio
            display: "block", // Remove any default spacing
            marginTop: "10px",
          }}
        />
        <h1 className="page-title">Business Model Canvas</h1>
      </div>
    </MYNAVBAR>
  );
}

export default BusinessCanvas;
