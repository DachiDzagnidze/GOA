export default function Sidebar({ isOpen, darkMode }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        width: "200px",
        padding: "10px",
        marginTop: "10px",
        background: darkMode ? "#333" : "#ddd",
      }}
    >
      Sidebar Content
    </div>
  );
}
