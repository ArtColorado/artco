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
          <h1>Event Name</h1>
        </Col>
      </Row>
      <Row>
        {/* Pull in event image. May need a default if image is not required and user does not add an image */}
        <Col xs="4" lg="3">
          <Image src="images/images-events/Mile_High_Flea_Market.jpg" fluid />
        </Col>
        <Col>
          {/* Pull in date, time, and location */}
          <h3>Event Date, Time, and Location</h3>
          {/* Pull in description */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            distinctio rem eaque tempora porro quasi at esse nemo? Error nihil
            est natus, quos sit ratione doloribus consequuntur commodi
            consequatur! Autem error, enim odio dicta ipsam dolorem! Aperiam
            itaque blanditiis explicabo mollitia amet. Quasi voluptas tempora
            asperiores velit commodi, quos, delectus sunt ab consectetur
            eligendi aperiam quia. Quas perspiciatis fugiat, nostrum at nobis
            aperiam excepturi expedita, perferendis optio vel eos facilis
            blanditiis incidunt nesciunt quasi necessitatibus quaerat.
            Exercitationem, odit, repellat dicta architecto quas beatae numquam
            reiciendis magni tenetur iste perferendis quae accusantium eius
            necessitatibus maiores blanditiis voluptates excepturi, tempore
            cupiditate aliquam.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>ATTENDING ARTISTS:</h1>
        </Col>
        <Col lg="2">
          {/* This button will only populate if an artist is signed in */}
          <Button variant="success" type="button">
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
          <Link to="#">
            <Card className="mb-3" style={themeStyles2}>
              <Card.Img
                variant="top"
                src="images/images-artists/Katherine_Choy.jpg"
              />
              <Card.Body>
                <Card.Text>Katherine Choy</Card.Text>
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
