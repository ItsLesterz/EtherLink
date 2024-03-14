import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
//import SIDEBAR from "../Components/SideBar/index";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Col, Button, Row, Card, Form, Carousel } from "react-bootstrap";
import { Message, AvatarGroup, Avatar } from "rsuite";

import "./App.css";
import { isMobile } from "react-device-detect";
import React, { useEffect } from "react";

import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Navbar,
  Nav,
} from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import MenuIcon from "@rsuite/icons/Menu";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import MemberIcon from "@rsuite/icons/Member";
import SortDownIcon from "@rsuite/icons/SortDown";
import DetailIcon from "@rsuite/icons/Detail";
import PlusIcon from "@rsuite/icons/Plus";
import WechatOutlineIcon from "@rsuite/icons/WechatOutline";
import WechatTemplateIcon from "@rsuite/icons/WechatTemplate";
import PeoplesMapIcon from "@rsuite/icons/PeoplesMap";

// import SettingHorizontalIcon from "@rsuite/icons/SettingHorizontal";

import "./styles.css";
//import { useAuth } from "../../context/AuthContext.jsx";
//import { AuthProvider } from "./../Context/AuthContext.jsx";

import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const NavToggle = ({ expand, onChange }) => {
  //const { logout, user } = useAuth();

  const handleSignOut = () => {
    console.log("SIGN OUT");
    //logout();
  };

  return (
    <Navbar
      className="nav-toggle"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}>
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}
          title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}>
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item onClick={handleSignOut}>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const MyNavbar = ({ children }) => {
  //const { user } = useAuth();
  const [expand, setExpand] = React.useState(false);
  const [SearchView, setSearchView] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [actualsearchText, setActualSearchText] = React.useState("");
  //const isMobile = window.innerWidth <= 767;

  const handleMouseEnter = () => {
    setExpand(true);
  };

  const handleMouseLeave = () => {
    setExpand(false);
  };

  const handleMobileSidebar = (value) => {
    setExpand(!expand);
  };

  const handleSearch = () => {
    setActualSearchText(searchText);
    setSearchView(searchText != "");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const stylesSearchBar = {
    width: "30vw",
    marginBottom: 10,
    backgroundColor: "black",
  };

  useEffect(() => {
    console.log("MyNavbar - actualsearchText:", actualsearchText);
  }, [actualsearchText]);

  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Header
          className="fixed-navbar"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}>
          <Navbar appearance="subtle">
            <div>
              <Nav>
                <Navbar.Brand href="/home">
                  <img
                    src="/logo.jpg" // Replace with the actual path to your image
                    alt="Custom Icon"
                    width="30" // Set the width and height as needed
                    height="30"
                    style={{ marginTop: "-5px" }}
                  />
                </Navbar.Brand>

                <Nav.Item href="/news">Novedades</Nav.Item>
                <Nav.Item href="/categories">Categorias</Nav.Item>
                <Nav.Item href="/contact">Contactanos</Nav.Item>

                <Nav.Item>
                  <div alignItems="center" style={{ alignItems: "center" }}>
                    {" "}
                    {/* SEARCH BAR */}
                    {/* <InputGroup inside style={stylesSearchBar}>
                      <Input
                        value={searchText}
                        onChange={(e) => setSearchText(e)}
                        onKeyPress={handleKeyPress}
                      />
                      <InputGroup.Button onClick={handleSearch}>
                        <SearchIcon />
                      </InputGroup.Button>
                    </InputGroup> */}
                    {/* SEARCH BAR */}
                  </div>
                </Nav.Item>
              </Nav>

              <Nav pullRight>
                <Avatar
                  style={{
                    marginTop: "10px",
                    marginRight: "10px",
                  }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
                  alt="@superman66"
                  href="/profile"
                  onClick={() => Navigate("/profile")}
                />
              </Nav>
              <Nav pullRight>
                {" "}
                <Nav.Item href="/profile">Elon </Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav.Menu
                  eventKey="5"
                  trigger="hover"
                  title="My Wallet"
                  icon={<SortDownIcon />}
                  placement="bottom"
                  style={{
                    background: "rgba(0,150,255,255)",
                    color: "black",
                  }}>
                  <Nav.Item style={{ color: "black" }} href="/" eventKey="4-1">
                    U324677654645kjhgsrgzeyayze5emau
                  </Nav.Item>
                </Nav.Menu>
              </Nav>

              {/* {user ? (
                  <Nav pullRight>
                    <Avatar
                      style={{
                        marginTop: "10px",
                        marginRight: "10px",
                      }}
                      src={user.profileurl}
                      alt="@superman66"
                      href="/myprofile"
                    />

                    <Nav.Item href="/Uploader" icon={<PlusIcon />}>
                      Upload
                    </Nav.Item>

                    <Nav.Item href="/myprofile">{user.username}</Nav.Item>
                  </Nav>
                ) : (
                  <Nav pullRight>
                    <Nav.Item href="/login" icon={<PlusIcon />}>
                      Login
                    </Nav.Item>
                  </Nav>
                )} */}
            </div>
          </Navbar>
        </Header>
      </Container>
      <Container>
        <div
          style={{
            position: "relative",
            zIndex: 2, // Adjust this value as needed
          }}>
          {!isMobile || expand ? (
            <Sidebar
              className="fixed-sidebar"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                marginTop: "60px", // Adjust the value as needed
                transition: "width 0.3s ease",
              }}
              width={expand ? 260 : 56}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              collapsible>
              <Sidenav
                expanded={expand}
                defaultOpenKeys={["3"]}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                appearance="subtle">
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item
                      eventKey="1"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                      active
                      icon={<MemberIcon />}
                      href="/profile">
                      Mi Perfil
                    </Nav.Item>
                    <Nav.Item
                      eventKey="2"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                      icon={<GroupIcon />}
                      href="/following">
                      Seguidos
                    </Nav.Item>
                    <Nav.Item
                      eventKey="2"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                      icon={<WechatTemplateIcon />}
                      href="/subscription">
                      Subscripciones
                    </Nav.Item>
                    <Nav.Item
                      eventKey="2"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                      icon={<PeoplesMapIcon />}
                      href="/subscription">
                      Patreons
                    </Nav.Item>
                    <Nav.Item
                      eventKey="2"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                      icon={<WechatOutlineIcon />}
                      href="/discordservers">
                      Discord Servers
                    </Nav.Item>

                    {/* ------------------------- */}
                  </Nav>
                </Sidenav.Body>
              </Sidenav>

              <div style={{ marginTop: "auto", marginBottom: "65px" }}>
                <NavToggle
                  expand={expand}
                  onChange={() => setExpand(!expand)}
                />
              </div>
            </Sidebar>
          ) : null}
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1, // Adjust this value as needed
          }}>
          <Container className={`${!isMobile ? "content-container" : ""}`}>
            <Content style={{ width: "96vw", overflowX: "hidden" }}>
              {children}
            </Content>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default MyNavbar;

/*
  <Nav.Menu
                      eventKey="4"
                      trigger="hover"
                      title="Upload"
                      icon={<SortDownIcon />}
                      placement="rightStart"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        background: "rgba(0, 0, 0, 0.8)",
                      }}>
                      <Nav.Item href="/Uploader" eventKey="4-1">
                        Art
                      </Nav.Item>
                    </Nav.Menu>
                    {/* ------------------------
                    <Nav.Menu
                      eventKey="5"
                      trigger="hover"
                      title="Control"
                      icon={<SortDownIcon />}
                      placement="rightStart"
                      style={{
                        background: "rgba(0,150,255,255)",
                        color: "black",
                      }}>
                      <Nav.Item
                        style={{ color: "black" }}
                        href="/"
                        eventKey="4-1">
                        Users Control
                      </Nav.Item>
                      <Nav.Item
                        style={{ color: "black" }}
                        href="/"
                        eventKey="4-1">
                        Posts Control
                      </Nav.Item>
                      <Nav.Item
                        style={{ color: "black" }}
                        href="/"
                        eventKey="4-1">
                        Roles Control
                      </Nav.Item>
                      <Nav.Item
                        style={{ color: "black" }}
                        href="/"
                        eventKey="4-1">
                        Permissions Control
                      </Nav.Item>
                    </Nav.Menu>

                    <Nav.Menu
                      eventKey="6"
                      trigger="hover"
                      title="A"
                      icon={<SortDownIcon />}
                      placement="rightStart"
                      style={{
                        // backgroundColor: "rgba(0, 0, 0, 0.8)",
                        background: "rgba(0,184,255,255)",
                        color: "black",
                      }}>
                      <Nav.Item href="/" eventKey="4-1">
                        Users Control
                      </Nav.Item>
                      <Nav.Item href="/" eventKey="4-1">
                        Posts Control
                      </Nav.Item>
                      <Nav.Item href="/" eventKey="4-1">
                        Roles Control
                      </Nav.Item>
                      <Nav.Item href="/" eventKey="4-1">
                        Permissions Control
                      </Nav.Item>
                    </Nav.Menu>

                    <Nav.Menu
                      eventKey="7"
                      trigger="hover"
                      title="A"
                      icon={<SortDownIcon />}
                      placement="rightStart"
                      style={{
                        // backgroundColor: "rgba(0, 0, 0, 0.8)",
                        background: "rgba(21,41,124,255)",
                        color: "black",
                      }}>
                      <Nav.Item href="/" eventKey="4-1">
                        Users Control
                      </Nav.Item>
                      <Nav.Item href="/" eventKey="4-1">
                        Posts Control
                      </Nav.Item>
                      <Nav.Item href="/" eventKey="4-1">
                        Roles Control
                      </Nav.Item>
                      <Nav.Item href="/" eventKey="4-1">
                        Permissions Control
                      </Nav.Item>
                    </Nav.Menu>


*/
