import express from "express";
import { connectDb } from "./db/dbconn.js";
import { getRequest } from "./controllers/getRequest.js";
import { postRequest } from "./controllers/postRequest.js";
import { putRequest } from "./controllers/putRequest.js";
import { deleteRequest } from "./controllers/deleteRequest.js";
import { checkTableExits } from "./middlewares/checkTableExists.js";
import { getSingleEntry } from "./controllers/getSingleEntry.js";
import cors from "cors";
import { initializeDbFromJson } from "./db/initializedDb.js";

const app = express();

// app middlewares
app.use(express.json());
app.use(cors());

// routes
app.post("/api", checkTableExits, postRequest);
//*Usage -  /api?tableName={tableName}, body: {table: {json}}
app.get("/api", checkTableExits, getRequest);
//*Usage - /api?tableName={tableName}
app.get("/api/1", checkTableExits, getSingleEntry);
//*Usage - /api/1/?tableName={tableName}&id={id}

app.put("/api", checkTableExits, putRequest);
//*Usage -  /api?tableName={tableName}, body: {table: {json}}
app.delete("/api", checkTableExits, deleteRequest);
//*Usage - /api/?tableName={tableName}&id={id}

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// connect to the db
console.log("connectiong to the db");
connectDb()
  .then((conn) => {
    console.log("db connection established");
    initializeDbFromJson();
  })
  .catch((er) => {
    console.log("Error connecting db");
  });

// listen to the port
app.listen(5000, (req, res) => {
  console.log("Server is listening to port 5000");
});
