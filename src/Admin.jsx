import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

class Admin extends Component {
  render() {
    // if (!this.props.user) {
    //   return <Navigate to="/login" replace={true} />;
    // }
    return <Container>Admin Dashboard</Container>;
  }
}

export default Admin;
