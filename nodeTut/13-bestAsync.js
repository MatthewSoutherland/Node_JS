const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./first.txt", "utf8");
    const second = await readFile("./second.txt", "utf8");
    await writeFile("./here.txt", `Results: ${first} ${second}`);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// you want to use a try-catch block with async-await function.
