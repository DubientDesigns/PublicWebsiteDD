// src/components/Navbar.jsx
import React, { useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
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
}) {
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
  const mouseX = useMotionValue(Infinity);
  const maxHeight = useMemo(() => magnification + baseItemSize, [magnification, baseItemSize]);
  const height = useSpring(useTransform(mouseX, [0, 1], [panelHeight, maxHeight]), spring);
  const navigate = useNavigate();

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
      </motion.div>
    </>
  );
}
