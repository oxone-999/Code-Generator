import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

function EntityTable({ entityList, entityJSON }) {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Confirm delete the entity from database?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`?tableName=${entityJSON.name}&id=${id}`)
          .then(() => {
            Swal.fire("Deleted!", "", "success");
            window.location.reload();
          })
          .catch((er) => {
            Swal.fire("Error", er.message, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Cancelled", "", "info");
      }
    });
  };
  const extractCoulumnsFromJson = () => {
    const cols = [];
    for (const e of entityJSON.fields) {
      const column = {
        field: e.name,
        headerName: e.name,
        width: 100,
        valueGetter: (params) =>
          e.type.toLowerCase() === "date"
            ? `${params.row[e.name].split("T")[0]}`
            : `${params.row[e.name]}`,
      };
      if (e.type.toLowerCase() === "date") {
        // column.type = "date";
      } else if (e.type.toLowerCase() === "number") {
        column.type = "number";
      } else if (e.type.toLowerCase() === "boolean") {
        column.type = "boolean";
      } else if (e.type.toLowerCase() === "string") {
        column.type = "string";
      } else if (e.type.toLowerCase() === "integer") {
        column.type = "number";
      }
      cols.push(column);
    }

    // Actions
    cols.push({
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
                window.location.href = `/edit/${entityJSON.name}/${params.row["id"]}`;
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleDelete(params.row["id"]);
              }}
            >
              Delete
            </Button>
          </Stack>
        );
      },
    });
    return cols;
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          margin: "1rem",
          backgroundColor: "white",
        }}
      >
        <DataGrid
          rows={entityList}
          columns={extractCoulumnsFromJson()}
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

export default EntityTable;
