const http = require("http");
const url = require("url");

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Anna" }
];

let products = [];
let posts = [
  { id: 1, title: "Hello world" },
  { id: 2, title: "Second post" }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;

  res.setHeader("Content-Type", "application/json");

  // 1
  if (method === "GET" && path === "/users") {
    return res.end(JSON.stringify(users));
  }

  // 2
  if (method === "POST" && path === "/products") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const newProduct = JSON.parse(body);
      products.push(newProduct);

      res.statusCode = 201;
      res.end(JSON.stringify({
        message: "Product created",
        product: newProduct
      }));
    });

    return;
  }

  // 3
  if (method === "PUT" && path.startsWith("/users/")) {
    const id = Number(path.split("/")[2]);
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const updatedData = JSON.parse(body);

      const index = users.findIndex(u => u.id === id);

      if (index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "User not found" }));
      }

      users[index] = { ...users[index], ...updatedData };

      res.end(JSON.stringify({
        message: "User updated",
        user: users[index]
      }));
    });

    return;
  }

  // 4
  if (method === "DELETE" && path.startsWith("/posts/")) {
    const id = Number(path.split("/")[2]);

    const exists = posts.some(p => p.id === id);

    if (!exists) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ message: "Post not found" }));
    }

    posts = posts.filter(p => p.id !== id);

    return res.end(JSON.stringify({
      message: "Post deleted"
    }));
  }

  // 5
  res.statusCode = 404;
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});