import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import AuthService from "../utils/auth";
import { useReducer } from "react";
import { useTheme } from "../utils/themeContext";
import "./login.css";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";

export default function login(props) {
  const [state, dispatch] = useTheme();

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
              <strong>Please sign in or create an account.</strong>
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className="whole-form" style={themeStyle2}>
        <Form className="login-form" id="login-form">
          <Form.Group className="form-group">
            <Form.Label className="form-label">Email Address:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              id="email-login"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Password:</Form.Label>
            <Form.Control
              className="form-input"
              type="password"
              id="password-login"
              placeholder="password"
            />
          </Form.Group>
          {/* This button should check the user database for the user and validate their login appropriately */}
          <Form.Group className="form-button mt-3">
            <Button
              variant="secondary"
              type="submit"
              id="login-button"
              style={themeStyle3}
            >
              Login
            </Button>{" "}
          </Form.Group>
        </Form>
        <Container className="d-flex justify-content-center my-2">
          <h4>~ OR ~</h4>
        </Container>
        <Form className="signup-form" id="signup-form">
          <Form.Group className="form-group">
            <Form.Label className="form-label">Username:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              id="username-signup"
              placeholder="username"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Email Address:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              id="email-signup"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Password:</Form.Label>
            <Form.Control
              className="form-input"
              type="password"
              id="password-signup"
              placeholder="password"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Account Type:</Form.Label>
            <Form.Check
              inline
              label="Patron"
              name="artist-patron"
              type="radio"
              id="inline-radio-1"
              value="patron"
              className="mt-1"
            />
            <Form.Check
              inline
              label="Artist"
              name="artist-patron"
              type="radio"
              id="inline-radio-2"
              value="artist"
              className="mt-1"
            />
          </Form.Group>
          {/* This button should add the user to the user database */}
          <Form.Group className="form-button mt-3">
            <Button
              variant="secondary"
              type="submit"
              id="signup-button"
              style={themeStyle3}
            >
              Create Account
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
