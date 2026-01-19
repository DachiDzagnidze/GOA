import { useId, useState } from "react";

export default function MultiInputForm() {
  const id = useId();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=== Multi-Input Form Submission ===");
    console.log("Unique ID:", id);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Age:", age);
    console.log("===================================");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>

      <label htmlFor={id + "-text"}>Username</label>
      <input
        id={id + "-text"}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Choose a username"
      />

      <label htmlFor={id + "-email"}>Email</label>
      <input
        id={id + "-email"}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your.email@example.com"
      />

      <label htmlFor={id + "-password"}>Password</label>
      <input
        id={id + "-password"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create a strong password"
      />

      <label htmlFor={id + "-number"}>Age</label>
      <input
        id={id + "-number"}
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />

      <button type="submit">Submit Registration</button>
    </form>
  );
}
