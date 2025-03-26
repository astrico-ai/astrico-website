'use client';

import { motion } from 'framer-motion';
import {
  ArrowPathIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const integrations = [
  {
    name: 'Marketing Tools',
    icon: MegaphoneIcon,
    tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads'],
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    name: 'CRM Systems',
    icon: UserGroupIcon,
    tools: ['Salesforce', 'HubSpot', 'Zoho'],
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    name: 'Analytics',
    icon: ChartBarIcon,
    tools: ['Google Analytics', 'Mixpanel', 'Amplitude'],
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Customer Service',
    icon: ChatBubbleBottomCenterTextIcon,
    tools: ['Zendesk', 'Intercom', 'Freshdesk'],
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    name: 'Document Storage',
    icon: DocumentTextIcon,
    tools: ['Google Drive', 'SharePoint', 'Dropbox'],
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    name: 'Sync & Update',
    icon: ArrowPathIcon,
    tools: ['Real-time', 'Automated', 'Scheduled'],
    color: 'bg-red-100',
    iconColor: 'text-red-600',
  },
];

export default function IntegrationShowcase() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Seamless Integration
            <span className="gradient-text block mt-2">Connect Your Favorite Tools</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Astrico connects with your existing tools to create a unified knowledge hub.
            No more switching between apps to find what you need.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connection lines in background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`rounded-2xl p-6 ${integration.color} hover:shadow-lg transition-all duration-300 group`}>
                <div className={`h-12 w-12 rounded-xl ${integration.iconColor} mb-4`}>
                  <integration.icon className="h-8 w-8 mx-auto mt-2" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{integration.name}</h3>
                <ul className="space-y-2">
                  {integration.tools.map((tool) => (
                    <motion.li
                      key={tool}
                      className="flex items-center text-gray-700"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {tool}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">Don't see your tool? We're constantly adding new integrations.</p>
          <button className="btn-primary">
            Request Integration
          </button>
        </motion.div>
      </div>
    </section>
  );
} 