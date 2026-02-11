import React, { useState } from "react";

export function TodoCompleted() {
  const [todos, setTodos] = useState([
    { text: "Study", completed: false },
    { text: "Gym", completed: true },
    { text: "Code", completed: true },
  ]);

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-completed-card">
      <h2>Completed Todos</h2>
      <p>the number of completed tasks is: {completedCount}</p>
    </div>
  );
}
