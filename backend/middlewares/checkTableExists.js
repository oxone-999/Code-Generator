import { conn } from "./../db/dbconn.js";
export const checkTableExits = async (req, res, next) => {
  try {
    const tableName = req.query.tableName;
    const query = `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = '${tableName}'`;

    const rows = await conn.query(query);

    if (rows.length > 0) {
      console.log(`Table '${tableName}' exists.`);
      next();
    } else {
      console.log(`Table '${tableName}' does not exist.`);
      res.status(400).json({ message: `Table '${tableName}' does not exist.` });
    }
  } catch (er) {
    res.status(500).json({ message: er.message });
  }
};
