import { useTodoStore } from "../stores/todoStore";

export default function Todo() {
  const { todos, add, remove } = useTodoStore();

  return (
    <div>
      <button onClick={() => add("New Todo")}>Add</button>

      {todos.map((t) => (
        <div key={t.id}>
          {t.text}
          <button onClick={() => remove(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
}