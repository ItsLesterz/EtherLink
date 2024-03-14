import React from "react";

import { useState } from "react";
import "./App.css";
import "./index.css";
import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Navbar,
  Nav,
} from "rsuite";

import HOME from "../components/home/index.js";

import FRONTPAGE from "../components/frontPage/index.js";

import LISTAEMPRENDEDORES from "../components/listaEmprendores/index.js";
import ACTUALEMPRENDEDOR from "../components/actualEmprendedor/index.js";

import LISTAINVERSIONISTAS from "../components/listaInversionistas/index.js";
import ACTUALINVERSIONISTA from "../components/actualInversionista/index.js";

import OTHERSPROFILE from "../components/OthersProfile/index.js";
import MYPROFILE from "../components/MyProfile/index.js";

function App() {
  return (
    <Container>
      <Content>
        <Router>
          <Routes>
            <Route path="/home" element={<HOME />} />
            <Route path="/" element={<LISTAEMPRENDEDORES />} />
            <Route path="/frontPage" element={<FRONTPAGE />} />

            <Route path="/inversionistas" element={<LISTAINVERSIONISTAS />} />

            <Route path="/emprendedores" element={<LISTAEMPRENDEDORES />} />
            <Route path="/profile/tesla" element={<OTHERSPROFILE />} />
            <Route path="/profile" element={<MYPROFILE />} />
          </Routes>
        </Router>
      </Content>
    </Container>
  );
}

export default App;
