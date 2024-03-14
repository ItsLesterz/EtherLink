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

function App() {
  return (
    <Container>
      <Content>
        <Router>
          <Routes>
            <Route path="/home" element={<HOME />} />
          </Routes>
        </Router>
      </Content>
    </Container>
  );
}

export default App;
