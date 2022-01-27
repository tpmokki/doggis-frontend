import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <h2>Login page</h2>
      <Link to="/register" className="btn btn-link">Register</Link>
    </Container>
  )
}

export { Login }