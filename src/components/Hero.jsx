// src/components/Hero.jsx
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import ShinyText from "./ShinyText";
import "./Hero.css";
import "./GlowButton.css";
import { Link } from "react-router-dom";

import heroPoster from "../assets/hero/hero-poster.png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  const iconStyle = {
    backgroundColor: "transparent",
    border: "2px solid #00ffff",
    borderRadius: "50%",
    padding: "0.6rem",
    boxShadow: "0 0 10px #00ffff",
    color: "#00ffff",
    fontSize: "1.5rem",
  };

  return (
    <div className="hero-container">
      {/* Background Poster */}
      <img
        src={heroPoster}
        alt="Hero Poster"
        draggable={false}
        className={`hero-poster ${loaded ? "fadeOut" : "fadeIn"}`}
      />

      {/* Spline Canvas */}
      <Spline
        scene="https://prod.spline.design/lZJU3cbNQbTQLlJz/scene.splinecode"
        onLoad={() => setLoaded(true)}
        className={`hero-spline ${loaded ? "fadeIn" : "fadeOut"}`}
      />

      {/* Hero Text Overlay */}
      <div className="hero-text">
        <p className="hero-pain">
          Struggling to stand out online? We've got you.
        </p>

        <h1>
          A Globally{" "}
          <span className="hero-key">
            <ShinyText text="Trusted" speed={3} />
          </span>
          <br />
          Web Design &amp;
          <br />
          Digital Innovation Agency
        </h1>

        <p>
          At <strong>Dubient Designs</strong>, we don't just build websites, we
          craft tailored digital experiences that grow your brand, boost
          engagement, and drive measurable success.
        </p>

        {/* ← Two CTAs side by side */}
        <div className="cta-group">
          <Link to="/portfolio" className="hero-cta hero-cta-filled">
            View Portfolio
          </Link>
          <a href="#contact" className="hero-cta hero-cta-outline">
            Get Started
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://www.instagram.com/dubientdesigns/"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/16SpwqA7Hx/"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/6580731497"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
