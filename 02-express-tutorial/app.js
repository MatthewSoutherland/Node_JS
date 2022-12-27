const http = require("http");

// server takes a call back which is invoked everytime the user makes a request
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("home page");
});

server.listen(5000);
