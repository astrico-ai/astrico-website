'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Astrico</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-primary-blue">Features</Link>
            <Link href="#ai-training" className="text-gray-700 hover:text-primary-blue relative group">
              AI Training
              <span className="absolute -top-2 -right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-blue"></span>
              </span>
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-primary-blue">Solutions</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-blue">Testimonials</Link>
            <button onClick={scrollToContact} className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-primary-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#ai-training"
                className="block px-3 py-2 text-gray-700 hover:text-primary-blue relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Training
                <span className="absolute top-2 ml-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
                </span>
              </Link>
              <Link
                href="#solutions"
                className="block px-3 py-2 text-gray-700 hover:text-primary-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-primary-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <button onClick={scrollToContact} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 