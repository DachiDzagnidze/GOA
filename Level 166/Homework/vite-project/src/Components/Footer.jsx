import React from "react";

const Footer = ({ text }) => {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        padding: "10px",
        color: "white",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
