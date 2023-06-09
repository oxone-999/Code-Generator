import React from "react";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Card from "../Card/Card";

function Home() {
  return (
    <div className="Home">
        <h1>Employee Management Software</h1>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
            Add Employee
        </Button>
        <Button variant="outlined" color="secondary">
            Logout
        </Button>
        </Stack>
        <Card></Card>
    </div>
  );
}

export default Home;
