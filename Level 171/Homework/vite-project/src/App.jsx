import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h3>Counter</h3>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function InputTracker() {
  const [text, setText] = useState("");
  const prevText = useRef("");

  function handleChange(e) {
    prevText.current = text;
    setText(e.target.value);
  }

  return (
    <div>
      <h3>Input Tracker</h3>
      <input value={text} onChange={handleChange} />
      <p>Current: {text}</p>
      <p>Previous: {prevText.current}</p>
    </div>
  );
}

function ClickTracker() {
  const [count, setCount] = useState(0);
  const totalClicks = useRef(0);

  function handleClick() {
    setCount(count + 1);
    totalClicks.current += 1;
    console.log(totalClicks.current);
  }

  return (
    <div>
      <h3>Click Tracker</h3>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

function ColorCounter() {
  const [count, setCount] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    prev.current = count;
  }, [count]);

  const color = count % 2 === 0 ? "blue" : "green";

  return (
    <div>
      <h3>Color Counter</h3>
      <p style={{ color }}>Current: {count}</p>
      <p style={{ background: "lightgray" }}>Previous: {prev.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <div>
      <h3>Timer</h3>
      <p>Seconds: {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <Counter />
      <hr />
      <InputTracker />
      <hr />
      <ClickTracker />
      <hr />
      <ColorCounter />
      <hr />
      <Timer />
    </div>
  );
}