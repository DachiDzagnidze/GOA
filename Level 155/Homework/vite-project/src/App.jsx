import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const [hour] = useState(new Date().getHours());

  return (
    <div>
      <div>
        <p>{count}</p>

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <p>Hello</p>}
      </div>


      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>{text}</p>
      </div>


      <div>
        <p>{hour < 12 ? "Good Morning" : "Good Evening"}</p>
      </div>

    </div>
  );
}

export default App;
