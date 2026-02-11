import React, { useReducer, useState } from "react";

const initialProducts = [
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
  products: initialProducts,
  filteredProducts: initialProducts,
  category: "All",
  inStock: false,
  priceRange: "All",
  search: "",
};

function filterProducts(state) {
  return state.products.filter((p) => {
    if (state.category !== "All" && p.category !== state.category) return false;
    if (state.inStock && p.stock === 0) return false;
    if (state.priceRange === "0-100" && p.price > 100) return false;
    if (state.priceRange === "100-500" && (p.price < 100 || p.price > 500))
      return false;
    if (state.priceRange === "500+" && p.price <= 500) return false;
    if (
      state.search &&
      !p.name.toLowerCase().includes(state.search.toLowerCase())
    )
      return false;
    return true;
  });
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const newProducts = [...state.products, action.payload];
      return { ...state, products: newProducts, filteredProducts: newProducts };
    case "DELETE_PRODUCT":
      const afterDelete = state.products.filter((p) => p.id !== action.payload);
      return { ...state, products: afterDelete, filteredProducts: afterDelete };
    case "TOGGLE_STOCK":
      const toggled = state.products.map((p) =>
        p.id === action.payload ? { ...p, stock: p.stock === 0 ? 10 : 0 } : p,
      );
      return { ...state, products: toggled, filteredProducts: toggled };
    case "FILTER_CATEGORY":
      return {
        ...state,
        category: action.value,
        filteredProducts: filterProducts({ ...state, category: action.value }),
      };
    case "FILTER_IN_STOCK":
      return {
        ...state,
        inStock: action.value,
        filteredProducts: filterProducts({ ...state, inStock: action.value }),
      };
    case "FILTER_PRICE":
      return {
        ...state,
        priceRange: action.value,
        filteredProducts: filterProducts({
          ...state,
          priceRange: action.value,
        }),
      };
    case "SEARCH":
      return {
        ...state,
        search: action.value,
        filteredProducts: filterProducts({ ...state, search: action.value }),
      };
    default:
      return state;
  }
}

export default function SecondTask() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: 10,
  });

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) return;
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        ...newProduct,
        id: Date.now(),
        price: Number(newProduct.price),
      },
    });
    setNewProduct({ name: "", price: "", category: "", stock: 10 });
  };

  return (
    <div className="task-container">
      <h1>Task 2: Product Manager</h1>

      <div className="controls">
        <input
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          placeholder="Price"
          type="number"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>

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

        <select
          value={state.priceRange}
          onChange={(e) =>
            dispatch({ type: "FILTER_PRICE", value: e.target.value })
          }
        >
          <option value="All">All Prices</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500+">$500+</option>
        </select>

        <input
          placeholder="Search..."
          value={state.search}
          onChange={(e) => dispatch({ type: "SEARCH", value: e.target.value })}
        />
      </div>

      {state.filteredProducts.map((p) => (
        <div key={p.id} className="item-card">
          <b>{p.name}</b> - ${p.price} <br />
          Category: {p.category} <br />
          Stock:{" "}
          <span
            className={
              p.stock === 0 ? "item-status out-of-stock" : "item-status"
            }
          >
            {p.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>{" "}
          <button
            onClick={() => dispatch({ type: "TOGGLE_STOCK", payload: p.id })}
          >
            Toggle Stock
          </button>{" "}
          <button
            style={{ backgroundColor: "#e74c3c" }}
            onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: p.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
