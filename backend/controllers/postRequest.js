import { conn } from "../db/dbconn.js";

export const postRequest = async (req, res) => {
  try {
    let tableName = req.query.tableName;
    let table = req.body.table;
    let cols = "";
    let vals = "";
    Object.keys(table).forEach((key) => {
      cols += `${key}, `;
      vals += `'${table[key]}', `;
    });
    if (cols.length > 0) {
      cols = cols.slice(0, -2);
    }
    if (vals.length > 0) {
      vals = vals.slice(0, -2);
    }
    await conn.query("USE code_generator;");
    let query = `INSERT INTO ${tableName} ( ${cols} ) VALUES ( ${vals} )`;
    await conn.query(query);

    let rows = await conn.query(`SELECT * FROM ${tableName}`);
    res.status(200).json(rows);
  } catch (er) {
    console.log(er);
    res.status(500).json({ message: er.message });
  }
};
