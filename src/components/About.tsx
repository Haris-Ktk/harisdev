
import React from 'react';
import { Code, Figma, Layout, Layers, Pen, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-40 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-neon-blue"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-6 mb-10"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={item} className="skill-diamond">
                <Figma size={24} className="text-neon-purple" />
              </motion.div>
              <motion.div variants={item} className="skill-diamond">
                <Pen size={24} className="text-neon-blue" />
              </motion.div>
              <motion.div variants={item} className="skill-diamond">
                <Layout size={24} className="text-neon-green" />
              </motion.div>
              <motion.div variants={item} className="skill-diamond">
                <Code size={24} className="text-neon-pink" />
              </motion.div>
              <motion.div variants={item} className="skill-diamond">
                <Layers size={24} className="text-neon-blue" />
              </motion.div>
              <motion.div variants={item} className="skill-diamond">
                <Zap size={24} className="text-neon-purple" />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-400 mb-6">
              I am a UI/UX designer and front-end developer with over 10 years of experience. I specialize in creating beautiful, 
              functional, and user-friendly digital experiences. My background in both design and development allows me to bridge 
              the gap between aesthetics and functionality.
            </p>
            <p className="text-gray-400">
              When I'm not designing or coding, I enjoy exploring new design trends, contributing to open-source projects, and 
              mentoring aspiring designers and developers. I believe in continuous learning and staying updated with the latest 
              technologies and design principles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
