import FormA from "./components/FormA";
import FormB from "./components/FormB";
import MultiInputForm from "./components/MultiInputForm";
import CheckboxList from "./components/CheckboxList";
import DynamicList from "./components/DynamicList";

export default function App() {
  return (
    <div className="container">
      <h1>React useId Examples</h1>

      <section className="card">
        <h2>1. Independent Forms</h2>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <FormA />
          <FormB />
        </div>
      </section>

      <section className="card">
        <h2>2. Multi-Input Form</h2>
        <MultiInputForm />
      </section>

      <section className="card">
        <h2>3. Checkbox List</h2>
        <CheckboxList />
      </section>

      <section className="card">
        <h2>4. Dynamic List</h2>
        <DynamicList />
      </section>
    </div>
  );
}
