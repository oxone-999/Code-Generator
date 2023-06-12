import React, { useEffect } from "react";
import { useParams } from "react-router";
import { json } from "../inputJson";

export const ViewEntity = () => {
  const { entityName } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];
  console.log(json);
  return <>{JSON.stringify(entityJSON)}</>;
};
