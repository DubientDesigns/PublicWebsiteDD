// src/components/AboutSection.jsx
import React from 'react';
import RotatingText from './RotatingText';
import CountUp from 'react-countup';
import './aboutsection.css';
import teamImage from '../assets/team.png';

const AboutSection = ({
  ctaText = 'More About Us →',
  ctaHref = '/about'
}) => {
  return (
    <section className="about-section">
      <div className="about-grid">
        {/* Left Image */}
        <div className="about-image">
          <img src={teamImage} alt="Dubient Designs Team" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="rotating-heading">
            Crafting&nbsp;
            <span className="badge-wrapper">
              <RotatingText
                texts={['Websites', 'Experiences', 'Solutions', 'Results']}
                mainClassName="badge-rotate-text"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h2>

          <p>
            We’ve built <strong>hundreds of websites and custom applications</strong> — and we continue to grow every day. Our team brings deep expertise across platforms like Shopify, WordPress, Framer, and React, while also offering <strong>fully custom coded solutions</strong> for clients who need advanced functionality.
          </p>
          <p>
            As Dubient Designs evolves, we’ll be launching new services in <strong>software development</strong>, automation, and system integration, helping modern businesses operate faster, smarter, and more beautifully.
          </p>

          {/* ✅ 4 Stats */}
          <div className="stats-container">
            <div className="stat-box">
              <h2><CountUp end={5} duration={2} /></h2>
              <p>Years of Success</p>
            </div>
            <div className="stat-box">
              <h2><CountUp end={1000} duration={2} separator="," />+</h2>
              <p>Websites Launched</p>
            </div>
            <div className="stat-box">
              <h2><CountUp end={500} duration={2} />+</h2>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat-box">
              <h2><CountUp end={90} duration={2} />%</h2>
              <p>Client Retention</p>
            </div>
          </div>

          {/* Configurable CTA */}
          <a href={ctaHref} className="about-cta">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
