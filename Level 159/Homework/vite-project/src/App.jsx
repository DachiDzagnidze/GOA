import { useState, useEffect } from "react";
import data from "./data.json";
import "./index.css";

export default function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [mode, setMode] = useState("timed");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);
  const [errors, setErrors] = useState(0);

  // randomis
  useEffect(() => {
    const passages = data[difficulty];
    const random = passages[Math.floor(Math.random() * passages.length)];
    setText(random.text);
    reset();
  }, [difficulty]);

  // timer logic
  useEffect(() => {
    if (!running) return;

    const timer = setTimeout(() => {
      if (mode === "timed") {
        if (time > 0) setTime(time - 1);
        else setRunning(false);
      } else {
        setTime(time + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [running, time, mode]);

  const start = () => {
    if (!running) setRunning(true);
  };

  const reset = () => {
    setInput("");
    setIndex(0);
    setErrors(0);
    setRunning(false);
    setTime(mode === "timed" ? 60 : 0);
  };

  const handleChange = (e) => {
    start();
    const value = e.target.value;
    const char = value[value.length - 1];

    if (char !== text[index]) setErrors((prev) => prev + 1);

    setInput(value);
    setIndex(value.length);

    if (value.length === text.length) setRunning(false);
  };

  // WPM calc
  let elapsedMinutes = mode === "timed" ? (60 - time) / 60 : time / 60;
  if (elapsedMinutes === 0) elapsedMinutes = 1;

  let wpm = Math.round((index - errors) / 5 / elapsedMinutes);
  let accuracy = index === 0 ? 100 : Math.round(((index - errors) / index) * 100);
  if (accuracy < 0) accuracy = 0;

  return (
    <div className="app">
      <h1>Typing Speed Test</h1>

      <div className="controls">
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button onClick={() => setMode("timed")}>Timed</button>
        <button onClick={() => setMode("passage")}>Passage</button>
        <button onClick={reset}>Restart</button>
      </div>

      <p className="passage">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={
              i < index ? (input[i] === char ? "correct" : "wrong") : i === index ? "cursor" : ""
            }
          >
            {char}
          </span>
        ))}
      </p>

      <input
        value={input}
        onChange={handleChange}
        disabled={!running && index === text.length}
        placeholder="Start typing here..."
      />

      <div className="stats">
        <span>Time: {time}s</span>
        <span>WPM: {wpm}</span>
        <span>Accuracy: {accuracy}%</span>
      </div>
    </div>
  );
}
