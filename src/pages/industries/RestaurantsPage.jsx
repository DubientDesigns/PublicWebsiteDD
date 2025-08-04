// src/pages/industries/RestaurantsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/ContactSection';
import TestimonialsSection from '../../components/TestimonialsSection';

const RestaurantsPage = () => {
  return (
    <>
      <Helmet>
        <title>Restaurant Website & App Development | Dubient Designs Singapore</title>
        <meta name="description" content="Custom restaurant websites, mobile apps, and software solutions. Pay only royalties, no upfront cost. Online ordering, table booking, and delivery management tools." />
        <link rel="canonical" href="https://dubientdesigns.com/industries/restaurants" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Restaurant Website & App Development | Dubient Designs" />
        <meta property="og:description" content="Custom restaurant websites, mobile apps, and software solutions. Pay only royalties, no upfront cost." />
        <meta property="og:url" content="https://dubientdesigns.com/industries/restaurants" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Restaurant Website & App Development",
            "description": "Custom restaurant websites, mobile apps, and software solutions. Pay only royalties, no upfront cost.",
            "url": "https://dubientdesigns.com/industries/restaurants",
            "publisher": {
              "@type": "Organization",
              "name": "Dubient Designs"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#05050a] to-[#0a0a0a] text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#00ffff] mb-6">
              Restaurant Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-[#e0e0e0] max-w-4xl mx-auto mb-8">
              Transform your restaurant with custom websites, mobile apps, and software solutions. 
              Streamline operations, boost sales, and enhance customer experience.
            </p>
            <div className="bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-[#00ffff]">
                💎 Pay only royalties. No upfront cost.
              </p>
            </div>
          </div>
        </section>

        {/* Website Solutions Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#00ffff] text-center mb-12">
              Website Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Online Ordering System</h3>
                <p className="text-[#ccc]">Complete online ordering platform with menu management, payment processing, and order tracking.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Table Booking System</h3>
                <p className="text-[#ccc]">Real-time table reservation with availability management and automated confirmations.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Delivery Management</h3>
                <p className="text-[#ccc]">Delivery tracking, driver management, and route optimization for efficient service.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Menu Management</h3>
                <p className="text-[#ccc]">Dynamic menu updates, pricing management, and inventory integration.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Customer Reviews</h3>
                <p className="text-[#ccc]">Review management, rating systems, and feedback collection to build reputation.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Loyalty Program</h3>
                <p className="text-[#ccc]">Customer rewards, points system, and special offers to increase repeat business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Ideas Section */}
        <section className="py-16 px-6 bg-[rgba(0,255,255,0.02)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#00ffff] text-center mb-12">
              Mobile App Ideas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Push Notifications</h3>
                <p className="text-[#ccc]">Order updates, special offers, and loyalty rewards to keep customers engaged.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Loyalty Program</h3>
                <p className="text-[#ccc]">Reward frequent customers with points, exclusive offers, and VIP benefits.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Scheduling System</h3>
                <p className="text-[#ccc]">Easy table booking, delivery scheduling, and pickup time selection.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Order Tracking</h3>
                <p className="text-[#ccc]">Real-time order status, delivery tracking, and estimated arrival times.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Payment Integration</h3>
                <p className="text-[#ccc]">Multiple payment methods, digital wallets, and secure transaction processing.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Social Features</h3>
                <p className="text-[#ccc]">Share orders, invite friends, and build community around your restaurant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Software Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#00ffff] text-center mb-12">
              Custom Software
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Internal Admin Tools</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Restaurant management dashboard</li>
                  <li>• Inventory and supply tracking</li>
                  <li>• Staff scheduling and payroll</li>
                  <li>• Kitchen order management</li>
                  <li>• Financial reporting and analytics</li>
                </ul>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Analytics Dashboards</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Sales and revenue analytics</li>
                  <li>• Customer behavior insights</li>
                  <li>• Popular menu item tracking</li>
                  <li>• Peak hour analysis</li>
                  <li>• Performance optimization data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Royalty Model CTA */}
        <section className="py-16 px-6 bg-[rgba(0,255,255,0.05)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#00ffff] mb-6">
              Transform Your Restaurant Today
            </h2>
            <p className="text-xl text-[#e0e0e0] mb-8">
              Modernize your restaurant with cutting-edge technology. Pay only royalties - no upfront costs.
            </p>
            <div className="bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#00ffff] mb-4">
                💎 Pay Only Royalties. No Upfront Cost.
              </h3>
              <p className="text-[#ccc] mb-6">
                Get a professional restaurant website, mobile app, and custom software without any initial investment. 
                We only earn when you succeed.
              </p>
              <button className="bg-[#00ffff] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#00cccc] transition-colors duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </>
  );
};

export default RestaurantsPage; 