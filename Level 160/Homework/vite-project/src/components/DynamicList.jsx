import { useId, useState } from "react";

export default function DynamicList() {
  const id = useId();
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [input, setInput] = useState("");

  function addItem() {
    if (!input.trim()) return;
    setItems(prevItem => [...prevItem, input]);
    setInput("");
  }

  return (
    <div>
      <h3>Fruits</h3>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="New fruit"
      />
      <button onClick={addItem}>Add</button>

      {items.map((item, index) => (
        <div key={index}>
          <input type="checkbox" id={id + "-" + index} />
          <label htmlFor={id + "-" + index}>{item}</label>
        </div>
      ))}
    </div>
  );
}
