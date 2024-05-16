import Spinner from "react-bootstrap/Spinner";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavigationType, useNavigate } from "react-router-dom";
import "./Profile.css";
import { Button } from "react-bootstrap";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const load = useSelector((state) => state.userReducer.load);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = "#E3E6E6"; // Change to the desired background color
  }, []);

  //console.log(user)
  return (
    <div>
      {load ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div
          id="container"
          style={{
            backgroundColor: "#fff",
            marginLeft: "6%",
            marginRight: "6%",
            padding: "5px",
            marginBottom:"10px",
          }}
        >
          <style>
            {`
.bg-secondary-soft {
    background-color: rgba(208, 212, 217, 0.1) !important;
}

.rounded {
    border-radius: 5px !important;
}

.py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
}

.px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
}

.file-upload .square {
    height: 250px;
    width: 250px;
    margin: auto;
    vertical-align: middle;
    border: 1px solid #e5dfe4;
    background-color: #fff;
    border-radius: 5px;
}

.text-secondary {
    --bs-text-opacity: 1;
    color: rgba(208, 212, 217, 0.5) !important;
}

.btn-success-soft {
    color: #28a745;
    background-color: rgba(40, 167, 69, 0.1);
}

.btn-danger-soft {
    color: #dc3545;
    background-color: rgba(220, 53, 69, 0.1);
}
        .form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.6;
    color: #29292e;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e5dfe4;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 5px;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
        `}
          </style>
          <div className="row">
            <div className="col-12">
              {/* Page title */}
              <div className="my-5">
                <h3>My Profile</h3>
              </div>
              {/* Form START */}
              <form className="file-upload">
                <div className="row mb-5 gx-5">
                  {/* Contact detail */}
                  <div className="col-xxl-8 mb-5 mb-xxl-0">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Contact detail</h4>
                        {/* First Name */}
                        <div className="col-md-6">
                          <label className="form-label">First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={user?.name}
                            aria-label="First name"
                          />
                        </div>
                        {/* Last Name */}
                        <div className="col-md-6">
                          <label className="form-label">Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={user?.lastName}
                            aria-label="Last name"
                          />
                        </div>
                        {/* Phone number */}
                        <div className="col-md-6">
                          <label className="form-label">Phone number *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={user?.phone}
                            aria-label="Phone number"
                          />
                        </div>
                        {/* Email */}
                        <div className="col-md-6">
                          <label htmlFor="inputEmail4" className="form-label">
                            Email *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder={user?.email}
                          />
                        </div>
                        {/* Address */}
                        <div className="col-md-6">
                          <label className="form-label">Age *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={user?.age}
                          />
                        </div>
                      </div>{" "}
                      {/* Row END */}
                    </div>
                  </div>
                  {/* Upload profile */}
                  <div className="col-xxl-4">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                        <div className="text-center">
                          {/* Image upload */}
                          <div className="square position-relative display-2 mb-3">
                            <img
                              src={user.photo}
                              alt="User"
                              style={{ width: "100%" }}
                            />
                          </div>
                          {/* Button */}
                          <div style={{display:"flex"}}>
                            <label className="form-label">Image URL *</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={user?.photo}
                              style={{marginLeft:"20px",marginRight:"20px"}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Row END */}
                {/* Social media detail */}
                <div className="row mb-5 gx-5">
                  <div className="col-xxl-6 mb-5 mb-xxl-0">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Social media detail</h4>
                        {/* Facebook */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-facebook me-2 text-facebook"></i>
                            Facebook *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Facebook"
                            value="http://www.facebook.com"
                          />
                        </div>
                        {/* Twitter */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-twitter text-twitter me-2"></i>
                            Twitter *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Twitter"
                            value="http://www.twitter.com"
                          />
                        </div>
                        {/* Linkedin */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>
                            Linkedin *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Linkedin"
                            value="http://www.linkedin.com"
                          />
                        </div>
                        {/* Instragram */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-instagram text-instagram me-2"></i>
                            Instagram *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Instragram"
                            value="http://www.instragram.com"
                          />
                        </div>
                      </div>{" "}
                      {/* Row END */}
                    </div>
                  </div>

                  {/* change password */}
                  <div className="col-xxl-6">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="my-4">Change Password</h4>
                        {/* Old password */}
                        <div className="col-md-6">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Old password *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        {/* New password */}
                        <div className="col-md-6">
                          <label
                            htmlFor="exampleInputPassword2"
                            className="form-label"
                          >
                            New password *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword2"
                          />
                        </div>
                        {/* Confirm password */}
                        <div className="col-md-12">
                          <label
                            htmlFor="exampleInputPassword3"
                            className="form-label"
                          >
                            Confirm Password *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Row END */}
                {/* button */}
                <div className="gap-3 d-md-flex justify-content-md-end text-center">
                  <button type="button" className="btn btn-danger btn-lg">
                    Delete profile
                  </button>
                  <button type="button" className="btn btn-primary btn-lg">
                    Update profile
                  </button>
                </div>
              </form>{" "}
              {/* Form END */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
