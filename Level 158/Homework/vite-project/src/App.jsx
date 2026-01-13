import { useEffect, useState } from "react";

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(r => r.json())
      .then(d => setTodos(d.filter(t => !t.completed)));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(r => r.json())
      .then(d => setPosts(d));
  }, []);

  const filtered = posts
    .filter(p => user === "all" || p.userId === Number(user))
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 5);

  return (
    <div style={{ padding: 20 }}>
      <h3>Todos</h3>
      {todos.map(t => (
        <div key={t.id}>{t.title}</div>
      ))}

      <hr />

      <button onClick={() => setShow(!show)}>
        Show / Hide Posts
      </button>

      {show && (
        <>
          <select onChange={e => setUser(e.target.value)}>
            <option value="all">All</option>
            <option value="1">User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
          </select>

          <input
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {filtered.map(p => (
            <div key={p.id}>
              <h4>{p.title}</h4>
              <p>{p.body.slice(0, 50)}</p>
              <button
                onClick={() =>
                  setPosts(posts.filter(x => x.id !== p.id))
                }
              >
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
