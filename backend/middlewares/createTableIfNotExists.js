import { conn } from "./../db/dbconn.js";
export const createTableIfNotExits = async (req, res, next) => {
  try {
    const tableName = req.query.tableName;
    // create database if not exists
    await conn.query("CREATE DATABASE IF NOT EXISTS code_generator");

    // check if table exists
    const query = `
    SELECT * FROM information_schema.tables WHERE table_schema = 'code_generator' AND table_name = '${tableName}';
    `;
    const rows = await conn.query(query);
    console.log(query, rows);

    if (rows.length > 0) {
      // table exists
      console.log(`Table '${tableName}' exists.`);
      next();
    } else {
      // table doen't exist
      // create a new table
      console.log(`Table '${tableName}' does not exist.`);
      let table = req.body.table;
      let queryString = "";
      Object.keys(table).forEach((key) => {
        queryString += `${key} VARCHAR(255), `;
      });
      const query = `USE code_generator; CREATE TABLE ${tableName} (id INT NOT NULL AUTO_INCREMENT, ${queryString} PRIMARY KEY (id))`;
      console.log(queryString, query);
      await conn.query(query);
      console.log("Table created");
      next();
    }
  } catch (er) {
    // console.log(er);
    res.status(500).json({ message: er.message });
  }
};
