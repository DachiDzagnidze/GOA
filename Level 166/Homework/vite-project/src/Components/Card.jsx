import React from "react";

const Card = ({ title, children, style }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        ...style,
      }}
    >
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
