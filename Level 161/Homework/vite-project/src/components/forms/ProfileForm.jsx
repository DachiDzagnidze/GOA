import { useState } from "react";

export default function ProfileForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <h3>📂 Profile Configuration</h3>

      <form>
        <div className="form-group">
          <label>Display Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contact Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Chronological Age</label>
          <input
            type="text"
            name="age"
            placeholder="25"
            value={form.age}
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="preview-box">
        <p>
          Data Payload: <strong>{form.name || "..."}</strong> •{" "}
          <strong>{form.email || "..."}</strong> •{" "}
          <strong>{form.age || "..."}</strong>
        </p>
      </div>
    </section>
  );
}
