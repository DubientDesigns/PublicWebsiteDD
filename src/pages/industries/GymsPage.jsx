// src/pages/industries/GymsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/ContactSection';
import TestimonialsSection from '../../components/TestimonialsSection';

const GymsPage = () => {
  return (
    <>
      <Helmet>
        <title>Gym Website & App Development | Dubient Designs Singapore</title>
        <meta name="description" content="Custom gym websites, mobile apps, and software solutions. Pay only royalties, no upfront cost. Membership management, class booking, and fitness tracking tools." />
        <link rel="canonical" href="https://dubientdesigns.com/industries/gyms" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gym Website & App Development | Dubient Designs" />
        <meta property="og:description" content="Custom gym websites, mobile apps, and software solutions. Pay only royalties, no upfront cost." />
        <meta property="og:url" content="https://dubientdesigns.com/industries/gyms" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Gym Website & App Development",
            "description": "Custom gym websites, mobile apps, and software solutions. Pay only royalties, no upfront cost.",
            "url": "https://dubientdesigns.com/industries/gyms",
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
              Gym Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-[#e0e0e0] max-w-4xl mx-auto mb-8">
              Transform your gym with custom websites, mobile apps, and software solutions. 
              Manage memberships, streamline operations, and boost member engagement.
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
                <h3 className="text-xl font-semibold text-white mb-4">Membership Management</h3>
                <p className="text-[#ccc]">Complete member portal with profile management, payment processing, and membership tier tracking.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Class Booking System</h3>
                <p className="text-[#ccc]">Real-time class scheduling, capacity management, and automated waitlist functionality.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Personal Training</h3>
                <p className="text-[#ccc]">Trainer profiles, session booking, progress tracking, and communication tools.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Fitness Tracking</h3>
                <p className="text-[#ccc]">Workout logging, progress visualization, and goal setting for members.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Equipment Management</h3>
                <p className="text-[#ccc]">Equipment availability, maintenance scheduling, and usage tracking systems.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Community Features</h3>
                <p className="text-[#ccc]">Member forums, challenges, leaderboards, and social features to boost engagement.</p>
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
                <p className="text-[#ccc]">Class reminders, membership renewals, and personalized fitness tips to keep members engaged.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Loyalty Program</h3>
                <p className="text-[#ccc]">Reward frequent visitors with points, exclusive classes, and special member benefits.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Scheduling System</h3>
                <p className="text-[#ccc]">Easy class booking, personal training sessions, and equipment reservations with calendar sync.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Workout Tracking</h3>
                <p className="text-[#ccc]">Log workouts, track progress, and monitor fitness goals with detailed analytics.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Social Features</h3>
                <p className="text-[#ccc]">Connect with other members, share achievements, and participate in fitness challenges.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Nutrition Tracking</h3>
                <p className="text-[#ccc]">Meal planning, calorie tracking, and nutrition guidance integrated with fitness goals.</p>
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
                  <li>• Gym management dashboard</li>
                  <li>• Financial tracking and reporting</li>
                  <li>• Staff scheduling and payroll</li>
                  <li>• Equipment maintenance tracking</li>
                  <li>• Facility management and security</li>
                </ul>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Analytics Dashboards</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Member retention analytics</li>
                  <li>• Class attendance metrics</li>
                  <li>• Revenue and growth tracking</li>
                  <li>• Equipment usage insights</li>
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
              Transform Your Gym Today
            </h2>
            <p className="text-xl text-[#e0e0e0] mb-8">
              Modernize your gym with cutting-edge technology. Pay only royalties - no upfront costs.
            </p>
            <div className="bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#00ffff] mb-4">
                💎 Pay Only Royalties. No Upfront Cost.
              </h3>
              <p className="text-[#ccc] mb-6">
                Get a professional gym website, mobile app, and custom software without any initial investment. 
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

export default GymsPage; 