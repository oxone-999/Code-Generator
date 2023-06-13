import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import { AddEntity } from "./pages/AddEntity";
import { EditEntity } from "./pages/EditEntity";
import { ViewEntity } from "./pages/ViewEntity";
//fetch json from arguments


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add/:entityName" element={<AddEntity/>} />
        <Route path="/edit/:entityName/:id" element={<EditEntity/>} />
        <Route path="/view/:entityName" element={<ViewEntity/>} />
      </Routes>
    </Router>
  );
}

export default App;
