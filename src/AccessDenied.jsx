import React, { Component } from "react";
import { Container } from "react-bootstrap";

class AccessDenied extends Component {
  render() {
    return (
      <Container>
        <h1>Access Denied</h1>
        <p>You don't have any permission to access</p>
      </Container>
    );
  }
}

export default AccessDenied;
