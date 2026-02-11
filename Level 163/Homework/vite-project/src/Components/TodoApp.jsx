import { useReducer, useState } from "react";
import "./TodoApp.css";

const initialTodoState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD", payload: text });
      setText("");
    }
  };

  return (
    <div className="feature-card">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          >
            <span className="todo-text">{todo.text}</span>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "DELETE", payload: todo.id });
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p className="empty-state">No tasks yet!</p>}
    </div>
  );
}
