// src/pages/Portfolio.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Modal from "../components/Modal";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// phone‐mockup images
import lcImg       from "../assets/PORTFOLIOIMG/LCBOWLINGIMG2.png";
import lvImg       from "../assets/PORTFOLIOIMG/LUXXEVEERIMG2.png";
import royalImg    from "../assets/PORTFOLIOIMG/ROYALESAROIMG2.png";
import pawsImg     from "../assets/PORTFOLIOIMG/PAWSYIMG2.png";
import starixImg   from "../assets/PORTFOLIOIMG/STARIXIMG2.png";
import t2uImg      from "../assets/PORTFOLIOIMG/TruetoyouIMG2.png";
import nscImg      from "../assets/PORTFOLIOIMG/NSCIMG2.png";
import zeptImg     from "../assets/PORTFOLIOIMG/ZEPTEMBERIMG2.png";
import mapleImg    from "../assets/PORTFOLIOIMG/MAPLEIMG.png";
import vconsultImg from "../assets/PORTFOLIOIMG/VCONSULT2-2.png";

// video imports
import lcVid       from "../assets/PORTFOLIOVID/LCBOWLINGVID1.mp4";
import lvVid       from "../assets/PORTFOLIOVID/LUXXEVEERVID1.mp4";
import royalVid    from "../assets/PORTFOLIOVID/ROYALESAROVID.mp4";
import pawsVid     from "../assets/PORTFOLIOVID/PAWSYVID.mp4";
import starixVid   from "../assets/PORTFOLIOVID/STARIXVID.mp4";
import t2uVid      from "../assets/PORTFOLIOVID/TruetoyouVID.mp4";
import nscVid      from "../assets/PORTFOLIOVID/NSCVID.mp4";
import zeptVid     from "../assets/PORTFOLIOVID/ZEPTEMBERVID.mp4";
import mapleVid    from "../assets/PORTFOLIOVID/MAPLEVID.mp4";
import vconsultVid from "../assets/PORTFOLIOVID/VCONSULTVID.mp4";

// backdrop images
import lcBg       from "../assets/BACKDROP/LCBACKGROUND.png";
import lvBg       from "../assets/BACKDROP/LUXXEVEERBACKGROUND.png";
import royalBg    from "../assets/BACKDROP/ROYALESAROBACKGROUND.png";
import pawsBg     from "../assets/BACKDROP/PAWSYPETSBACKGROUND.png";
import starixBg   from "../assets/BACKDROP/STARIX BACKGROUND.png";
import t2uBg      from "../assets/BACKDROP/TRUETOYOUBACKROUND.png";
import nscBg      from "../assets/BACKDROP/NSCOPTIMABACKGROUND.png";
import zeptBg     from "../assets/BACKDROP/ZEPTEMBERBACKGROUND.png";
import mapleBg    from "../assets/BACKDROP/MAPLEBACKGROUND.png";
import vconsultBg from "../assets/BACKDROP/VCONSULTBACKGROUDN.png";

export default function Portfolio() {
  const items = [
    { id:"lc",    label:"LC Bowling",    description:"A vibrant bowling community platform built in React.", img:lcImg,    video:lcVid,    backdrop:lcBg },
    { id:"lv",    label:"Luxxe Veer",    description:"An earth-inspired jewellery showcase.",                img:lvImg,    video:lvVid,    backdrop:lvBg },
    { id:"royal", label:"Royale Saro",   description:"A second-hand traditional wear marketplace.",           img:royalImg, video:royalVid, backdrop:royalBg },
    { id:"paws",  label:"Paws Pet Shop", description:"An online pet-supplies store for all your pawsome needs.", img:pawsImg, video:pawsVid, backdrop:pawsBg },
    { id:"starix",label:"Starix Security",description:"A security solutions distributor website.",            img:starixImg,video:starixVid,backdrop:starixBg },
    { id:"t2u",   label:"TrueToYou",     description:"A fashion brand selling socks & accessories.",         img:t2uImg,   video:t2uVid,   backdrop:t2uBg },
    { id:"nsc",   label:"NSC Suppliers", description:"A seafood supplier specializing in fish and cod.",     img:nscImg,   video:nscVid,   backdrop:nscBg },
    { id:"zept",  label:"ZepTember",     description:"A pearl-jewellery boutique.",                           img:zeptImg,  video:zeptVid,  backdrop:zeptBg },
    { id:"maple", label:"Maple Export",  description:"A timber production company website.",                  img:mapleImg, video:mapleVid, backdrop:mapleBg },
    { id:"vconsult",label:"Village Consultancy",description:"A business consultancy company.",                img:vconsultImg,video:vconsultVid,backdrop:vconsultBg },
  ];

  const [active, setActive] = useState(null);

  return (
    <>
      <Helmet>
        <title>My Portfolio – Dubient Designs</title>
        <meta
          name="description"
          content="Explore Dubient Designs’ portfolio: web projects from e-commerce to corporate, each built with React and tailored to client needs."
        />
      </Helmet>

      <main className="pt-20 px-4 md:px-8">
        {/* two‐tone heading like your sample */}
        <h1 className="text-center text-5xl font-extrabold mb-2">
          <span className="text-white">My </span>
          <span className="text-blue-400">Portfolio</span>
        </h1>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          A curated selection of sites and apps we’ve crafted—from boutiques
          to B2B platforms—showcasing clean design, responsive builds, and
          seamless UX.
        </p>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.id}
              className="relative flex flex-col items-center pt-4 pb-2 overflow-hidden rounded-lg"
              style={{
                backgroundImage:  `url(${it.backdrop})`,
                backgroundSize:    "cover",
                backgroundPosition:"center",
              }}
            >
              <img
                src={it.img}
                alt={it.label}
                onClick={() => setActive(it)}
                className="cursor-pointer w-full rounded shadow-lg object-contain transition-transform hover:scale-105 z-20"
              />

              <div className="absolute bottom-4 left-4 w-2/3 bg-black bg-opacity-60 p-3 rounded z-10">
                <h2 className="text-white text-xl font-semibold">{it.label}</h2>
                <p className="text-white text-sm mt-1">{it.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* full-width extras */}
      <div className="w-full">
        <TestimonialsSection />
      </div>
      <div className="w-full">
        <ContactSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>

      {/* video modal */}
      {active && (
        <Modal onClose={() => setActive(null)}>
          <video
            src={active.video}
            controls
            autoPlay
            preload="metadata"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </Modal>
      )}
    </>
  );
}
