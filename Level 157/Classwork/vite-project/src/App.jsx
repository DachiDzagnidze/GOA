import { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error)
    return (
      <p style={{ color: "red", textAlign: "center" }}>
        Error: {error.message}
      </p>
    );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        background: "#f9f9f9",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            width: "200px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            background: "#fff",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={product.images[0]}
            alt={product.title}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h3
            style={{
              fontSize: "16px",
              margin: "10px 0",
              height: "40px",
              overflow: "hidden",
            }}
          >
            {product.title}
          </h3>
          <p style={{ fontWeight: "bold", color: "#333" }}>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
