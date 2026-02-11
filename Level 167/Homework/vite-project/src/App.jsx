import FirstTask from "./components/FirstTask";
import SecondTask from "./components/SecondTask";
import ThirdTask from "./components/ThirdTask";
import ForthTask from "./components/ForthTask";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1>GOA Homework Level 167</h1>
      </header>

      <main>
        <FirstTask />
        <SecondTask />
        <ThirdTask />
        <ForthTask />
      </main>
    </div>
  );
}

export default App;
