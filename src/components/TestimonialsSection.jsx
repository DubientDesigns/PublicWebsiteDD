import React from "react";
import "./TestimonialsSection.css";

import logo3  from "../assets/clients/3.png";  // Onyx Collections
import logo4  from "../assets/clients/4.png";  // Luxxe Veer
import logo5  from "../assets/clients/5.png";  // Starix
import logo7  from "../assets/clients/7.png";  // NSC Optima
import logo8  from "../assets/clients/8.png";  // Royale Saro
import logo9  from "../assets/clients/9.png";  // September

const testimonials = [
  {
    quote: "Working with Dubient Designs was a game-changer: they captured our vision perfectly and delivered a site that's both beautiful and lightning-fast.",
    name: "Starix",
    role: "Pelco Dome Cameras",
    logo: logo5,
    bg: "#1f1f1f"
  },
  {
    quote: "Their attention to detail and proactive communication set them apart. Our e-commerce conversion rate jumped 35% within weeks.",
    name: "Luxxe Veer",
    role: "Diamond Jewelry",
    logo: logo4,
    bg: "#263043"
  },
  {
    quote: "I've collaborated with many agencies, but Dubient's mix of creativity and technical skill is unmatched. Highly recommended.",
    name: "Onyx Collections",
    role: "Second-hand Luxury Goods",
    logo: logo3,
    bg: "#2b1f2e"
  },
  {
    quote: "Dubient Designs revamped our corporate site, clearly showcasing our global logistics and supply-chain services, leading to a 40% jump in qualified leads.",
    name: "NSC Worldwide",
    role: "Integrated Supply Chain Services",
    logo: logo7,
    bg: "#27211f"
  },
  {
    quote: "We needed a fresh look for our sari & jewelry rental business. Dubient brought our brand to life with style and efficiency.",
    name: "Royale Saro",
    role: "Sari & Jewelry Rentals",
    logo: logo8,
    bg: "#1f2421"
  },
  {
    quote: "The team took our concept and ran with it. Our site launched ahead of schedule and has never looked better.",
    name: "September",
    role: "Pearl Jewelry",
    logo: logo9,
    bg: "#201f23"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2 className="ts-heading">
        What Our <span className="ts-highlight">Clients Say</span>
      </h2>

      {/* Desktop carousel */}
      <div className="ts-carousel hidden md:block">
        <div className="ts-track">
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              className="ts-card"
              style={{ backgroundColor: t.bg }}
            >
              <p className="ts-quote">“{t.quote}”</p>
              <div className="ts-author">
                <img src={t.logo} alt={t.name} className="ts-logo" />
                <div>
                  <p className="ts-name">{t.name}</p>
                  <p className="ts-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical stack */}
      <div className="block md:hidden space-y-6 mt-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="ts-card"
            style={{ backgroundColor: t.bg, maxWidth: '100%', flex: '1 1 100%', padding: '1.5rem' }}
          >
            <p className="ts-quote" style={{ fontSize: '1.1rem', marginBottom: '1.2rem' }}>“{t.quote}”</p>
            <div className="ts-author">
              <img src={t.logo} alt={t.name} className="ts-logo" />
              <div>
                <p className="ts-name">{t.name}</p>
                <p className="ts-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
