import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
          Get in Touch
        </h2>
        
        <p className="text-text-muted text-lg md:text-xl mb-10 leading-relaxed">
          Want to chat? Send me an E-mail through this button and I'll respond whenever I can.
        </p>

        <a 
          href="mailto:your.email@example.com" 
          className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-md hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;