import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    { title: "Leetcode", linkText: "View Certificate or Profile", link: "#" },
    { title: "Gfg", linkText: "View Certificate or Profile", link: "#" },
    { title: "Get-Set-Pitch", linkText: "View Certificate or Profile", link: "#" },
    { title: "Hacksphere 2.0", linkText: "View Certificate or Profile", link: "#" },
    { title: "Central India's Largest Hackathon", linkText: "View Certificate or Profile", link: "#" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-wide mb-4 text-center">
          Achievements
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {achievements.map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-bg-card border border-white/10 rounded-xl p-8 hover:border-accent transition-colors duration-300 group cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <a 
              href={item.link} 
              className="text-text-muted text-sm group-hover:text-white transition-colors"
            >
              {item.linkText}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;