'use client';

import { motion } from 'framer-motion';
import { 
  MegaphoneIcon,
  CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'Marketing Teams',
    icon: MegaphoneIcon,
    description: 'Get instant insights from your campaigns across Google Ads, META Ads, and other platforms. Analyze performance and optimize your strategy in real-time.',
    features: [
      'Unified campaign analytics',
      'Cross-platform performance tracking',
      'Automated reporting and insights',
      'ROI optimization recommendations'
    ]
  },
  {
    title: 'Sales Teams',
    icon: CurrencyDollarIcon,
    description: 'Access all your sales resources and customer data in one place. Close deals faster with instant access to the right information at the right time.',
    features: [
      'Centralized sales resources',
      'Real-time customer insights',
      'Competitive intelligence',
      'Sales enablement automation'
    ]
  },
  {
    title: 'Customer Service',
    icon: ChatBubbleBottomCenterTextIcon,
    description: 'Provide exceptional support with instant access to customer history, product documentation, and internal knowledge bases.',
    features: [
      'Unified customer view',
      'Quick access to documentation',
      'Automated response suggestions',
      'Knowledge base integration'
    ]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tailored Solutions for
            <span className="gradient-text block mt-2">Every Team</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empower your teams with the tools they need to excel in their roles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary-blue/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-6">
                  <solution.icon className="h-6 w-6 text-primary-blue" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-success-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 