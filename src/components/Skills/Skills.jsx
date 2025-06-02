import { motion } from 'framer-motion';
import { SKILLS } from '../../constants/data';

const Skills = () => {
  // Group skills into categories for better organization
  const skillCategories = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Redux'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL']
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-green-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center text-green-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are the technologies and tools I work with on a regular basis.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills visualization */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">Proficiency Levels</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: 'React', level: 90 },
              { name: 'JavaScript', level: 85 },
              { name: 'Node.js', level: 80 },
              { name: 'CSS/Tailwind', level: 85 },
              { name: 'Python', level: 70 },
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
