import React from "react";

export default function BuggyComponent({ type }) {
  if (type === "type") {
    throw new TypeError("This is a TypeError");
  }

  if (type === "ref") {
    throw new ReferenceError("This is a ReferenceError");
  }

  return <div>Component is working fine ✅</div>;
}