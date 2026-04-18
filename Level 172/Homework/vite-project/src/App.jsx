import React, { useEffect, useRef, useState } from "react";

function DebounceInputConsole() {
  const [query, setQuery] = useState("");
  const timer = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      console.log("Debounced query:", value);
    }, 500);
  }

  return (
    <div>
      <h3>1) Debounce Input Console</h3>
      <input value={query} onChange={handleChange} placeholder="type..." />
    </div>
  );
}

function DebouncedFilterLocal() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const timer = useRef(null);

  const items = ["apple", "banana", "orange", "grape", "mango"];

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      const res = items.filter((i) => i.includes(value.toLowerCase()));
      setFiltered(res);
      console.log("Filtered:", res);
    }, 500);
  }

  return (
    <div>
      <h3>2) Debounced Local Filter</h3>
      <input value={query} onChange={handleChange} />
      <ul>
        {filtered.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function DebouncedApiFetchConsole() {
  const [query, setQuery] = useState("");
  const timer = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const filtered = data.filter((u) =>
        u.name.toLowerCase().includes(value.toLowerCase())
      );
      console.log("API filtered:", filtered);
    }, 500);
  }

  return (
    <div>
      <h3>3) Debounced API Console</h3>
      <input value={query} onChange={handleChange} />
    </div>
  );
}

function DebouncedApiList() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const timer = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const filtered = data.filter((u) =>
        u.name.toLowerCase().includes(value.toLowerCase())
      );
      setUsers(filtered);
    }, 500);
  }

  return (
    <div>
      <h3>4) Debounced API List</h3>
      <input value={query} onChange={handleChange} />
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

function ApiWithAbortController() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const timer = useRef(null);
  const controller = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(async () => {
      if (controller.current) controller.current.abort();

      controller.current = new AbortController();

      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.current.signal }
        );

        const data = await res.json();
        const filtered = data.filter((u) =>
          u.name.toLowerCase().includes(value.toLowerCase())
        );

        setUsers(filtered);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Request failed");
        }
      }
    }, 500);
  }

  return (
    <div>
      <h3>5) AbortController API</h3>
      <input value={query} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <DebounceInputConsole />
      <hr />
      <DebouncedFilterLocal />
      <hr />
      <DebouncedApiFetchConsole />
      <hr />
      <DebouncedApiList />
      <hr />
      <ApiWithAbortController />
    </div>
  );
}