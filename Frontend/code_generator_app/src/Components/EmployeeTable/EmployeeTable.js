import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    valueGetter: (params) => `${params.row.id}`,
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 250,
    valueGetter: (params) => `${params.row.firstName}`,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 250,
    valueGetter: (params) => `${params.row.lastName}`,
  },
  {
    field: "email",
    headerName: "Email Id",
    width: 300,
    valueGetter: (params) => `${params.row.email}`,
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    sortable: true,
    width: 250,
    valueGetter: (params) => `${params.row.contactNumber}`,
    backgroundColor: "red",
  },
  {
    field: "Date of Birth",
    headerName: "Date of Birth",
    sortable: true,
    width: 200,
    valueGetter: (params) => `${params.row.dob}`,
  },
  {
    field: "Actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              window.location.href = "/edit-employee";
            }}
          >
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={() => {}}>
            Delete
          </Button>
        </Stack>
      );
    },
  }
];

function EmployeeTable({ employeeList }) {
  return (
    <>
      <div
        style={{
          display:"flex",
          justifyContent:"center",
          height: "80vh",
          margin: "1rem",
          backgroundColor: "white",
        }}
      >
        <DataGrid
          rows={employeeList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
}

export default EmployeeTable;
