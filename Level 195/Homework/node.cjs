// 1) რა არის HTTP?

// HTTP (HyperText Transfer Protocol)
// არის პროტოკოლი, რომლის საშუალებითაც
// ბრაუზერი და სერვერი ურთიერთობენ.

// ---------------------------------------------

// 2) განსხვავება request და response შორის

// HTTP Request ->
// ბრაუზერი აგზავნის მოთხოვნას სერვერზე

const requestExample = "GET /users";

// HTTP Response ->
// სერვერი აბრუნებს პასუხს

const responseExample = "200 OK";

// ---------------------------------------------

// 3) HTTP მეთოდები

// GET -> მონაცემების მიღება
// POST -> ახალი მონაცემის დამატება
// PUT -> მონაცემის შეცვლა
// DELETE -> მონაცემის წაშლა

// მაგალითები:

const getMethod = "GET /books";
const postMethod = "POST /books";
const putMethod = "PUT /books/1";
const deleteMethod = "DELETE /books/1";

// ---------------------------------------------

// 4) წიგნების საიტის მაგალითი

// წიგნების წამოღება
const getBooks = "GET";

// ახალი წიგნის დამატება
const addBook = "POST";

// წიგნის შეცვლა
const updateBook = "PUT";

// წიგნის წაშლა
const removeBook = "DELETE";

// ---------------------------------------------

// 5) POST request fetch-ით

const user = {
  name: "Dachi",
  age: 16,
  profession: "Web Developer"
};

fetch("https://example.com/users", {
  method: "POST",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify(user)
})
.then((response) => response.json())
.then((data) => {
  console.log("Success:", data);
})
.catch((error) => {
  console.log("Error:", error);
});