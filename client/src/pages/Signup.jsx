import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import { useTheme } from "../utils/themeContext";
import "./login.css";

function Signup(props) {
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

  const [signUpState, setSignUpState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;

    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  };

  const handleSignUpFormSubmit = async (event) => {
    console.log("HELLO WORLD");
    console.log(
      `username: ${signUpState.username}, email: ${signUpState.email}, password: ${signUpState.password}`
    );
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: signUpState.username,
        email: signUpState.email,
        password: signUpState.password,
      },
    });

    console.log();
    const token = mutationResponse.data.addUser.token;
    console.log(token);
    Auth.login(token);
    // try {
    //   const { data } = await signUp({
    //     variables: { ...signUpState },
    //   });

    //   AuthService.login(data.login.token);
    // } catch (err) {
    //   console.error(err);
    // }

    // setSignUpState({
    //   username: "",
    //   email: "",
    //   password: "",
    //   is_artist: "false",
    // });
  };

  return (
    <div className="site-width mx-auto" style={themeStyles1}>
      <Container style={themeStyles1}>
        <Row className="justify-content-center">
          <Col md="auto">
            <h2 id="login-page-intro">
              <strong>
                Create an account <Link to="/login">or sign in.</Link>
              </strong>
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className="whole-form" style={themeStyle2}>
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
            {error ? (
              <div>
                <p className="error-text">
                  The provided credential are incorrect
                </p>
              </div>
            ) : null}
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

export default Signup;
