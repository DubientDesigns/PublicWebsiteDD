// src/components/FAQSection.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes a good portfolio website?",
      answer: "A good portfolio website showcases your best work with high-quality visuals, clear navigation, and compelling case studies. It should load fast, be mobile-responsive, and include clear calls-to-action that convert visitors into clients. The design should reflect your brand personality while maintaining professional credibility."
    },
    {
      question: "How much does it cost to build a website in Singapore?",
      answer: "Website costs in Singapore range from $2,000 for basic sites to $50,000+ for enterprise solutions. Factors include design complexity, functionality requirements, and ongoing maintenance needs. Most businesses invest $5,000-$15,000 for professional websites that drive results and provide good ROI."
    },
    {
      question: "Should I choose Shopify, Wix, or WordPress?",
      answer: "Choose Shopify for e-commerce (best for online stores), Wix for simple business sites with drag-and-drop ease, or WordPress for maximum flexibility and SEO control. Consider your technical skills, budget, and specific needs. WordPress offers the most customization but requires more technical knowledge."
    },
    {
      question: "What is the timeline to launch a website?",
      answer: "Simple websites take 2-4 weeks, while complex projects can take 8-12 weeks. Timeline depends on design revisions, content preparation, and functionality requirements. We recommend starting content creation early and planning for testing and optimization phases before launch."
    },
    {
      question: "How do I get more leads through my website?",
      answer: "Optimize for conversions with clear value propositions, compelling CTAs, and lead magnets like free guides or consultations. Improve SEO for organic traffic, use analytics to identify drop-off points, and create content that addresses your audience's pain points. Regular A/B testing helps maximize results."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">
          Frequently Asked Questions
        </h2>
        <p className="faq-subtitle">
          Get answers to the most common questions about web design and development
        </p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 