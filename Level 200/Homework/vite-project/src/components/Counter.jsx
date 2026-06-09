import { useCounterStore } from "../stores/counterStore";

export default function Counter() {
  const { count, inc, dec, reset } = useCounterStore();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}