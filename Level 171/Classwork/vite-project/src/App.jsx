import { useRef } from "react";

const ColorBox = () => {
  const divRef = useRef(null);

  const changeDivColor = () => {
    divRef.current.style.backgroundColor = "purple";
  };

  return (
    <section>
      <h2>1) div is coloris shecvla</h2>
      <div
        ref={divRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "gray",
          marginBottom: "10px",
        }}
      />
      <button onClick={changeDivColor}>shecvale feri</button>
    </section>
  );
};

const TextInput = () => {
  const inputRef = useRef(null);

  const selectAllText = () => {
    inputRef.current.select();
  };

  return (
    <section>
      <h2>2) input textis monishvna</h2>
      <input
        ref={inputRef}
        defaultValue="Hello World"
        style={{ marginRight: "10px" }}
      />
      <button onClick={selectAllText}>monishne texti</button>
    </section>
  );
};

const HighlightText = () => {
  const textRef = useRef(null);

  const highlightText = () => {
    textRef.current.style.backgroundColor = "yellow";
  };

  return (
    <section>
      <h2>3) hilightterebuli pragaraphi</h2>
      <p ref={textRef}>aodhjakshdjkahskjdhasjkhdjkh ahdas jkhd jkash dkjhas.</p>
      <button onClick={highlightText}>hilight textis</button>
    </section>
  );
};

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <ColorBox />
      <hr />
      <TextInput />
      <hr />
      <HighlightText />
    </div>
  );
}

export default App;
