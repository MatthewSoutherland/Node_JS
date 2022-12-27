const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("/about", (req, res) => {
  console.log("user hit about");
  res.status(200).send("about page");
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1> resource not found </h1>`);
});

app.listen(5000, () => {
  console.log("server is listening o port 5000");
});
