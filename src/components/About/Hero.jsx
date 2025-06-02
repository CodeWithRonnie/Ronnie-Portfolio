import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/data';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10 pt-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <motion.div
          whileHover={{ rotate: 5 }}
          className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-green-400 mx-auto"
        >
          <img 
            src="https://via.placeholder.com/200" 
            alt={PERSONAL_INFO.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="flex justify-center gap-4 mt-6">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600 text-2xl transition-transform hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600 text-2xl transition-transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href={SOCIAL_LINKS.email} 
            className="text-gray-700 hover:text-green-600 text-2xl transition-transform hover:scale-125"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4 }} 
        className="text-4xl md:text-5xl font-bold mt-8 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
      >
        Hi, I'm {PERSONAL_INFO.name}!
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl mt-4 text-green-700 max-w-2xl mx-auto"
      >
        {PERSONAL_INFO.role} from {PERSONAL_INFO.location}
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-lg mt-6 text-gray-600 max-w-2xl mx-auto"
      >
        {PERSONAL_INFO.about}
      </motion.p>
    </section>
  );
};

export default Hero;
