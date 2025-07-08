// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/Aboutsection";
import OurStory from "../components/OurStory";
import ScrollReveal from "../components/ScrollReveal";
import OurProcess from "../components/OurProcess";
import TestimonialsSection from "../components/TestimonialsSection";
import ShinyText from "../components/ShinyText";
import TiltedCard from "../components/TiltedCard";
import ContactForm from "../components/ContactSection";
import Footer from "../components/Footer";
import founderImage from "../assets/akshay.jpg";

import shot1 from "../assets/shots/shot1.png";
import shot2 from "../assets/shots/shot2.png";
import shot3 from "../assets/shots/shot3.png";
import shot4 from "../assets/shots/shot4.png";
import shot5 from "../assets/shots/shot5.png";
import shot6 from "../assets/shots/shot6.png";

export default function About() {
  const brandCyan = "rgba(38, 215, 255, 0.6)";

  const leftShots = [
    { src: shot1, alt: "Site shot 1" },
    { src: shot2, alt: "Site shot 2" },
    { src: shot3, alt: "Site shot 3" },
  ];
  const rightShots = [
    { src: shot4, alt: "Site shot 4" },
    { src: shot5, alt: "Site shot 5" },
    { src: shot6, alt: "Site shot 6" },
  ];

  return (
    <>
      {/* ─── SEO ─── */}
      <Helmet>
        <html lang="en" />
        <title>About Us | Dubient Designs – Global Web & Brand Studio</title>
        <meta
          name="description"
          content="Since 2018, Dubient Designs has crafted stunning, high-performance websites and apps for clients worldwide—uplifting brands with elegant design, rock-solid code, and human-first strategy."
        />
        <link rel="canonical" href="https://dubientdesigns.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Dubient Designs" />
        <meta
          property="og:description"
          content="Learn our journey: from National Service beginnings to a full-service digital studio powering top brands globally. Meet the founder and discover our mission, vision, and values."
        />
        <meta property="og:url" content="https://dubientdesigns.com/about" />
        <meta
          property="og:image"
          content="https://dubientdesigns.com/assets/og-about.png"
        />
      </Helmet>

      {/* ─── Hero + Stats ─── */}
      <section className="w-full bg-black text-white">
        <AboutSection ctaText="See Our Services →" ctaHref="/services" />
      </section>

      {/* ─── Our Story ─── */}
      <OurStory />

      {/* ─── Mission & Vision w/ TiltedCard stacks ─── */}
      <section className="w-full bg-black text-white py-24">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-16">
          <div className="hidden lg:flex flex-col gap-8">
            {leftShots.map((img, i) => (
              <TiltedCard
                key={i}
                imageSrc={img.src}
                altText={img.alt}
                containerWidth="250px"
                containerHeight="160px"
                imageWidth="250px"
                imageHeight="160px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
              />
            ))}
          </div>

          <div className="flex-1 space-y-16 text-center max-w-2xl">
            <ScrollReveal containerClassName="text-center">
              <ShinyText
                text="Mission & Vision"
                speed={3}
                highlightColor={brandCyan}
                className="text-5xl md:text-6xl font-extrabold mx-auto"
              />
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal enableBlur={false}>
                <div>
                  <ShinyText
                    text="Our Mission"
                    disabled
                    highlightColor={brandCyan}
                    className="text-3xl font-semibold mb-4 block text-center"
                  />
                  <p className="text-2xl leading-relaxed">
                    We fuse design, code, and strategy to empower brands to
                    outshine the competition online.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal enableBlur={false}>
                <div>
                  <ShinyText
                    text="Our Vision"
                    disabled
                    highlightColor={brandCyan}
                    className="text-3xl font-semibold mb-4 block text-center"
                  />
                  <p className="text-2xl leading-relaxed">
                    A future where every business thrives through stunning,
                    intuitive digital experiences—no tech jargon or budget
                    barriers required.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-8">
            {rightShots.map((img, i) => (
              <TiltedCard
                key={i}
                imageSrc={img.src}
                altText={img.alt}
                containerWidth="250px"
                containerHeight="160px"
                imageWidth="250px"
                imageHeight="160px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="w-full bg-black text-white py-20 px-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            <span className="text-white">Core </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 text-center">
            {[
              {
                title: "Innovate Boldly",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M12 2v2m4.243 1.757l-1.414 1.414M20 12h-2m-1.757 4.243l-1.414-1.414M12 20v-2m-4.243-1.757l1.414-1.414M4 12H2m1.757-4.243l1.414 1.414"
                    />
                  </svg>
                ),
                desc: "We push boundaries and experiment fearlessly to fuel next-gen solutions.",
              },
              {
                title: "Design With Heart",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                ),
                desc: "Every pixel we craft carries empathy, clarity, and human-centered purpose.",
              },
              {
                title: "Code With Craft",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                    />
                  </svg>
                ),
                desc: "We write clean, maintainable code that stands the test of time and scale.",
              },
              {
                title: "Partner Deeply",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v8m-6-6l-6 6m0 0l6-6m-6 6H3a2 2 0 01-2-2v-8a2 2 0 012-2h2"
                    />
                  </svg>
                ),
                desc: "We embed ourselves in your goals—your success is our shared journey.",
              },
            ].map(({ title, icon, desc }) => (
              <div key={title} className="space-y-4">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-[#0a0a0a] rounded-full">
                  {icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Process ─── */}
      <OurProcess />

      {/* ─── Meet the Founder ─── */}
      <section className="w-full bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-extrabold">Meet the Founder</h2>
          <img
            src={founderImage}
            alt="Akshay Dubey"
            className="mx-auto h-40 w-40 rounded-full object-cover"
          />
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Akshay Dubey</h3>
            <p className="text-gray-300">
              5+ years in custom Shopify & WordPress development. Passionate
              about minimalism, performance, and user-centered design.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Testimonials (no heading) ─── */}
      <section className="w-full bg-black text-white py-12">
        <TestimonialsSection />
      </section>

      {/* ─── Contact Form ─── */}
      <section className="w-full bg-black text-white py-16 px-6">
        <ContactForm />
      </section>

      {/* ─── Footer ─── */}
      <Footer />
    </>
  );
}
