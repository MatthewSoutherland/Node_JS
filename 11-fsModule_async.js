// asyncronis approach
const { readFile, writeFile } = require("fs");

// async needs a callback function

// takes three parameters
// path
// encode
// callback function
readFile("./first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  // assign results to a variable so you can access
  // inside successful callback do more work
  const first = result;
  readFile("./second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // assign results to a variable
    // inside nested successful callback do more work
    const second = result;
    writeFile(
      "./fourth.txt",
      `Here is the result : ${first}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // third nested callback, known as callback hell.
        console.log(result);
      }
    );
  });
});
