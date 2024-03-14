import { Col, Container, Row, Card } from "react-bootstrap";

import { Header, Content, Footer, Sidebar } from "rsuite";
import React, { useState, useEffect } from "react";
import MYNAVBAR from "../../componentsResources/MyNavbar/index.js";

import { Tag } from "rsuite";
import { Modal, Button } from "rsuite";
import AttachmentIcon from "@rsuite/icons/Attachment";
import GearIcon from "@rsuite/icons/Gear";

import { useParams } from "react-router-dom";

import VisibleIcon from "@rsuite/icons/Visible";
import UnvisibleIcon from "@rsuite/icons/Unvisible";
import "./styles.css";
import { isMobile } from "react-device-detect";
function MYPROFILE() {
  // const isMobile = true; //window.innerWidth <= 767;
  //++++++++++++++++++++++++++++++Variables+++++++++++++++++++++++++++++++++++++++++
  const [RecentImages_Array, setRecentImages_Array] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const { idprofile } = useParams();
  const [roleD, setRoleD] = useState(null);

  const [open, setOpen] = React.useState(false);

  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });
  //++++++++++++++++++++++++++++++Handlers+++++++++++++++++++++++++++++++++++++++++
  const handleMouseMove = (e) => {
    setBubblePosition({ x: e.clientX, y: e.clientY });
  };

  const handleOpen = (value) => {
    setOpen(true);
  };

  const handleFollowUnfollow = () => {};

  const handleClose = () => setOpen(false);

  const handleCopyDirection = () => {
    //TODO: add env here

    const linkToCopy = "" + UserData._id;

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        console.log("Link copied to clipboard:", linkToCopy);
      })
      .catch((error) => {
        console.error("Unable to copy to clipboard", error);
      });
  };
  //++++++++++++++++++++++++++++++USE EFFECT+++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    const fetchRoleData = async () => {
      const response = await getRoleData(UserData.role);
      setRoleD(response);
    };

    fetchRoleData();
  }, []);

  for (let i = 0; i < RecentImages_Array.length; i++) {
    images.push({
      src: RecentImages_Array[i].imageurl,
      caption: RecentImages_Array[i].title,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {RecentImages_Array[i].title} -{" "}
            {RecentImages_Array[i].username_author}
          </div>
        </div>
      ),
    });
  }
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    try {
      const getUserData = async () => {
        const Result = await get_UserData(idprofile);
        console.log(Result.profileData);
        setUserData(Result.profileData);
      };

      getUserData();
    } catch (err) {
      console.log(err);
    }
  }, [ImageData]);

  useEffect(() => {
    const getRecent = async () => {
      // const Response = await getMyImages(user._id);
      // console.log(Response);
      // setRecentImages_Array(Response);
    };

    getRecent();
  }, []);

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
          <Modal.Body></Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>{" "}
        {/* backgroundColor: "black" style={{ width: "95%" }}*/}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "300px", // Adjust the height as needed
            overflow: "hidden",
          }}>
          <img
            src={UserData.bannerurl}
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
              src={UserData?.profileurl}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />

            <Card.Body style={{ marginLeft: "20px", zIndex: 1 }}>
              <Card.Title>
                {UserData?.username}{" "}
                {roleD && roleD[0] && (
                  <Tag color={roleD[0]?.rolecolor} size="sm">
                    {roleD[0]?.rolename}
                  </Tag>
                )}
              </Card.Title>
              <Card.Text>
                {UserData.followers ? UserData.followers.length : 0} Followers •{" "}
                {UserData.following ? UserData.following.length : 0} Following •{" "}
                {0} Posts
              </Card.Text>
            </Card.Body>
            <div>
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
                  "UnFollow"
                ) : (
                  "Follow"
                )}
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleCopyDirection()}
                style={{
                  background: "linear-gradient(to right, #87CEEB, #1E90FF)", // Gradient from gray to black
                  color: "black", // White text color
                  border: "none", // Optional: remove button border
                  padding: isMobile ? "5px 10px" : "20px 30px", // Adjust the padding to make the button bigger
                  height: "40px",
                  width: "40px",
                }}>
                <AttachmentIcon />
              </Button>
            </div>
          </Card>
        </Row>
        <Row
          style={{
            width: "98.8%",
          }}>
          {/* <MyGallerViewer id={idprofile} /> */}
        </Row>
      </div>
    </MYNAVBAR>
  );
}

export default MYPROFILE;
