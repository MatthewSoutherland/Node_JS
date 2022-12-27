// Modules

const names = require("./4-names");
const sayHi = require("./5-sayHi");
const more_names = require("./6-moreInfo");

console.log(more_names.singlePerson);
console.log(more_names.items);

sayHi(more_names.singlePerson.name);
sayHi("susan");
sayHi(names.jon);
sayHi(names.peter);
