import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import { ObfuscatedEmailLink, OBFUSCATED_CONTACT_EMAIL_DISPLAY } from "../utils/emailObfuscation";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-black sm:pt-16 lg:pt-20 text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 mt-16 sm:grid-cols-3 lg:grid-cols-6 gap-x-16 gap-y-16">
          {/* Company */}
          <div>
            <h6 className="text-sm font-bold tracking-widest uppercase">
              Company
            </h6>
            <ul className="mt-8 space-y-5 text-gray-400">
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-transform hover:translate-x-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-transform hover:translate-x-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-white transition-transform hover:translate-x-1"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-transform hover:translate-x-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links (was Help) */}
          <div>
            <h6 className="text-sm font-bold tracking-widest uppercase">
              Quick Links
            </h6>
            <ul className="mt-8 space-y-5 text-gray-400">
              <li>
                <a href="/blog" className="hover:text-white transition-transform hover:translate-x-1">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/grants" className="hover:text-white transition-transform hover:translate-x-1">
                  Grants
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-transform hover:translate-x-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services (was Resources) */}
          <div>
            <h6 className="text-sm font-bold tracking-widest uppercase">
              Services
            </h6>
            <ul className="mt-8 space-y-5 text-gray-400">
              <li>
                <a href="/services#web-dev" className="hover:text-white transition-transform hover:translate-x-1">
                  Website Designs & Development
                </a>
              </li>
              <li>
                <a href="/services#enterprise" className="hover:text-white transition-transform hover:translate-x-1">
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a href="/services#software" className="hover:text-white transition-transform hover:translate-x-1">
                  Software Development
                </a>
              </li>
              <li>
                <a href="/services#marketing" className="hover:text-white transition-transform hover:translate-x-1">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h6 className="text-sm font-bold tracking-widest uppercase">
              Subscribe to newsletter
            </h6>
            <div className="relative mt-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-300 opacity-30 blur-lg filter rounded-xl"></div>
              <form action="#" method="POST" className="relative">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 block px-4 py-4 text-base text-black placeholder-gray-600 bg-white rounded-l-xl focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 text-base font-bold text-white bg-gray-900 rounded-r-xl"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 mt-8 gap-y-8 sm:grid-cols-2 sm:gap-x-16 text-gray-400">
              <div>
                <h6 className="text-sm font-semibold uppercase">Call us</h6>
                <p className="mt-2 text-lg font-bold">
                  <a href="tel:+6580731497" className="hover:text-white">
                    +65 8073 1497
                  </a>
                </p>
              </div>
              <div>
                <h6 className="text-sm font-semibold uppercase">Email us</h6>
                <p className="mt-2 text-lg font-bold">
                  <ObfuscatedEmailLink
                    obfuscatedEmail={OBFUSCATED_CONTACT_EMAIL_DISPLAY}
                    className="hover:text-white"
                  >
                    Contact@dubientdesigns.com
                  </ObfuscatedEmailLink>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-16 border-gray-800" />

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Social icons */}
          <ul className="flex items-center justify-start space-x-3 sm:order-2 sm:justify-end text-gray-400">
            <li>
              <a
                href="https://www.instagram.com/dubientdesigns/profilecard/?igsh=MTlmMzA4cnl3MTAzZg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 hover:text-cyan-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1Vqwh8rpRq/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 hover:text-cyan-400 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6580731497"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 hover:text-cyan-400 transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <p className="mt-8 text-sm text-gray-500 sm:order-1 sm:mt-0">
            © {new Date().getFullYear()}, Dubient Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
