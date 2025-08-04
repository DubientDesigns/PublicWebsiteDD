// src/pages/industries/TuitionPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/ContactSection';
import TestimonialsSection from '../../components/TestimonialsSection';

const TuitionPage = () => {
  return (
    <>
      <Helmet>
        <title>Tuition Center Website & App Development | Dubient Designs Singapore</title>
        <meta name="description" content="Custom tuition center websites, mobile apps, and software solutions. Pay only royalties, no upfront cost. Class booking, progress tracking, and student management tools." />
        <link rel="canonical" href="https://dubientdesigns.com/industries/tuition" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tuition Center Website & App Development | Dubient Designs" />
        <meta property="og:description" content="Custom tuition center websites, mobile apps, and software solutions. Pay only royalties, no upfront cost." />
        <meta property="og:url" content="https://dubientdesigns.com/industries/tuition" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Tuition Center Website & App Development",
            "description": "Custom tuition center websites, mobile apps, and software solutions. Pay only royalties, no upfront cost.",
            "url": "https://dubientdesigns.com/industries/tuition",
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
              Tuition Center Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-[#e0e0e0] max-w-4xl mx-auto mb-8">
              Transform your tuition center with custom websites, mobile apps, and software solutions. 
              Streamline classes, track progress, and enhance student engagement.
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
                <h3 className="text-xl font-semibold text-white mb-4">Class Registration</h3>
                <p className="text-[#ccc]">Online class booking with subject selection, schedule management, and payment processing.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Student Portal</h3>
                <p className="text-[#ccc]">Student profiles, progress tracking, assignment submissions, and grade management.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Parent Dashboard</h3>
                <p className="text-[#ccc]">Parent access to student progress, attendance, and communication with teachers.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Course Catalog</h3>
                <p className="text-[#ccc]">Comprehensive course listings with curriculum details, teacher profiles, and pricing.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Online Learning</h3>
                <p className="text-[#ccc]">Virtual classrooms, video lessons, and interactive learning materials.</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Progress Reports</h3>
                <p className="text-[#ccc]">Detailed progress tracking, performance analytics, and achievement certificates.</p>
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
                <p className="text-[#ccc]">Class reminders, assignment deadlines, and progress updates to keep students engaged.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Loyalty Program</h3>
                <p className="text-[#ccc]">Reward consistent attendance and good performance with points and special privileges.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Scheduling System</h3>
                <p className="text-[#ccc]">Easy class booking, rescheduling, and attendance tracking with calendar sync.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Study Tools</h3>
                <p className="text-[#ccc]">Flashcards, practice tests, and study timers to enhance learning experience.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Communication</h3>
                <p className="text-[#ccc]">Direct messaging between students, teachers, and parents for better coordination.</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Offline Access</h3>
                <p className="text-[#ccc]">Download study materials and access content even without internet connection.</p>
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
                  <li>• Tuition center management dashboard</li>
                  <li>• Teacher scheduling and payroll</li>
                  <li>• Student database management</li>
                  <li>• Curriculum planning and tracking</li>
                  <li>• Financial reporting and analytics</li>
                </ul>
              </div>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Analytics Dashboards</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Student performance analytics</li>
                  <li>• Class attendance tracking</li>
                  <li>• Revenue and growth metrics</li>
                  <li>• Teacher effectiveness insights</li>
                  <li>• Learning outcome analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Royalty Model CTA */}
        <section className="py-16 px-6 bg-[rgba(0,255,255,0.05)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#00ffff] mb-6">
              Transform Your Tuition Center Today
            </h2>
            <p className="text-xl text-[#e0e0e0] mb-8">
              Modernize your tuition center with cutting-edge technology. Pay only royalties - no upfront costs.
            </p>
            <div className="bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#00ffff] mb-4">
                💎 Pay Only Royalties. No Upfront Cost.
              </h3>
              <p className="text-[#ccc] mb-6">
                Get a professional tuition center website, mobile app, and custom software without any initial investment. 
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

export default TuitionPage; 