import { conn } from "../db/dbconn.js";
import { jsonBigIntParser } from "../utils/jsonBigIntParser.js";

export const getRequest = async (req, res) => {
  try {
    let tableName = req.query.tableName;
    await conn.query("USE code_generator;");
    let query = ` SELECT * FROM ${tableName}`;

    let rows = await conn.query(query);
    console.log("====================================");
    console.log(rows);
    console.log("====================================");
    res.status(200).json(jsonBigIntParser(rows));
  } catch (er) {
    res.status(500).json({ message: er.message });
  }
};
