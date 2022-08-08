import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/sign-in" element={<Login/>} />
    </Routes>
    </Router>
  );
};

export default App;
