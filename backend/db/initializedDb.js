import { conn } from "./dbconn.js";
import { json } from "../inputJson.js";
const inputJson = JSON.parse(json);

const checkIfTableExists = async (tableName) => {
  try {
    // check if table exists
    const query = `
   SELECT * FROM information_schema.tables WHERE table_schema = 'code_generator' AND table_name = '${tableName}';
   `;
    const rows = await conn.query(query);

    if (rows.length > 0) {
      // table exists
      console.log(`Table '${tableName}' already exists.`);
      return true;
    }
    return false;
  } catch (er) {
    console.log("Error checking table exists or not", er);
    return false;
  }
};
async function createQueryForFields(entity) {
  /*
  Entity structure:
    {
      name: table name,
      fields: [
        {
          name: name of the field,
          type: CAN BE (INTEGER, TEXT, DATE, DOUBLE, BOOLEAN),
          size: Varies from 5-20,
          unique: field is unique or not,
          prim_key: primary key or not,
          optional: optional or not
        }
      ]
    }
  */
  const tableName = entity.name;

  // creating query for each field
  let fieldQuery = "";

  for (const field of entity.fields) {
    const { name, type, size, unique, prim_key, optional } = field;
    // let primary_key = prim_key === "Y" ? "PRIMARY KEY" : "";
    let type_unique = unique === "Y" || prim_key === "Y" ? "UNIQUE" : "";
    let type_optional = optional === "Y" ? "" : "NOT NULL";
    let datatype = "";
    switch (type) {
      case "INTEGER":
        if (size > 10) {
          datatype = "INT";
        } else {
          datatype = "BIGINT";
        }
        break;
      case "TEXT":
        if (size < 255) {
          datatype = "VARCHAR(255)";
        } else {
          datatype = "TEXT";
        }
        break;
      case "DATE":
        datatype = "DATE";
        break;
      case "DOUBLE":
        if (size < 38) {
          datatype = "FLOAT";
        } else {
          datatype = "DOUBLE";
        }
        break;
      case "BOOLEAN":
        datatype = "BOOLEAN";
        break;
      default:
        break;
    }

    fieldQuery += `${name} ${datatype} ${type_optional} ${type_unique}`;
    fieldQuery += ", ";
  }

  if (fieldQuery.length > 0) fieldQuery = fieldQuery.slice(0, -2);

  return fieldQuery;
}

export async function initializeDbFromJson() {
  try {
    // 1 --> Create the database if it doesnot exist
    await conn.query("CREATE DATABASE IF NOT EXISTS code_generator");

    // 2 --> Create tables from inputJSON by the user
    // extract entities
    const entities = inputJson.Entities;

    // create table for each entity
    for (const entity of entities) {
      if (await checkIfTableExists(entity.name)) continue;
      let fieldQuery = await createQueryForFields(entity);
      // create
      await conn.query("USE code_generator;");
      await conn.query(
        `CREATE TABLE ${entity.name} (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, ${fieldQuery})`
      );
      console.log(`${entity.name} created successfully`);
    }

    console.log(`All Tables created successfully`);
  } catch (er) {
    console.log("Error initializing db from JSON", er);
  }
}
