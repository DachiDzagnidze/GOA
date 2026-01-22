import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section>
      <h3>👤 Personal Identity</h3>

      <div className="form-group">
        <label>Legal Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="preview-box">
        <p>
          Live Identifier: <strong>{name || "Awaiting input..."}</strong>
        </p>
      </div>
    </section>
  );
}
