import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">Mes projets</h2>
          <p className="text-gray-600 max-w-2xl mt-4">
            Voici une sélection des projets sur lesquels j'ai travaillé pendant ma formation et durant mon temps libre.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.2 * index}>
              <motion.div 
                className="card h-full flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto flex gap-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Démo
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous voulez voir plus? Consultez tous mes projets sur GitHub.
            </p>
            <a 
              href="https://github.com/MrTangoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline inline-flex items-center"
            >
              <Github className="h-4 w-4 mr-2" /> Voir GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;