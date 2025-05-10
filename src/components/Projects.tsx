
import React from 'react';
import { Github, ExternalLink, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Dashboard',
      description: 'Modern dashboard with AI insights, data visualization, and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Tailwind', 'TypeScript']
    },
    {
      title: 'E-commerce App Redesign',
      description: 'Complete UX overhaul for a major e-commerce platform, focusing on usability and conversion.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
      tags: ['UX/UI', 'Figma', 'Research']
    },
    {
      title: 'Mobile Banking App',
      description: 'User-friendly banking application with focus on security, accessibility, and ease of use.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
      tags: ['React Native', 'UX/UI', 'Animation']
    },
    {
      title: 'Social Media Platform',
      description: 'Modern social network with real-time messaging, content sharing, and community features.',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      tags: ['Next.js', 'Socket.io', 'MongoDB']
    },
    {
      title: 'Daily Task Manager',
      description: 'Productivity application for organizing tasks, managing time, and tracking progress.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      tags: ['React', 'Redux', 'Firebase']
    },
    {
      title: 'Health & Fitness Tracker',
      description: 'Comprehensive health monitoring application with data visualization and progress tracking.',
      image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tags: ['Flutter', 'UX/UI', 'API Integration']
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-40 right-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Projects</span>
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-neon-blue"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glassmorphism gradient-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', transition: { duration: 0.2 } }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs glassmorphism px-2 py-1 rounded-full text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-gray-300 text-sm">
                  <a href="#" className="mr-4 hover:text-neon-blue transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="mr-4 hover:text-neon-blue transition-colors">
                    <ExternalLink size={18} />
                  </a>
                  <a href="#" className="hover:text-neon-blue transition-colors">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
