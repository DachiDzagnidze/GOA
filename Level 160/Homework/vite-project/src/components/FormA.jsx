import { useId, useState } from "react";

export default function FormA() {
  const id = useId();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=== Form A Submission ===");
    console.log("Unique ID:", id);
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("========================");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form A</h3>

      <label htmlFor={id + "-name"}>Name</label>
      <input
        id={id + "-name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <label htmlFor={id + "-age"}>Age</label>
      <input
        id={id + "-age"}
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />

      <button type="submit">Submit Form A</button>
    </form>
  );
}
