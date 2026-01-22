import { useState } from "react";

export default function AgreeForm() {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agree) {
      setError("❌ You must agree to the terms to proceed.");
    } else {
      setError("");
      alert("Registration submitted successfully! ✅");
    }
  };

  return (
    <section>
      <h3>⚖️ Terms & Agreement</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group-checkbox">
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span>I acknowledge and agree to the terms</span>
          </label>
        </div>

        <button type="submit">Complete Registration</button>
      </form>

      {error && <div className="message message-error">{error}</div>}

      <div className="preview-box">
        <p>
          Agreement Status:{" "}
          <strong>{agree ? "Accepted ✅" : "Pending ⏳"}</strong>
        </p>
      </div>
    </section>
  );
}
