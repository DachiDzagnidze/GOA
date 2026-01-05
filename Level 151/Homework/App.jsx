
// 1) props aris objecti romelic gamoikeneba rom informacia gadasces parent componenitdan child components

import React from "react";

// 3) Message component
function Message({ text }) {
  return <p>{text}</p>;
}

// 4) UserInfo component
function UserInfo({ name, age }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

// 5) Counter component
function Counter({ initial }) {
  return <h2>{initial + 5}</h2>;
}

function App() {
  return (
    <div>
      {/* 2) props are used to pass data between components */}
      
      <Message text="Hello Kocho!" />

      <UserInfo name="Nika" age={15} />

      <Counter initial={10} />
    </div>
  );
}

export default App;
