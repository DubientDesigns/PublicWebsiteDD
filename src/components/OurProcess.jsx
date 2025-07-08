// src/components/OurProcess.jsx
import React from "react";

const steps = [
  {
    number: 1,
    title: "Discover",
    desc: "Dive deep into your goals, audience, and brand identity.",
  },
  {
    number: 2,
    title: "Design",
    desc: "Moodboards and wireframes until you’re thrilled with the look.",
  },
  {
    number: 3,
    title: "Develop",
    desc: "Build with React, Shopify, WordPress, or Framer for full responsiveness.",
  },
  {
    number: 4,
    title: "Deploy & Optimize",
    desc: "Launch, test, and fine-tune for speed, SEO, and security.",
  },
  {
    number: 5,
    title: "Support",
    desc: "Enjoy six months of free maintenance; ongoing plans available.",
  },
];

export default function OurProcess() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Process
            </span>
          </h2>
          <p className="text-gray-400">
            From kickoff to launch—and beyond—here’s how we turn your ideas into
            polished, high-performance websites.
          </p>
        </div>

        {/* Top row: steps 1–3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.slice(0, 3).map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl p-px 
                         bg-white 
                         hover:bg-gradient-to-r hover:from-cyan-400 hover:via-teal-300 hover:to-blue-500 
                         transition-all"
            >
              <div className="bg-black rounded-xl p-6 h-full">
                <div
                  className="w-8 h-8 flex items-center justify-center 
                             rounded-full border border-white text-white font-bold mb-4"
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: steps 4–5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {steps.slice(3).map((step) => (
            <div
              key={step.number}
              className="group w-full max-w-md rounded-2xl p-px 
                         bg-white 
                         hover:bg-gradient-to-r hover:from-cyan-400 hover:via-teal-300 hover:to-blue-500 
                         transition-all"
            >
              <div className="bg-black rounded-xl p-6 h-full">
                <div
                  className="w-8 h-8 flex items-center justify-center 
                             rounded-full border border-white text-white font-bold mb-4"
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
