import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { register } from "../JS/Actions/userActions";
import axios from "axios";

const SignupForm = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const conn = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (conn !== null) {
      Navigate("/profile");
    }
  }, [conn, Navigate]);


  const handleChange = (e) => {
    // Log the name of the input field being changed
    //console.log("Input field name:", e.target.name);

    // Log the current value of the input field
    //console.log("Current value:", e.target.value);

    // Update the user state with the new value
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    // Proceed with registration only if form is validated
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
    <Form
      style={{ padding: "15px" }}
      onSubmit={handleRegister} // Use handleRegister as the onSubmit handler
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5>
          <b>Create your account</b>
        </h5>
        <p>
          Already have an account?{" "}
          <Link to="/login" onClick={() => handleCloseModal()}>
            Login
          </Link>
        </p>{" "}
      </div>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="Age"
          placeholder="Enter Age"
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          name="Phone"
          placeholder="Enter Phone Number Here"
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Your Profile Image AS a URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Dont Upload anything</Form.Label>
          <Form.Control type="file" onChange={(e) => setFile(e.target.value)} />
        </Form.Group>
        {/*<Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            name="state"
            onChange={handleChange}
          >
            <option>Choose...</option>
            
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" name="zip" onChange={handleChange} />
        </Form.Group>*/}
      </Row>

      <Form.Group className="mb-3" controlId="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Sign up for our newsletter to stay in the loop about hot deals, new products, and more. You can unsubscribe at any time, no worries."
          name="newsletter"
        />
      </Form.Group>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Button variant="dark" type="submit" onClick={() => handleRegister()}>
          Join US
        </Button>
      </div>
    </Form>
  );
};

export default SignupForm;
