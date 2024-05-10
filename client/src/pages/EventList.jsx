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

import Event from "./Event";

const EventList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Event List</h1>
        </Col>
      </Row>
      <Row>
        <Stack>
          {/* Implement a .map to autofill the cards into the stack */}
          <Card className="mt-3">
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
          <Card className="mt-3">
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
          <Card className="mt-3">
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
