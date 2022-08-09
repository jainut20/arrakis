import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Tabledata from "./components/Tabledata";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/view" element={<Tabledata />} />
      </Routes>
    </Router>
  );
};

export default App;
