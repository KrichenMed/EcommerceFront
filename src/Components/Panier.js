import React, { useEffect } from "react";
import backgroundImage from "../Media/3492868.gif";
import emptycartimg from "../Media/EmptyCart.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Panier = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

  return (
    <div
      className="panierContainer"
      style={{
        backgroundColor: "#ffffff73",
        padding: "25px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        color: "#fff",
        minHeight: "500px",
        backdropFilter: "blur(2px)",
        marginLeft: "6%",
        marginTop: "50px",
        marginRight: "6%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Your content here */}
      <b>
        <h1 style={{ color: "#FFD35F" }}>Empty Cart !!</h1>
      </b>
      <img src={emptycartimg} style={{ cursor: "pointer", width: "40%" }} />
      <Link
                to={"/"}>
      <Button variant="warning">Go Back And Shop</Button>
      </Link>
    </div>
  );
};

export default Panier;
