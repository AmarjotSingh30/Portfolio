import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed w-full top-6 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full max-w-4xl"
      >
        {/* Logo */}
        <div className="font-mono text-accent font-bold text-xl tracking-tighter">
          &lt;AS/&gt;
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'Tech', 'Projects', 'Achievements'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-text-muted hover:text-accent transition-colors text-sm uppercase tracking-widest font-semibold"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com" className="text-text-muted hover:text-accent transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com" className="text-text-muted hover:text-accent transition-colors">
            <FaLinkedin size={18} />
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;