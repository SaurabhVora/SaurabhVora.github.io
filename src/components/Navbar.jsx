import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about-me' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // trigger exactly when crossing the center region of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-[24px] backdrop-saturate-[1.8] bg-white/[0.04] border-b border-white/15 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="flex items-center gap-2 group">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,255,255,0.08)] group-hover:scale-105 transition-all overflow-hidden">
            <img src="/logo.svg" alt="SV Monogram" className="w-full h-full object-contain p-1" />
          </div>
          <span className="text-white font-bold tracking-wider font-display text-lg group-hover:text-primary transition-colors">
            SAURABH VORA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.2}>
              <a 
                href={link.href} 
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-2 px-1 block ${
                  activeSection === link.href ? 'text-primary' : 'text-neutral-400 hover:text-primary'
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeSectionUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.25}>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="border text-xs font-bold px-5 py-2.5 rounded-full tracking-wider transition-all duration-300 block bg-primary/10 border-primary/30 hover:bg-primary hover:text-darker text-primary"
            >
              HIRE ME
            </a>
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
            className="md:hidden border-b border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] absolute top-full left-0 right-0 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`text-base font-medium py-2 border-b border-white/5 last:border-0 transition-colors ${
                    activeSection === link.href ? 'text-primary' : 'text-neutral-400 hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="bg-primary hover:bg-yellow-500 text-darker text-sm font-bold py-3 rounded-xl text-center tracking-wider transition-colors mt-2"
              >
                HIRE ME
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
