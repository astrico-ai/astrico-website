'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Ready to transform your customer service training? Contact us today.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:hello@astrico.ai"
                className="text-primary-blue hover:text-primary-blue/80 transition-colors text-lg font-medium"
              >
                hello@astrico.ai
              </a>
            </div>
            <p className="text-gray-600 max-w-md">
              Our team will get back to you within 24 hours to discuss your needs and schedule a personalized demo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 