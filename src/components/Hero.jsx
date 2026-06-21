import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Target, ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const skills = ["Deep Learning", "Computer Vision", "LLMs", "Data Science"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use window.innerWidth safely
  const getWindowWidth = () => typeof window !== 'undefined' ? window.innerWidth : 1000;
  const getWindowHeight = () => typeof window !== 'undefined' ? window.innerHeight : 800;

  const parallaxX = useTransform(x, [-getWindowWidth() / 2, getWindowWidth() / 2], [-20, 20]);
  const parallaxY = useTransform(y, [-getWindowHeight() / 2, getWindowHeight() / 2], [-20, 20]);

  const springX = useSpring(parallaxX, { stiffness: 50, damping: 20 });
  const springY = useSpring(parallaxY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX - window.innerWidth / 2;
    const mouseY = event.clientY - window.innerHeight / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex items-center relative overflow-hidden bg-neutral-950"
      onMouseMove={handleMouseMove}
    >
      {/* Full Screen Parallax Image */}
      <motion.div 
        className="absolute z-0 h-[110vh] -top-[5vh] -right-[5vw] w-[140vw] md:w-[100vw] lg:w-[85vw]"
        style={{
          x: springX,
          y: springY,
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)'
        }}
      >
        <img
          src="/Gemini_Generated_Image_4jn5r04jn5r04jn5.png"
          alt="Saurabh Vora"
          className="w-full h-full object-cover object-[center_10%] lg:object-[center_15%] filter grayscale contrast-110 opacity-100"
        />
        {/* Gradients to blend image into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 from-5% via-neutral-950/80 via-25% to-transparent to-60%" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent via-30% to-neutral-950/30" />
      </motion.div>

      {/* Floating Badges (Right Side) */}
      <motion.div
        className="hidden lg:flex absolute top-1/4 right-[10%] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 items-center gap-4"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10">
          <BrainCircuit size={24} />
        </div>
        <div>
          <p className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase">Role</p>
          <p className="text-sm font-bold text-white">AI/ML Engineer</p>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:flex absolute bottom-1/4 right-[20%] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 items-center gap-4"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10">
          <Target size={24} />
        </div>
        <div>
          <p className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase">Top Model</p>
          <p className="text-sm font-bold text-white">82% Accuracy</p>
        </div>
      </motion.div>

      {/* Content Container (Left Side) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 md:mt-0">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white font-display leading-[1.1] mb-6 tracking-tight">
              Saurabh <br/>Vora.
            </h1>
            
            {/* Dynamic Text */}
            <div className="text-xl md:text-3xl text-neutral-300 font-medium mb-8 flex flex-col md:flex-row items-start md:items-center gap-2 min-h-[60px] md:min-h-0">
              <span>Building systems with</span>
              <div className="relative inline-block w-[250px] h-[30px] md:h-[40px] overflow-hidden translate-y-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={skillIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 text-primary font-bold whitespace-nowrap"
                  >
                    {skills[skillIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-lg">
              I bridge the gap between machine learning models and scalable products. Let's turn raw data into impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="bg-primary hover:bg-white text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2 group"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="/pdf/Saurabh_Vora_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 hover:border-white/20"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-neutral-500">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <div className="w-[1px] h-10 bg-neutral-800 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-primary absolute top-0"
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
