import { useCounterStore } from "../store/counterStore";

function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
