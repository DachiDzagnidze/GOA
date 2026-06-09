const os = require("os");

// 1
console.log("OS Name:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

// 2
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

// 3
console.log("Uptime:", os.uptime(), "seconds");

// 4
const cpus = os.cpus();

console.log("CPU Count:", cpus.length);

cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}: ${cpu.model}`);
});

// 5
console.log("Home Directory:", os.homedir());
console.log("Computer Name:", os.hostname());

// 6
console.log("PID:", process.pid);
console.log("Platform:", process.platform);
console.log("Node Version:", process.version);

// 7
const name = process.argv[2];

if (name) {
  console.log(`Hello, ${name}`);
}

// 8
console.log("process.cwd():", process.cwd());
console.log("__dirname:", __dirname);

// 9
setTimeout(() => {
  console.log("3 seconds passed!");

  // 10
  const interval = setInterval(() => {
    console.log("Program running...");
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    process.exit();
  }, 5000);
}, 3000);