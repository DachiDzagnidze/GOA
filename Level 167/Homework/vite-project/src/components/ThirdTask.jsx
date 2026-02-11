import React, { useReducer } from "react";

const products = [
  { id: 1, name: "Laptop", price: 2500 },
  { id: 2, name: "Headphones", price: 300 },
  { id: 3, name: "T-Shirt", price: 50 },
  { id: 4, name: "Sneakers", price: 200 },
  { id: 5, name: "Coffee Mug", price: 25 },
];

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

export default function ThirdTask() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="task-container">
      <h1>Task 3: Shopping Cart</h1>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} className="item-card">
          <b>{p.name}</b> - ${p.price}{" "}
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: p })}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {state.cart.length === 0 && <p>Cart is empty</p>}
      {state.cart.map((item) => (
        <div
          key={item.id}
          className="item-card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {item.name} - ${item.price} x {item.quantity} ={" "}
            <b>${item.price * item.quantity}</b>
          </span>
          <div>
            <button
              onClick={() =>
                dispatch({ type: "INCREASE_QTY", payload: item.id })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                dispatch({ type: "DECREASE_QTY", payload: item.id })
              }
            >
              -
            </button>
            <button
              style={{ backgroundColor: "#e74c3c" }}
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {state.cart.length > 0 && (
        <div className="controls" style={{ justifyContent: "space-between" }}>
          <h3>Total: ${totalPrice}</h3>
          <button
            style={{ backgroundColor: "#e74c3c" }}
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
