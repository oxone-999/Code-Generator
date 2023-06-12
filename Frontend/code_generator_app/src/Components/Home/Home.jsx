import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import axios from "axios";

function Home({ json }) {
  const [employeeList, setEmployeeList] = useState([
    {
      id: 1,
      EMPNO: "dummy-EMPNO",
      FIRSTNAME: "dummy-FIRSTNAME",
      LASTNAME: "dummy-LASTNAME",
      PHONENO: "dummy-PHONENO",
      WORKDEPT: "dummy-WORKDEPT",
      HIREDATE: "dummy-HIREDATE",
      JOB: "dummy-JOB",
      EDLEVEL: "dummy-EDLEVEL",
      BIRTHDATE: "dummy-BIRTHDATE",
      SEX: "dummy-SEX",
      SALARY: "dummy-SALARY",
      BONUS: "dummy-BONUS",
    },
  ]);

  useEffect(() => {
    const getEmployeeList = async () => {
      axios
        .get("?tableName=reactTable")
        .then((res) => res.data)
        .then((res) => setEmployeeList(res))
        .catch((res) => setEmployeeList([]));
    };
    getEmployeeList();
  }, []);

  const handleAddEmployee = () => {
    window.location.href = "/add-employee";
  };

  return (
    <div className="Home">
      <h1>Employee Management Software</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={handleAddEmployee}>
          Add Employee
        </Button>
      </Stack>
      <EmployeeTable employeeList={employeeList} json={json} />
    </div>
  );
}

export default Home;
