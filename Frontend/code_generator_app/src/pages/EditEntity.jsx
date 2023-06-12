import React from "react";
import { json, useParams } from "react-router";

export const EditEntity = () => {
  const { entityName } = useParams();
  const entityJSON = json.Entities.filter((e) => e.name === entityName)[0];
  return <div>EditEntity</div>;
};
