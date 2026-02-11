import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Personal");
  const { addTodo, isLoading, error } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, category);
      setText("");
    }
  };

  return (
    <div className="input-container">
      {error && <div className="input-error">{error}</div>}
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="input-field"
          disabled={isLoading}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-select"
          disabled={isLoading}
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
        </select>
        <button type="submit" className="input-button" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
