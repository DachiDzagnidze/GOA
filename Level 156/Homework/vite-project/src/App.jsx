import { useState } from "react";
import { FaCookieBite } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  const [cookies, setCookies] = useState(0);
  const [show, setShow] = useState(true);
  const [on, setOn] = useState(false);
  const [random, setRandom] = useState(null);

  function addCount() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function randomNumber() {
    const num = Math.floor(Math.random() * 10) + 1;
    setRandom(num);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 400 }}>

      {/* 1 & 6 Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={addCount}>+1</button>
      {count === 10 && <p>Limit reached</p>}

      <hr />

      {/* 2 Cookie Clicker */}
      <h2>
        Cookies: {cookies} <FaCookieBite />
      </h2>
      <button onClick={() => setCookies(cookies + 1)}>
        Click me
      </button>

      <hr />

      {/* 3 Show / Hide */}
      <button onClick={() => setShow(!show)}>
        Toggle Text
      </button>
      {show && <p>Hello 👋</p>}

      <hr />

      {/* 4 ON / OFF */}
      <button
        onClick={() => setOn(!on)}
        style={{
          backgroundColor: on ? "green" : "red",
          color: "white",
          padding: "5px 10px",
        }}
      >
        {on ? "ON" : "OFF"}
      </button>

      <hr />

      {/* 5 Random Number */}
      <button onClick={randomNumber}>
        Random 1–10
      </button>
      {random && <p>Number: {random}</p>}
      {random === 7 && <p>You won! 🎉</p>}

    </div>
  );
}

export default App;
