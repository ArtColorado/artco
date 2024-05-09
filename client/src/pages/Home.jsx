import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md="auto">
          <h1>Welcome to artCo!</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <h4>
            Find out where your favorite local artists/artisans will be, or
            discover a new favorite!
          </h4>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <h6>
            Check out our upcoming events!{" "}
            <Link to="/event">
              <i className="fa">&#xf073;</i>
            </Link>
          </h6>
        </Col>
        <Col></Col>
      </Row>
      <Row id="search-bar-label">
        <Col></Col>
        <Col md="auto">
          <h6>Search for an artist by name</h6>
        </Col>
        <Col></Col>
      </Row>
      <Row id="search-bar">
        <Col>
          <Form.Control type="text"></Form.Control>{" "}
        </Col>
        <Col>
          <Button variant="success" as="input" type="submit" value="Submit" />
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <h6>Or explore our artists by category!</h6>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col id="category-icon" xs={12} md={4}>
          <Image
            src="/images/images-categories/jewelry.jpg"
            rounded
            thumbnail
            fluid
          />
        </Col>
        <Col id="category-icon" xs={12} md={4}>
          <Image
            src="/images/images-categories/painting.jpg"
            rounded
            thumbnail
            fluid
          />
        </Col>
        <Col id="category-icon" xs={12} md={4}>
          <Image
            src="/images/images-categories/photography.jpg"
            rounded
            thumbnail
            fluid
          />
        </Col>
        <Col id="category-icon" xs={12} md={4}>
          <Image
            src="/images/images-categories/pottery.jpg"
            rounded
            thumbnail
            fluid
          />
        </Col>
        <Col id="category-icon" xs={12} md={4}>
          <Image
            src="/images/images-categories/textile.jpg"
            rounded
            thumbnail
            fluid
          />
        </Col>
        <Col id="category-icon" xs={12} md={4}>
          <Image
            src="/images/images-categories/woodworking.jpg"
            rounded
            thumbnail
            fluid
          />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Home;
