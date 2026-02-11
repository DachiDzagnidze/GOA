import Counter from "./Components/Counter";
import TodoApp from "./Components/TodoApp";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>useReducer Demo</h1>
      <div className="grid">
        <Counter />
        <TodoApp />
      </div>
    </div>
  );
}
