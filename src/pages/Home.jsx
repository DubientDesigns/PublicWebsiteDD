// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet";

// Page sections
import Hero from "../components/Hero";
import AboutSection from "../components/Aboutsection";
import FeaturedWork from "../components/FeaturedWork";
import ServicesShowcase from "../components/ServicesShowcase";
import ClientsSection from "../components/ClientsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactSection";
import Footer from "../components/Footer";

// Assets for FeaturedWork
import starixVid from "../assets/videos/starix.mp4";
import luxxerVid from "../assets/videos/LuxxerVeer.mp4";
import starixBg from "../assets/img/starix-texture.jpg";
import luxxerBg from "../assets/img/luxxerveer-texture.jpg";

const featuredItems = [
  {
    id: 1,
    title: "Starix",
    videoSrc: starixVid,
    bgImage: starixBg,
    bgColor: "#064f46",
    route: "/portfolio/starix",
  },
  {
    id: 2,
    title: "Luxxer Veer",
    videoSrc: luxxerVid,
    bgImage: luxxerBg,
    bgColor: "#5e4937",
    route: "/portfolio/luxxerveer",
  },
];

export default function Home() {
  return (
    <>
      {/* ── SEO Helmet ── */}
      <Helmet>
        <html lang="en" />
        <title>
          Dubient Designs | Building Brands & Websites for a Borderless World
        </title>
        <meta
          name="description"
          content="From startups to enterprises, Dubient Designs builds pixel-perfect web & mobile experiences that engage users, no matter where in the world they are."
        />
        <link rel="canonical" href="https://dubientdesigns.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dubient Designs | Building Brands & Websites for a Borderless World"
        />
        <meta
          property="og:description"
          content="From startups to enterprises, Dubient Designs builds pixel-perfect web & mobile experiences that engage users, no matter where in the world they are."
        />
        <meta property="og:url" content="https://dubientdesigns.com/" />
        <meta
          property="og:image"
          content="https://dubientdesigns.com/assets/logo.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dubient Designs | Building Brands & Websites for a Borderless World"
        />
        <meta
          name="twitter:description"
          content="From startups to enterprises, Dubient Designs builds pixel-perfect web & mobile experiences that engage users, no matter where in the world they are."
        />
        <meta
          name="twitter:image"
          content="https://dubientdesigns.com/assets/logo.png"
        />

        {/* JSON-LD Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dubient Designs",
            url: "https://dubientdesigns.com",
            logo: "https://dubientdesigns.com/assets/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "contact@dubientdesigns.com",
                telephone: "+6580731497",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: "en",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* ── Page Sections ── */}
      <Hero />

      <AboutSection />

      <FeaturedWork items={featuredItems} />

      <ServicesShowcase />

      <ClientsSection />

      <TestimonialsSection />

      <ContactForm />

      <Footer />
    </>
  );
}
