import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../constants/data';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md flex justify-center gap-6 py-4 z-50">
      {NAV_ITEMS.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-green-600 hover:text-green-800 font-medium transition-colors duration-300 hover:scale-105 px-3 py-1 rounded-md hover:bg-green-50"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
