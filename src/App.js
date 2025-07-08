import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import GrantsPage from "./pages/Grants";
import PortfolioPage from "./pages/Portfolio";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";

export default function App() {
  const navbarItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Grants", to: "/grants" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* full-width navbar */}
      <Navbar items={navbarItems} />

      {/* every page is full-width */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/grants" element={<GrantsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
