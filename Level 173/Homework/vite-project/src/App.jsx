import Counter from "./components/Counter";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import useToggle from "./components/usewToggle";

export default function App() {
  // Show/Hide text
  const { value: showText, toggle: toggleText } = useToggle(false);

  // Dark Mode
  const { value: darkMode, toggle: toggleDark } = useToggle(false);

  // Sidebar Open/Close
  const { value: sidebarOpen, toggle: toggleSidebar } = useToggle(false);

  return (
    <div
      style={{
        background: darkMode ? "#1a1a1a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        padding: "20px",
        transition: "0.3s",
      }}
    >
      <h1>DAVALEBA</h1>

      {/* Counter Component */}
      <Counter />

      {/* Show/Hide Text */}
      <button onClick={toggleText}>{showText ? "Hide" : "Show"}</button>
      {showText && <p>Some hidden content</p>}

      <br />
      <br />

      {/* Dark Mode Toggle */}
      <button onClick={toggleDark}>Toggle Dark Mode</button>

      <br />
      <br />

      {/* Sidebar Toggle */}
      <button onClick={toggleSidebar}>
        {sidebarOpen ? "Close" : "Open"} Sidebar
      </button>

      <Sidebar isOpen={sidebarOpen} darkMode={darkMode} />

      {/* Users List */}
      <Users />
    </div>
  );
}
