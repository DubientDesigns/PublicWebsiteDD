// src/pages/Contact.jsx
import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Dubient Designs – Start Your Project or Get in Touch</title>
        <meta name="description" content="Reach out to Dubient Designs for web design, branding, or digital innovation. Fill out our contact form or connect with us directly to start your next project or ask any questions." />
        <link rel="canonical" href="https://dubientdesigns.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Dubient Designs" />
        <meta property="og:description" content="Reach out to Dubient Designs for web design, branding, or digital innovation. Fill out our contact form or connect with us directly to start your next project or ask any questions." />
        <meta property="og:url" content="https://dubientdesigns.com/contact" />
        <meta property="og:image" content="https://dubientdesigns.com/assets/logo.png" />
      </Helmet>
      <div className="pt-20">
        {" "}
        {/* ← adds 5rem (80px) top padding */}
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
