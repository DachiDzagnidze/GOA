import Theme from "./components/Theme";
import Counter from "./components/Counter";
import User from "./components/User";
import Todo from "./components/Todo";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div>
      <h2>Zustand App</h2>

      <Theme />
      <Counter />
      <User />
      <Todo />
      <Cart />
    </div>
  );
}