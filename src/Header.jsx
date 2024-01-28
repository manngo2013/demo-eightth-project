import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogout: false,
    };
  }

  handleLogout() {
    sessionStorage.clear();
    this.setState({ isLogout: true });
  }

  render() {
    if (this.state.isLogout) {
      return <Navigate to="/login" replace={true} />;
    }

    return (
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            {(null != sessionStorage.getItem("username")) &
            ("" !== sessionStorage.getItem("username")) ? (
              <Nav>
                <Navbar.Text>
                  Hi:{" "}
                  <a href="#user" style={{ textDecoration: "none" }}>
                    {sessionStorage.getItem("username")}
                  </a>
                </Navbar.Text>
                <Nav.Link href="#link" onClick={() => this.handleLogout()}>
                  Logout
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
