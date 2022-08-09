import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "../index.css";
import UserAuthService from "../services/UserAuthService";
import Modal from "react-bootstrap/Modal";

import "../index.css";
import "./style.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {},
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handleValidation() {
    let name = this.state.username;
    let email = this.state.email;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
      
    }

    // if (typeof name !== "undefined") {
    //   if (name.match(/^[a-zA-Z]+$/)) {
    //     formIsValid = false;
    //     errors["name"] = "Only letters";
    //     console.log('name 2')
    //   }

    // }

    //Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
      console.log("email");
    }

    // if (typeof email !== "undefined") {
    //   let lastAtPos = email.lastIndexOf("@");
    //   let lastDotPos = email.lastIndexOf(".");

    //   if (
    //     !(
    //       lastAtPos < lastDotPos &&
    //       lastAtPos > 0 &&
    //       email.indexOf("@@") == -1 &&
    //       lastDotPos > 2 &&
    //       email.length - lastDotPos > 2
    //     )
    //   ) {
    //     formIsValid = false;
    //     errors["email"] = "Email is not valid";
    //   }
    //   console.log('email 2')
    // }

    this.setState({ errors: errors });
    return formIsValid;
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      UserAuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then((response) => {
        // this.props.history.push("/sign-in")
        window.location.href = "/sign-in"
        console.log(response)
      });
    } else {
      <div className="form-group alert alert-danger" role="alert">error</div>
    }
  }
  render() {
    return (
      <Container className="col-md-5 mx-auto my-auto ">
        <form onSubmit={this.handleRegister}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              onChange={this.onChangeUsername}
              value={this.state.username}
              className="form-control"
              placeholder="Name"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              name="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              name="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </Container>
    );
  }
}
