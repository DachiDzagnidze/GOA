import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoFilters = () => {
  const { filter, setFilter, clearTodos, todoCount, completedCount } =
    useTodo();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="filters-container">
      <div className="filters-stats">
        <span>Total: {todoCount}</span>
        <span>Completed: {completedCount}</span>
      </div>

      <div className="filters-group">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
        <button
          className={`filter-btn ${filter === "uncompleted" ? "active" : ""}`}
          onClick={() => handleFilterChange("uncompleted")}
        >
          Active
        </button>
      </div>

      <button className="clear-btn" onClick={clearTodos}>
        Clear All
      </button>
    </div>
  );
};

export default TodoFilters;
