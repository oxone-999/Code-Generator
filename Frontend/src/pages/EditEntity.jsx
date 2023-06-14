import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../styles/EditEntity.css";
import { Stack } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router";
import { json } from "../inputJson";

export const EditEntity = () => {
  const { entityName, id } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];

  const [selectedEntity, setSelectedEntity] = useState({});

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setSelectedEntity({ ...selectedEntity, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedEntity);
    axios
      .put(`?tableName=${entityName}&id=${id}`, { table: selectedEntity })
      .then((res) => {
        window.location.href = `/view/${entityName}`;
      });
  };

  const handleBack = (event) => {
    event.preventDefault();

    window.location.href = `/view/${entityName}`;
  };

  const fetchInputTypeFromJSON = (inputType) => {
    switch (inputType) {
      case "INTEGER":
        return "number";
      case "TEXT":
        return "text";
      case "DATE":
        return "date";
      case "DOUBLE":
        return "number";
      case "BOOLEAN":
        return "checkbox";
      default:
        break;
    }
  };

  useEffect(() => {
    axios
      .get(`1/?tableName=${entityName}&id=${id}`)
      .then((res) => res.data)
      .then((res) => {
        let entityRow = res[0];
        for (const field of entityJSON.fields) {
          if (field.type.toLowerCase() === "date") {
            entityRow = {
              ...entityRow,
              [field.name]: entityRow[field.name]?.split("T")[0],
            };
          }
        }
        setSelectedEntity(entityRow);
      });
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="editEntity">
        <div>
          <h1 className="editEntityHeader">Edit {entityName} Details</h1>
        </div>
        {entityJSON.fields.map((e) => (
          <>
            <div>
              <label for="name">{e.name}</label>
              {e.optional === "N" && <p className="required-label">Required</p>}
              {e.type.toLowerCase() !== "double" ? (
                <input
                  type={fetchInputTypeFromJSON(e.type)}
                  id={e.name}
                  name={e.name}
                  value={selectedEntity[e.name]}
                  onChange={(event) => handleInputChange(event)}
                  required={e.optional === "N"}
                />
              ) : (
                <input
                  type="number"
                  step="any"
                  id={e.name}
                  name={e.name}
                  value={selectedEntity[e.name]}
                  onChange={(event) => handleInputChange(event)}
                  required={e.optional === "N"}
                />
              )}
            </div>
          </>
        ))}
        <Stack direction="row" spacing={2}>
          <button type="submit" className="action-btn">
            SAVE
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
