import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "delete":
      return state.filter((task) => task.id !== action.payload);
    case "toggle":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
}

export function TodoFull() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Todo Full</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => {
        dispatch({ type: "add", payload: input });
        setInput("");
      }}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => dispatch({ type: "toggle", payload: task.id })}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "delete", payload: task.id });
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
