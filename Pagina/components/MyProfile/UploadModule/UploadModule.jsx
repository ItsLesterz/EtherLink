import { Col, Container, Row, Card } from "react-bootstrap";
import {
  Modal,
  ButtonToolbar,
  Button,
  Placeholder,
  Form,
  Input,
  Dropdown,
  DatePicker,
} from "rsuite";
import { useState, useEffect, useRef } from "react";
import { Loader } from "rsuite";
import React from "react";
import { useAuth } from "../../../Context/AuthContext";

import { storage } from "../../../Firebase/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { ProfileUpdate } from "../../../Services/Profile";
import { toast } from "react-toastify";

import "./styles.css";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

function UPLOADMODULE({ handleClose }) {
  const { user } = useAuth();
  const [Username_State, setUsername_State] = useState(user.username);
  const [Biography_State, setBiography_State] = useState(user.biography);

  const imageref_PROFILE = ref(storage, `profilepics/${user._id + "_PROFILE"}`);

  const imageref_BANNER = ref(storage, `profilepics/${user._id + "_BANNER "}`);

  //========================IMAGENES=========================================

  const [ImageUploaded, setImageUploaded] = useState(null);
  console.log(user.profileurl);
  const [ActualImageUrl, setActualImageUrl] = useState(user.profileurl);
  const [IMGRef, setIMGRef] = useState(imageref_PROFILE);
  const fileInputRef = useRef(null);

  const [ImageUploaded_BANNER, setImageUploaded_BANNER] = useState(null);
  const [ActualImageUrl_BANNER, setActualImageUrl_BANNER] = useState(
    user.bannerurl
  );
  const [IMGRef_BANNER, setIMGRef_BANNER] = useState(imageref_BANNER);
  const fileInputRef_BANNER = useRef(null);

  //==========================================================================

  const [isloading, setisloading] = useState(false);

  async function handleImageChange() {
    setActualImageUrl(null);

    return;
  }

  async function handleImageChange_BANNER() {
    setActualImageUrl_BANNER(null);

    return;
  }
  async function firebaseUpload(imageref_Param, ImageUploaded_Param) {
    const imageupload_inside = ImageUploaded_Param;

    await uploadBytes(imageref_Param, imageupload_inside)
      .then(() => {
        toast.success("Image Uploaded Correctly", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setisloading(false);
      })

      .catch((error) => {
        setisloading(false);
        console.error("Image upload failed:", error);
      });

    return;
  }

  //Handle Submit FIREBASE
  async function handleSubmit(event) {
    setisloading(true);
    if (Username_State === "") {
      toast.error("Please write a title", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (Biography_State === "") {
      toast.error("Please write a description", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (ActualImageUrl == null) {
      toast.error("Please choose an Image", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (ActualImageUrl_BANNER == null) {
      toast.error("Please choose an Image", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    event.preventDefault();
    setisloading(true);
    console.log(ImageUploaded);

    if (ImageUploaded == null) {
      setisloading(false);
    }
    if (ImageUploaded_BANNER == null) {
      setisloading(false);
    }

    if (ImageUploaded != null) {
      setIMGRef(IMGRef);

      firebaseUpload(IMGRef, ImageUploaded);
    }

    if (ImageUploaded_BANNER != null) {
      setIMGRef_BANNER(IMGRef_BANNER);

      firebaseUpload(IMGRef_BANNER, ImageUploaded_BANNER);
    }

    UpdateProfile();
  }

  //Handle Submit MONGODB

  const UpdateProfile = async () => {
    try {
      if (IMGRef == null || IMGRef_BANNER == null) {
        console.log("CHECKEO");

        return;
      }

      let ProfileURL = null;
      let BannerURL = null;
      await getDownloadURL(IMGRef)
        .then(async (url) => {
          ProfileURL = url;
        })
        .catch((error) => {
          console.log(error);
        });

      await getDownloadURL(IMGRef_BANNER)
        .then(async (url) => {
          BannerURL = url;
        })
        .catch((error) => {
          console.log(error);
        });

      if (ImageUploaded_BANNER == null && ImageUploaded == null) {
        const Result = await ProfileUpdate(
          user._id,
          Username_State,
          Biography_State,
          ActualImageUrl,
          ActualImageUrl_BANNER
        );
        handleClose();
        setisloading(false);
        return;
      } else if (ImageUploaded_BANNER == null) {
        const Result = await ProfileUpdate(
          user._id,
          Username_State,
          Biography_State,
          ProfileURL,
          user.bannerurl
        );
        handleClose();
        setisloading(false);
        return;
      } else if (ImageUploaded == null) {
        const Result = await ProfileUpdate(
          user._id,
          Username_State,
          Biography_State,
          user.profileurl,
          BannerURL
        );
        handleClose();
        setisloading(false);
        return;
      }

      const Result = await ProfileUpdate(
        user._id,
        Username_State,
        Biography_State,
        ProfileURL,
        BannerURL
      );
      console.log(Result);

      console.log(ProfileURL);
      console.log(BannerURL);
      handleClose();
      setisloading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImageUploaded(file);
    const imageUrl = URL.createObjectURL(file);
    setActualImageUrl(imageUrl);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const dropZoneStyle = {
    border: "2px dashed #ccc",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "center",
  };

  //............................................................
  const handleLabelClick_BANNER = () => {
    fileInputRef_BANNER.current.click();
  };
  const handleDrop_BANNER = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImageUploaded_BANNER(file);
    const imageUrl = URL.createObjectURL(file);
    setActualImageUrl_BANNER(imageUrl);
  };

  return isloading == false ? (
    <div>
      <Row>
        {" "}
        <Col></Col>{" "}
        <Col className="d-flex justify-content-start">
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={handleSubmit} appearance="primary">
            Save Changes
          </Button>
        </Col>
      </Row>
      <p style={{ marginBottom: "20px" }}></p>
      <Form>
        <Form.Group
          controlId="text"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}>
          <Form.ControlLabel style={{ flex: "0 0 auto", marginRight: "10px" }}>
            Change Username:{" "}
          </Form.ControlLabel>
          <Form.Control
            onChange={setUsername_State}
            value={Username_State}
            name="text"
            style={{ flex: "1", width: "100%" }}
          />
        </Form.Group>

        <Form.Group controlId="textarea" style={{ width: "100%" }}>
          <Form.ControlLabel style={{ width: "100%" }}>
            Change Biography:
          </Form.ControlLabel>

          <Form.Control
            onChange={setBiography_State}
            value={Biography_State}
            rows={5}
            name="textarea"
            accepter={Textarea}
            style={{ width: "100%" }}
          />
        </Form.Group>

        {/*PROFILE------------------------------------------------------------------------------------------------------- */}

        <hr />
        <h6>Profile Picture:</h6>
        <Row>
          {ActualImageUrl == null ? (
            <div>
              <div
                style={dropZoneStyle}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragOver}
                onClick={handleLabelClick}>
                <p>Drag and drop an image file here or click to select one.</p>
                {ActualImageUrl == null
                  ? ""
                  : ActualImageUrl && (
                      <img
                        src={ActualImageUrl}
                        alt="Uploaded"
                        width="200"
                        height="200"
                      />
                    )}
              </div>
              <input
                type="file"
                onChange={(event) => {
                  setImageUploaded(event.target.files[0]);
                  const imageUrl = URL.createObjectURL(event.target.files[0]);
                  setActualImageUrl(imageUrl);
                }}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
          ) : (
            ""
          )}

          {ActualImageUrl != null ? (
            <Col>
              {isloading ? <Loader size="lg" content="Uploading..." /> : ""}
              <img
                src={ActualImageUrl}
                style={{ width: "90%", height: "90%" }}></img>
            </Col>
          ) : (
            ""
          )}

          {ActualImageUrl != null ? (
            <Col>
              <div
                style={{
                  alignItems: "center",
                  marginRight: "10px",
                }}>
                <button onClick={handleImageChange}>Change Image</button>
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
        {/*BANNER------------------------------------------------------------------------------------------------------- */}
        <h6>Banner Picture:</h6>
        <Row>
          {ActualImageUrl_BANNER == null ? (
            <div>
              <div
                style={dropZoneStyle}
                onDrop={handleDrop_BANNER}
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragOver}
                onClick={handleLabelClick_BANNER}>
                <p>Drag and drop an image file here or click to select one.</p>
                {ActualImageUrl_BANNER == null
                  ? ""
                  : ActualImageUrl_BANNER && (
                      <img
                        src={ActualImageUrl_BANNER}
                        alt="Uploaded"
                        width="200"
                        height="200"
                      />
                    )}
              </div>
              <input
                type="file"
                onChange={(event) => {
                  setImageUploaded_BANNER(event.target.files[0]);
                  const imageUrl = URL.createObjectURL(event.target.files[0]);
                  setActualImageUrl_BANNER(imageUrl);
                }}
                ref={fileInputRef_BANNER}
                style={{ display: "none" }}
              />
            </div>
          ) : (
            ""
          )}

          {ActualImageUrl_BANNER != null ? (
            <Col>
              {isloading ? <Loader size="lg" content="Uploading..." /> : ""}
              <img
                src={ActualImageUrl_BANNER}
                style={{ width: "90%", height: "90%" }}></img>
            </Col>
          ) : (
            ""
          )}

          {ActualImageUrl_BANNER != null ? (
            <Col>
              <div
                style={{
                  alignItems: "center",
                  marginRight: "10px",
                }}>
                <button onClick={handleImageChange_BANNER}>Change Image</button>
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Form>

      <p style={{ marginBottom: "40px" }}></p>
      <a href="">
        <img
          alt="banner"
          src="https://landings-cdn.adsterratech.com/referralBanners/png/120%20x%20300%20px.png"
        />
      </a>
    </div>
  ) : (
    <div>
      <h1>LOADING...</h1>
    </div>
  );
}
export default UPLOADMODULE;
