import React, { useReducer } from "react";

// Productebi
const products = [
  { id: 1, name: "Laptop", price: 2500, category: "Electronics", stock: 10 },
  { id: 2, name: "Headphones", price: 300, category: "Electronics", stock: 25 },
  { id: 3, name: "T-Shirt", price: 50, category: "Clothing", stock: 50 },
  { id: 4, name: "Sneakers", price: 200, category: "Clothing", stock: 0 },
  { id: 5, name: "Coffee Mug", price: 25, category: "Home", stock: 100 },
  { id: 6, name: "Backpack", price: 120, category: "Accessories", stock: 15 },
  { id: 7, name: "Smartphone", price: 1800, category: "Electronics", stock: 5 },
  { id: 8, name: "Notebook", price: 15, category: "Stationery", stock: 200 },
];

const initialState = {
  filteredProducts: products,
  category: "All",
  inStock: false,
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "FILTER_CATEGORY":
      const newCategory = action.value;
      const filteredByCategory = products.filter((product) => {
        // categoryis shemowmeba
        if (newCategory !== "All" && product.category !== newCategory) {
          return false;
        }
        // stockis shemowmeba
        if (state.inStock && product.stock === 0) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        category: newCategory,
        filteredProducts: filteredByCategory,
      };

    case "FILTER_IN_STOCK":
      const newInStock = action.value;
      const filteredByStock = products.filter((product) => {
        // categorys shemowmeba
        if (state.category !== "All" && product.category !== state.category) {
          return false;
        }
        // stockis shemowmeba
        if (newInStock && product.stock === 0) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        inStock: newInStock,
        filteredProducts: filteredByStock,
      };

    default:
      return state;
  }
}

export default function FirstTask() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="task-container">
      <h1>Task 1: Products Filter</h1>

      <div className="controls">
        <select
          value={state.category}
          onChange={(e) =>
            dispatch({ type: "FILTER_CATEGORY", value: e.target.value })
          }
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
          <option value="Accessories">Accessories</option>
          <option value="Stationery">Stationery</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={state.inStock}
            onChange={(e) =>
              dispatch({ type: "FILTER_IN_STOCK", value: e.target.checked })
            }
          />{" "}
          In Stock Only
        </label>
      </div>

      {state.filteredProducts.map((p) => (
        <div key={p.id} className="item-card">
          <b>{p.name}</b> - ${p.price} <br />
          Category: {p.category} <br />
          Stock:{" "}
          <span
            className={`item-status ${p.stock === 0 ? "out-of-stock" : ""}`}
          >
            {p.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      ))}
    </div>
  );
}
