import React, { useState } from "react";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#ffcccc",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      Welcome to My React Site
    </header>
  );
}


function MainSection() {
  const [text, setText] = useState("This is the main section.");
  const colors = ["red", "green", "blue"];

  return (
    <main
      style={{
        backgroundColor: "#ccffcc",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "18px",
        margin: "20px 0",
      }}
    >
      <p>{text}</p>
      <button onClick={() => setText("Text has been changed!")}>
        Change Text
      </button>

      <div
        style={{
          backgroundColor: "#99ccff",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        Box
        <div
          style={{
            backgroundColor: "#ffcc99",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          Inner Box
          <div
            style={{
              backgroundColor: "#ccccff",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Inner Inner Box
          </div>
        </div>
      </div>


      <ul style={{ marginTop: "20px" }}>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>

      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        style={{ marginTop: "10px", borderRadius: "10px" }}
      />
    </main>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#ffff99",
        padding: "15px",
        borderRadius: "10px",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      This is the footer
    </footer>
  );
}

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
