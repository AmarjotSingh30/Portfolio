import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "SignLink",
      description: "",
      tech: ["Python", "TensorFlow", "Keras", "DNNs"],
      github: "https://github.com/",
      demo: "#",
      image: "" 
    },
    {
      title: "Merin-Ecommerce Platform",
      description: "",
      tech: ["PHP", "MySQL", "JavaScript", "CSS3"],
      github: "https://github.com/",
      demo: "#",
      image: ""
    },
    {
      title: "School Management System",
      description: "",
      tech: ["PHP", "MySQL", "TailwindCSS"],
      github: "https://github.com/",
      demo: "#",
      image: ""
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      
      {/* Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-wide mb-4 text-center">
          My Projects
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </motion.div>

      {/* Projects List */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            
            {/* Project Image Container */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-accent/20 translate-x-3 translate-y-3 rounded-xl -z-10 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-bg-card aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : 'lg:items-start text-left'}`}>
              <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
              
              <div className="bg-bg-card p-6 rounded-xl border border-white/5 shadow-xl mb-6 z-10 w-full hover:border-accent/30 transition-colors">
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                {project.tech.map((techItem, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-accent"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300 text-2xl"
                >
                  <FaGithub />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300 text-2xl"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;