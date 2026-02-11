import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    default:
      return state;
  }
}

export function TodoAdd() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Todo Add</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: input });
          setInput("");
        }}
      >
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
