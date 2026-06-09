const http = require("http");
const url = require("url");

let books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" },
];

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = url.parse(req.url).pathname;

  res.setHeader("Content-Type", "application/json");

  // 1 GET all books
  if (method === "GET" && path === "/books") {
    return res.end(JSON.stringify(books));
  }

  // 2 POST new book
  if (method === "POST" && path === "/books") {
    let data = "";

    req.on("data", (chunk) => (data += chunk));

    req.on("end", () => {
      const book = JSON.parse(data);
      books.push(book);

      res.end(JSON.stringify({ message: "added", book }));
    });

    return;
  }

  // 3 PUT update book
  if (method === "PUT" && path.startsWith("/books/")) {
    const id = Number(path.split("/")[2]);
    let data = "";

    req.on("data", (chunk) => (data += chunk));

    req.on("end", () => {
      const newData = JSON.parse(data);

      const book = books.find((b) => b.id === id);

      if (!book) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "not found" }));
      }

      Object.assign(book, newData);

      res.end(JSON.stringify({ message: "updated", book }));
    });

    return;
  }

  // 4 DELETE book
  if (method === "DELETE" && path.startsWith("/books/")) {
    const id = Number(path.split("/")[2]);

    books = books.filter((b) => b.id !== id);

    return res.end(JSON.stringify({ message: "deleted" }));
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ message: "not found" }));
});

server.listen(3000, () => {
  console.log("running on 3000");
});
