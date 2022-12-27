// async-await is better way to work with javascript promises.
// need to have a function your awaiting code inside of
// the await keyword in the function tells it,
// to wait for the resolve before running next code.
// use a try-catch block in case code fails.

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response recieved");
    const processResponse = await processRequest(response);
    console.log("processResponse recieved");
  } catch (err) {
    console.log(err);
  }
}

doWork();
