// a JS promise has two outcomes, it completes
// or it fails. resolve is used to describes that
// a promise is completed, reject is used to describe
// if a promise fails.
// promises were implemented to replace callback functions.
// instead of nesting callbacks you would just have another .then.

let p = new Promise((resolve, reject) => {
  // what promise is
  let a = 1 + 1;
  // if a = 2 we resolve
  if (a == 2) {
    // you can pass anything in resolve
    resolve("passed");
  }
  // else we reject it
  else {
    // you can pass anything in the reject
    reject("failed");
  }
});

// here is how we interact with promises
// anything in a .then is a resolve
// catch will be called if anything is rejected or fails.
p.then(message => {
  console.log(`This is in the then ${message}`);
}).catch(message => {
  console.log(`This is in the catch ${message}`);
});

// If you have multiple promises, you can use promise.all ex.
// This would run all three promises.

// Promise.all([
//     pOne,
//     pTwo,
//     pThree
// ]).then((message) => {
//     console.log(messages);
// })
