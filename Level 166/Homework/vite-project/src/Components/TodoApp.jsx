import React, { useEffect } from "react";
import { useTodo } from "../context/TodoContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

const TodoApp = () => {
  // Just pulling context to check initial load or similar if needed
  const { todoCount } = useTodo();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Todo App</h1>
        <span className="app-count-badge">{todoCount}</span>
      </header>

      <TodoInput />

      <div className="app-content">
        <TodoList />
      </div>

      <footer className="app-footer">
        <TodoFilters />
      </footer>
    </div>
  );
};

export default TodoApp;
