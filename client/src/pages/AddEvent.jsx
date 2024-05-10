import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import { useReducer } from "react";
import { useTheme } from "../utils/themeContext";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "./login.css";
import "./addevent.css";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export default function AddEvent(props) {
  const [state, dispatch] = useTheme();
  const [eventDate, setEventDate] = useState();
  console.log(eventDate);

  const themeStyles1 = {
    background: state.darkTheme ? "var(--brown-8)" : "var(--brown-0)",
    color: state.darkTheme ? "var(--brown-0)" : "var(--brown-9)",
  };

  const themeStyle2 = {
    borderColor: state.darkTheme ? "var(--brown-6)" : "var(--brown-5)",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-2)",
    background: state.darkTheme ? "var(--brown-7)" : "var(--brown-1)",
  };

  const themeStyle3 = {
    background: state.darkTheme ? "var(--brown-8)" : "var(--brown-0)",
    color: state.darkTheme ? "var(--brown-0)" : "var(--brown-9)",
  };

  return (
    <div className="site-width mx-auto" style={themeStyles1}>
      <Container style={themeStyles1}>
        <Row className="justify-content-center">
          <Col md="auto">
            <h2 id="login-page-intro">
              <strong>Create a new event here.</strong>
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className="whole-form" style={themeStyle2}>
        <Form className="add-event-form" id="add-event-form">
          <Form.Group className="form-group">
            <Form.Label className="form-label">Event Name:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              id="event-name"
              placeholder="best local art show"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Event Date:</Form.Label>
            <div className="form-input">
              <DateRangePicker onChange={setEventDate} value={eventDate} />
            </div>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Location:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              id="event-location"
              placeholder="event location"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Event Image:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              id="event-image"
              placeholder="event image"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Description:</Form.Label>
            <textarea
              className="form-input px-2 py-1"
              type="text"
              id="event-description"
              placeholder="tell us a bit about your event"
            />
          </Form.Group>
          <Form.Group className="form-button mt-3">
            <Button
              variant="secondary"
              type="submit"
              id="login-button"
              style={themeStyle3}
            >
              Create Event
            </Button>{" "}
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

// NOTE: when we are getting the information off of our form, we will need to use the new "eventDate" state that is created when a user interacts with the date-range-picker. I set up a console log of the eventDate to see what, exactly, we are getting from that state, if you need it.
