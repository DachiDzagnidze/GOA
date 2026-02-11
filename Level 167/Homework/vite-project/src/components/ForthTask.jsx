import React, { useReducer } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 2500,
    category: "Electronics",
    rating: 4.7,
    stock: 10,
  },
  {
    id: 2,
    name: "Headphones",
    price: 300,
    category: "Electronics",
    rating: 4.3,
    stock: 25,
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 50,
    category: "Clothing",
    rating: 4.0,
    stock: 50,
  },
  {
    id: 4,
    name: "Sneakers",
    price: 200,
    category: "Clothing",
    rating: 4.5,
    stock: 0,
  },
  {
    id: 5,
    name: "Coffee Mug",
    price: 25,
    category: "Home",
    rating: 4.2,
    stock: 100,
  },
  {
    id: 6,
    name: "Backpack",
    price: 120,
    category: "Accessories",
    rating: 4.6,
    stock: 15,
  },
  {
    id: 7,
    name: "Smartphone",
    price: 1800,
    category: "Electronics",
    rating: 4.8,
    stock: 5,
  },
  {
    id: 8,
    name: "Notebook",
    price: 15,
    category: "Stationery",
    rating: 4.1,
    stock: 200,
  },
];

const initialState = {
  productsList: products,
};

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function ForthTask() {
  const [state] = useReducer(reducer, initialState);

  return (
    <div className="task-container">
      <h1>Task 4: Product List</h1>
      {state.productsList.map((p) => (
        <div key={p.id} className="item-card">
          <h3>{p.name}</h3>
          <p>Price: ${p.price}</p>
          <p>Category: {p.category}</p>
          <p>Rating: {p.rating}</p>
          <p>
            Stock:{" "}
            <span
              className={
                p.stock === 0 ? "item-status out-of-stock" : "item-status"
              }
            >
              {p.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
