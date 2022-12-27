// syncronis approach
const { readFileSync, writeFileSync, read } = require("fs");

// readFileSync requires two parameters
// path to file
// encode
const first = readFileSync("./first.txt", "utf8");

console.log(first);

// writeFileSync requires two parameters
// path
// what we want to pass
writeFileSync("./second.txt", `Here is the result ${first}`);

// If file is not there node will write one
// If file exists, node will overwrite file.

// it can take a third argument which is an object
// here is an example with an append flag
writeFileSync("./third.txt", `Here is result ${first}`, { flag: "a" });
