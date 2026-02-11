import React, { useState } from "react";

export function TodoCount() {
  const [todos, setTodos] = useState([
    { text: "Study" },
    { text: "Gym" },
    { text: "Code" },
  ]);

  const total = todos.length;

  return (
    <div className="todo-count-card">
      <h2>Todo Count</h2>
      <p>the total number of tasks is: {total}</p>
    </div>
  );
}
