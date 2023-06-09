import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import EditEmployee from "./Components/EditEmployee/EditEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee" element={<EditEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
