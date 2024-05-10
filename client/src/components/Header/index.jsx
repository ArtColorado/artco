import "./header.css";
import { useReducer } from "react";
import { useTheme } from "../../utils/themeContext";
import { TOGGLE_THEME } from "../../utils/actions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [state, dispatch] = useTheme();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleMode = () => {
    dispatch({ type: TOGGLE_THEME, payload: state.darkTheme });
  };
  useEffect(() => {
    const root = document.getElementById("root");
    if (state.darkTheme) {
      root.classList.add("darkmode");
      root.classList.remove("lightmode");
    } else {
      root.classList.add("lightmode");
      root.classList.remove("darkmode");
    }
  }, [state]);

  return (
    <Navbar sticky="top">
      <Container className="nav-elements">
        <Button
          id="toggle-button"
          onClick={toggleMode}
          className="toggle-button"
          type="button"
        >
          <img
            src={
              state.darkTheme
                ? "/images/icons/sun.png"
                : "/images/icons/moon.png"
            }
            alt="sun icon"
            id="sun-icon"
          />
        </Button>
        <Col md="auto">
          <h1 className="text-center">artCO</h1>
        </Col>

        <Button id="navbar-toggle" onClick={handleShow}>
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
                <Nav.Link href="/categories">Category</Nav.Link>
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
