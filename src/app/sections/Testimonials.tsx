'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Astrico has transformed how our banking operations work. We've significantly improved our customer service response time and gained deeper insights into our operations.",
    role: "Digital Transformation Leader",
    image: "/avatars/avatar1.png"
  },
  {
    quote: "The unified search across all our banking tools has been a game-changer. Our teams can access critical information instantly, improving our service delivery.",
    role: "Operations Director",
    image: "/avatars/avatar2.png"
  },
  {
    quote: "Astrico helped us consolidate our global marketing and sales data. The insights we've gained have been invaluable for our business strategy.",
    role: "Marketing Director",
    image: "/avatars/avatar3.png"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Industry Leaders
            <span className="gradient-text block mt-2">See What Our Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 text-6xl text-primary-blue/10">"</div>
              
              <div className="relative">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
                    {/* Placeholder for avatar */}
                    <div className="w-full h-full rounded-full bg-primary-blue/10" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 