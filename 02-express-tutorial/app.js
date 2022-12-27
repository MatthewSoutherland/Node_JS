const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit that shit");
  res.send("Home Page");
});

app.listen(5000, () => {
  console.log("server is listening o port 5000");
});
