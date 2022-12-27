const http = require("http");

// http.createServer takes two parameters in a callback function
// Both parameters are objects.
// The standard naming conventions is req, res. Request and Response.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
    <h3>Welcome to my home page!</h3>
    <a href="/about">About Page</a>
    `);
  }
  if (req.url === "./about") {
    res.end("Here is history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p> We can't seen to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `);
});

server.listen(5000);
