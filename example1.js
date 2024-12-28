const fs = require("fs");
const start = process.hrtime();
setTimeout(() => {
  console.log("Timer 1 executed");
}, 0);

setTimeout(() => {
  console.log("Timer 2 executed");
}, 0);

setTimeout(() => {
  process.nextTick(() => {
    console.warn("End of Timer phase");
    console.log("-------");
  });
}, 0);

setTimeout(() => {
  console.log("Timer 4 executed");
}, 10);

setTimeout(() => {
  console.log("Timer 5 executed");
}, 10);

setTimeout(() => {
  process.nextTick(() => {
    console.warn("End of Timer phase");
    console.log("-------");
    const diff = process.hrtime(start);
    console.log(`Execution time: ${diff[0]}s ${diff[1] / 1e6}ms`);
  });
}, 10);

fs.readFile(__filename, () => {
  console.log("I/O callback executed");
  process.nextTick(() => {
    console.warn("End of I/O phase");
    console.log("-------");
  });

  setTimeout(() => {
    console.log("Timer 3 executed");
  }, 0);

  setTimeout(() => {
    process.nextTick(() => {
      console.warn("End of Timer phase inside I/O callback");
      console.log("-------");
    });
  }, 0);

  setImmediate(() => {
    console.log("Immediate callback executed, inside I/O callback");
  });
  setImmediate(() => {
    process.nextTick(() => {
      console.warn("End of Check phase inside I/O callback");
      console.log("-------");
    });
  });
});

setImmediate(() => {
  console.log("Immediate callback executed, outside I/O callback");
});

setImmediate(() => {
  process.nextTick(() => {
    console.warn("End of Check phase");
    console.log("-------");
  });
});

process.nextTick(() => {
  console.warn("End of sync code, call stack is empty");
  console.log("-------");
});

console.log("Starting...");
