import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import Auth from "../../utils/auth";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <Navbar bg="dark" sticky="top">
        <Container>
          <h1 className="text-bg-dark text-center">artCO</h1>
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
    </div>
  );
};

export default Header;
