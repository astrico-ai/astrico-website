'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <div className="space-y-8 text-gray-600">
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

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p>
                Subscription fees are billed in advance on a recurring basis. You agree to pay all charges associated with your use of our services. All payments are non-refundable unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p>
                Astrico shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:hello@astrico.ai" className="text-primary-blue hover:text-primary-blue/80">
                  hello@astrico.ai
                </a>
              </p>
            </section>

            <p className="text-gray-600 mb-4">
              We don&apos;t guarantee the accuracy of any content or data provided through the service.
            </p>

            <div className="text-sm text-gray-500 mt-8">
              Last Updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 