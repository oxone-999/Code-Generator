import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./AddEmployee.css";
import { Stack } from "@mui/material";
import axios from "axios";

function AddEmployee({ json }) {
  const [employee, setEmployee] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("?tableName=reactTable", { table: employee }).then((res) => {
      window.location.href = "/";
    });
    console.log(employee);
  };

  const handleBack = (event) => {
    event.preventDefault();

    window.location.href = "/";
  };

  return (
    <form>
      <div className="addEmployee">
        <div>
          <h1 className="addEmployeeHeader">Add Employee Details</h1>
        </div>
        {json.map((e) => (
          <>
            <div>
              <label for="name">{e.name}</label>
              <input
                type="text"
                id="name"
                value={employee.name}
                onChange={(event) =>
                  setEmployee({ ...employee, [e.name]: event.target.value })
                }
                required
              />
            </div>
          </>
        ))}
        <Stack direction="row" spacing={2}>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              backgroundColor: "purple",
              color: "#fff",
              padding: "8px",
              border: 0,
              borderRadius: "2px",
              paddingLeft: "20px",
              paddingRight: "20px",
              cursor: "pointer",
            }}
          >
            ADD
          </button>
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
    </form>
  );
}

export default AddEmployee;
