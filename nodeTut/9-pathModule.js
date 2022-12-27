const path = require("path");

console.log(path.sep);

const filePath = path.join("./content", "subfolder", "path.js");
console.log(`filePath: ${filePath}`);

const base = path.basename(filePath);
console.log(`base: ${base}`);

// will show this path
const absolute = path.resolve(__dirname);
console.log(absolute);
