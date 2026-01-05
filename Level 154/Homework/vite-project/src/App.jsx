import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Component mounted");
    document.title = "My First useEffect";

    const timer = setTimeout(() => {
      console.log("Hello after 2 seconds");
    }, 2000);

    return () => {
      console.log("Component unmounted");
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  return (
    <div className="p-6 space-y-6">

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Count: {count}
      </button>

      <div>
        <button
          onClick={() => setTasks([...tasks, "New Task"])}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          Add Task
        </button>

        {tasks.map((task, i) => (
          <p key={i}>{task}</p>
        ))}
      </div>

      <div>
        <button
          onClick={() => setNumbers(numbers.slice(0, -1))}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Remove Last Number
        </button>

        <p>{numbers.join(", ")}</p>
      </div>

      <div>
        <button
          onClick={() =>
            setUsers([...users, { id: Date.now(), name: "User" }])
          }
          className="bg-purple-500 text-white px-4 py-1 rounded"
        >
          Add User
        </button>

        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>

    </div>
  );
}

export default App;
