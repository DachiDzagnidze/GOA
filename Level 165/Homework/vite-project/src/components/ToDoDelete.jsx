import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "delete":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}

export function TodoDelete() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Todo Delete</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => {
        dispatch({ type: "add", payload: input });
        setInput("");
      }}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch({ type: "delete", payload: task.id })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
