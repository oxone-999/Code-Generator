import React from "react";
import { useNavigate } from "react-router";
import { json } from "../inputJson";

export const Home = () => {
  console.log(json, json.Entities);
  const navigate = useNavigate();
  return (
    <>
      <ul>
        List of entities
        {json.Entities.map((entity) => (
          <>
            <li className="">{entity.name}</li>
            <button onClick={() => navigate(`/view/${entity.name}`)}>
              View {entity.name}
            </button>
          </>
        ))}
      </ul>
    </>
  );
};
