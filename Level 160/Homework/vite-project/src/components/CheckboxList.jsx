import { useId, useState } from "react";

export default function CheckboxList() {
  const id = useId();
  const colors = ["Red", "Green", "Blue"];
  const [selected, setSelected] = useState([]);

  function handleChange(color) {
    if (selected.includes(color)) {
      setSelected(selected.filter((item) => item !== color));
    } else {
      setSelected([...selected, color]);
    }
  }

  return (
    <div>
      <h3>Favorite Colors</h3>

      {colors.map((color, index) => (
        <div key={color}>
          <input
            type="checkbox"
            id={id + index}
            onChange={() => handleChange(color)}
          />
          <label htmlFor={id + index}>{color}</label>
        </div>
      ))}

      <p>Selected: {selected.join(", ")}</p>
    </div>
  );
}

