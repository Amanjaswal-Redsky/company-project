import { useState } from "react";
import QRCodeComponent from "../components/QRCodeComponent";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>

          <p>
            Have a question or project in mind?
            We'd love to hear from you.
          </p>

          <div className="contact-details">
            <p>📧 contact@octotech.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Punjab, India</p>
          </div>
           <QRCodeComponent />
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            className="contact-btn"
            type="submit"
          >
            Send Message
          </button>

          {success && (
            <p className="success-msg">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}