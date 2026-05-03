import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const getValue = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}