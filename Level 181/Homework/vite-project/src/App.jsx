import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
import useInput from "./hooks/useInput";
import useWindowWidth from "./hooks/useWindowWidth";
import "./App.css";

// კომპონენტი 1 - useCounter გამოყენება
function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="card">
      <h2>useCounter Hook</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>გაზრდა +</button>
      <button onClick={decrement}>შემცირება -</button>
    </div>
  );
}

// კომპონენტი 2 - useCounter სხვა კომპონენტში
function AnotherCounter() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div className="card">
      <h2>useCounter (სხვა კომპონენტი)</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>გაზრდა +</button>
      <button onClick={decrement}>შემცირება -</button>
    </div>
  );
}

// კომპონენტი 3 - useToggle გამოყენება
function ToggleComponent() {
  const { value, toggleValue } = useToggle(false);

  return (
    <div className="card">
      <h2>useToggle Hook</h2>
      <p>მნიშვნელობა: {value ? "ჩართული ✅" : "გამორთული ❌"}</p>
      <button onClick={toggleValue}>შეცვლა</button>
    </div>
  );
}

// კომპონენტი 4 - useLocalStorage გამოყენება
function LocalStorageComponent() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="card">
      <h2>useLocalStorage Hook</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="შეიყვანე სახელი..."
      />
      <p>შენახული სახელი: {name || "ცარიელი"}</p>
    </div>
  );
}

// კომპონენტი 5 - useFetch გამოყენება
function FetchComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );

  return (
    <div className="card">
      <h2>useFetch Hook</h2>
      {loading && <p>იტვირთება...</p>}
      {error && <p style={{ color: "red" }}>შეცდომა: {error}</p>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// კომპონენტი 6 - useInput გამოყენება
function InputComponent() {
  const nameInput = useInput("");
  const emailInput = useInput("");

  return (
    <div className="card">
      <h2>useInput Hook</h2>
      <input
        type="text"
        value={nameInput.value}
        onChange={nameInput.onChange}
        placeholder="სახელი..."
      />
      <input
        type="email"
        value={emailInput.value}
        onChange={emailInput.onChange}
        placeholder="ელფოსტა..."
      />
      <p>სახელი: {nameInput.value}</p>
      <p>ელფოსტა: {emailInput.value}</p>
      <button onClick={() => { nameInput.reset(); emailInput.reset(); }}>
        გასუფთავება
      </button>
    </div>
  );
}

// კომპონენტი 7 - useWindowWidth გამოყენება
function WindowWidthComponent() {
  const width = useWindowWidth();

  return (
    <div className="card">
      <h2>useWindowWidth Hook</h2>
      <p>ფანჯრის სიგანე: {width}px</p>
      <p>
        {width > 1024
          ? "დესკტოპი 🖥️"
          : width > 768
          ? "ტაბლეტი 📱"
          : "მობილური 📱"}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Level 181 - Custom Hooks</h1>
      <div className="grid">
        <CounterComponent />
        <AnotherCounter />
        <ToggleComponent />
        <LocalStorageComponent />
        <FetchComponent />
        <InputComponent />
        <WindowWidthComponent />
      </div>
    </div>
  );
}

export default App;
