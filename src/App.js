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

// Blog post imports
import PortfolioWebsite from "./pages/blog/PortfolioWebsite";
import WebsiteCostSingapore from "./pages/blog/WebsiteCostSingapore";
import ShopifyWixWordPress from "./pages/blog/ShopifyWixWordPress";
import WebsiteTimeline from "./pages/blog/WebsiteTimeline";
import WebsiteLeads from "./pages/blog/WebsiteLeads";

import TemplesPage from "./pages/industries/TemplesPage";
import GymsPage from "./pages/industries/GymsPage";
import RestaurantsPage from "./pages/industries/RestaurantsPage";
import SalonsPage from "./pages/industries/SalonsPage";
import TuitionPage from "./pages/industries/TuitionPage";
// Placeholder imports for Real Estate and Freelancers (to be created)
// import RealEstatePage from "./pages/industries/RealEstatePage";
// import FreelancersPage from "./pages/industries/FreelancersPage";

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
        <Route path="/blog/what-makes-good-portfolio-website" element={<PortfolioWebsite />} />
        <Route path="/blog/website-cost-singapore" element={<WebsiteCostSingapore />} />
        <Route path="/blog/shopify-wix-wordpress-comparison" element={<ShopifyWixWordPress />} />
        <Route path="/blog/website-launch-timeline" element={<WebsiteTimeline />} />
        <Route path="/blog/get-more-leads-website" element={<WebsiteLeads />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/industries/temples" element={<TemplesPage />} />
        <Route path="/industries/gyms" element={<GymsPage />} />
        <Route path="/industries/restaurants" element={<RestaurantsPage />} />
        <Route path="/industries/salons" element={<SalonsPage />} />
        <Route path="/industries/tuition" element={<TuitionPage />} />
        {/* Uncomment below when these pages are created */}
        {/* <Route path="/industries/real-estate" element={<RealEstatePage />} /> */}
        {/* <Route path="/industries/freelancers" element={<FreelancersPage />} /> */}
      </Routes>
    </div>
  );
}
