import { useCartStore } from "../stores/cartStore";

export default function Cart() {
  const { cart, add, clear } = useCartStore();

  return (
    <div>
      <button onClick={() => add({ id: Date.now(), name: "Item" })}>
        Add
      </button>

      <button onClick={clear}>Clear</button>

      {cart.map((c) => (
        <div key={c.id}>{c.name}</div>
      ))}
    </div>
  );
}