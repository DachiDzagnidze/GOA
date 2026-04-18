import React, { useMemo, useState } from "react";

export default function App() {
  // 1) Password
  const [password, setPassword] = useState("");

  const passwordInfo = useMemo(() => {
    return {
      length: password.length,
      moreThan8: password.length > 8,
      hasNumber: /\d/.test(password),
    };
  }, [password]);

  // 2) Products search
  const [search, setSearch] = useState("");

  const products = [
    { name: "Apple", price: 2, category: "food" },
    { name: "Banana", price: 1, category: "food" },
    { name: "Laptop", price: 1200, category: "tech" },
    { name: "Headphones", price: 150, category: "tech" },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // 3) Cart
  const cart = [
    { name: "Apple", price: 2, qty: 3 },
    { name: "Laptop", price: 1200, qty: 1 },
    { name: "Banana", price: 1, qty: 5 },
  ];

  const cartInfo = useMemo(() => {
    let totalPrice = 0;
    let totalQty = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.qty;
      totalQty += item.qty;
    });

    return { totalPrice, totalQty };
  }, []);

  // 4) Students
  const students = [
    { name: "Dachi", score: 90 },
    { name: "Luka", score: 45 },
    { name: "Nino", score: 70 },
    { name: "Gio", score: 30 },
  ];

  const passedStudents = useMemo(() => {
    return students.filter((s) => s.score > 51);
  }, []);

  const passedCount = passedStudents.length;

  // 5) Todos
  const todos = [
    { title: "Learn React", priority: "high" },
    { title: "Gym", priority: "medium" },
    { title: "Homework", priority: "high" },
    { title: "Game", priority: "low" },
  ];

  const highTodos = useMemo(() => {
    return todos.filter((t) => t.priority === "high");
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* 1 Password */}
      <h2>Password Checker</h2>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <p>Length: {passwordInfo.length}</p>
      <p>More than 8: {passwordInfo.moreThan8 ? "Yes" : "No"}</p>
      <p>Has number: {passwordInfo.hasNumber ? "Yes" : "No"}</p>

      <hr />

      {/* 2 Products */}
      <h2>Search Products</h2>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search product"
      />
      <ul>
        {filteredProducts.map((p, i) => (
          <li key={i}>
            {p.name} - ${p.price} ({p.category})
          </li>
        ))}
      </ul>

      <hr />

      {/* 3 Cart */}
      <h2>Cart</h2>
      <p>Total price: {cartInfo.totalPrice}</p>
      <p>Total quantity: {cartInfo.totalQty}</p>

      <hr />

      {/* 4 Students */}
      <h2>Students Passed</h2>
      <p>Passed count: {passedCount}</p>
      <ul>
        {passedStudents.map((s, i) => (
          <li key={i}>
            {s.name} - {s.score}
          </li>
        ))}
      </ul>

      <hr />

      {/* 5 Todos */}
      <h2>High Priority Todos</h2>
      <ul>
        {highTodos.map((t, i) => (
          <li key={i}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
