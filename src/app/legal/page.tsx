'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Legal() {
  const [activeTab, setActiveTab] = useState('privacy');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'privacy' || tab === 'terms') {
      setActiveTab(tab);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'privacy'
                  ? 'bg-primary-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'terms'
                  ? 'bg-primary-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Terms of Service
            </button>
          </div>

          {/* Privacy Policy Content */}
          <div className={activeTab === 'privacy' ? 'block' : 'hidden'}>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Create an account</li>
                <li>Use our services</li>
                <li>Contact our support team</li>
                <li>Subscribe to our newsletters</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Send you updates and marketing communications</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
          </div>

          {/* Terms of Service Content */}
          <div className={activeTab === 'terms' ? 'block' : 'hidden'}>
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using our services, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use of Services</h2>
              <p className="text-gray-600 mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                Our service and its contents are protected by copyright and other intellectual property laws.
              </p>
            </section>
          </div>

          {/* Common Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              For any questions about our Privacy Policy or Terms of Service, please contact us at{' '}
              <a href="mailto:hello@astrico.ai" className="text-primary-blue hover:underline">
                hello@astrico.ai
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 