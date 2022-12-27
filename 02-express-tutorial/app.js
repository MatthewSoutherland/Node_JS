const http = require("http");

// server takes a call back which is invoked everytime the user makes a request
const server = http.createServer((req, res) => {
  const { readFileSync } = require("fs");

  // get all files
  const homePage = readFileSync("./index.html");

  const url = req.url;

  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1> About page </h1>`);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Shit</h1>`);
    res.end();
  }
});

server.listen(5000);
