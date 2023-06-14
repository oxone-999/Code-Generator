import React from "react";
import { useNavigate } from "react-router";
import { json } from "../inputJson";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";

export const Home = () => {
  console.log(json, json.Entities);
  const navigate = useNavigate();
  return (
    <>
      <h1>List of Entities</h1>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {json.Entities.map((entity) => (
          <>
            <ListItem>
            <ListItemText primary={`${entity.name}`}/>
            <Button variant="contained" color="primary" onClick={() => navigate(`/view/${entity.name}`)}>View {entity.name}</Button>
            </ListItem>
          </>
        ))}
       </List>
    </>
  );
};
