// App.jsx
import React, { useState } from "react";

function App() {
  // ================================
  // 1) useState axsna:
  // useState aris hooki romelic adzlevs sashualebas funqciis componentebs rom hqondet state
  // state aris informacias romelsac componeneti imaxsovrebs da sheudzlia sheicvalos
  // is areturnebs arrays: [state, setState].
  // - state: current value
  // - setState: Funqcia romelic updates axlandel states da re-renderings axdens componentisas

  // 2)
  const [text, setText] = useState("Hello!");
  const toggleText = () => {
    setText(text === "Hello!" ? "Goodbye!" : "Hello!");
  };

  // 3)
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  // 4)
  const [bgColor, setBgColor] = useState("lightblue");
  const toggleColor = () => {
    setBgColor(bgColor === "lightblue" ? "lightcoral" : "lightblue");
  };

  // 5)
  const [showText, setShowText] = useState(true);
  const toggleShow = () => setShowText(!showText);

  // 6)
  const [emoji, setEmoji] = useState("😀");
  const toggleEmoji = () => {
    setEmoji(emoji === "😀" ? "😢" : "😀");
  };

  // 7)
  const showAlert = () => {
    alert("This is an alert!");
  };

  // 8)
  const [greet, setGreet] = useState("Hello!");
  const changeGreet = () => setGreet("Hi there!");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>{text}</h2>
      <button onClick={toggleText}>Toggle Text</button>

      <hr />

      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <hr />

      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        Colored Box
      </div>
      <button onClick={toggleColor}>Toggle Color</button>

      <hr />

      <button onClick={toggleShow}>Show / Hide</button>
      {showText && <p>Welcome to React!</p>}

      <hr />

      <h2>{emoji}</h2>
      <button onClick={toggleEmoji}>Toggle Emoji</button>

      <hr />

      <button onClick={showAlert}>Show Alert</button>

      <hr />

      <h2>{greet}</h2>
      <button onClick={changeGreet}>Change Text</button>
    </div>
  );
}

export default App;
