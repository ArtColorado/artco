import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import { useReducer } from "react";
import { useTheme } from "../utils/themeContext";
import "./login.css";

export default function login(props) {
  const [state, dispatch] = useTheme();

  const themeStyles1 = {
    background: state.darkTheme ? "var(--brown-9)" : "var(--brown-0)",
    color: state.darkTheme ? "var(--brown-0)" : "var(--brown-9)",
  };

  const themeStyle2 = {
    borderColor: state.darkTheme ? "white" : "var(--brown-5)",
    boxShadow: state.darkTheme ? "gray" : "2px 2px 5px var(--brown-2)",
  }

  return (
    <div className="site-width mx-auto" style={themeStyles1}>
    <Container style={themeStyles1}>
      <Row className="justify-content-center">
        <Col md="auto">
          <h2>
            <strong>Please sign in or create an account.</strong>
          </h2>
        </Col>
      </Row>
    </Container>
    <Container className="whole-form" style={themeStyle2}>
      <Form className="login-form" id="login-form">
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            id="email-login"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form-input"
            type="password"
            id="password-login"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="secondary" type="submit" id="login-button">
            Login
          </Button>{" "}
        </Form.Group>
      </Form>
      <Container>
        <Row className="justify-content-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h4>~ OR ~</h4>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
      <Form className="signup-form" id="signup-form">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            id="username-signup"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            id="email-signup"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form-input"
            type="password"
            id="password-signup"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="secondary" type="submit" id="signup-button">
            Create Account
          </Button>
        </Form.Group>
      </Form>
    </Container>
  </div>
  );
}