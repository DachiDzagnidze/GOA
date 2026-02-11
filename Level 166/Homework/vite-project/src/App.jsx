import { TodoProvider } from "./context/TodoContext";
import TodoApp from "./Components/TodoApp";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="app-wrapper">
        <TodoApp />
      </div>
    </TodoProvider>
  );
}

export default App;
