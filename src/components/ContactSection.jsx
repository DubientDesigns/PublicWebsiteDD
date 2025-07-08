// src/components/ContactSection.jsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import "./ContactSection.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.firstName + " " + form.lastName,
          email: form.email,
          message:
            `Phone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section full-width">
      <div className="contact-grid">
        {/* FORM */}
        <div className="form-panel">
          <h2 className="form-title">
            Let's <span className="accent">Get Started!</span>
          </h2>
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-[#00ffff] mb-4">Thank you!</h3>
              <p className="text-lg text-gray-200 mb-2">Your enquiry has been received.</p>
              <p className="text-gray-400">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="enquiry-form"
            >
              <div className="two-cols">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name *"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Company Email *"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Contact Number *"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Required component *
                </option>
                <option>Website</option>
                <option>SEO</option>
                <option>App</option>
                <option>Software</option>
              </select>
              <textarea
                name="message"
                rows="5"
                placeholder="Message *"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="glow-button submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
              {error && <div className="status-msg error">{error}</div>}
            </form>
          )}
        </div>

        {/* INFO PANEL */}
        <div className="info-panel">
          <h3 className="info-title">Connect with us</h3>
          <p className="info-copy">
            We would love to hear from you. Drop us a line and we'd love to
            schedule a call to get to know your needs better.
          </p>
          <ul className="contact-info">
            <li>
              <FaEnvelope />
              <a href="mailto:Contact@DubientDesigns.com">
                Contact@DubientDesigns.com
              </a>
            </li>
            <li>
              <FaPhoneAlt />
              <a href="tel:+6580731497">+65 8073 1497</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <address>
                190 Middle Road<br />
                #15-01 Fortune Centre<br />
                Singapore 188979<br />
                (By appointment only, no walk-ins)
              </address>
            </li>
            <li>
              <FaGlobe />
              <a
                href="https://dubientdesigns.com"
                target="_blank"
                rel="noreferrer"
              >
                dubientdesigns.com
              </a>
            </li>
          </ul>
          <div className="social-links">
            <a
              href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1E5pEYUsrt/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a href="wa.me/6580731497" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
