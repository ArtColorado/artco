import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import Auth from "../../utils/auth";

const Header = () => {
  return (
    <Navbar bg="dark" sticky="top">
      <Container className="justify-content-center">
        <h1 className="text-bg-dark text-center">artCO</h1>
        <Button
          className="navbar-toggler m-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Offcanvas
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <Offcanvas.Header closeButton>
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Options
            </h5>
            <Button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              {Auth.loggedIn() ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/userpage">
                      My Collection
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/addArtist">
                      Add an Artist
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/addRecord">
                      Add an Album
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#" id="logout">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    Login/Signup
                  </Link>
                </li>
              )}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
