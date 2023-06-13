import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import { json } from "../inputJson";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EmployeeTable from "../Components/EmployeeTable/EmployeeTable";

export  const ViewEntity = () => {
  
    const { entityName } = useParams();
    const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];
    
    const [entityList, setEntityList] = useState([]);

    useEffect(() => {
      const getEntityList = async () => {
        axios
          .get(`?tableName=reactTable&entity=${entityName}`)
          .then((res) => res.data)
          .then((res) => setEntityList(res))
          .catch((res) => setEntityList([]));
      };
      getEntityList();
    }, []);
    
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
    <EmployeeTable entityList={entityList} entityJSON={entityJSON} />
    </div>
    </>
  );
};

