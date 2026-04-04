import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Analytics', href: '#analytics' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-slate-800/50 py-4 px-6 md:px-12 backdrop-blur-md bg-black/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-poppins tracking-wider">
          <span className="text-blue-500">Y</span>ash<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm text-slate-300 hover:text-white hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 text-sm font-medium bg-blue-600/20 text-blue-400 border border-blue-500/50 rounded-full hover:bg-blue-600/40 hover:scale-105 transition-all duration-300">
            Contact Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-b border-slate-800/50 flex flex-col items-center py-6 space-y-4 md:hidden bg-black/90"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-blue-400 text-lg"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-6 py-2 mt-2 bg-blue-600 text-white rounded-full">
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
