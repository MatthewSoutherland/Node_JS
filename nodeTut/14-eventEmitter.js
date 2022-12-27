const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// .on will listen for event
// you can have as many lisenters on an event is you want.
customEmitter.on("response", () => {
  console.log(`data recieved `);
});

// .emit will emit event
// the strings need to match. here its "response"
// order matters, emit after .on
// you can pass arguments to .emit
customEmitter.emit("response");
