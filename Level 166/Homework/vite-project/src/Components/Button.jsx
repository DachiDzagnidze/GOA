import React from "react";

const Button = ({ text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", cursor: "pointer", ...style }}
    >
      {text}
    </button>
  );
};

export default Button;
