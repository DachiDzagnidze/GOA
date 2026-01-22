import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setMessage("Please fill in all security fields.");
    } else {
      setMessage("✅ Authentication successful. Redirecting...");
    }
  };

  return (
    <section>
      <h3>🔐 Security Access</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Handle or Email</label>
          <input
            type="text"
            name="username"
            placeholder="e.g. username_123"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
          />
        </div>

        <div className="form-group">
          <label>Secure Key</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••••••"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>

        <button type="submit">Authorize Session</button>
      </form>

      {message && (
        <div
          className={`message ${message.includes("✅") ? "message-success" : "message-error"}`}
        >
          {message}
        </div>
      )}

      <div className="preview-box">
        <p>
          Secure Echo: <strong>{form.username || "Anonymous"}</strong> •{" "}
          <strong>{form.password ? "••••••••" : "No key"}</strong>
        </p>
      </div>
    </section>
  );
}
