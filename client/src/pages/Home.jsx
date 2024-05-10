import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { useTheme } from "../utils/themeContext";
import { border } from "@cloudinary/url-gen/qualifiers/background";
import "./home.css";

const Home = () => {
  const [state, dispatch] = useTheme();

  const themeStyles1 = {
    color: state.darkTheme ? "var(--brown-0)" : "var(--brown-9)",
  };

  const themeStyles2 = {
    background: state.darkTheme ? "var(--brown-6)" : "white",
    borderColor: state.darkTheme ? "var(--brown-6)" : "white",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-2)",
  };

  return (
    <Container className="site-width" style={themeStyles1}>
      <Row className="text-center" id="home-page-intro">
        <h1>Welcome to artCo!</h1>
      </Row>
      <Row className="text-center">
        <h4>
          Find out where your favorite local artists/artisans will be, or
          discover a new favorite!
        </h4>
      </Row>
      <Row>
        <h5>
          Check out our upcoming events!{" "}
          <Link to="/event">
            <i className="fa">&#xf073;</i>
          </Link>
        </h5>
      </Row>
      <Row id="search-bar-label">
        <Col md="auto">
          <h5>Search for an artist by name:</h5>
        </Col>
      </Row>
      <Row id="search-bar" className="p-2">
        <Form.Control type="text" id="search-input" className="flex-fill"></Form.Control>{" "}
        <Button
          variant="success"
          as="input"
          type="submit"
          value="Submit"
          id="search-button"
        />
      </Row>
      <Row className="mt-3 mb-2">
        <Col md="auto">
          <h4>Or explore our artists by category!</h4>
        </Col>
      </Row>
      <Row className="m-0 p-0">
        <Col id="category-icon" xs={12} sm={6} md={4} className="text-center">
          <Image
            src="/images/images-categories/jewelry.jpg"
            rounded
            thumbnail
            fluid
            style={themeStyles2}
          />
          <h4 className="mt-2">Jewelry</h4>
        </Col>
        <Col id="category-icon" xs={12} sm={6} md={4} className="text-center">
          <Image
            src="/images/images-categories/painting.jpg"
            rounded
            thumbnail
            fluid
            style={themeStyles2}
          />
          <h4 className="mt-2">Painting</h4>
        </Col>
        <Col id="category-icon" xs={12} sm={6} md={4} className="text-center">
          <Image
            src="/images/images-categories/photography.jpg"
            rounded
            thumbnail
            fluid
            style={themeStyles2}
          />
          <h4 className="mt-2">Photography</h4>
        </Col>
        <Col id="category-icon" xs={12} sm={6} md={4} className="text-center">
          <Image
            src="/images/images-categories/pottery.jpg"
            rounded
            thumbnail
            fluid
            style={themeStyles2}
          />
          <h4 className="mt-2">Pottery</h4>
        </Col>
        <Col id="category-icon" xs={12} sm={6} md={4} className="text-center">
          <Image
            src="/images/images-categories/textile.jpg"
            rounded
            thumbnail
            fluid
            style={themeStyles2}
          />
          <h4 className="mt-2">Textile Arts</h4>
        </Col>
        <Col id="category-icon" xs={12} sm={6} md={4} className="text-center">
          <Image
            src="/images/images-categories/woodworking.jpg"
            rounded
            thumbnail
            fluid
            style={themeStyles2}
          />
          <h4 className="mt-2">Woodworking</h4>
        </Col>
        <Col className="my-4"></Col>
      </Row>
    </Container>
  );
};

export default Home;
