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
import FAQSection from "../components/FAQSection";
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
                // Email obfuscated for bot protection while maintaining SEO
                email: "contact" + "@" + "dubientdesigns" + "." + "com",
                telephone: "+6580731497",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: "en",
              },
            ],
          })}
        </script>

        {/* JSON-LD FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes a good portfolio website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A good portfolio website showcases your best work with high-quality visuals, clear navigation, and compelling case studies. It should load fast, be mobile-responsive, and include clear calls-to-action that convert visitors into clients."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to build a website in Singapore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Website costs in Singapore range from $2,000 for basic sites to $50,000+ for enterprise solutions. Factors include design complexity, functionality requirements, and ongoing maintenance needs. Most businesses invest $5,000-$15,000 for professional websites that drive results."
                }
              },
              {
                "@type": "Question",
                "name": "Should I choose Shopify, Wix, or WordPress?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose Shopify for e-commerce (best for online stores), Wix for simple business sites with drag-and-drop ease, or WordPress for maximum flexibility and SEO control. Consider your technical skills, budget, and specific needs."
                }
              },
              {
                "@type": "Question",
                "name": "What is the timeline to launch a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simple websites take 2-4 weeks, while complex projects can take 8-12 weeks. Timeline depends on design revisions, content preparation, and functionality requirements. We recommend starting content creation early."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get more leads through my website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Optimize for conversions with clear value propositions, compelling CTAs, and lead magnets like free guides or consultations. Improve SEO for organic traffic, use analytics to identify drop-off points, and create content that addresses your audience's pain points."
                }
              }
            ]
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

      <FAQSection />

      <ContactForm />

      <Footer />
    </>
  );
}
