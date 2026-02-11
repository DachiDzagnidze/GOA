import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const { toggleTodo, deleteTodo, editTodo } = useTodo();

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <div className={`item-container ${todo.completed ? "item-completed" : ""}`}>
      <div className="item-category">{todo.category}</div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="item-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleEdit}
          autoFocus
          className="item-edit-input"
        />
      ) : (
        <span className="item-text" onDoubleClick={handleEdit}>
          {todo.text}
        </span>
      )}
      <div className="item-actions">
        <button onClick={handleEdit} className="item-edit-btn">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="item-delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
