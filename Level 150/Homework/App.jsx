// App.jsx
import React, { useState } from "react";

function App() {
  // 1)
  const [liveText, setLiveText] = useState("");

  // 2)
  const [fruits] = useState(["apple", "banana", "kiwi"]);

  // 3)
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const deleteTask = (t) => setTasks(tasks.filter(item => item !== t));

  // 4 & 5)
  const [product, setProduct] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const addProduct = () => {
    if (product.trim() !== "") {
      setShoppingList([...shoppingList, { id: Date.now(), name: product, count: 1 }]);
      setProduct("");
    }
  };
  const removeProduct = (id) => setShoppingList(shoppingList.filter(p => p.id !== id));
  const increaseQty = (id) => setShoppingList(shoppingList.map(p => p.id === id ? { ...p, count: p.count + 1 } : p));
  const decreaseQty = (id) => setShoppingList(shoppingList.map(p => p.id === id ? { ...p, count: p.count > 1 ? p.count - 1 : 1 } : p));

  return (
    <div className="p-6 space-y-6 font-sans">

      <div>
        <input
          type="text"
          value={liveText}
          onChange={e => setLiveText(e.target.value)}
          placeholder="Type here..."
          className="border p-2 rounded"
        />
        <p>{liveText}</p>
      </div>

      <ul>
        {fruits.map((fruit, i) => <li key={i}>{fruit}</li>)}
      </ul>

      <div>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="New task..."
          className="border p-2 rounded"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Add Task</button>
        <ul>
          {tasks.map(t => (
            <li key={t} className="flex items-center space-x-2">
              <span>{t}</span>
              <button onClick={() => deleteTask(t)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <input
          type="text"
          value={product}
          onChange={e => setProduct(e.target.value)}
          placeholder="New product..."
          className="border p-2 rounded"
        />
        <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Add Product</button>
        <ul>
          {shoppingList.map(p => (
            <li key={p.id} className="flex items-center space-x-2">
              <span>{p.name} (Qty: {p.count})</span>
              <button onClick={() => increaseQty(p.id)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
              <button onClick={() => decreaseQty(p.id)} className="bg-yellow-500 text-white px-2 py-1 rounded">-</button>
              <button onClick={() => removeProduct(p.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
