import { Col, Row, Card } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import MYNAVBAR from "../../componentsResources/MyNavbar/index.js";

import { Tag } from "rsuite";

import AttachmentIcon from "@rsuite/icons/Attachment";
import GearIcon from "@rsuite/icons/Gear";
import {
  Drawer,
  RadioGroup,
  Radio,
  ButtonToolbar,
  Button,
  Placeholder,
  Modal,
} from "rsuite";
const RadioLabel = ({ children }) => (
  <label style={{ padding: 7 }}>{children}</label>
);

import "./styles.css";
import { isMobile } from "react-device-detect";
function MYPROFILE() {
  const [RecentImages_Array, setRecentImages_Array] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [galleryView, setgalleryView] = useState(null);

  const [open, setOpen] = React.useState(false);
  // const images = [];

  const [roleD, setRoleD] = useState(null);

  function handleFollowUnfollow() {
    setIsFollowing(!isFollowing);
  }
  // useEffect(() => {
  //   console.log("MyGallerViewer - View Prop:", galleryView);
  // }, [galleryView]);

  // useEffect(() => {
  //   const fetchRoleData = async () => {
  //     const response = await getRoleData(user.role);
  //     setRoleD(response);
  //   };

  //   fetchRoleData();
  // }, [user.role]);

  // for (let i = 0; i < RecentImages_Array.length; i++) {
  //   images.push({
  //     src: RecentImages_Array[i].imageurl,
  //     caption: RecentImages_Array[i].title,
  //     customOverlay: (
  //       <div className="custom-overlay__caption">
  //         <div>
  //           {RecentImages_Array[i].title} -{" "}
  //           {RecentImages_Array[i].username_author}
  //         </div>
  //       </div>
  //     ),
  //   });
  // }
  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
  //   setBubblePosition({ x: e.clientX, y: e.clientY });
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  const handleOpen = (value) => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getRecent = async () => {
      console.log(user);
      const Response = await getMyImages(user._id);
      console.log(Response);
      setRecentImages_Array(Response);
    };

    getRecent();
  }, []);

  // const avatarStyle = {
  //   border: "2px solid #fff", // Borde blanco alrededor del avatar
  //   marginRight: "15px", // Margen a la derecha del avatar
  //   width: "60px", // Ancho del avatar
  //   height: "60px", // Altura del avatar
  // };
  // const handleEditProfile = () => {
  //   // Implement your edit profile logic here
  //   console.log("Edit profile clicked");
  // };

  const handleCopyDirection = () => {
    //TODO: add env here

    const linkToCopy = "/" + user._id;

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        console.log("Link copied to clipboard:", linkToCopy);
      })
      .catch((error) => {
        console.error("Unable to copy to clipboard", error);
      });
  };

  return (
    <MYNAVBAR>
      <div
        style={{
          width: "95vw",
          marginLeft: isMobile ? "5px" : "20px",
        }}>
        <Modal
          size={"lg"}
          open={open}
          onClose={handleClose}
          appearance="inverse"
          theme="dark">
          <Modal.Header>
            <Modal.Title>Profile Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <UPLOADMODULE handleClose={handleClose} /> */}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>{" "}
        {/* backgroundColor: "black" style={{ width: "95%" }}*/}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "300px", // Adjust the height as needed
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            src="https://digitalassets-secure.tesla.com/image/upload/v1693294899/x7csihvqypp5akblgxuw.jpg"
            alt="Banner"
            style={{
              width: "96%",
              height: "100%",
              objectFit: "cover", // Ensure the image covers the container
            }}
          />
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black transparent overlay
            }}></div>
        </div>
        <Row>
          <Card
            style={{
              position: "relative",
              background: "linear-gradient(to right, #333, #000)", // Gradient from gray to black
              color: "white", // White text color
              width: "98%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <div
              className="bubble"
              style={{
                position: "absolute",
                top: bubblePosition.y - 300,
                left: bubblePosition.x - 100,
              }}></div>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTOcvfe7VQs6cRg4rw3qDu5AtmMl5584Izwwa8Fr8-A&s"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />
            <Card.Body style={{ marginLeft: "30vw", zIndex: 1 }}>
              <Card.Title>
                Tesla
                <Tag style={{ marginLeft: "3" }} color="red" size="sm">
                  Emprendimiento
                </Tag>
              </Card.Title>
              <Card.Text>
                {false ? user.followers.length : 0} Followers •{" "}
                {false ? user.following.length : 0} Following • {0} Posts
              </Card.Text>
            </Card.Body>

            <Button
              variant="primary"
              onClick={handleCopyDirection}
              style={{
                background: "linear-gradient(to right, #87CEEB, #1E90FF)", // Gradient from gray to black
                color: "black", // White text color
                border: "none", // Optional: remove button border
                padding: isMobile ? "5px 10px" : "20px 30px", // Adjust the padding to make the button bigger
                height: "40px",
                marginLeft: "25vw",
              }}>
              <AttachmentIcon />
            </Button>

            <Button
              variant="secondary"
              onClick={() => handleOpen()}
              style={{
                background: "linear-gradient(to right, #87CEEB, #1E90FF)", // Gradient from gray to black
                color: "black", // White text color
                border: "none", // Optional: remove button border
                padding: isMobile ? "5px 10px" : "20px 30px", // Adjust the padding to make the button bigger
                height: "40px",
              }}>
              <GearIcon />
            </Button>
            <Button
              onClick={handleFollowUnfollow}
              style={{
                background: isFollowing
                  ? "transparent" // Gradient from purple to pink when following
                  : "linear-gradient(to right, #800080, #4B0082)", // Gradient from purple to dark purple when not following
                color: isFollowing ? "#FF69B4" : "white", // Pink text color when following, white when not following
                border: isFollowing ? "1px solid #FF69B4" : "none", // Pink border when following, no border when not following
                padding: "5px 10px", // Adjust the padding as needed
                width: isMobile ? "40px" : "140px", // Set a fixed width
                height: "40px", // Set a fixed height
              }}>
              {isMobile ? (
                isFollowing ? (
                  <UnvisibleIcon />
                ) : (
                  <VisibleIcon />
                )
              ) : isFollowing ? (
                "Darse de Baja"
              ) : (
                "Patrocinar"
              )}
            </Button>
          </Card>
        </Row>
        <Row></Row>
        <Row
          style={{
            width: "98.8%",
          }}>
          <ButtonToolbar style={{ marginBottom: "20px", marginTop: "20px" }}>
            <Button
              color="cyan"
              appearance="ghost"
              onClick={() => setgalleryView("Home")}>
              Proyectos de Inversion
            </Button>
            <Button
              color="cyan"
              appearance="ghost"
              onClick={() => setgalleryView("Home")}>
              Fotos
            </Button>
          </ButtonToolbar>{" "}
          {/* <MyGallerViewer id={user._id} view={galleryView} /> */}
        </Row>
      </div>
    </MYNAVBAR>
  );
}

export default MYPROFILE;
{
  /* <Radio value={true}>My Art</Radio>
<Radio >My Folders</Radio>
<Radio >Products</Radio> 
   <RadioGroup
            name="radioList"
            appearance="picker"
            inline
            className="radio-group">
            <RadioLabel>Backdrop: </RadioLabel>
            <Radio value="static">static</Radio>
            <Radio>My Art</Radio>
            <Radio value={true}>My Folders</Radio>
            <Radio>Products</Radio>
          </RadioGroup>*/
}
