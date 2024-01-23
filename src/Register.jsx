import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
      email: "",
    };
  }

  isValidate = () => {
    let isValid = true;

    if (this.state.username === null || this.state.username === "") {
      isValid = false;
      toast.error("Please enter username");
    }

    if (this.state.password === null || this.state.password === "") {
      isValid = false;
      toast.error("Please enter password");
    }

    if (this.state.email === null || this.state.email === "") {
      isValid = false;
      toast.error("Please enter email");
    } else if (
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) === false
    ) {
      isValid = false;
      toast.error("Please enter valid email");
    }

    return isValid;
  };

  handleRegister(e) {
    e.preventDefault();
    //alert("Test");
    if (this.isValidate()) {
      let user = {
        id: this.state.username,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      };

      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          toast.success("Registered successful");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  }

  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "35rem", marginTop: "200px" }}>
              <Card.Header
                as="h5"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                REGISTER NOW
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label className="d-flex">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      value={this.state.username}
                      onChange={(event) => {
                        this.setState({ username: event.target.value });
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="d-flex">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(event) => this.handleRegister(event)}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
