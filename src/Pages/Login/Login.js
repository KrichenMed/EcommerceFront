import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../JS/Actions/userActions";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const conn = useSelector((state) => state.userReducer.user);
  // Scroll to the bottom of the page on component mount
  useEffect(() => {
    const handleScrollToBottom = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    window.addEventListener("load", handleScrollToBottom);

    return () => {
      window.removeEventListener("load", handleScrollToBottom);
    };
  });

  // Redirect to profile page if user is already logged in
  useEffect(() => {
    if (conn !== null) {
      Navigate("/profile");
    }
  }, [conn, Navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (user?.password && user?.email) {
      dispatch(login(user));
    } else {
      toast("You must add data");
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#E3E6E6"; // Change to the desired background color
  }, []);
  return (
    <div style={{ marginTop: "-10px", width: "100%" }}>
      <div class="container-fluid ps-md-0" style={{ width: "100%" }}>
        <div class="row g-0">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div
              class="login d-flex align-items-center py-5"
              style={{ backgroundColor: "white",width:"100%" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Welcome back!</h3>

                    <form>
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          className={"form-control "}
                          id="floatingInput"
                          name="email"
                          placeholder="name@example.com"
                          onChange={(e) => handleChange(e)}
                        />
                        <label for="floatingInput">Email address</label>
                        <span className="text-danger"></span>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="password"
                          className={"form-control "}
                          id="floatingPassword"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => handleChange(e)}
                        />
                        <label for="floatingPassword">Password</label>
                        <span className="text-danger"></span>
                      </div>

                      <div class="d-grid">
                        <button
                          class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="button"
                          onClick={() => handleClick()}
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
