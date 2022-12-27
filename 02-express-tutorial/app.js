const http = require("http");

// server takes a call back which is invoked everytime the user makes a request
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`<h1>home page</h1>`);
  res.end();
});

server.listen(5000);
