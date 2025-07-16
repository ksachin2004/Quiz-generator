import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// Correct import for v2
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: "Home", href: "/", type: "scroll" },
  { name: "Study Material", href: "/studymaterial", type: "route" },
  { name: "Strategy", href: "/strategy", type: "route" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo/Site Name */}
        <Link to="/" className="flex items-center text-2xl font-bold text-blue-600 tracking-tight">
          {/* Optionally add a logo icon here */}
          CS Quiz Generator
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map(link =>
            link.type === "scroll" ? (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleScroll(e, link.href)}
                className={`px-4 py-2 text-gray-700 font-medium hover:text-blue-600 hover:underline hover:underline-offset-4 hover:scale-105 transition duration-200 cursor-pointer ${location.hash === link.href ? "underline underline-offset-4 text-blue-600 font-bold" : ""}`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-gray-700 font-medium hover:text-blue-600 hover:underline hover:underline-offset-4 hover:scale-105 transition duration-200 ${location.pathname === link.href ? "underline underline-offset-4 text-blue-600 font-bold" : ""}`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/auth"
            className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Login / Signup
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-4 py-4 space-y-2 animate-fade-in">
          {navLinks.map(link =>
            link.type === "scroll" ? (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleScroll(e, link.href)}
                className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600 hover:underline hover:underline-offset-4 hover:scale-105 transition duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600 hover:underline hover:underline-offset-4 hover:scale-105 transition duration-200"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/auth"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Login / Signup
          </Link>
        </div>
      )}
    </nav>
  );
} 