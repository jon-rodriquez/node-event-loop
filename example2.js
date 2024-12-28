
const fs = require('fs');

// Timer with 0 ms delay
setTimeout(() => {
  console.log("Timer with 0 ms delay executed");
}, 0);

// I/O task (read file)
fs.readFile(__filename, () => {
  console.log("I/O callback executed");

  // Timer with 2 ms delay set inside I/O callback
  setTimeout(() => {
    console.log("Timer with 2 ms delay executed");
  }, 2);
});

// Second Timer with 2 ms delay
setTimeout(() => {
  console.log("Second Timer with 2 ms delay executed");
}, 6);

console.log("Starting...");
