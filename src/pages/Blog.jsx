import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const blogPosts = [
    {
      title: "What Makes a Good Portfolio Website?",
      excerpt: "A good portfolio website showcases your best work with high-quality visuals, clear navigation, and compelling case studies. It should load fast, be mobile-responsive, and include clear calls-to-action that convert visitors into clients.",
      slug: "what-makes-good-portfolio-website",
      publishDate: "2024-01-15",
      readTime: "6 min read"
    },
    {
      title: "How Much Does It Cost to Build a Website in Singapore?",
      excerpt: "Website costs in Singapore range from $2,000 for basic sites to $50,000+ for enterprise solutions. Factors include design complexity, functionality requirements, and ongoing maintenance needs.",
      slug: "website-cost-singapore",
      publishDate: "2024-01-16",
      readTime: "7 min read"
    },
    {
      title: "Should I Choose Shopify, Wix, or WordPress?",
      excerpt: "Choose Shopify for e-commerce (best for online stores), Wix for simple business sites with drag-and-drop ease, or WordPress for maximum flexibility and SEO control.",
      slug: "shopify-wix-wordpress-comparison",
      publishDate: "2024-01-17",
      readTime: "8 min read"
    },
    {
      title: "What Is the Timeline to Launch a Website?",
      excerpt: "Simple websites take 2-4 weeks, while complex projects can take 8-12 weeks. Timeline depends on design revisions, content preparation, and functionality requirements.",
      slug: "website-launch-timeline",
      publishDate: "2024-01-18",
      readTime: "6 min read"
    },
    {
      title: "How Do I Get More Leads Through My Website?",
      excerpt: "Optimize for conversions with clear value propositions, compelling CTAs, and lead magnets like free guides or consultations. Improve SEO for organic traffic and use analytics to identify drop-off points.",
      slug: "get-more-leads-website",
      publishDate: "2024-01-19",
      readTime: "8 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Dubient Designs - Web Design & Development Insights</title>
        <meta name="description" content="Expert insights on web design, development, and digital marketing. Learn about portfolio websites, costs, platform choices, timelines, and lead generation strategies." />
        <link rel="canonical" href="https://dubientdesigns.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Dubient Designs" />
        <meta property="og:description" content="Expert insights on web design, development, and digital marketing." />
        <meta property="og:url" content="https://dubientdesigns.com/blog" />
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Dubient Designs Blog",
            "description": "Expert insights on web design, development, and digital marketing",
            "url": "https://dubientdesigns.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Dubient Designs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dubientdesigns.com/assets/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#05050a] to-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#00ffff] drop-shadow-lg mb-4">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-[#e0e0e0] max-w-3xl mx-auto">
              Expert insights on web design, development, and digital marketing. 
              Learn from our experience building successful websites and digital experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[#ccc] text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[#999] mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#00ffff] hover:text-[#00ffff] font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <FaArrowRight className="text-xs" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
  