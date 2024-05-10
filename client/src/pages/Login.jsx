import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";

import AuthService from "../utils/auth";
import { useTheme } from "../utils/themeContext";
import "./login.css";

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

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [signUpState, setSignUpState] = useState({
    username: "",
    email: "",
    password: "",
    is_artist: "false",
  });
  const [login, { error: errorLogin, data: dataLogin }] =
    useMutation(LOGIN_USER);
  const [signUp, { error: errorAddUser, data: dataAddUser }] =
    useMutation(ADD_USER);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;

    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      AuthService.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  const handleSignUpFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signUp({
        variables: { ...signUpState },
      });

      AuthService.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setSignUpState({
      username: "",
      email: "",
      password: "",
      is_artist: "false",
    });
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
        <Form
          className="login-form"
          id="login-form"
          onSubmit={handleLoginFormSubmit}
        >
          <Form.Group className="form-group">
            <Form.Label className="form-label">Email Address:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              name="email"
              id="email-login"
              value={formState.email}
              placeholder="name@example.com"
              onChange={handleLoginChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Password:</Form.Label>
            <Form.Control
              className="form-input"
              type="password"
              name="password"
              id="password-login"
              value={formState.password}
              placeholder="password"
              onChange={handleLoginChange}
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
        {errorLogin && (
          <div className="my-3 p-3 bg-danger text-white">
            {errorLogin.message}
          </div>
        )}
        <Container className="d-flex justify-content-center my-2">
          <h4>~ OR ~</h4>
        </Container>
        <Form
          className="signup-form"
          id="signup-form"
          onSubmit={handleSignUpFormSubmit}
        >
          <Form.Group className="form-group">
            <Form.Label className="form-label">Username:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              name="username"
              value={signUpState.username}
              id="username-signup"
              placeholder="username"
              onChange={handleSignUpChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Email Address:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              name="email"
              value={signUpState.email}
              id="email-signup"
              placeholder="name@example.com"
              onChange={handleSignUpChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Password:</Form.Label>
            <Form.Control
              className="form-input"
              type="password"
              name="password"
              value={signUpState.password}
              id="password-signup"
              placeholder="password"
              onChange={handleSignUpChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Account Type:</Form.Label>
            <Form.Check
              inline
              checked={signUpState.is_artist === "false"}
              label="Patron"
              name="is_artist"
              value="false"
              type="radio"
              id="inline-radio-1"
              className="mt-1"
              onChange={handleSignUpChange}
            />
            <Form.Check
              inline
              checked={signUpState.is_artist === "true"}
              label="Artist"
              name="is_artist"
              value="true"
              type="radio"
              id="inline-radio-2"
              className="mt-1"
              onChange={handleSignUpChange}
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
        {errorAddUser && (
          <div className="my-3 p-3 bg-danger text-white">
            {errorAddUser.message}
          </div>
        )}
      </Container>
    </div>
  );
}
