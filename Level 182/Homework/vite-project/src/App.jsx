import { useState } from "react";
import usePrevious from "./hooks/usePrevious";
import useDebounce from "./hooks/useDebounce";
import useOutsideClick from "./hooks/useOutsideClick";
import useInterval from "./hooks/useInterval";
import useKeyPress from "./hooks/useKeyPress";
import "./App.css";

// კომპონენტი 1 - usePrevious გამოყენება
function PreviousComponent() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div className="card">
      <h2>usePrevious Hook</h2>
      <p>ახლანდელი: {count}</p>
      <p>წინა: {previousCount !== undefined ? previousCount : "არ არის"}</p>
      <button onClick={() => setCount((c) => c + 1)}>გაზრდა</button>
    </div>
  );
}

// კომპონენტი 2 - useDebounce გამოყენება
function DebounceComponent() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  return (
    <div className="card">
      <h2>useDebounce Hook</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="აკრიფე ტექსტი..."
      />
      <p>რეალური: {text}</p>
      <p>Debounced (500ms): {debouncedText}</p>
    </div>
  );
}

// კომპონენტი 3 - useOutsideClick გამოყენება
function OutsideClickComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="card">
      <h2>useOutsideClick Hook</h2>
      <button onClick={() => setIsOpen(true)}>მენიუს გახსნა</button>
      {isOpen && (
        <div
          ref={ref}
          style={{
            marginTop: "10px",
            padding: "15px",
            background: "#646cff",
            color: "white",
            borderRadius: "8px",
          }}
        >
          <p>მენიუ გახსნილია!</p>
          <p>დააჭირე გარეთ დასახურად</p>
        </div>
      )}
    </div>
  );
}

// კომპონენტი 4 - useInterval გამოყენება
function IntervalComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      setCount((c) => c + 1);
    },
    isRunning ? 1000 : null
  );

  return (
    <div className="card">
      <h2>useInterval Hook</h2>
      <p>მთვლელი: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "გაჩერება ⏸️" : "გაშვება ▶️"}
      </button>
      <button onClick={() => setCount(0)}>განულება</button>
    </div>
  );
}

// კომპონენტი 5 - useKeyPress გამოყენება
function KeyPressComponent() {
  const enterPressed = useKeyPress("Enter");
  const escapePressed = useKeyPress("Escape");
  const spacePressed = useKeyPress(" ");

  return (
    <div className="card">
      <h2>useKeyPress Hook</h2>
      <p>Enter: {enterPressed ? "დაჭერილია ✅" : "არ არის ❌"}</p>
      <p>Escape: {escapePressed ? "დაჭერილია ✅" : "არ არის ❌"}</p>
      <p>Space: {spacePressed ? "დაჭერილია ✅" : "არ არის ❌"}</p>
      <p style={{ fontSize: "12px", color: "#888" }}>
        დააჭირე Enter, Escape ან Space ღილაკს
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Level 182 - Custom Hooks</h1>
      <div className="grid">
        <PreviousComponent />
        <DebounceComponent />
        <OutsideClickComponent />
        <IntervalComponent />
        <KeyPressComponent />
      </div>
    </div>
  );
}

export default App;
