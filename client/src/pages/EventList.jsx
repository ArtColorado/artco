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
            <Card.Header as="h5">Event Name</Card.Header>
            <Card.Body>
              <Card.Title>Event Date</Card.Title>
              <Card.Text>Event description</Card.Text>
              <Link to="/event">
                <Button style={themeStyle3}>View Event Details</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="mt-3" style={themeStyles2}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Link to="/event">
                <Button style={themeStyle3}>Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="mt-3" style={themeStyles2}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Link to="/event">
                <Button style={themeStyle3}>Go somewhere</Button>
              </Link>
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
