'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Legal() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('privacy');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'privacy' || tab === 'terms') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'privacy'
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'terms'
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Terms of Service
            </button>
          </div>

          {/* Privacy Policy Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === 'privacy' ? 1 : 0 }}
            className={`space-y-8 text-gray-600 ${activeTab === 'privacy' ? 'block' : 'hidden'}`}
          >
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Company details</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our products</li>
                <li>Send important notices and updates</li>
                <li>Analyze and enhance our platform's performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>
          </motion.div>

          {/* Terms of Service Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === 'terms' ? 1 : 0 }}
            className={`space-y-8 text-gray-600 ${activeTab === 'terms' ? 'block' : 'hidden'}`}
          >
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Astrico's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="mb-4">
                Astrico provides AI-powered training solutions for customer service teams. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voice simulation training</li>
                <li>Performance analytics</li>
                <li>Training management tools</li>
                <li>Reporting and insights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information</li>
                <li>Maintain the security of your account</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Not misuse or attempt to exploit the services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by Astrico and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>
          </motion.div>

          {/* Common Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <p>
                For any questions about our Privacy Policy or Terms of Service, please contact us at{' '}
                <a href="mailto:hello@astrico.ai" className="text-primary-blue hover:text-primary-blue/80">
                  hello@astrico.ai
                </a>
              </p>
              <p className="text-sm text-gray-500">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 