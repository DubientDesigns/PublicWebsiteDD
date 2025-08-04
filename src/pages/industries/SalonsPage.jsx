// src/pages/industries/SalonsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/ContactSection';
import TestimonialsSection from '../../components/TestimonialsSection';

const SalonsPage = () => {
  return (
    <>
      <Helmet>
        <title>Beauty Salon Website & App Development | Dubient Designs Singapore</title>
        <meta name="description" content="Custom beauty salon websites, mobile apps, and software solutions. Pay only royalties, no upfront cost. Appointment booking, service management, and customer loyalty tools." />
        <link rel="canonical" href="https://dubientdesigns.com/industries/salons" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beauty Salon Website & App Development | Dubient Designs" />
        <meta property="og:description" content="Custom beauty salon websites, mobile apps, and software solutions. Pay only royalties, no upfront cost." />
        <meta property="og:url" content="https://dubientdesigns.com/industries/salons" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Beauty Salon Website & App Development",
            "description": "Custom beauty salon websites, mobile apps, and software solutions. Pay only royalties, no upfront cost.",
            "url": "https://dubientdesigns.com/industries/salons",
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
              Beauty Salon Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-[#e0e0e0] max-w-4xl mx-auto mb-8">
              Transform your beauty salon with custom websites, mobile apps, and software solutions. 
              Streamline appointments, boost client retention, and enhance customer experience.
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
                <h3 className="text-xl font-semibold text-white mb-4">Appointment Booking</h3>
                <p className="text-[#ccc]">Online appointment scheduling with real-time availability, service selection, and automated confirmations.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Service Catalog</h3>
                <p className="text-[#ccc]">Comprehensive service listings with pricing, duration, and stylist profiles.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Client Portal</h3>
                <p className="text-[#ccc]">Client profiles, appointment history, and personalized recommendations.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Gallery & Portfolio</h3>
                <p className="text-[#ccc]">Showcase your work with before/after photos and stylist portfolios.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Reviews & Testimonials</h3>
                <p className="text-[#ccc]">Client review system with ratings and testimonials to build trust.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Loyalty Program</h3>
                <p className="text-[#ccc]">Reward system with points, discounts, and special offers for repeat clients.</p>
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
                <p className="text-[#ccc]">Appointment reminders, special offers, and loyalty rewards to keep clients engaged.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Loyalty Program</h3>
                <p className="text-[#ccc]">Reward frequent clients with points, exclusive services, and VIP benefits.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Scheduling System</h3>
                <p className="text-[#ccc]">Easy appointment booking, rescheduling, and cancellation with calendar sync.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Virtual Consultations</h3>
                <p className="text-[#ccc]">Video consultations for style advice and pre-appointment planning.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Payment Integration</h3>
                <p className="text-[#ccc]">Secure payment processing, digital receipts, and tip management.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Style Inspiration</h3>
                <p className="text-[#ccc]">Hair and beauty inspiration gallery with trending styles and tutorials.</p>
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
                  <li>• Salon management dashboard</li>
                  <li>• Staff scheduling and payroll</li>
                  <li>• Inventory and product tracking</li>
                  <li>• Client database management</li>
                  <li>• Financial reporting and analytics</li>
                </ul>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Analytics Dashboards</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Client retention analytics</li>
                  <li>• Service popularity tracking</li>
                  <li>• Revenue and growth metrics</li>
                  <li>• Staff performance insights</li>
                  <li>• Customer satisfaction data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Royalty Model CTA */}
        <section className="py-16 px-6 bg-[rgba(0,255,255,0.05)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#00ffff] mb-6">
              Transform Your Salon Today
            </h2>
            <p className="text-xl text-[#e0e0e0] mb-8">
              Modernize your beauty salon with cutting-edge technology. Pay only royalties - no upfront costs.
            </p>
            <div className="bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#00ffff] mb-4">
                💎 Pay Only Royalties. No Upfront Cost.
              </h3>
              <p className="text-[#ccc] mb-6">
                Get a professional salon website, mobile app, and custom software without any initial investment. 
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

export default SalonsPage; 