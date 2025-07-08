// src/components/ServicesShowcase.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./GlowButton.css";
import "./FancyGlowButton.css";

/* ───────── images ───────── */
import imgMobile from "../assets/services/services-1.png";
import imgUiUx from "../assets/services/services-2.png";
import imgBranding from "../assets/services/services-3.png";
import imgSoftware from "../assets/services/services-4.png";

/* ───────── data ───────── */
const services = [
  {
    id: "mobile-web",
    title: "Mobile App & Web Development",
    desc: "Whether you need a sleek company website or a full-blown mobile app, we've got you covered. From custom HTML/CSS/JavaScript and React/Next.js builds to Framer prototypes and Flutter integrations, we turn your ideas into pixel-perfect, high-performance digital experiences—on Shopify, WordPress, Wix, or any platform of your choice.",
    tags: ["React • Next.js • Flutter"],
    img: imgMobile,
  },
  {
    id: "ui-ux",
    title: "UI / UX Design",
    desc: "A beautiful interface is just the beginning—our user-centric design process ensures every interaction feels intuitive and engaging. We craft wireframes, prototypes, and polished visuals in Figma or Maestro, then refine them into seamless user journeys that boost conversions and keep your customers coming back.",
    tags: ["Prototyping • Research • Handoff"],
    img: imgUiUx,
  },
  {
    id: "brand-illus",
    title: "Branding & Illustrations",
    desc: "Your brand's story matters, and our in-house illustrators and identity experts bring it to life. From custom logos and iconography to on-brand style guides, we create cohesive visual systems that look stunning on everything from business cards and mugs to your website and social media channels.",
    tags: ["Visual Identity • Illustration"],
    img: imgBranding,
  },
  {
    id: "software",
    title: "Software Development",
    desc: "Need backend logic, complex integrations, or automated workflows? Our team specializes in API-driven SaaS solutions and third-party integrations—plus everything in between. We architect scalable code and reliable systems that grow with your business.",
    tags: ["SaaS • APIs • Integrations"],
    img: imgSoftware,
  },
];

export default function ServicesShowcase() {
  const [hovered, setHovered] = useState(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 md:py-24 bg-[#0d0d0d] text-[#F4F1E9]"
    >
      {/* Headline */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
        What&nbsp;
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--brand-grad)" }}
        >
          Dubient&nbsp;Designs
        </span>
        &nbsp;Can&nbsp;Do
      </h2>

      {/* List + floating image */}
      <div className="relative max-w-2xl md:max-w-6xl mx-auto mt-10 md:mt-20">
        <ul className="space-y-10 md:space-y-16 p-0">
          {services.map((svc, i) => {
            const active = hovered === i;
            return (
              <li
                key={svc.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-[#333] pt-8 pb-8 cursor-pointer"
              >
                {/* Title + description */}
                <div className="max-w-2xl">
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight transition-colors duration-200 ${
                      active ? "text-[var(--brand-blue)]" : ""
                    }`}
                  >
                    {svc.title}
                  </h3>

                  <AnimatePresence>
                    {active && (
                      <motion.p
                        key={svc.id + "-desc"}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-base md:text-sm leading-relaxed text-[#c0c0c0] overflow-hidden"
                      >
                        {svc.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tag chips - now visible on mobile */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-block text-black text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "var(--brand-blue)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Mobile: show floating image below each service */}
                <div className="block md:hidden mt-6 w-full flex justify-center">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-48 h-32 object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Desktop floating image */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.img
              key={services[hovered].img}
              src={services[hovered].img}
              alt={services[hovered].title}
              initial={{ opacity: 0, x: 120, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: 120, rotate: -4 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="hidden md:block pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 w-[360px] md:w-[440px] rounded-xl shadow-2xl"
            />
          )}
        </AnimatePresence>
      </div>

      {/* CTA button */}
      <div className="text-center mt-16 md:mt-24">
        <Link to="/services" className="glowbutton">
          View&nbsp;Full&nbsp;Services
        </Link>
      </div>

      {/* bottom separator */}
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)/40] to-transparent" />
    </section>
  );
}
