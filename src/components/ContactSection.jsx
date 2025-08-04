// src/components/ContactSection.jsx
import React, { useState, useRef, useEffect } from "react";
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
import { validateForm, checkRateLimit, recordSubmission, detectSuspiciousBehavior } from "../utils/formValidation";
import { trackSpamAttempt } from "../utils/spamMonitoring";

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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime, setFormStartTime] = useState(null);
  const recaptchaRef = useRef(null);

  // Track when user starts filling the form
  useEffect(() => {
    if (!formStartTime) {
      setFormStartTime(Date.now());
    }
  }, [form.firstName, form.lastName, form.email, formStartTime]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear field error when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    try {
      // 1. Check honeypot field - if filled, it's likely a bot
      if (form.honeypot) {
        trackSpamAttempt('honeypot', { form: form });
        console.log('Bot detected - form submission blocked');
        setIsSubmitting(false);
        return false;
      }

      // 2. Check rate limiting
      if (!checkRateLimit()) {
        trackSpamAttempt('rate_limit');
        setFormErrors({ general: 'Too many submissions. Please wait before trying again.' });
        setIsSubmitting(false);
        return false;
      }

      // 3. Validate form data
      const validation = validateForm(form);
      if (!validation.isValid) {
        setFormErrors(validation.errors);
        if (validation.errors.spam) {
          trackSpamAttempt('validation', { errors: validation.errors });
        }
        setIsSubmitting(false);
        return false;
      }

      // 4. Check for suspicious behavior
      const timeToFill = formStartTime ? Date.now() - formStartTime : 0;
      const suspiciousIndicators = detectSuspiciousBehavior(form, timeToFill);
      if (suspiciousIndicators.length > 0) {
        trackSpamAttempt('suspicious_behavior', { 
          indicators: suspiciousIndicators,
          timeToFill 
        });
        // Don't block, but log for monitoring
        console.warn('Suspicious behavior detected:', suspiciousIndicators);
      }

      // 5. Check reCAPTCHA - uncomment when you have a site key
      // if (!recaptchaToken) {
      //   setFormErrors({ general: 'Please complete the reCAPTCHA verification' });
      //   setIsSubmitting(false);
      //   return false;
      // }

      // 6. Record successful submission attempt
      recordSubmission();

      // 7. Submit to Formspree
      const formData = new FormData(e.target);
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          honeypot: "",
        });
        setRecaptchaToken(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormErrors({ general: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
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
            <>
              {/* General error display */}
              {formErrors.general && (
                <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 text-sm">{formErrors.general}</p>
                </div>
              )}
              <form
              action="https://formspree.io/f/xrbkwgyo"
              method="POST"
              className="enquiry-form"
              onSubmit={handleFormSubmit}
            >
              <div className="two-cols">
                <div>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={handleChange}
                    className={formErrors.firstName ? 'error' : ''}
                    required
                  />
                  {formErrors.firstName && (
                    <p className="text-red-400 text-xs mt-1">{formErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name *"
                    value={form.lastName}
                    onChange={handleChange}
                    className={formErrors.lastName ? 'error' : ''}
                    required
                  />
                  {formErrors.lastName && (
                    <p className="text-red-400 text-xs mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Company Email *"
                  value={form.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                  required
                />
                {formErrors.email && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>
              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Contact Number *"
                  value={form.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? 'error' : ''}
                  required
                />
                {formErrors.phone && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
                )}
              </div>
              <div>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={formErrors.service ? 'error' : ''}
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
                {formErrors.service && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.service}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message *"
                  value={form.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                  required
                />
                {formErrors.message && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>
              
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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
            </>
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
