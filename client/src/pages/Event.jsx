import { Container, Col, Row, Image, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../utils/themeContext";

const Event = () => {
  const [state, dispatch] = useTheme();

  const themeStyles1 = {
    color: state.darkTheme ? "var(--brown-0)" : "var(--brown-9)",
  };

  const themeStyles2 = {
    background: state.darkTheme ? "var(--brown-3)" : "white",
    borderColor: state.darkTheme ? "var(--brown-3)" : "white",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-2)",
  };

  return (
    <Container style={themeStyles1}>
      <Row>
        {/* Pull in event name */}
        <Col className="text-center">
          <h1>Denver Arts & Crafts Fair</h1>
        </Col>
      </Row>
      <Row>
        {/* Pull in event image. May need a default if image is not required and user does not add an image */}
        <Col xs="4" lg="3">
          <Image src="images/images-events/Mile_High_Flea_Market.jpg" fluid />
        </Col>
        <Col>
          {/* Pull in date, time, and location */}
          <h3>May 18, 2024 - May 19, 2024, 10am-8pm, Denver</h3>
          {/* Pull in description */}
          <p>
          Come to Denver and meet local artists from all around Colorado! See a wide variety of arts and artists, from photography and painting to textile arts and woodworking.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>ATTENDING ARTISTS:</h1>
        </Col>
        <Col lg="2">
          {/* This button will only populate if an artist is signed in */}
          <Button style={{backgroundColor: "var(--brown-5)", border: "none"}} type="button">
            Attending this event
          </Button>
        </Col>
      </Row>
      <Row>
        {/* This should populate all columns with cards for all the artists attending the event */}
        <Col id="event-artist" xs={12} md={4} lg={3}>
          <Link to="#">
            <Card className="mb-3" style={themeStyles2}>
              <Card.Img
                variant="top"
                src="images/images-artists/Andy_Warhol.jpg"
              />
              <Card.Body>
                <Card.Text>Andy Warhol</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col id="event-artist" xs={12} md={4} lg={3}>
          <Link to="#">
            <Card className="mb-3" style={themeStyles2}>
              <Card.Img
                variant="top"
                src="images/images-artists/Claude_Monet.jpg"
              />
              <Card.Body>
                <Card.Text>Claude Monet</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col id="event-artist" xs={12} md={4} lg={3}>
          <Link to="#">
            <Card className="mb-3" style={themeStyles2}>
              <Card.Img
                variant="top"
                src="images/images-artists/Georgia_OKeeffe.jpg"
              />
              <Card.Body>
                <Card.Text>Georgia OKeeffe</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col id="event-artist" xs={12} md={4} lg={3}>
          <Link to="/artist">
            <Card className="mb-3" style={themeStyles2}>
              <Card.Img
                variant="top"
                src="images/images-artists/Elizabeth_Zimmermann.jpg"
              />
              <Card.Body>
                <Card.Text>Elizabeth Zimmermann</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col id="event-artist" xs={12} md={4} lg={3}>
          <Link to="#">
            <Card className="mb-3" style={themeStyles2}>
              <Card.Img
                variant="top"
                src="images/images-artists/Gustav_Stickley.jpg"
              />
              <Card.Body>
                <Card.Text>Gustav Stickley</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col id="event-artist" xs={12} md={4} lg={3}>
          <Link to="#">
            <Card className="mb-3" style={themeStyles2}>
              <Card.Img
                variant="top"
                src="images/images-artists/Dorothea_Lange.jpg"
              />
              <Card.Body>
                <Card.Text>Dorothea Lange</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Event;
