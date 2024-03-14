import React from "react";
import MYNAVBAR from "../../componentsResources/MyNavbar/index";

import LISTAEMPRENDEDORES from "../listaEmprendores/index.js";
function HOME() {
  return (
    <MYNAVBAR>
      {" "}
      <h1>Home</h1>
      <LISTAEMPRENDEDORES />
    </MYNAVBAR>
  );
}

export default HOME;
