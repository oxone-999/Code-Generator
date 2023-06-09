import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';


const columns = [
    {   field: 'id', 
        headerName: 'ID', 
        width: 90,
        valueGetter: (params) =>
         `${params.row.id}`, 
    },
    {   field: 'firstName', 
        headerName: 'First Name', 
        width: 250,
        valueGetter: (params) =>
         `${params.row.firstName}`, 
    },
    {   field: 'lastName', 
        headerName: 'Last Name', 
        width: 250,
        valueGetter: (params) =>
         `${params.row.lastName}`, 
    },
    {   field: 'email', 
        headerName: 'Email Id', 
        width: 300,
        valueGetter: (params) =>
         `${params.row.email}`, 
    },
    {
      field: 'contactNumber',
      headerName: 'Contact Number',
      sortable: true,
      width: 250,
      valueGetter: (params) =>
      `${params.row.contactNumber}`, 
      backgroundColor: 'red',
    
    },
    {
      field: 'Date of Birth',
      headerName: 'Date of Birth',
      sortable: true,
      width: 200,
      valueGetter: (params) =>
        `${params.row.dob}`
    },
  ];

function EmployeeTable({employeeList}) {
  return (
    <>
        <div style={{ height: '80vh', width: '100%',margin: "1rem" }}>
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
  )
}

export default EmployeeTable






const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



