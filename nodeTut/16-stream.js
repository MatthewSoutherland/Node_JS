const { createReadStream } = require("fs");

const stream = createReadStream("./big.txt");

// default 64kb
// last buffer -remainder
// highWaterMark - control size
// const stream = createReadStream('./big.txt', {highWaterMark: 9000 })
// const stream = createReadStream('./big.txt', {encoding" 'utf8' })

stream.on("data", result => {
  console.log(result);
});

stream.on("error", err => console.log(err));
