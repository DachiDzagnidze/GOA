import { useState } from "react";

// show/hide
// dark mode
// sidebar
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return { value, toggle };
}
