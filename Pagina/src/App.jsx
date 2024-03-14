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
import LISTAEMPRENDEDORES from "../components/listaEmprendores/index.js";
import FRONTPAGE from "../components/frontPage/index.js";
function App() {
  return (
    <Container>
      <Content>
        <Router>
          <Routes>
            <Route path="/home" element={<HOME />} />
            <Route path="/" element={<LISTAEMPRENDEDORES />} />
            <Route path="/frontPage" element={<FRONTPAGE />} />
          </Routes>
        </Router>
      </Content>
    </Container>
  );
}

export default App;
