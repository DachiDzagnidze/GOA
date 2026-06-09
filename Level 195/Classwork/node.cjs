
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello!");
});

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});