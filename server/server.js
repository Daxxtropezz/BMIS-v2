const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const passwordOptions = ["1234", "@theHouseof25"];

const app = express();
// app.use(cors());

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "@theHouseof25",
//   database: "db_bmis",
// });

// const promisePool = pool.promise();

app.get("/", (request, response) => {
  return response.json("BMIS BACKEND");
});

// app.get("/user_account", async (request, response) => {
//   try {
//     const [rows, fields] = await promisePool.query(
//       "SELECT * FROM user_account"
//     );
//     response.json(rows);
//   } catch (err) {
//     console.error(err);
//     response.status(500).json({ error: "Internal server error" });
//   }
// });

app.listen(7879, () => {
  console.log("the system is now running on port 7879...");
});
