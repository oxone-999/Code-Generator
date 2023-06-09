import { conn } from "../db/dbconn.js";
import { jsonBigIntParser } from "../utils/jsonBigIntParser.js";

export const getSingleEntry = async (req, res) => {
  try {
    let tableName = req.query.tableName;
    let id = req.query.id;
    await conn.query("USE code_generator;");
    let query = ` SELECT * FROM ${tableName} WHERE id = ${id}`;

    let rows = await conn.query(query);
    console.log("====================================");
    console.log(rows);
    console.log("====================================");
    res.status(200).json(jsonBigIntParser(rows));
  } catch (er) {
    console.log(er);
    res.status(500).json({ message: er.message });
  }
};
