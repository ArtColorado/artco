import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Image,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

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
          <Form.Control type="text" placeholder="Artist Name"></Form.Control>{" "}
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
        <Col id="category-icon" xs={12} md={6} lg={4}>
          <Link to="#">
            <Card>
              <Card.Img src="/images/images-categories/jewelry.jpg" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    fontSize: "36px",
                    color: "white",
                    WebkitTextStroke: "1px black",
                    textShadow: "1px 1px 4px #000",
                  }}
                >
                  Jewelry
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col id="category-icon" xs={12} md={6} lg={4}>
          <Link to="#">
            <Card>
              <Card.Img src="/images/images-categories/painting.jpg" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    fontSize: "36px",
                    color: "white",
                    WebkitTextStroke: "1px black",
                    textShadow: "1px 1px 4px #000",
                  }}
                >
                  Painting
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col id="category-icon" xs={12} md={6} lg={4}>
          <Link to="#">
            <Card>
              <Card.Img src="/images/images-categories/photography.jpg" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    fontSize: "36px",
                    color: "white",
                    WebkitTextStroke: "1px black",
                    textShadow: "1px 1px 4px #000",
                  }}
                >
                  Photography
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col id="category-icon" xs={12} md={6} lg={4}>
          <Link to="#">
            <Card>
              <Card.Img src="/images/images-categories/pottery.jpg" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    fontSize: "36px",
                    color: "white",
                    WebkitTextStroke: "1px black",
                    textShadow: "1px 1px 4px #000",
                  }}
                >
                  Pottery
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col id="category-icon" xs={12} md={6} lg={4}>
          <Link to="#">
            <Card>
              <Card.Img src="/images/images-categories/textile.jpg" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    fontSize: "36px",
                    color: "white",
                    WebkitTextStroke: "1px black",
                    textShadow: "1px 1px 4px #000",
                  }}
                >
                  Textile
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col id="category-icon" xs={12} md={6} lg={4}>
          <Link to="#">
            <Card>
              <Card.Img src="/images/images-categories/woodworking.jpg" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    fontSize: "36px",
                    color: "white",
                    WebkitTextStroke: "1px black",
                    textShadow: "1px 1px 4px #000",
                  }}
                >
                  Woodworking
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Home;
