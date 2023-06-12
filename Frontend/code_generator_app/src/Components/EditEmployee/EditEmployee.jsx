import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./EditEmployee.css";
import { Stack } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router";

function EditEmployee({ json }) {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`?tableName=reactTable&id=${id}`, { table: employee })
      .then((res) => {
        window.location.href = "/";
      });
    console.log(employee);
  };

  const handleBack = (event) => {
    event.preventDefault();

    window.location.href = "/";
  };

  useEffect(() => {
    axios
      .get(`1/?tableName=reactTable&id=${id}`)
      .then((res) => res.data)
      .then((res) => {
        console.log(employee, res);
        setEmployee({ ...res[0] });
      });
  }, []);

  return (
    <form>
      <div className="editEmployee">
        <div>
          <h1 className="editEmployeeHeader">Edit Employee Details</h1>
        </div>
        {json.map((e) => (
          <>
            <div>
              <label for="name">{e.name}</label>
              <input
                type="text"
                id="name"
                value={employee[e.name]}
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

export default EditEmployee;
