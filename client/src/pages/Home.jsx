import { Container, Col, Row, Button, Image } from "react-bootstrap";
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
              <Image src="/images/icons/calendar.png" alt="calendar icon" />
              <i className="fa">&#xf073;</i>
            </Link>
          </h6>
        </Col>
        <Col></Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Home;
