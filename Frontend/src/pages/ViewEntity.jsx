import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { json } from "../inputJson";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EntityTable from "../Components/EntityTable/EntityTable";
import { toast } from "react-hot-toast";

export const ViewEntity = () => {
  const { entityName } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];

  const [entityList, setEntityList] = useState([]);

  useEffect(() => {
    const getEntityList = async () => {
      toast.promise(axios.get(`?tableName=${entityName}`), {
        loading: `Fetching ${entityName} List`,
        success: (res) => {
          res = res.data;
          console.log(res);
          setEntityList(res);
          return `${entityName} List Fetched`;
        },
        error: (err) => `${err} occured while fetching ${entityName} List`,
      });
    };
    getEntityList();
  }, [entityName]);

  const handleAddEntity = () => {
    window.location.href = `/add/${entityName}`;
  };

  return (
    <>
      <div className="Home">
        <h1>{entityName} Management Software</h1>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={handleAddEntity}>
            Add {entityName}
          </Button>
        </Stack>
        <EntityTable entityList={entityList} entityJSON={entityJSON} />
      </div>
    </>
  );
};
