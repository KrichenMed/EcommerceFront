import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/Actions/userActions";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
//import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import SignupModal from "./SignUpModal";
import MyNavDropdown from "./OldLogin";
import CustomOffcanvas from "./OffCanvasAll";
import "../Styles/Navb.css";

function Navb() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const conn = useSelector((state) => state.userReducer.user);
  const [style, setStyle] = useState({ display: "none" });

  const panier = useSelector((state) => state.productReducer.panier);

  useEffect(() => {
    conn ? setStyle({ display: "flex" }) : setStyle({ display: "none" });
  }, [conn]);

  const handleLogout = () => {
    dispatch(logout());
    Navigate("");
  };
  // For the Modal component
  const [modalShow, setModalShow] = useState(false);
  const handleCloseModal = () => setModalShow(false);
  const handleShowModal = () => setModalShow(true);
  //Register Modal
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);

  // For the Offcanvas component
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const handleCloseOffcanvas = () => setOffcanvasShow(false);
  const handleShowOffcanvas = () => setOffcanvasShow(true);
  //Departments
  const departments = [
    "All departments",
    "Art & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Boys Fashion",
    "Men's Fashion",
    "Women's Fashion",
    "Electronics",
    "Music",
    "Movies & TV's",
    "Computers",
    "Smart Home",
    "Health and Household",
    "Industrial and scientific",
    "Luggage",
    "Pet Supplies",
    "Software",
    "Sports and Outdoors",
    "Tools & Home Improvement",
    "Video Games",
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  const handleSelect = (department) => {
    setSelectedDepartment(department);
  };
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary-light bg-black"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to={""} className="nav-link">
              E-commerce platform
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "40px",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                alignContent: "space-between",
                flexDirection: "column",
              }}
              navbarScroll
            >
              <div className="link-container">
                {conn && (
                  <>
                    {/*
                    <Link to={"/addingProduct"} className="nav-link">
                      Add Products
                    </Link>
                    <Link to={"/gettingProduct"} className="nav-link">
                      Get Products
                </Link> */}
                  </>
                )}
                {!conn && (
                  <>
                    {/*<Link to={"/register"} className="nav-link">
                      Register
                    </Link> */}
                  </>
                )}
              </div>

              <Form className="mb-3 search-form">
                <InputGroup>
                  <DropdownButton
                    title={selectedDepartment}
                    onSelect={handleSelect}
                    variant="light"
                  >
                    {departments.map((department, index) => (
                      <Dropdown.Item key={index} eventKey={department}>
                        {department}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <Form.Control
                    type="search"
                    data-bs-theme="light"
                    placeholder="Search"
                    className="me search-input"
                    aria-label="Search"
                  />
                  <Button variant="light" className="search-button">
                    <BsSearch />
                  </Button>
                </InputGroup>
              </Form>
              <Link
                to={"/panier"}
                className="nav-link"
                style={{ color: "white" }}
              >
                {/*onClick={handleShowModal}*/}
                Cart <FaShoppingCart />
              </Link>

              <div>
                {conn ? (
                  <MyNavDropdown conn={conn} handleLogout={handleLogout} />
                ) : (
                  <SignupModal />
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Modal show={modalShow} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {panier && panier.length > 0 ? (
              panier.map((e) => (
                <div key={e.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={e.imgUrl} />
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                      <Card.Text>prix = {e.price}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <div>Your cart is empty!</div>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
      <div id="button-container">
        <Button variant="dark" onClick={handleShowOffcanvas}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
            />
          </svg>
          All
        </Button>
        <Button variant="dark">
          <Link to={"/NotFound"} className="nav-link">
            Today's Deals
          </Link>
        </Button>
        <Button variant="dark">
          <Link to={"/NotFound"} className="nav-link">
            Customer Service
          </Link>
        </Button>
        <Button variant="dark">
          <Link to={"/NotFound"} className="nav-link">
            Gift Cards
          </Link>
        </Button>
        <Button variant="dark">
          <Link to={"/NotFound"} className="nav-link">
            Sell
          </Link>
        </Button>
        <CustomOffcanvas
          offcanvasShow={offcanvasShow}
          handleCloseOffcanvas={handleCloseOffcanvas}
        />
      </div>
    </div>
  );
}

export default Navb;
