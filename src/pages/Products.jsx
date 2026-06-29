import { useState, useEffect } from "react";

function readProducts() {
  try {
    return JSON.parse(localStorage.getItem("products") || "[]");
  } catch (e) {
    return [];
  }
}

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(readProducts());
  }, []);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.length === 0 && <p>No products available.</p>}

        {products.map((p) => (
          <div key={p.id} className="card product-card">
            {p.image && <img src={p.image} alt={p.name} />}
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p className="price">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
