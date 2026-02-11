import { useReducer } from "react";
import "./Counter.css";

const initialCounterState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "INCREMENT_BY":
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  return (
    <div className="feature-card">
      <h2>Counter: {state.count}</h2>
      <div className="button-group">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 10 })}>
          +10
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
