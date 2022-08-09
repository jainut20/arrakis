import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Redirect } from "react-router";
import UserAuthService from "../services/UserAuthService";
import { useHistory } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleLogin(e) {
    e.preventDefault();
    UserAuthService.login(this.state.email, this.state.password).then(
      (response) => {
        console.log("login");
        console.log(response);
        if (response) {
          console.log("login success");
          window.location.href = '/view'
        } else {
          console.log("login fail");
        }
      }
    );
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleLogin}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
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
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" >
              Login
            </button>
          </div>
          <p className="forgot-password text-right">
            Don't have an account? <a href="/">Sign Up</a>
          </p>
        </form>
      </Container>
    );
  }
}
