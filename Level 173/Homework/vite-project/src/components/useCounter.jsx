import { useState } from "react";


//custom hooks
export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // increament
  const increment = () => setCount((prev) => prev + 1);

  // ar chamoikvanos 0 ze dabla
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  // reseti
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
