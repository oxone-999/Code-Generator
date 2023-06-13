import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../styles/EditEntity.css";
import { Stack } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router";
import {json} from '../inputJson';


export const EditEntity = () => {
  const { entityName,id } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];

  const [selectedEntity, setSelectedEntity] = useState({});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`?tableName=reactTable&id=${id}`, { table:entityName })
      .then((res) => {
        window.location.href = "/";
      });
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
        setSelectedEntity({ ...res[0] });
      });
  }, [id]);

  return (
    <form>
      <div className="editEntity">
        <div>
          <h1 className="editEntityHeader">Edit {entityName} Details</h1>
        </div>
        {entityJSON.fields.map((e) => (
          <>
            <div>
              <label for="name">{e.name}</label>
              <input
                type="text"
                id="name"
                value={selectedEntity[e.name]}
                onChange={(event) =>
                  setSelectedEntity({ ...selectedEntity, [e.name]: event.target.value })
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

