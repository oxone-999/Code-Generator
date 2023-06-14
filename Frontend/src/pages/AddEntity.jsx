import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import "../styles/AddEntity.css";
import { Stack } from "@mui/material";
import { json } from "../inputJson";
import CustomInput from '../Components/CustomInput/CustomInput';

export const AddEntity = () => {
  const { entityName } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];
  const [selectedEntity, setSelectedEntity] = useState({});

  const handleInputChange = (e, target) => {
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
            <CustomInput e = {e} value = {selectedEntity[e.name]} handleInputChange={handleInputChange}/>
          </>
        ))}
        <Stack direction="row" spacing={2}>
          <button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
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
