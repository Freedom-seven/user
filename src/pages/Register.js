import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUserWithEmail, loginWithGoogle } from "../actions/authActions";
import '../App.css';

const Register = (props) => {
  const dispatch = useDispatch();

  if(!props.auth.isLoaded) return null;

  if(props.auth.uid) props.history.push('/')
  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(registerUserWithEmail(email, password));

  };

  const authWithGoogle = (e) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  return (
    <div className="form">
       <h4>Register Now</h4>
      <Form onSubmit={handleSubmit} className="register-form">
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
        <Button className="btn-email" variant="primary" type="submit" >
          Submit
        </Button>
        <br />
      <Button className="google" variant="primary" onClick={authWithGoogle}>
        Sign in with Google
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

const mapDispatchToProps = {
  registerUserWithEmail,
}

export default connect(mapStateToProps, mapDispatchToProps) (Register);
