import { useState } from "react";

// counter componenti
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow space-x-2">
      <p className="text-xl font-bold">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="px-3 py-1 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  );
}

// hello textis switchi 
function HelloText() {
  const [text, setText] = useState("Hello");

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow">
      <p className="mb-2">{text}</p>
      <button
        onClick={() => setText("Hello React")}
        className="px-4 py-1 bg-blue-500 text-white rounded"
      >
        Change
      </button>
    </div>
  );
}

// on off componeneti
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow">
      <p className="text-lg font-semibold mb-2">
        {isOn ? "ON" : "OFF"}
      </p>
      <button
        onClick={() => setIsOn(!isOn)}
        className="px-4 py-1 bg-purple-500 text-white rounded"
      >
        Toggle
      </button>
    </div>
  );
}

// inputis shesakvani
function LiveInput() {
  const [value, setValue] = useState("");

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-1 rounded mb-2 w-full"
      />
      <p>{value}</p>
    </div>
  );
}

// usernamesi componenti
function Username() {
  const [name, setName] = useState("");

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 rounded mb-2 w-full"
      />
      <p className="font-medium">Hello, {name}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col gap-6 p-6">
      <Counter />
      <HelloText />
      <Toggle />
      <LiveInput />
      <Username />
    </div>
  );
}
