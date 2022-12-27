var http = require("http");
var fs = require("fs");

// in network trafic Transfer-Encoding will be chunked
// instead of loading the way that is commented out.

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream("./big.txt", "utf8");
    fileStream.on("open", () => {
      // .pipe pushes from readStream into writeStream
      fileStream.pipe(res);
    });
    fileStream.on("error", err => {
      res.end(err);
    });
  })
  .listen(5000);
