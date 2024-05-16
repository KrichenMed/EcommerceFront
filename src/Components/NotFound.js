import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

const NotFound = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "aquamarine"; // Change to the desired background color
  }, []);
  return (
    <div>
      <style>
        {`
@-webkit-keyframes moveclouds {
    0% {
        margin-left: 1000px;
    }

    100% {
        margin-left: -1000px;
    }
}

@-moz-keyframes moveclouds {
    0% {
        margin-left: 1000px;
    }

    100% {
        margin-left: -1000px;
    }
}

@-o-keyframes moveclouds {
    0% {
        margin-left: 1000px;
    }

    100% {
        margin-left: -1000px;
    }
 `}
      </style>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">THE PAGE</div>
        <div className="_2">WAS NOT FOUND</div>
        <Button variant="dark">
          {" "}
          <Link to={"/"} className="nav-link">
            BACK TO HOME
          </Link>
        </Button>
      </div>
      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
    </div>
  );
};

export default NotFound;
