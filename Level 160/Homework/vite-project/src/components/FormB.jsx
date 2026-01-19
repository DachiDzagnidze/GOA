import { useId, useState } from "react";

export default function FormB() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=== Form B Submission ===");
    console.log("Unique ID:", id);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("========================");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form B</h3>

      <label htmlFor={id + "-email"}>Email</label>
      <input
        id={id + "-email"}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <label htmlFor={id + "-pass"}>Password</label>
      <input
        id={id + "-pass"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <button type="submit">Submit Form B</button>
    </form>
  );
}
