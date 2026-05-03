import { useState } from "react";
import useToggle from "./hooks/useToggle";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
import usePrevious from "./hooks/usePrevious";
import "./App.css";

function ToggleComponent() {
  const { value, toggleValue } = useToggle(false);
  return (
    <div className="card">
      <h2>useToggle (TSX)</h2>
      <p>სტატუსი: {value ? "ჩართული ✅" : "გამორთული ❌"}</p>
      <button onClick={toggleValue}>შეცვლა</button>
    </div>
  );
}

function LocalStorageComponent() {
  const [name, setName] = useLocalStorage("ts_username", "");
  return (
    <div className="card">
      <h2>useLocalStorage (TSX)</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="შეიყვანე ტექსტი..."
      />
      <p>შენახული ტექსტი: {name || "ცარიელი"}</p>
    </div>
  );
}

function FetchComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return (
    <div className="card">
      <h2>useFetch (TSX)</h2>
      {loading && <p>იტვირთება...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <p><strong>სახელი:</strong> {data.name}</p>
          <p><strong>ელფოსტა:</strong> {data.email}</p>
        </div>
      )}
    </div>
  );
}

function PreviousComponent() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  return (
    <div className="card">
      <h2>usePrevious (TSX)</h2>
      <p>ახლანდელი: {count}</p>
      <p>წინა: {previousCount !== undefined ? previousCount : "არ არის"}</p>
      <button onClick={() => setCount((c) => c + 1)}>გაზრდა +</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Level 184 - TSX Hooks</h1>
      <div className="grid">
        <ToggleComponent />
        <LocalStorageComponent />
        <FetchComponent />
        <PreviousComponent />
      </div>
    </div>
  );
}

export default App;
