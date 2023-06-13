import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import "../styles/AddEntity.css";
import { Stack } from "@mui/material";
import { json } from "../inputJson";

export const AddEntity = () => {
  const { entityName } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];

  const [selectedEntity, setSelectedEntity] = useState({});

  const handleInputChange = (e, target) => {
    const inputType = target.type.toLowerCase();
    const requiredType = e.type.toLowerCase();
    if (inputType !== requiredType) {
      // show alert box at top
      window.alert(inputType + "  " + requiredType);
      // window.alert("input " + requiredType + " is required");
      target.value = "";
      return;
    }
    setSelectedEntity({ ...selectedEntity, [e.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`?tableName=reactTable&entity=${entityName}`, { table: entityName })
      .then((res) => {
        window.location.href = "/";
      });
    console.log(selectedEntity);
  };

  const handleBack = (event) => {
    event.preventDefault();

    window.location.href = "/";
  };

  return (
    <form>
      <div className="addEntity">
        <div>
          <h1 className="addEntityHeader">Add {entityName} Details</h1>
        </div>
        {entityJSON.fields.map((e) => (
          <>
            <div>
              <label for="name">{e.name}</label>
              <input
                type="text"
                id="name"
                value={selectedEntity.name}
                onChange={(event) => handleInputChange(e, event.target)}
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
};
