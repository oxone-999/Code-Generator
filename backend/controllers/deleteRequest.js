import { conn } from "../db/dbconn.js";

export const deleteRequest = async (req, res) => {
  try {
    let tableName = req.query.tableName;
    let id = req.query.id;
    await conn.query("USE code_generator;");
    let query = `DELETE FROM ${tableName} WHERE id = ${id}`;

    let deleted = await conn.query(query);

    res
      .status(200)
      .json({ deleted: deleted.affectedRows === 0 ? false : true });
  } catch (er) {
    res.status(500).json({ message: er.message });
  }
};
