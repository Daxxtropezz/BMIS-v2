const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json("BMIS v2 BACKEND");
});

app.listen(7879, () => {
  console.log("the system is now running on port 7879...");
});
