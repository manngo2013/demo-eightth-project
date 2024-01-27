import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
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
              ("" !== sessionStorage.getItem("username")) && (
              <Navbar.Text>
                Hi:{" "}
                <a href="#user" style={{ textDecoration: "none" }}>
                  {sessionStorage.getItem("username")}
                </a>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
