'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  BoltIcon, 
  ChartBarIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Unified Search',
    description: 'Search across all your tools and data sources in one place. Find what you need instantly.',
    icon: MagnifyingGlassIcon,
    details: [
      'Natural language processing',
      'Real-time results',
      'Cross-platform search',
      'Smart filters and tags'
    ],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    hoverColor: 'hover:bg-blue-100'
  },
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights from your marketing campaigns and customer interactions.',
    icon: ChartBarIcon,
    details: [
      'Custom dashboards',
      'Automated reporting',
      'Trend analysis',
      'Performance metrics'
    ],
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    hoverColor: 'hover:bg-purple-100'
  },
  {
    name: 'Smart Automation',
    description: 'Automate data collection and analysis across your marketing and sales tools.',
    icon: BoltIcon,
    details: [
      'Workflow automation',
      'Data synchronization',
      'Custom triggers',
      'Scheduled tasks'
    ],
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    hoverColor: 'hover:bg-green-100'
  },
  {
    name: 'Easy Integration',
    description: 'Connect with your existing tools like Google Ads, META Ads, CRM, and more.',
    icon: CloudArrowUpIcon,
    details: [
      'One-click setup',
      'API connectivity',
      'Custom integrations',
      'Data mapping'
    ],
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    hoverColor: 'hover:bg-yellow-100'
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security with role-based access control and data encryption.',
    icon: ShieldCheckIcon,
    details: [
      'End-to-end encryption',
      'Role-based access',
      'Audit logging',
      'Compliance tools'
    ],
    color: 'bg-red-50',
    iconColor: 'text-red-600',
    hoverColor: 'hover:bg-red-100'
  },
  {
    name: 'Always Up-to-date',
    description: 'Real-time synchronization ensures you always have the latest information.',
    icon: ArrowPathIcon,
    details: [
      'Real-time sync',
      'Version control',
      'Change tracking',
      'Backup & restore'
    ],
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    hoverColor: 'hover:bg-orange-100'
  }
];

interface FeatureCardProps {
  feature: typeof features[0];
  isFlipped: boolean;
  onClick: () => void;
}

function FeatureCard({ feature, isFlipped, onClick }: FeatureCardProps) {
  return (
    <div
      className="relative h-[300px] cursor-pointer perspective-1000"
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 ${feature.color} ${feature.hoverColor} rounded-2xl p-8 shadow-lg backface-hidden transition-all duration-300`}
        >
          <div className={`h-12 w-12 rounded-xl ${feature.iconColor} mb-6 flex items-center justify-center`}>
            <feature.icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{feature.name}</h3>
          <p className="text-gray-600">{feature.description}</p>
          <div className="absolute bottom-4 right-4">
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 ${feature.color} ${feature.hoverColor} rounded-2xl p-8 shadow-lg backface-hidden transition-all duration-300`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-semibold mb-6">{feature.name} Features</h3>
          <ul className="space-y-3">
            {feature.details.map((detail, index) => (
              <motion.li
                key={detail}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-700"
              >
                <svg className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (featureName: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [featureName]: !prev[featureName]
    }));
  };

  return (
    <section id="features" className="section-padding bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything you need to
            <span className="gradient-text block mt-2">streamline your workflow</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful features to help your team work more efficiently and make better decisions.
            Click on any card to learn more.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                feature={feature}
                isFlipped={flippedCards[feature.name] || false}
                onClick={() => toggleCard(feature.name)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 