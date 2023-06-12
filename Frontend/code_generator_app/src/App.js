import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import EditEmployee from "./Components/EditEmployee/EditEmployee";
//fetch json from arguments
const json = {
  fields: [
    {
      name: "EMPNO",
      type: "INTEGER",
      size: 20,
      unique: "Y",
      prim_key: "Y",
      optional: "N",
    },
    {
      name: "FIRSTNAME",
      type: "TEXT",
      size: 20,
      unique: "N",
      prim_key: "N",
      optional: "N",
    },
    {
      name: "LASTNAME",
      type: "TEXT",
      size: 20,
      unique: "N",
      prim_key: "N",
      optional: "N",
    },
    {
      name: "PHONENO",
      type: "TEXT",
      size: 15,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
    {
      name: "WORKDEPT",
      type: "TEXT",
      size: 5,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
    {
      name: "HIREDATE",
      type: "DATE",
      size: 15,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
    {
      name: "JOB",
      type: "TEXT",
      size: 10,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
    {
      name: "EDLEVEL",
      type: "INTEGER",
      size: 5,
      unique: "N",
      prim_key: "N",
      optional: "N",
    },
    {
      name: "BIRTHDATE",
      type: "DATE",
      size: 15,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
    {
      name: "SEX",
      type: "TEXT",
      size: 1,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
    {
      name: "SALARY",
      type: "DOUBLE",
      size: 15,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
    {
      name: "BONUS",
      type: "DOUBLE",
      size: 15,
      unique: "N",
      prim_key: "N",
      optional: "Y",
    },
  ],
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home json={json.fields} />} />
        <Route
          path="/add-employee"
          element={<AddEmployee json={json.fields} />}
        />
        <Route path="/edit-employee/:id" element={<EditEmployee json={json.fields}/>} />
      </Routes>
    </Router>
  );
}

export default App;
