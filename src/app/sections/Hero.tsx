'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact') as HTMLElement;
    if (contactSection) {
      const offsetTop = contactSection.offsetTop;
      window.scrollTo({
        top: offsetTop - 20, // Small offset to give some breathing room
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-12 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unify Your Enterprise Knowledge
            <span className="gradient-text block mt-2">Work Smarter, Not Harder</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 mb-12 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect your marketing, sales, and customer service tools in one place. 
            Stop wasting time searching for information and start making data-driven decisions instantly.
          </motion.p>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={scrollToContact}
              className="btn-primary px-12 py-4 text-lg font-medium hover:scale-105 transition-transform"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 blur-3xl rounded-full bg-gradient-to-r from-primary-blue to-secondary-purple"></div>
    </section>
  );
} 