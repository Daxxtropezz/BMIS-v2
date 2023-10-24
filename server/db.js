const knex = require("knex");
const passwordOptions = ["1234", "@theHouseof25"];
let db = null;
async function connectToDatabase() {
  for (const password of passwordOptions) {
    try {
      db = knex({
        client: "mysql2",
        connection: {
          host: "127.0.0.1",
          port: 3306,
          user: "root",
          password: password,
          database: "db_bmis",
        },
        pool: {
          min: 1, // Minimum number of connections
          max: 100, // Maximum number of connections
        },
      });
      await db.raw("SELECT 'TEST ME'"); // Test the database connection

      // If the connection is successful, break out of the loop
      console.log(`Connection attempt with password ${password} successful.`);
      break;
    } catch (error) {
      console.error(`Connection attempt with password '${password}' failed: `);
      db = null;
    }
  }

  if (!db) {
    console.error(
      "All connection attempts failed. Could not connect to the database."
    );
  }
}

connectToDatabase();

module.exports = (req, res, next) => {
  req.db = db;
  next();
};
