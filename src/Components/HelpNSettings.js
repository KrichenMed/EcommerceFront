import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HelpNSettingList = () => {
  //Departments
  const departments = [
    "Language",
    "Contact US",
    "Report somthing !!",
    "Customer Service",
  ];
  return (
    <div>
      {departments.map((departments, index) => (
        // Render each category as an <h6> element
        <Link to={`/${departments}/NotFound`} className="nav-link">
          <Button
            variant="light"
            size="lg"
            style={{
              width: "100%",
              borderRadius: "0px",
              textAlign: "left",
              position: "relative", // Add position relative to the button
            }}
          >
            <h6 key={index} style={{ marginRight: "20px" }}>
              <b>{departments}</b>
            </h6>

            <span
              style={{
                position: "absolute", // Set position absolute to position the arrow
                right: "10px", // Adjust the right distance as needed
                top: "50%", // Align the arrow vertically
                transform: "translateY(-50%)", // Center the arrow vertically
              }}
            >
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default HelpNSettingList;
