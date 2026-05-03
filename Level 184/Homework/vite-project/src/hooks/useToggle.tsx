import { useState } from "react";

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => setValue((prev) => !prev);

  return { value, toggleValue };
};

export default useToggle;
