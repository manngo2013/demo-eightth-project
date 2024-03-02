import React, { Component } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";

class ManagedCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access: true,
      create: false,
      update: false,
      delete: false,
    };
  }

  componentDidMount() {
    this.getPermissions();
  }

  getPermissions() {
    let user =
      sessionStorage.getItem("user") != null
        ? JSON.parse(sessionStorage.getItem("user"))
        : "";
    let role = user ? user.role : "";

    fetch("http://localhost:4000/permissions?role=" + role + "&page=customer")
      .then((res) => {
        if (!res.ok) {
          toast.warning("You don't have any permissions to access");
          return false;
        }
        return res.json();
      })
      .then((resp) => {
        //console.log("Test customer: ", resp);
        if (resp.length > 0) {
          let permission = resp[0];
          this.setState({ access: permission.access });
          this.setState({ create: permission.create });
          this.setState({ update: permission.update });
          this.setState({ delete: permission.delete });
        } else {
          this.setState({ access: false });
          toast.warning("You don't have any permissions to access");
        }
      })
      .catch((err) => {
        this.setState({ access: false });
        toast.error("Failed: " + err.message);
      });
  }

  handleAdd() {
    if (this.state.create) {
      toast.success("Added success");
    } else {
      toast.warning("You don't have any permissions to do this action");
    }
  }

  handleUpdate() {
    if (this.state.update) {
      toast.success("Updated success");
    } else {
      toast.warning("You don't have any permissions to do this action");
    }
  }

  handleDelete() {
    if (this.state.delete) {
      toast.success("Deleted success");
    } else {
      toast.warning("You don't have any permissions to do this action");
    }
  }

  render() {
    return (
      <Container>
        <Card>
          <Card.Header>Customer Listing</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={() => this.handleAdd()}>
              Add New
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => this.handleUpdate()}
                    >
                      Update
                    </Button>{" "}
                    <Button
                      variant="secondary"
                      onClick={() => this.handleDelete()}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ManagedCustomer;
