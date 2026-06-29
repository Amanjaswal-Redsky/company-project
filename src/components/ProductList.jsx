export default function ProductList({
  products = [],
  onEdit,
  onDelete,
}) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      onDelete(id);
    }
  };

  if (products.length === 0) {
    return (
      <div className="empty-products">
        <h3>No Products Found</h3>
        <p>Add your first product.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img
            src={
              p.image ||
              "https://via.placeholder.com/300x200"
            }
            alt={p.name}
          />

          <div className="product-content">
            <h3>{p.name}</h3>

            <p className="price">
              ${Number(p.price).toFixed(2)}
            </p>

            <p className="description">
              {p.description ||
                "No description available"}
            </p>

            <div className="actions">
              <button
                className="btn edit-btn"
                onClick={() => onEdit(p)}
              >
                Edit
              </button>

              <button
                className="btn delete-btn"
                onClick={() =>
                  handleDelete(p.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}