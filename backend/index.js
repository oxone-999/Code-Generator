import express from 'express';
import { connectDb } from './db/dbconn.js';
import { getRequest } from './controllers/getRequest.js';
import { postRequest } from './controllers/postRequest.js';
import { putRequest } from './controllers/putRequest.js';
import { deleteRequest } from './controllers/deleteRequest.js';
import { checkTableExits } from './middlewares/checkTableExists.js';

const app = express();

// routes
app.get('/api/:tableName', checkTableExits, getRequest);
app.post('/api/:tableName',checkTableExits, postRequest);
app.put('/api/:tableName', checkTableExits, putRequest);
app.delete('/api/:tableName', checkTableExits, deleteRequest);

// connect to the db 
console.log("connectiong to the db")
connectDb().then(conn=> {
    console.log("db connection established");
})
.catch(er=>{
    console.log("Error connecting db");
});

// listen to the port
app.listen(5000, (req, res)=>{
    console.log("Server is listening to port 5000");
})