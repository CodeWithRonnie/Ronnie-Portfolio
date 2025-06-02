import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-green-400">About Me</h3>
            <p className="text-gray-400 mb-4">
              {PERSONAL_INFO.about}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
                { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 text-xl transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
