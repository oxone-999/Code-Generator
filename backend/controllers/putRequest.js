import { conn } from "../db/dbconn.js";

export const putRequest = async (req, res) => {
  try {
    let tableName = req.query.tableName;
    let id = req.query.id;

    let table = req.body.table;

    let queryString = "";

    Object.keys(table).forEach((key) => {
      console.log("start", req.body);
      queryString += `${key} = '${table[key]}', `;
    });
    if (queryString) {
      queryString = queryString.slice(0, -2);
    }

    await conn.query("USE code_generator;");
    let query = `UPDATE ${tableName} SET ${queryString} WHERE id = ${id};`;

    let rows = await conn.query(query);
    console.log("====================================");
    console.log(rows);
    console.log("====================================");
    res.status(200).json({ status: rows.affectedRows > 0 });
  } catch (er) {
    console.log(er);
    res.status(500).json({ message: er.message });
  }
};
