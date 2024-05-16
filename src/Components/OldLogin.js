import React from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavDropdown = ({ conn, handleLogout}) => {
  return (
    <div>
      <NavDropdown
        id="nav-dropdown-black-signin"
        expand="lg"
        title={
          conn ? <Button variant="light">Hello, {conn.name}</Button> : <></>
        }
        menuVariant="black"
        align={"end"}
      >
        {conn && (
          <NavDropdown.Item as={Link} to="/profile">
            Profile
          </NavDropdown.Item>
        )}

        {conn && (
          <>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </div>
  );
};

export default MyNavDropdown;
