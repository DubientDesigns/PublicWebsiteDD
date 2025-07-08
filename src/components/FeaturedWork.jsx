// src/components/FeaturedWork.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedWork.css";
import "./GlowButton.css";

/* ────────── Single card ────────── */
const Card = ({ title, videoSrc, bgImage, bgColor, route }) => {
  const vidRef = React.useRef(null);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const vid = vidRef.current;
    const card = cardRef.current;
    if (!vid || !card) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(card);
    return () => io.disconnect();
  }, []);

  return (
    <article ref={cardRef} className="featured-card">
      {/* blurred backdrop */}
      <img
        src={bgImage}
        alt=""
        className="featured-bg"
        style={{ backgroundColor: bgColor }}
        loading="lazy"
      />
      <div className="featured-grad" />

      {/* video + title */}
      <div className="featured-card-inner">
        <video
          ref={vidRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="featured-vid"
        />
        <h3 className="featured-title">{title}</h3>
      </div>

      {/* full-card link */}
      <Link to={route} className="featured-link" />
    </article>
  );
};

/* ────────── Section wrapper ────────── */
const FeaturedWork = ({ items = [], showCTA = true }) => (
  <section id="featured" className="featured-section">
    <div className="featured-head">
      <h2
        style={{
          fontSize: "clamp(2rem,4.2vw,3rem)",
          fontWeight: 900,
          margin: 0,
        }}
      >
        Featured&nbsp;Work
      </h2>

      {showCTA && (
        <Link to="/portfolio" className="glowbutton">
          View&nbsp;All&nbsp;Projects
        </Link>
      )}
    </div>

    <div className="featured-grid">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default FeaturedWork;
