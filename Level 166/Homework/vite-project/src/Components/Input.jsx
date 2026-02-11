import React from "react";

const Input = ({ type = "text", placeholder, value, onChange, style }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "8px",
        margin: "5px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        ...style,
      }}
    />
  );
};

export default Input;
