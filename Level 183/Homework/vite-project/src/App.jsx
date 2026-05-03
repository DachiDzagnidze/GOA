import { useState } from "react";
import useThrottle from "./hooks/useThrottle";
import useHover from "./hooks/useHover";
import useFocus from "./hooks/useFocus";
import usePageVisibility from "./hooks/usePageVisibility";
import useEventListener from "./hooks/useEventListener";
import "./App.css";

// კომპონენტი 1 - useThrottle გამოყენება
function ThrottleComponent() {
  const [text, setText] = useState("");
  const throttledText = useThrottle(text, 1000);

  return (
    <div className="card">
      <h2>useThrottle Hook</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="აკრიფე სწრაფად..."
      />
      <p>რეალური მნიშვნელობა: {text}</p>
      <p>Throttled (1000ms): {throttledText}</p>
    </div>
  );
}

// კომპონენტი 2 - useHover გამოყენება
function HoverComponent() {
  const { ref, isHovered } = useHover();

  return (
    <div className="card">
      <h2>useHover Hook</h2>
      <div
        ref={ref}
        style={{
          padding: "20px",
          background: isHovered ? "#535bf2" : "#ccc",
          color: isHovered ? "white" : "black",
          transition: "0.3s",
          borderRadius: "8px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {isHovered ? "Hovered! ✨" : "მიიტანე მაუსი"}
      </div>
    </div>
  );
}

// კომპონენტი 3 - useFocus გამოყენება
function FocusComponent() {
  const { ref, focus } = useFocus();

  return (
    <div className="card">
      <h2>useFocus Hook</h2>
      <input ref={ref} type="text" placeholder="აქ გაჩნდება ფოკუსი..." />
      <button onClick={focus}>ფოკუსირება</button>
    </div>
  );
}

// კომპონენტი 4 - usePageVisibility გამოყენება
function PageVisibilityComponent() {
  const isVisible = usePageVisibility();

  return (
    <div className="card">
      <h2>usePageVisibility Hook</h2>
      <p>
        სტატუსი:{" "}
        {isVisible ? "აქტიური ტაბი 👁️" : "სხვაგან ხარ გადასული 🙈 (ვერ დაინახავ)"}
      </p>
    </div>
  );
}

// კომპონენტი 5 - useEventListener გამოყენება
function EventListenerComponent() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEventListener("mousemove", (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  });

  return (
    <div className="card">
      <h2>useEventListener Hook</h2>
      <p>მაუსის პოზიცია:</p>
      <p>
        X: {coords.x}, Y: {coords.y}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Level 183 - Custom Hooks</h1>
      <div className="grid">
        <ThrottleComponent />
        <HoverComponent />
        <FocusComponent />
        <PageVisibilityComponent />
        <EventListenerComponent />
      </div>
    </div>
  );
}

export default App;
