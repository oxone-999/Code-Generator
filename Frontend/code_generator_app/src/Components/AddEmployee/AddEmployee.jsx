import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./AddEmployee.css";
import { Stack } from "@mui/material";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addEmployee(name, email, phone);
  };

  const handleBack = (event) => {
    event.preventDefault();

    window.location.href = "/";
  };

  return (
    <div>
      <div className="addEmployee">
        <div>
          <h1 className="addEmployeeHeader">Add Employee Details</h1>
        </div>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label for="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleBack}
          >
            Back
          </Button>
        </Stack>
      </div>
    </div>
  );
}

const addEmployee = (name, email, phone) => {
  // TODO: Add the employee details to the database
};

export default AddEmployee;
