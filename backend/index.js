import express from "express";
import { connectDb } from "./db/dbconn.js";
import { getRequest } from "./controllers/getRequest.js";
import { postRequest } from "./controllers/postRequest.js";
import { putRequest } from "./controllers/putRequest.js";
import { deleteRequest } from "./controllers/deleteRequest.js";
import { checkTableExits } from "./middlewares/checkTableExists.js";
import { createTableIfNotExits } from "./middlewares/createTableIfNotExists.js";
import { getSingleEntry } from "./controllers/getSingleEntry.js";

const app = express();

// app middlewares
app.use(express.json());

// routes
app.post("/api", createTableIfNotExits, postRequest);

app.get("/api", checkTableExits, getRequest);
app.get("/api/1", checkTableExits, getSingleEntry);

app.put("/api", checkTableExits, putRequest);
app.delete("/api", checkTableExits, deleteRequest);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// connect to the db
console.log("connectiong to the db");
connectDb()
  .then((conn) => {
    console.log("db connection established");
  })
  .catch((er) => {
    console.log("Error connecting db");
  });

// listen to the port
app.listen(5000, (req, res) => {
  console.log("Server is listening to port 5000");
});
