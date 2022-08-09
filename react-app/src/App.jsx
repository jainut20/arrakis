import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavbarComp from "./components/Navbar";


const App = () => {
  return (
    <NavbarComp/>
    // <Router>
    // <Routes>
    
    //   <Route path="/" element={<SignUp/>} />
    //   <Route path="/sign-in" element={<Login/>} />
    //   <Route path="/view" element={<Tabledata/>} />
    // </Routes>
    // </Router>
  );
};

export default App;
