import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../constants/data';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out to me through the form or any of the contact methods below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaPaperPlane className="text-green-500 mr-2" />
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-green-600 hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+27 12 345 6789</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
                  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                  { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-green-100 text-gray-700 rounded-full flex items-center justify-center text-xl transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
