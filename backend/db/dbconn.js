import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "206011",
  connectionLimit: 5,
});
let conn;
async function connectDb() {
  conn = await pool.getConnection();
}

export { connectDb, conn };
