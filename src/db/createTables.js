import pool from './connect.js'
import * as db from './db.js'


const createDefaultTables = async () => {
  try {
    // Read the tables.sql file as buffer
    const buffer = await db.getProducts()
    // Convert buffer to string
    const tablesSQLQuery = buffer.toString();
    // execute query
    await pool.query(tablesSQLQuery);
    console.log(`😁 Default tables are created.`);
  } catch (error) {
    console.log(error);
  }
};

export default createDefaultTables;