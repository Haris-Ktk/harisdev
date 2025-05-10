
import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Samuel Oak',
      position: 'CEO & Founder',
      company: 'TechNova',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      text: 'Working with Emmanuel was a game-changer for our company. His design expertise and technical knowledge helped us create a product that our customers love. The attention to detail and user experience considerations were exceptional.'
    },
    {
      name: 'Professor Juniper',
      position: 'Product Manager',
      company: 'InnovateLabs',
      text: 'Emmanuel consistently exceeded our expectations. His ability to translate complex ideas into beautiful and functional designs sets him apart. The development process was smooth, and he was always open to feedback and iterations. Highly recommended!'
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute top-40 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-neon-blue"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800">
                <MessageSquare size={20} className="text-neon-blue" />
              </div>
              
              <div className="flex items-center mb-4 mt-2">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                {testimonial.image && (
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
