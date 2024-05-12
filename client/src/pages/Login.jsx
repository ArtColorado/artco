import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import { useTheme } from "../utils/themeContext";
import "./login.css";

function Login(props) {
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

  const [loginFormState, setFormState] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation(LOGIN);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: loginFormState.email,
          password: loginFormState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });

    //   AuthService.login(data.login.token);
    // } catch (err) {
    //   console.error(err);
    // }

    // setFormState({
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="site-width mx-auto" style={themeStyles1}>
      <Container style={themeStyles1}>
        <Row className="justify-content-center">
          <Col md="auto">
            <h2 id="login-page-intro">
              <strong>Please sign in or <Link to="/signup">create an account.</Link></strong>
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
              type="email"
              name="email"
              id="email-login"
              value={loginFormState.email}
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
              value={loginFormState.password}
              placeholder="password"
              onChange={handleLoginChange}
            />
            {error ? (
              <div>
                <p className="error-text">
                  The provided credential are incorrect
                </p>
              </div>
            ) : null}
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
        {/* <Container className="d-flex justify-content-center my-2">
          <h4>~ OR ~</h4>
        </Container> */}
      </Container>
    </div>
  );
}

export default Login;
