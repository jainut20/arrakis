import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import UserAuthService from "./services/UserAuthService";
import SecTabledata from "./components/SecTabledata";

import TradeTabledata from "./components/TradeTabledata";
import Login from "./components/Login";
import SignUp from "./components/Signup";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentUser = UserAuthService.getUser();
    console.log(sessionStorage.getItem("user"))
    return (
      <Router>
        <div>
          <NavbarComp isLoggedin={currentUser} />
          <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/viewtrades" element={<TradeTabledata />} />
            <Route path="/viewsecurity" element={<SecTabledata />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
