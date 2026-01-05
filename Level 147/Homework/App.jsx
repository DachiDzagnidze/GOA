// App.jsx
import React, { useState } from "react";

function Student() {
  return <p>Student Component</p>;
}

function Teacher() {
  return <p>Teacher Component</p>;
}

function App() {
  const [showHello, setShowHello] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const loadData = () => {
    setLoading(true);
    setDataLoaded(false);
    setTimeout(() => {
      setLoading(false);
      setDataLoaded(true);
    }, 3000);
  };

  return (
    <div className={`p-6 space-y-6 font-sans ${darkTheme ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <button className="bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded" onClick={() => setShowHello(!showHello)}>
        Show
      </button>
      {showHello && <p>Hello World</p>}

      <div>
        <input type={showPassword ? "text" : "password"} placeholder="Enter password" className="border p-2 rounded" />
        <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded ml-2" onClick={() => setShowPassword(!showPassword)}>
          Show/Hide
        </button>
      </div>

      <button className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => setShowWelcome(!showWelcome)}>
        Toggle Welcome
      </button>
      {showWelcome && <p>Welcome, user!</p>}

      <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded" onClick={() => setDarkTheme(!darkTheme)}>
        Toggle Theme
      </button>
      <div className="w-32 h-32 mt-2 bg-white"></div>

      <select className="border p-2 rounded" onChange={e => setRole(e.target.value)} value={role}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      {role === "student" && <Student />}
      {role === "teacher" && <Teacher />}

      <div>
        <input type="number" placeholder="Enter your age" className="border p-2 rounded" onChange={e => setAge(e.target.value)} value={age} />
        {age !== "" && <p className={`${age >= 18 ? "text-green-500" : "text-red-500"}`}>{age >= 18 ? "You are adult" : "You are underage"}</p>}
      </div>

      <button className="bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded" onClick={loadData}>
        Load data
      </button>
      {loading && <p>Loading...</p>}
      {dataLoaded && <p>Data loaded!</p>}
    </div>
  );
}

export default App;
