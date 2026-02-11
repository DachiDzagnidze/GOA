import React from "react";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filteredTodos, isLoading } = useTodo();

  if (isLoading) {
    return <div className="list-loading">Loading tasks...</div>;
  }

  if (filteredTodos.length === 0) {
    return <div className="list-empty">No todos to display.</div>;
  }

  return (
    <div className="list-container">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
