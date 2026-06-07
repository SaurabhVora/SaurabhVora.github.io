import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-neutral-950/70 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:scale-105 transition-all overflow-hidden">
            <img src="/new logo.png" alt="SV Monogram" className="w-full h-full object-contain p-1" />
          </div>
          <span className="text-white font-bold tracking-wider font-display text-lg group-hover:text-primary transition-colors">
            SAURABH VORA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.2}>
              <NavLink 
                to={link.href} 
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative group py-2 px-1 block ${
                    isActive ? 'text-primary' : 'text-neutral-400 hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive ? (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                    )}
                  </>
                )}
              </NavLink>
            </Magnetic>
          ))}
          <Magnetic strength={0.25}>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                `border text-xs font-bold px-5 py-2.5 rounded-full tracking-wider transition-all duration-300 block ${
                  isActive 
                    ? 'bg-primary text-darker border-primary' 
                    : 'bg-primary/10 border-primary/30 hover:bg-primary hover:text-darker text-primary'
                }`
              }
            >
              HIRE ME
            </NavLink>
          </Magnetic>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/10 bg-neutral-950/95 backdrop-blur-xl absolute top-full left-0 right-0 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 border-b border-white/5 last:border-0 transition-colors ${
                      isActive ? 'text-primary' : 'text-neutral-400 hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-primary hover:bg-yellow-500 text-darker text-sm font-bold py-3 rounded-xl text-center tracking-wider transition-colors mt-2"
              >
                HIRE ME
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
