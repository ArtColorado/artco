import {
  Container,
  Col,
  Row,
  Image,
  Button,
  Card,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../utils/themeContext";
import "../index.css";
import Event from "./Event";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";

const EventList = () => {
  const [state, dispatch] = useTheme();

  const themeStyles1 = {
    color: state.darkTheme ? "var(--brown-0)" : "var(--brown-9)",
  };

  const themeStyles2 = {
    background: state.darkTheme ? "var(--brown-7)" : "white",
    borderColor: state.darkTheme ? "var(--brown-7)" : "white",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-2)",
    color: state.darkTheme ? "white" : "var(--brown-9)",
  };

  const themeStyle3 = {
    background: state.darkTheme ? "var(--brown-8)" : "var(--brown-1)",
    color: state.darkTheme ? "white" : "var(--brown-9)",
    border: "none",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-1)",
  };

  const themeStyle4 = {
    background: state.darkTheme ? "var(--brown-7)" : "var(--brown-2)",
    color: state.darkTheme ? "white" : "var(--brown-9)",
    border: "none",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-2)",
  };

  return (
    <Container className="site-width" style={themeStyles1}>
      <Row>
        <Col className="text-center">
          <h1>Event List</h1>
        </Col>
      </Row>
      <Row>
        <Stack>
          {/* Implement a .map to autofill the cards into the stack and possibly sort by events that are coming up*/}
          <Card className="mt-3" style={themeStyles2}>
            <Card.Header as="h5">Denver Arts & Crafts Fair</Card.Header>
            <Card.Body>
              <Card.Title>May 18, 2024 - May 19, 2024</Card.Title>
              <Card.Text>Come to Denver and meet local artists from all around Colorado! See a wide variety of arts and artists, from photography and painting to textile arts and woodworking.</Card.Text>
              <div className="text-center">
              <Link to="/event">
                <Button style={themeStyle3}>View Event Details</Button>
              </Link>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-3" style={themeStyles2}>
            <Card.Header as="h5">Boulder Artists and Artisans</Card.Header>
            <Card.Body>
              <Card.Title>June 1, 2024 - June 2, 2024</Card.Title>
              <Card.Text>
                Colorado's biggest art show, with artists showcasing their work in painting, photography, textile arts, and so much more!
              </Card.Text>
              <div className="text-center">
              <Link to="/event">
                <Button style={themeStyle3}>View Event Details</Button>
              </Link>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-3" style={themeStyles2}>
            <Card.Header as="h5">Bailey Art Extravaganza!</Card.Header>
            <Card.Body>
              <Card.Title>July 15th, 2024 - July 16th, 2024</Card.Title>
              <Card.Text>
                Come to Bailey and enjoy our beautiful scenery while exploring local artists and their creations!
              </Card.Text>
              <div className="text-center">
              <Link to="/event">
                <Button style={themeStyle3}>View Event Details</Button>
              </Link>
              </div>
            </Card.Body>
          </Card>
        </Stack>
      </Row>
      <Row>
        {/* This button should only populate when a user is logged in -- ONLY ARTISTS */}
        <Col className="text-center">
          <Link to="/addevent">
            <Button type="input" style={themeStyle4}>
              Add your Event
            </Button>
          </Link>
        </Col>
      </Row>
      <Row style={{ height: "30px" }}></Row>
    </Container>
  );
};

export default EventList;
