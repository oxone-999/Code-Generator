import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import "../styles/AddEntity.css";
import { Stack } from "@mui/material";
import { json } from "../inputJson";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddEntity = () => {
  const { entityName } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];
  const [selectedEntity, setSelectedEntity] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  // const handleDateChange = (e, date) => {
  //   setSelectedDate(date);
  //   setSelectedEntity({ ...selectedEntity, [e.name]: date });
  // };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setSelectedEntity({ ...selectedEntity, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`?tableName=${entityName}`, { table: selectedEntity })
      .then((res) => {
        window.location.href = `/view/${entityName}`;
      });
    console.log(selectedEntity);
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="addEntity">
        <div>
          <h1 className="addEntityHeader">Add {entityName} Details</h1>
        </div>
        {entityJSON.fields.map((e) => (
          <div key={e.name}>
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
                value={selectedEntity.name}
                onChange={(event) => handleInputChange(event)}
                required={e.optional === "N"}
              />
            )}
          </div>
        ))}
        <Stack direction="row" spacing={2}>
          <button className="action-btn" type="submit">
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
