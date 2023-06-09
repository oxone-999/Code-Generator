import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import axios from "axios";

function Home() {
   
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
     const getEmployeeList = async () => {
        const response = await axios.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
        setEmployeeList(response.data);
     };
      getEmployeeList();
  }, []);

  const handleAddEmployee = () => {
    
  }  


  return (
    <div className="Home">
        <h1>Employee Management Software</h1>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick = {handleAddEmployee}>
            Add Employee
        </Button>
        </Stack>
        <EmployeeTable  employeeList={employeeList}/> 
    </div>
  );
}

export default Home;
