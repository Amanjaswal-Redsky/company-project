import { useState, useEffect } from "react";

export default function ProductForm({
  product,
  onAdd,
  onUpdate,
  onCancel,
}) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        description: product.description || "",
        image: product.image || "",
      });
    } else {
      setFormData({
        name: "",
        price: "",
        description: "",
        image: "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.price
    ) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      id: product?.id || Date.now().toString(),
      name: formData.name.trim(),
      price: Number(formData.price),
      description: formData.description.trim(),
      image: formData.image || "",
    };

    if (product) {
      onUpdate(payload);
    } else {
      onAdd(payload);
    }

    setFormData({ name: "", price: "", description: "", image: "" });
  };

  return (
    <form
      className="card product-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {product
          ? "Edit Product"
          : "Add Product"}
      </h2>

      <label>
        Product Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />
      </label>

      <label>
        Price
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          min="0"
          required
        />
      </label>

      <label>
        Description
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product description"
          rows="4"
        />
      </label>

      <label>
        Upload Image
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>

      {formData.image && (
        <div className="preview">
          <img
            src={formData.image}
            alt="Preview"
            onError={(e) => {
              e.target.style.display = "none";
            }}
            style={{ maxWidth: 200, borderRadius: 8, marginTop: 8 }}
          />
        </div>
      )}

      <div className="form-actions">
        <button
          className="btn"
          type="submit"
        >
          {product
            ? "Update Product"
            : "Add Product"}
        </button>

        {product && (
          <button
            className="btn ghost"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}