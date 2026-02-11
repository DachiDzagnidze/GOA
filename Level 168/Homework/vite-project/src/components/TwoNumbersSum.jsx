import React, { useState } from "react";

export function TwoNumbersSum() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const total = num1 + num2;

  return (
    <div className="two-numbers-sum">
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={num1}
        placeholder="First number"
        onChange={(e) => setNum1(+e.target.value)}
      />

      <input
        type="number"
        value={num2}
        placeholder="Second number"
        onChange={(e) => setNum2(+e.target.value)}
      />

      <p>
        Total Sum: <strong>{total}</strong>
      </p>
    </div>
  );
}
