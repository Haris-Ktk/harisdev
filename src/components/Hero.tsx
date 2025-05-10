import React from 'react';
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
const Hero = () => {
  return <section className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative gradient-bg">
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div className="lg:w-3/5" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">HI I'M,</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green">HARIS DEV,</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-blue">Full Stack Web 
Developer.</span>
            </h1>
            
            <p className="text-gray-300 mb-8 max-w-lg">
              I design and develop experiences that make people's lives simple through Web and Mobile apps. 
              I work with Figma, HTML5, CSS3, JavaScript, React, Tailwind and Framer Motion.
            </p>
            
            <div className="flex items-center gap-6">
              <motion.div className="flex space-x-4" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3,
              duration: 0.5
            }}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </motion.div>
              
              <motion.a href="#contact" className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-md font-medium transition-all" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.4,
              duration: 0.5
            }} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                Hire Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div className="relative" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }}>
            <div className="relative">
              <motion.div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/10" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.3
            }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Emmanuel Eze" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Code editor decorative element */}
              <motion.div className="absolute -bottom-10 -left-10 glassmorphism p-4 rounded-lg w-full max-w-xs" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6,
              duration: 0.5
            }}>
                <div className="flex space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs font-mono text-gray-300">
                  <span className="text-green-400">const</span> <span className="text-blue-400">designer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">name</span>: <span className="text-yellow-300">'Emmanuel Eze'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">skills</span>: [<span className="text-yellow-300">'UX/UI'</span>, <span className="text-yellow-300">'Front-End'</span>]
                  <br />
                  {"}"};
                </div>
              </motion.div>
            </div>
            
            <motion.div className="absolute -bottom-24 right-0 glassmorphism p-4 rounded-lg" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8,
            duration: 0.5
          }}>
              <div className="flex items-center gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-xs text-gray-400">YEARS EXPERIENCE</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">150+</div>
                  <div className="text-xs text-gray-400">PROJECTS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">2.5k</div>
                  <div className="text-xs text-gray-400">CUPS OF COFFEE</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;