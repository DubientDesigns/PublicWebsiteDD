// src/pages/Services.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Service images
import responsiveImg from "../assets/Services-page/responsive1.png";
import performanceImg from "../assets/Services-page/performance2.png";
import cmsImg from "../assets/Services-page/cms2.png";
import marketingImg from "../assets/Services-page/marketing-mockup.png";
import enterpriseImg from "../assets/Services-page/enterprise-mockup.png";
import DevIllustrationSvg from "../assets/Services-page/dev-mockup-2.svg";

// Tech & Tools logos
import ShopifyLogo from "../assets/brandssection/Shopify.svg";
import WordpressLogo from "../assets/brandssection/Wordpress.svg";
import ReactLogo from "../assets/brandssection/React.svg";
import TailwindLogo from "../assets/brandssection/Tailwind.svg";
import NextjsLogo from "../assets/brandssection/Nextjs.svg";
import WixLogo from "../assets/brandssection/Wix.svg";
import FramerLogo from "../assets/brandssection/Framer.svg";
import NodejsLogo from "../assets/brandssection/Nodejs.svg";
import FirebaseLogo from "../assets/brandssection/Firebase.svg";

// Section components
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Services() {
  const marketingPoints = [
    {
      title: "SEO & SEM to boost visibility",
      desc: "Optimize your site for search engines and run targeted campaigns that drive high-intent traffic to your pages.",
    },
    {
      title: "Social Media Strategies",
      desc: "Craft scroll-stopping social content and community management plans to amplify your brand's voice organically.",
    },
    {
      title: "Targeted Email Campaigns",
      desc: "Build automated email journeys that nurture leads and turn prospects into loyal customers.",
    },
    {
      title: "Analytics & Reporting",
      desc: "Use real-time dashboards and deep insights to refine strategies and maximize ROI.",
    },
    {
      title: "Content Marketing",
      desc: "Publish data-driven blogs, infographics, and videos that inform and convert your ideal audience.",
    },
  ];

  const techLogos = [
    ShopifyLogo,
    WordpressLogo,
    ReactLogo,
    TailwindLogo,
    NextjsLogo,
    WixLogo,
    FramerLogo,
    NodejsLogo,
    FirebaseLogo,
  ];

  return (
    <>
      <Helmet>
        <title>Services | Dubient Designs – Global Web & Brand Studio</title>
        <meta
          name="description"
          content="Our services: Web & App Design, Digital Marketing, SEO, SEM, Social, Email, Analytics, Content & CMS/E-commerce."
        />
      </Helmet>

      <div className="services-page bg-black text-white">
        {/* Hero / Header */}
        <section id="services" className="pt-32 pb-12 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Services
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We provide full-stack digital solutions—from pixel-perfect web &
              app design to growth-driving marketing and seamless CMS/e-commerce
              integrations.
            </p>
          </div>
        </section>

        {/* ── Website Designs & Development ── */}
        <section id="web-dev" className="py-16 px-6">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold leading-snug">
              Website Designs{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                & Development
              </span>
            </h2>
            <p className="mt-2 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              From responsive company sites to fully custom apps, we build
              pixel-perfect, high-performance digital experiences on Shopify,
              WordPress, Framer, or the platform of your choice.
            </p>
          </div>

          <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Responsive Design",
                title: "Adaptive Layouts",
                text: "Your site adjusts flawlessly on any device.",
                img: responsiveImg,
              },
              {
                label: "Pixel-Perfect",
                title: "Design Excellence",
                text: "Every element is honed to visual perfection.",
                img: performanceImg,
              },
              {
                label: "CMS & E-Commerce",
                title: "Manage & Sell",
                text: "Integrate with Shopify, WooCommerce, or headless CMS.",
                img: cmsImg,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[#1a1a23] p-4 rounded-2xl flex flex-col"
              >
                <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">
                  {card.label}
                </h3>
                <h4 className="text-xl font-bold mb-1">{card.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{card.text}</p>

                {/* pull the image up a little */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="-mt-2 w-full rounded-lg flex-1 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section id="enterprise" className="py-16 px-6 bg-black text-white">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Image */}
            <div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={enterpriseImg}
                  alt="Enterprise platform screenshot"
                  className="object-cover w-full h-full"
                />
                <div className="absolute right-6 bottom-6 bg-black bg-opacity-80 px-4 py-2 rounded-xl backdrop-blur">
                  <div className="flex items-center text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                      99.9% Uptime
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="max-w-md">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Enterprise Solutions
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Scale &amp;{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Secure Your Business
                </span>
              </h2>
              <div className="w-20 h-px mt-6 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <p className="mt-6 text-gray-400 leading-relaxed">
                Our Enterprise Solutions provide bullet-proof security, custom
                workflows, and dedicated SLAs so your organization never skips a
                beat.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-8 px-6 py-3 bg-cyan-400 rounded-full font-medium hover:bg-cyan-500 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Software Development */}
        <section id="software" className="py-16 px-6 bg-[#0f0f14] text-white">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start lg:items-center gap-12">
            {/* Features */}
            <div className="flex-1 space-y-12">
              <div className="text-center lg:text-left">
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Software Development
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
                  Build Robust, Scalable Apps from the{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    Ground Up
                  </span>
                </h2>
              </div>

              <ul className="space-y-8">
                <li>
                  <h3 className="text-2xl font-semibold text-white">
                    APIs &amp; Microservices
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Modular, scalable back-end architectures using Node.js,
                    serverless functions, or Kubernetes.
                  </p>
                </li>
                <li>
                  <h3 className="text-2xl font-semibold text-white">
                    Custom Integrations
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Seamlessly connect to CRMs, ERPs, payment gateways, and
                    third-party services.
                  </p>
                </li>
                <li>
                  <h3 className="text-2xl font-semibold text-white">
                    DevOps &amp; CI/CD
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Automated pipelines and monitoring for rapid, reliable
                    releases and 24/7 uptime.
                  </p>
                </li>
              </ul>
            </div>

            {/* Illustration */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src={DevIllustrationSvg}
                alt="Software development illustration"
                className="w-full max-w-3xl rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Digital Marketing */}
        <section id="marketing" className="py-16 px-6">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold leading-snug">
              Digital{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Marketing
              </span>
            </h2>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            <ul className="space-y-8 flex-1">
              {marketingPoints.map((pt, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold">{pt.title}</p>
                    <p className="mt-1 text-gray-400 leading-snug">{pt.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src={marketingImg}
                alt="Digital Marketing"
                className="w-full max-w-lg h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Tech & Tools Stack */}
        <section className="py-16 px-6 bg-black text-white">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-md">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
                Our Tech{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  & Tools
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                We build with industry-leading platforms and frameworks to
                deliver scalable, high-performance digital solutions.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {techLogos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center py-4 px-6 bg-[#1a1a23] rounded-lg shadow-lg max-h-36"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="max-h-24 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
