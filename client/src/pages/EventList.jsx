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

import Event from "./Event";

const EventList = () => {
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
        <Col>
          <h1>Event List</h1>
        </Col>
      </Row>
      <Row>
        <Stack>
          {/* Implement a .map to autofill the cards into the stack and possibly sort by events that are coming up*/}
          <Card className="mt-3" style={themeStyles2}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Link to="/event">
                <Button variant="success">Go somewhere</Button>
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
                <Button variant="success">Go somewhere</Button>
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
                <Button variant="success">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </Stack>
      </Row>
      <Row>
        {/* This button should only populate when a user is logged in */}
        <Col className="text-center">
          <Link to="/addevent">
            <Button variant="success" type="input">
              Add your Event
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default EventList;
