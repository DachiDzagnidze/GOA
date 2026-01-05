// App.jsx
import React, { useState } from "react";

function App() {
  // 1)
  const [count, setCount] = useState(0);
  // 2)
  const [showHello, setShowHello] = useState(true);
  // 3)
  const [text, setText] = useState("");
  // 4)
  const [names] = useState(["Alice", "Bob", "Charlie", "David"]);
  const [filterText, setFilterText] = useState("");
  // 5)
  const [numbers, setNumbers] = useState([1,2,3,4,5]);
  const removeNumber = (num) => setNumbers(numbers.filter(n => n !== num));
    // 6)
  return (
    <div className="p-6 space-y-6 font-sans">
      <h2>Counter: {count}</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={()=>setCount(count+1)}>+</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={()=>setCount(count-1)}>-</button>

      <h2>{showHello ? "Hello" : "Goodbye"}</h2>
      <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={()=>setShowHello(!showHello)}>Toggle</button>

      <input className="border p-2 rounded" type="text" placeholder="Type..." value={text} onChange={e=>setText(e.target.value)}/>
      {text && <p>You typed: {text}</p>}

      <input className="border p-2 rounded" type="text" placeholder="Filter names..." value={filterText} onChange={e=>setFilterText(e.target.value)}/>
      <ul>{names.filter(n=>n.toLowerCase().includes(filterText.toLowerCase())).map(n=><li key={n}>{n}</li>)}</ul>

      <ul>{numbers.map(num=><li key={num} className="flex items-center space-x-2">
        <span>{num}</span>
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>removeNumber(num)}>Remove</button>
      </li>)}</ul>

      <div>
        <input className="border p-2 rounded" type="text" placeholder="New task..." value={task} onChange={e=>setTask(e.target.value)}/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={addTask}>Add Task</button>
        <ul>{tasks.map(t=><li key={t} className="flex items-center space-x-2">
          <span>{t}</span>
          <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>removeTask(t)}>Remove</button>
        </li>)}</ul>
      </div>

      <div>
        <input className="border p-2 rounded" type="text" placeholder="Product..." value={product} onChange={e=>setProduct(e.target.value)}/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={addProduct}>Add</button>
        <ul>{shoppingList.map(p=><li key={p} className="flex items-center space-x-2">
          <span>{p}</span>
          <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>removeProduct(p)}>Remove</button>
        </li>)}</ul>
      </div>
    </div>
  );
}

export default App;
