// src/components/ContactSection.jsx
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
import { ObfuscatedEmailLink, OBFUSCATED_CONTACT_EMAIL_DISPLAY } from "../utils/emailObfuscation";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "", // Honeypot field for bot detection
  });
  const [submitted, setSubmitted] = useState(
    typeof window !== 'undefined' && window.location.search.includes('success=1')
  );
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    // Check honeypot field - if filled, it's likely a bot
    if (form.honeypot) {
      e.preventDefault();
      console.log('Bot detected - form submission blocked');
      return false;
    }
    
    // Check reCAPTCHA - uncomment when you have a site key
    // if (!recaptchaToken) {
    //   e.preventDefault();
    //   alert('Please complete the reCAPTCHA verification');
    //   return false;
    // }
    
    setTimeout(() => setSubmitted(true), 100); // Delay to allow Formspree to process
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
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
              action="https://formspree.io/f/xrbkwgyo"
              method="POST"
              className="enquiry-form"
              onSubmit={handleFormSubmit}
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
              
              {/* Honeypot field - hidden from users, visible to bots */}
              <input
                name="honeypot"
                type="text"
                value={form.honeypot}
                onChange={handleChange}
                style={{ 
                  position: 'absolute', 
                  left: '-9999px', 
                  width: '1px', 
                  height: '1px',
                  opacity: 0,
                  pointerEvents: 'none'
                }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              
              {/* reCAPTCHA - Uncomment and add your site key */}
              {/* <div className="recaptcha-container" style={{ marginBottom: '1rem' }}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"
                  onChange={handleRecaptchaChange}
                  theme="dark"
                />
              </div> */}
              
              <button
                type="submit"
                className="glow-button submit-btn"
              >
                Submit Enquiry
              </button>
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
              <ObfuscatedEmailLink obfuscatedEmail={OBFUSCATED_CONTACT_EMAIL_DISPLAY}>
                Contact@DubientDesigns.com
              </ObfuscatedEmailLink>
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
