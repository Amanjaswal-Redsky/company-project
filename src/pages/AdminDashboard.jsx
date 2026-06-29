import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const getProducts = () => {
  try {
    return JSON.parse(
      localStorage.getItem("products") || "[]"
    );
  } catch {
    return [];
  }
};

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin =
      localStorage.getItem("isAdmin") === "true";

    if (!isAdmin) {
      navigate("/admin");
      return;
    }

    setProducts(getProducts());
  }, [navigate]);

  const saveProducts = (data) => {
    setProducts(data);
    localStorage.setItem(
      "products",
      JSON.stringify(data)
    );
  };

  const handleAdd = (product) => {
    const exists = products.some(
      (p) =>
        p.name.toLowerCase() ===
        product.name.toLowerCase()
    );

    if (exists) {
      alert("Product already exists");
      return;
    }

    saveProducts([...products, product]);
  };

  const handleUpdate = (product) => {
    const updated = products.map((p) =>
      p.id === product.id ? product : p
    );

    saveProducts(updated);
    setEditing(null);
  };

  const handleDelete = (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete) return;

    const updated = products.filter(
      (p) => p.id !== id
    );

    saveProducts(updated);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="container admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>

        <button
          className="btn logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="admin-grid">
        <div>
          <ProductForm
            key={editing ? editing.id : "new"}
            product={editing}
            onAdd={handleAdd}
            onUpdate={handleUpdate}
            onCancel={() =>
              setEditing(null)
            }
          />
        </div>

        <div>
          <ProductList
            products={filteredProducts}
            onEdit={setEditing}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}