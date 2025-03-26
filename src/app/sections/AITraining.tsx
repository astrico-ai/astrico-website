'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const trainingModes = [
  {
    id: 'chat',
    title: 'Chat Simulation',
    description: 'AI-powered chat scenarios that simulate real customer interactions',
    features: [
      'Real-time conversation simulation',
      'Instant feedback on responses',
      'Multiple scenario variations',
      'Performance analytics'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    id: 'voice',
    title: 'Voice Simulation',
    description: 'Natural voice interactions with AI for realistic call training',
    features: [
      'Voice recognition & analysis',
      'Tone and sentiment feedback',
      'Call handling scenarios',
      'Speech clarity metrics'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  }
];

interface ChatMessage {
  role: 'customer' | 'agent';
  message?: string;
  timestamp?: string;
  options?: string[];
  feedback?: {
    best: number;
    explanation: string;
  };
}

interface CallScenario {
  scenario: string;
  customerMood: string;
  objectives: string[];
}

const sampleChat: ChatMessage[] = [
  {
    role: 'customer',
    message: "Hi, I'm having trouble with my recent order #12345. It hasn't arrived yet.",
    timestamp: '10:30 AM'
  },
  {
    role: 'agent',
    options: [
      'I understand your concern about the delayed order. Let me check the status for you.',
      'Sorry about that. Give me a moment to look into it.',
      'I\'ll help you track down your order right away.'
    ],
    feedback: {
      best: 0,
      explanation: 'This response shows empathy and professionalism while clearly stating the next action.'
    }
  }
];

const sampleCall: CallScenario = {
  scenario: 'Customer calling about a billing discrepancy',
  customerMood: 'Concerned',
  objectives: [
    'Verify customer identity',
    'Locate billing information',
    'Explain charges clearly',
    'Resolve discrepancy'
  ]
};

const voiceFeatures = [
  {
    title: 'Voice recognition & analysis',
    description: 'Natural language processing evaluates tone, clarity, and effectiveness.'
  },
  {
    title: 'Tone and sentiment feedback',
    description: 'Learn to manage customer emotions and maintain professional composure.'
  },
  {
    title: 'Call handling scenarios',
    description: 'Practice different call types from support to sales and conflict resolution.'
  },
  {
    title: 'Speech clarity metrics',
    description: 'Improve pronunciation, pace, and vocal confidence.'
  }
];

export default function AITraining() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section id="ai-training" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-blue/5 to-secondary-purple/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary-purple/5 to-primary-blue/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-blue/10 text-primary-blue mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              New Feature
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Voice Training
            <span className="gradient-text block mt-2">Reduce Training Costs by 60%</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Train your customer service agents with advanced voice simulation technology.
            Perfect their communication skills with real-time AI feedback and analysis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {voiceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-primary-blue mb-2">60%</div>
              <div className="text-gray-600">Reduction in Training Costs</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-primary-blue mb-2">2x</div>
              <div className="text-gray-600">Faster Agent Onboarding</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-primary-blue mb-2">85%</div>
              <div className="text-gray-600">Improved First Call Resolution</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 