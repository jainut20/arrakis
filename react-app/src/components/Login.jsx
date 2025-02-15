import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import UserAuthService from "../services/UserAuthService";
import Notiflix from 'notiflix';

import "./style.css";

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
    Notiflix.Loading.standard()
    UserAuthService.login(this.state.email, this.state.password).then(
      (response) => {
        if (response) {
          Notiflix.Loading.remove();
          // this.props.history.push("/viewsecurity")
          window.location.href = '/viewsecurity'
        } else {
          Notiflix.Loading.remove();
          Notiflix.Notify.failure("Invalid login credentials.")
          console.log(this.state.email);
        }
      }
    );
  }

  render() {
    return (

      <Container className="col-md-5 mx-auto my-auto ">
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
