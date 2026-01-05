// App.jsx
import React, { useState } from "react";

function App() {
  // 1) useState axsna:
  // useState aris hooki romelic gvadzlevs sashualebas ro davimaxsovrot componentis data renderebis dros
  // It areturnebs an arrays: [state, setState], sadac state = current value, setState = funqcia romelic updatebs componentis states.

  // 2) Difference:
  // A normal variable does NOT remember its value after a component re-renders.
  // useState allows React to "remember" and re-render with the new value.

  // 3) Hello → World toggle
  const [text, setText] = useState("Hello");
  const toggleText = () => {
    setText(text === "Hello" ? "World" : "Hello");
  };

  // 4) Counter
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);

  // 6) Reset counter
  const reset = () => setCount(0);

  // 7) Show / Hide text
  const [showText, setShowText] = useState(true);
  const toggleShow = () => setShowText(!showText);

  return (
    <div className="p-6 space-y-6 font-sans">
      {/* 3) Hello → World */}
      <h2>{text}</h2>
      <button
        className="bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded"
        onClick={toggleText}
      >
        Toggle Text
      </button>

      {/* 4 & 5 & 6) Counter with increase and reset */}
      <h2>Counter: {count}</h2>
      <button
        className="bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={increase}
      >
        Increase
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
        onClick={reset}
      >
        Reset
      </button>

      {/* 7) Show / Hide text */}
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded mt-4"
        onClick={toggleShow}
      >
        Show / Hide
      </button>
      {showText && <p className="mt-2">This text can be hidden or shown!</p>}
    </div>
  );
}

export default App;
