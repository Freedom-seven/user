import React from "react";
import { Form, Button } from "react-bootstrap";
import {connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  registerUserWithEmail,
  loginWithGoogle,
  loginWIthEmail,
} from "../actions/authActions";
import '../App.css';

const Login = (props) => {
  const dispatch = useDispatch();

  if(!props.auth.isLoaded) return null;

  if(props.auth.uid) props.history.push('/')
  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(loginWIthEmail(email, password));
  };

  const authWithGoogle = (e) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  return (
    <div className="form">
      <h4>Login Now</h4>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className="btn-email" variant="success" type="submit">
          Login
        </Button>
        <br />
      <Button className="google" variant="success" onClick={authWithGoogle}>
        Sign in with Google
      </Button>{" "}
      <hr/>
      Register here if you don't have an account. <br/>
      <Button className="google" variant="dark" >
        <Link to="/register">REGISTER NOW</Link>
      </Button>{" "}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth
  }
}

export default connect(mapStateToProps) (Login);
