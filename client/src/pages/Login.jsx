import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Container } from "react-bootstrap";

import Auth from "../utils/auth";

const Login = (props) => {
  return (
    <div classNameName="site-width mx-auto">
      <Container
        classNameName="container bd-gutter border bs-border-color bg-opacity-10 rounded-1 shadow"
        id="description"
      >
        <h2>
          <strong>Please sign in or create an account.</strong>
        </h2>
      </Container>
      <div classNameName="double-form bs-border-color bg-opacity-10 rounded-1 shadow form">
        <Form classNameName="login-form" id="login-form">
          <div classNameName="form-group">
            <label for="email-login">Email:</label>
            <input className="form-input" type="text" id="email-login" />
          </div>
          <div className="form-group">
            <label for="password-login">Password:</label>
            <input className="form-input" type="password" id="password-login" />
          </div>
          <div className="form-group login-form-centered">
            <button
              className="btn btn-secondary"
              type="submit"
              id="login-button"
            >
              Login
            </button>
          </div>
        </Form>
        <div className="login-or login-form-centered">
          <h4>~ OR ~</h4>
        </div>
        <form className="signup-form" id="signup-form">
          <div className="form-group">
            <label for="username-signup">Username:</label>
            <input className="form-input" type="text" id="username-signup" />
          </div>
          <div className="form-group">
            <label for="email-signup">Email:</label>
            <input className="form-input" type="text" id="email-signup" />
          </div>
          <div className="form-group">
            <label for="password-signup">Password:</label>
            <input
              className="form-input"
              type="password"
              id="password-signup"
            />
          </div>
          <div className="form-group login-form-centered">
            <button
              className="btn btn-secondary"
              type="submit"
              id="signup-button"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
