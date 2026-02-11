import React, { useState } from "react";

export function NameLength() {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="name-length-card">
      <h2>Name Length</h2>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <p>the length of the name is: {name.length}</p>
    </div>
  );
}
