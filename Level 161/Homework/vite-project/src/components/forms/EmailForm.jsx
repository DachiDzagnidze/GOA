import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Email submitted: ${email}`);
    }
  };

  return (
    <section>
      <h3>📧 Newsletter Subscription</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="e.g. hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Subscribe</button>
      </form>

      <div className="preview-box">
        <p>
          Current Entry: <strong>{email || "Awaiting email..."}</strong>
        </p>
      </div>
    </section>
  );
}
