
import React from 'react';
import { Palette, Code, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceItems = [
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive designs for web and mobile applications. Working closely with clients to transform their ideas into user-friendly interfaces.',
      color: 'blue',
    },
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Building responsive and optimized websites using modern frameworks like React, Next.js, and Tailwind CSS. Focus on performance and clean code.',
      color: 'purple',
    },
    {
      icon: <FileText size={24} />,
      title: 'Content Creation',
      description: 'Producing engaging digital content including graphics, animations, and interactive elements to enhance user experience and brand messaging.',
      color: 'green',
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-neon-blue"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              className={`neon-glow-${service.color} rounded-lg p-6 h-full border border-gray-800/50`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-neon-${service.color}/20 text-neon-${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="mt-6 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-neon-${service.color}`}></div>
                <div className={`w-2 h-2 rounded-full bg-neon-${service.color}/60`}></div>
                <div className={`w-2 h-2 rounded-full bg-neon-${service.color}/30`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
