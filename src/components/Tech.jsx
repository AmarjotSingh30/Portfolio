import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaPhp, FaPython, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from 'react-icons/si';

const Tech = () => {
  // Updated stack incorporating MERN and Java
  const techs = [
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> }, 
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="tech" className="py-32 px-4 relative flex flex-col items-center justify-center min-h-[50vh]">
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-medium text-white mb-20 tracking-wide"
      >
        Technologies
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto"
      >
        {techs.map((tech, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.2, 
              y: -10,
              filter: "drop-shadow(0px 10px 15px rgba(255,255,255,0.1))"
            }}
            className="text-7xl md:text-[5.5rem] cursor-pointer"
            title={tech.name}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
};

export default Tech;