// CustomOffcanvas.js
import React from "react";
import { Offcanvas } from "react-bootstrap";
import CategoriesList from "./Categories";
import HelpNSettingList from "./HelpNSettings";

const CustomOffcanvas = ({ offcanvasShow, handleCloseOffcanvas }) => {
  return (
    <Offcanvas show={offcanvasShow} onHide={handleCloseOffcanvas}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h3 style={{ marginBottom: "20px" }}>
            <b>Shop by Department</b>
          </h3>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          borderLeftWidth: "0px",
          marginLeft: "-2px",
        }}
      >
        <div>
          <div>
            <CategoriesList />
          </div>
          <div>
            <h3 style={{ marginLeft: "10px",marginTop:"10px" }}>
              <b>Help & Settings</b>
            </h3>
            <HelpNSettingList />
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomOffcanvas;
