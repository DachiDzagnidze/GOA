import React, { useRef } from "react";

export default function App() {
  const focusRef = useRef(null);
  const colorRef = useRef(null);
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const paraRef = useRef(null);
  const scrollRef = useRef(null);

  function focusInput() {
    if (focusRef.current) focusRef.current.focus();
  }

  function changeColor() {
    if (colorRef.current) {
      colorRef.current.style.color = "red";
    }
  }

  function resizeBox() {
    if (boxRef.current) {
      boxRef.current.style.width = "320px";
    }
  }

  function clearInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function hideParagraph() {
    if (paraRef.current) {
      paraRef.current.style.display = "none";
    }
  }

  function scrollBottom() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h3>Focus Input</h3>
      <input ref={focusRef} placeholder="focus input" />
      <button onClick={focusInput}>Focus</button>

      <h3>Change Text Color</h3>
      <p ref={colorRef}>Text color change</p>
      <button onClick={changeColor}>Red</button>

      <h3>Resize Box</h3>
      <div ref={boxRef} style={{ width: 120, height: 50, background: "gray" }}></div>
      <button onClick={resizeBox}>Resize</button>

      <h3>Clear Input</h3>
      <input ref={inputRef} placeholder="write something" />
      <button onClick={clearInput}>Clear</button>

      <h3>Hide Paragraph</h3>
      <p ref={paraRef}>Hide this text</p>
      <button onClick={hideParagraph}>Hide</button>

      <h3>Scroll Box</h3>
      <div
        ref={scrollRef}
        style={{ height: 120, overflowY: "scroll", border: "1px solid black" }}
      >
        {Array.from({ length: 25 }).map(function (_, i) {
          return <div key={i}>Item {i + 1}</div>;
        })}
      </div>
      <button onClick={scrollBottom}>Scroll Down</button>
    </div>
  );
}