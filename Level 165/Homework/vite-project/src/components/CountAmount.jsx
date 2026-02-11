import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state + action.payload;
    default:
      return state;
  }
}

export function CustomCounter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Custom Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "add", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "add", payload: 10 })}>
        +10
      </button>
    </div>
  );
}
