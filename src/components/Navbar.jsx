// src/components/Navbar.jsx
import React, { useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import './Navbar.css';    // keeps your dock-panel, dock-text-button, dock-logo rules
import logo from '../assets/logo.png';

function NavbarItem({
  label,
  to,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  dropdownItems,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const mouseDistance = useTransform(mouseX, (val) => {
    const btn = document.getElementById(label);
    if (!btn) return Infinity;
    const rect = btn.getBoundingClientRect();
    return val - rect.left - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );

  const size = useSpring(targetSize, spring);
  const navigate = useNavigate();

  // If it's a dropdown item
  if (dropdownItems) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <motion.button
          id={label}
          style={{ width: size, height: baseItemSize }}
          className="dock-text-button flex items-center gap-1"
          whileHover={{ color: '#00ffff' }}
        >
          {label}
          <ChevronDownIcon className="h-4 w-4" />
        </motion.button>
        
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 w-64 bg-black bg-opacity-95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
          >
            <div className="py-2">
              {dropdownItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.to);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  // Regular navigation item
  return (
    <motion.button
      id={label}
      onClick={() => navigate(to)}
      style={{ width: size, height: baseItemSize }}
      className="dock-text-button"
      whileHover={{ color: '#00ffff' }}
    >
      {label}
    </motion.button>
  );
}

export default function Navbar({
  items,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 110,
  distance = 180,
  panelHeight = 64,
  baseItemSize = 60,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);
  const maxHeight = useMemo(() => magnification + baseItemSize, [magnification, baseItemSize]);
  const height = useSpring(useTransform(mouseX, [0, 1], [panelHeight, maxHeight]), spring);
  const navigate = useNavigate();

  // Industries dropdown items
  const industriesItems = [
    { label: "Temples", to: "/industries/temples" },
    { label: "Gyms", to: "/industries/gyms" },
    { label: "Restaurants & Cafes", to: "/industries/restaurants" },
    { label: "Beauty Salons & Spas", to: "/industries/salons" },
    { label: "Tuition Centers", to: "/industries/tuition" },
    { label: "Real Estate", to: "/industries/real-estate" },
    { label: "Freelancers & Coaches", to: "/industries/freelancers" },
  ];

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 bg-black shadow-md">
        <img
          src={logo}
          alt="Dubient Designs"
          className="h-8 w-auto cursor-pointer"
          onClick={() => {
            navigate('/');
            setMobileOpen(false);
          }}
        />
        <button onClick={() => setMobileOpen((o) => !o)} className="p-2 focus:outline-none">
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN OVERLAY */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
          <ul className="space-y-8 text-2xl">
            {items.map(({ label, to }) => (
              <li key={label}>
                <button
                  onClick={() => {
                    navigate(to);
                    setMobileOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 px-8 py-4 text-2xl rounded focus:outline-none"
                >
                  {label}
                </button>
              </li>
            ))}
            
            {/* Industries Dropdown for Mobile */}
            <li>
              <div className="text-center">
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="text-white hover:text-cyan-400 px-8 py-4 text-2xl rounded focus:outline-none flex items-center justify-center gap-2"
                >
                  Industries
                  <ChevronDownIcon className={`h-6 w-6 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileIndustriesOpen && (
                  <div className="mt-4 space-y-4">
                    {industriesItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(item.to);
                          setMobileOpen(false);
                          setMobileIndustriesOpen(false);
                        }}
                        className="text-white hover:text-cyan-400 px-8 py-2 text-lg rounded focus:outline-none block w-full"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* DESKTOP “DOCK” NAV */}
      <motion.div
        className="hidden md:flex dock-panel"
        style={{ height: panelHeight }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Dubient Designs"
          className="dock-logo cursor-pointer"
          onClick={() => navigate('/')}
        />

        {/* Dock items */}
        {items.map(({ label, to }, i) => (
          <NavbarItem
            key={i}
            label={label}
            to={to}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          />
        ))}
        
        {/* Industries Dropdown */}
        <NavbarItem
          label="Industries"
          mouseX={mouseX}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
          dropdownItems={industriesItems}
        />
      </motion.div>
    </>
  );
}
