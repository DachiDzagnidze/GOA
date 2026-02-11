import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

export function SimpleCounter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>+1</button>
      <button onClick={() => dispatch({ type: "dec" })}>-1</button>
    </div>
  );
}
