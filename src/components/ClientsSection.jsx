import React from "react";
import "./ClientsSection.css";

import logo1  from "../assets/clients/1.png";
import logo2  from "../assets/clients/2.png";
import logo3  from "../assets/clients/3.png";
import logo4  from "../assets/clients/4.png";
import logo5  from "../assets/clients/5.png";
import logo6  from "../assets/clients/6.png";
import logo7  from "../assets/clients/7.png";
import logo8  from "../assets/clients/8.png";
import logo9  from "../assets/clients/9.png";
import logo10 from "../assets/clients/10.png";
import logo11 from "../assets/clients/11.png";

const clients = [
  { src: logo1,  light: true },
  { src: logo2,  light: true },
  { src: logo3,  light: false },
  { src: logo4,  light: false },
  { src: logo5,  light: false },
  { src: logo6,  light: false },
  { src: logo7,  light: false },
  { src: logo8,  light: false },
  { src: logo9,  light: false },
  { src: logo10, light: false },
  { src: logo11, light: false },
];

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="clients-section__text">
        <small className="preline">CLIENTS WE WORK WITH</small>
        <h2 className="headline">
          Trusted by Industry <span className="highlight">Leaders Worldwide.</span>
        </h2>
        <p className="body">
          From ambitious startups to established enterprises, we’ve partnered with over 500 businesses
          to craft high-impact websites, apps, and digital experiences.
        </p>
        <p className="body">
          Let’s add your brand to our roster of success stories. Reach out and see how we can bring
          your vision to life.
        </p>
      </div>

      <div className="clients-grid">
        {clients.map((c, idx) => (
          <div
            key={idx}
            className={`clients-grid__item${c.light ? " light-plate" : ""}`}
          >
            <img src={c.src} alt={`Client ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
