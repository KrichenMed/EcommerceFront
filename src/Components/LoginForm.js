import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const defaultState = {
  name: null,
  email: null,
  password: null,
  nameError: null,
  emailError: null,
  passwordError: null,
};

const CustomFormValidation = () => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!state.name) {
      nameError = "Name field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!state.email || !reg.test(state.email)) {
      emailError = "Email Field is Invalid";
    }
    if (!state.password) {
      passwordError = "Password field is required";
    }
    if (emailError || nameError || passwordError) {
      setState((prevState) => ({
        ...prevState,
        nameError,
        emailError,
        passwordError,
      }));
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validate()) {
      console.warn(state);
      setState(defaultState);
    }
  };

  return (
    <div className="App">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className={
                            "form-control " +
                            (state.emailError ? "invalid" : "")
                          }
                          id="floatingInput"
                          name="email"
                          placeholder="name@example.com"
                          value={state.email || ""}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        <span className="text-danger">{state.emailError}</span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className={
                            "form-control " +
                            (state.passwordError ? "invalid" : "")
                          }
                          id="floatingPassword"
                          name="password"
                          placeholder="Password"
                          value={state.password || ""}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        <span className="text-danger">
                          {state.passwordError}
                        </span>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="rememberPasswordCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberPasswordCheck"
                        >
                          Remember password
                        </label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="button"
                          onClick={submit}
                        >
                          Sign in
                        </button>
                        <div className="text-center">
                          <a className="small" href="#">
                            Forgot password?
                          </a>
                        </div>
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

export default CustomFormValidation;
