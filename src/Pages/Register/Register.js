import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../JS/Actions/userActions";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const conn = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    if (conn !== null) {
      Navigate("/profile");
    }
  }, [conn]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const result = await dispatch(register(user));
    //console.log("Registration result:", result);
    Navigate("/profile");
  };
  const [file, setFile] = useState();
  const handleImage = async () => {
    const formData = new FormData();
    formData.append("image", file);
    await axios.post(
      "http://localhost:8000/api/user/imageUrl",
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
      formData
    );
  };
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.value)}
            ></input>
            <input
              type="text"
              name="email"
              placeholder="email address"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="age"
              placeholder="age"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="phone"
              placeholder="phone"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="photo"
              placeholder="photo"
              onChange={(e) => handleChange(e)}
            />
            <Button onClick={() => handleRegister()}>create</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
