// src/pages/Grants.jsx
import React from "react";

export default function Grants() {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col justify-center items-center text-center px-6 py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#00ffff] drop-shadow-lg mb-4">
        Grants
      </h1>
      <p className="text-lg md:text-xl text-[#e0e0e0] max-w-2xl mb-8">
        Our Grants program is launching soon! 🚀
        <br />
        We’re busy putting the finishing touches on a set of grants designed to
        supercharge your next project. Stay tuned for updates!
      </p>
      <button
        className="px-6 py-3 border-2 border-[#00ffff] text-[#00ffff] font-semibold rounded-full shadow-[0_0_20px_rgba(0,255,255,0.7)] transition-transform hover:scale-105"
        onClick={() => alert("Thanks! We’ll let you know when it’s live.")}
      >
        Notify Me
      </button>
    </div>
  );
}
