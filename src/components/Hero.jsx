import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../assets/image.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Typography */}
        <div className="order-2 lg:order-1 flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-mono mb-2 tracking-wide text-sm sm:text-base">Hi, my name is</p>
            
            {/* Fixed height container and adjusted font sizes with whitespace-nowrap */}
            <div className="min-h-[50px] sm:min-h-[70px] md:min-h-[90px] flex items-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-main leading-tight tracking-tight whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    'Amarjot Singh.', // Updated name
                    2000,      
                    '',        
                    500,       
                  ]}
                  wrapper="span"
                  speed={40}
                  deletionSpeed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="inline-block"
                />
              </h1>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-text-muted mt-2">
              I build things for the web.
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-text-muted text-lg max-w-xl leading-relaxed"
          >
            I'm a B.Tech CSE student and Full-Stack Developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-4"
          >
            <a href="#projects" className="inline-block px-8 py-4 border-2 border-accent text-accent font-mono text-sm hover:bg-accent-dim transition-all duration-300 rounded-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,240,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Check out my work!
            </a>
          </motion.div>
        </div>

        {/* Right Side: Abstract Graphic / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 -z-10"></div>
            
            <div className="w-full h-full bg-bg-card rounded-lg overflow-hidden border border-white/10 relative z-10 filter grayscale hover:grayscale-0 transition duration-500">
               <img 
                src={profileImg} 
                alt="Developer Profile" 
                className="w-full h-full object-cover opacity-80 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;