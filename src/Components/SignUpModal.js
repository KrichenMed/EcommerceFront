import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../Media/SignupModalBanner.webp";
import SignupForm from "./SignUpForm";

const SignupModal = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  return (
    <>
      <Button variant="light" onClick={handleShowModal}>
        Hello, Sign in Account
      </Button>

      <Modal
        size="lg"
        show={showModal}
        onHide={handleCloseModal}
        style={{ marginTop: "5%" }} // Adjust marginTop to make the modal taller
        animation="true"
        scrollable="true"
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div style={{ display: "flex" }}>
            {/* Image on the left */}
            <div style={{ width: "50%", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                }}
              >
                <img
                  src={SignUpImage}
                  alt="SignInImage"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    zIndex: "1",
                    backgroundColor: "#00000069",
                    fontSize: "xxx-large",
                    color: "white",
                    height: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                >
                  <p>
                    <b>Welcome To E-commerce platform !</b>
                  </p>
                </div>
              </div>
            </div>
            {/* Inputs on the right */}
            <div style={{ flex: 1 }}>
              <SignupForm handleCloseModal={handleCloseModal} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupModal;
