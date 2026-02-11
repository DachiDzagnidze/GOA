import React from "react";

export function ProductTotal() {
  const items = [
    { name: "RTX 5090", price: 2500 },
    { name: "RTX 5070 TI", price: 1500 },
    { name: "RTX 4090", price: 1000 },
  ];

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="product-total-card">
      <h2>Product Total</h2>
      <p>the total price of the products is: {totalPrice}$</p>
    </section>
  );
}
