import "./header.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Offcanvas,
  Col,
} from "react-bootstrap";

import Auth from "../../utils/auth";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar sticky="top">
      <Container>
        <Col></Col>
        <Col md="auto">
          <h1 className="text-center">artCO</h1>
        </Col>
        <Col></Col>
        <Button variant="success" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Navigation
            </h5>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/event">Events</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/artist">Artists</Nav.Link>
              </Nav.Item>
              {/* {Auth.loggedIn() ? ( */}
              {/* <> */}
              <Nav.Item>
                <Nav.Link href="/me">My Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" id="logout">
                  Logout
                </Nav.Link>
              </Nav.Item>
              {/* </> */}
              {/* ) : ( */}
              <Nav.Item>
                <Nav.Link href="/login">Login/Signup</Nav.Link>
              </Nav.Item>
              {/* )} */}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
