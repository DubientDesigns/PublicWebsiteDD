// src/components/OurStory.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Link } from "react-router-dom"; // or next/link if you’re on Next.js

export default function OurStory() {
  const milestones = [
    {
      year: "2018",
      title: "Foundations Laid",
      desc: "During National Service, the founder immersed himself in web design fundamentals—laying the groundwork for what would become Dubient Designs.",
    },
    {
      year: "2019",
      title: "First Client Engagements",
      desc: "After crafting sites for friends and personal ventures, the founder began taking on paid clients while studying at NTU—marking the studio’s commercial debut.",
    },
    {
      year: "2020–21",
      title: "Technical Evolution",
      desc: "Dubient Designs expanded its toolkit—embracing React, WordPress, and Framer—to deliver modern, scalable digital experiences.",
    },
    {
      year: "2022",
      title: "Global Reach",
      desc: "With a refined process and growing reputation, the studio launched its first web applications and onboarded clients from across the globe.",
    },
    {
      year: "2023–24",
      title: "Full-Service Studio",
      desc: "Growing into a multidisciplinary team, Dubient Designs added software development and end-to-end design services—delivering complete digital solutions worldwide.",
    },
  ];

  const total = milestones.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // auto-advance every 5s (pauses on hover)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section className="py-20 bg-black">
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Left: Heading + Description */}
        <div className="text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">Milestones in Crafting </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-md mx-auto lg:mx-0">
            From a disciplined start in National Service to scaling into a
            global full-service studio, Dubient Designs has continually
            evolved—embracing new technologies and expanding its reach to bring
            transformative web and software solutions to clients everywhere.
          </p>
        </div>

        {/* Right: Slider + Progress + CTA */}
        <div
          className="relative mt-12 lg:mt-0 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {milestones.map(({ year, title, desc }) => (
              <div key={year} className="flex-shrink-0 w-full px-4">
                <SpotlightCard className="h-full">
                  <div className="space-y-5">
                    <span className="inline-block rounded-full bg-black px-4 py-1 text-sm font-semibold text-cyan-400">
                      {year}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="mt-2 text-gray-300 leading-relaxed">{desc}</p>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => setCurrent((c) => (c === 0 ? total - 1 : c - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-40 p-2 text-white hover:bg-opacity-60"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % total)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-40 p-2 text-white hover:bg-opacity-60"
          >
            ›
          </button>

          {/* Progress Bar */}
          <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${((current + 1) / total) * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            />
          </div>

          {/* See Portfolio CTA */}
          <div className="mt-8 text-center">
            <Link
              to="/portfolio"
              className="inline-block bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-cyan-300 transition"
            >
              See Portfolio →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
