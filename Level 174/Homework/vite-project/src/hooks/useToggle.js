import { useState } from "react";

function useToggle(initial = false) {
  const [state, setState] = useState(initial);

  function toggle() {
    setState((prev) => !prev);
  }

  return [state, toggle];
}

export default useToggle;