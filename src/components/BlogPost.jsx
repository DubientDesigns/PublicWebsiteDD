// src/components/BlogPost.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaClock, FaUser } from 'react-icons/fa';
import './BlogPost.css';
import ContactForm from './ContactSection';
import Footer from './Footer';

// Import Instagram images
import side1 from '../assets/img/side1.png';
import side2 from '../assets/img/side2.png';
import side3 from '../assets/img/side3.png';
import side4 from '../assets/img/side4.png';
import side5 from '../assets/img/side5.png';
import side6 from '../assets/img/side6.png';

// Import blog cover images
import heroPortfolio from '../assets/blog1/hero-portfolio-design.jpg';
import visualQuality from '../assets/blog1/visual-quality-showcase.jpg';
import responsiveNav from '../assets/blog1/responsive-navigation-ux.jpg';
import caseStudy from '../assets/blog1/case-study-layout.jpg';

const BlogPost = ({ 
  title, 
  excerpt, 
  content, 
  author = "Dubient Designs Team",
  publishDate = "2024-01-15",
  readTime = "5 min read",
  slug,
  faqSchema
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | Dubient Designs Blog</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`https://dubientdesigns.com/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:url" content={`https://dubientdesigns.com/blog/${slug}`} />
        <meta property="og:image" content="https://dubientdesigns.com/assets/logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content="https://dubientdesigns.com/assets/logo.png" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": excerpt,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dubient Designs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dubientdesigns.com/assets/logo.png"
              }
            },
            "datePublished": publishDate,
            "dateModified": publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://dubientdesigns.com/blog/${slug}`
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <article className="blog-post">
        <div className="blog-container">
          {/* Back to Blog */}
          <Link to="/blog" className="back-to-blog">
            <FaArrowLeft />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="blog-header">
            <h1 className="blog-title">{title}</h1>
            <p className="blog-excerpt">{excerpt}</p>
            
            <div className="blog-meta">
              <div className="meta-item">
                <FaUser />
                <span>{author}</span>
              </div>
              <div className="meta-item">
                <FaCalendar />
                <span>{new Date(publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="meta-item">
                <FaClock />
                <span>{readTime}</span>
              </div>
            </div>
          </header>

          {/* Main Content with Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Content */}
              <div className="blog-content">
                {content}
              </div>

              {/* Summary Section */}
              <div className="blog-summary">
                <h2>Summary</h2>
                <p>{excerpt}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Instagram Sidebar */}
              <div className="bg-gray-800 border border-cyan-500 rounded-xl p-6">
                <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">Follow us on instagram</p>
                <hr className="mb-6 border-gray-700" />

                <div className="grid grid-cols-2 gap-3">
                  <a href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg==" target="_blank" rel="noopener noreferrer" className="block">
                    <img className="object-cover w-full h-24 rounded-lg hover:opacity-80 transition-opacity" src={side1} alt="Dubient Designs Instagram post 1" />
                  </a>
                  <a href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg==" target="_blank" rel="noopener noreferrer" className="block">
                    <img className="object-cover w-full h-24 rounded-lg hover:opacity-80 transition-opacity" src={side2} alt="Dubient Designs Instagram post 2" />
                  </a>
                  <a href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg==" target="_blank" rel="noopener noreferrer" className="block">
                    <img className="object-cover w-full h-24 rounded-lg hover:opacity-80 transition-opacity" src={side3} alt="Dubient Designs Instagram post 3" />
                  </a>
                  <a href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg==" target="_blank" rel="noopener noreferrer" className="block">
                    <img className="object-cover w-full h-24 rounded-lg hover:opacity-80 transition-opacity" src={side4} alt="Dubient Designs Instagram post 4" />
                  </a>
                  <a href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg==" target="_blank" rel="noopener noreferrer" className="block">
                    <img className="object-cover w-full h-24 rounded-lg hover:opacity-80 transition-opacity" src={side5} alt="Dubient Designs Instagram post 5" />
                  </a>
                  <a href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg==" target="_blank" rel="noopener noreferrer" className="block">
                    <img className="object-cover w-full h-24 rounded-lg hover:opacity-80 transition-opacity" src={side6} alt="Dubient Designs Instagram post 6" />
                  </a>
                </div>
              </div>

              {/* Recent Posts Sidebar */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <p className="text-xl font-bold text-white mb-6">Recent Posts</p>

                <div className="space-y-4">
                  <div className="relative overflow-hidden transition-all duration-200 bg-gray-700 border border-gray-600 rounded-lg hover:shadow-lg hover:bg-gray-600 hover:-translate-y-1">
                    <div className="p-3">
                      <div className="flex items-start">
                        <img className="object-cover w-16 h-16 rounded-lg shrink-0" src={heroPortfolio} alt="Portfolio website thumbnail" />
                        <div className="ml-3">
                          <p className="text-xs font-medium text-cyan-400">January 15, 2024</p>
                          <p className="text-sm font-bold text-white mt-1">
                            <Link to="/blog/what-makes-good-portfolio-website" className="hover:text-cyan-400 transition-colors">
                              What makes a good portfolio website?
                              <span className="absolute inset-0" aria-hidden="true"></span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden transition-all duration-200 bg-gray-700 border border-gray-600 rounded-lg hover:shadow-lg hover:bg-gray-600 hover:-translate-y-1">
                    <div className="p-3">
                      <div className="flex items-start">
                        <img className="object-cover w-16 h-16 rounded-lg shrink-0" src={visualQuality} alt="Website cost thumbnail" />
                        <div className="ml-3">
                          <p className="text-xs font-medium text-cyan-400">January 15, 2024</p>
                          <p className="text-sm font-bold text-white mt-1">
                            <Link to="/blog/website-cost-singapore" className="hover:text-cyan-400 transition-colors">
                              How much does it cost to build a website in Singapore?
                              <span className="absolute inset-0" aria-hidden="true"></span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden transition-all duration-200 bg-gray-700 border border-gray-600 rounded-lg hover:shadow-lg hover:bg-gray-600 hover:-translate-y-1">
                    <div className="p-3">
                      <div className="flex items-start">
                        <img className="object-cover w-16 h-16 rounded-lg shrink-0" src={responsiveNav} alt="Platform comparison thumbnail" />
                        <div className="ml-3">
                          <p className="text-xs font-medium text-cyan-400">January 15, 2024</p>
                          <p className="text-sm font-bold text-white mt-1">
                            <Link to="/blog/shopify-wix-wordpress-comparison" className="hover:text-cyan-400 transition-colors">
                              Should I choose Shopify, Wix, or WordPress?
                              <span className="absolute inset-0" aria-hidden="true"></span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden transition-all duration-200 bg-gray-700 border border-gray-600 rounded-lg hover:shadow-lg hover:bg-gray-600 hover:-translate-y-1">
                    <div className="p-3">
                      <div className="flex items-start">
                        <img className="object-cover w-16 h-16 rounded-lg shrink-0" src={caseStudy} alt="Website timeline thumbnail" />
                        <div className="ml-3">
                          <p className="text-xs font-medium text-cyan-400">January 15, 2024</p>
                          <p className="text-sm font-bold text-white mt-1">
                            <Link to="/blog/website-launch-timeline" className="hover:text-cyan-400 transition-colors">
                              What is the timeline to launch a website?
                              <span className="absolute inset-0" aria-hidden="true"></span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BlogPost; 