import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { PROJECTS } from '../../constants/data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <FaCode className="text-5xl text-green-600 opacity-30" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm border border-green-500 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md transition-colors"
                  >
                    <FaCode size={12} />
                    View Code
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
