import { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SectionDivider from './components/SectionDivider';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  return (
    <>
      {/* SVG Filters for Liquid Glass Refraction */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Subtle displacement for glass refraction */}
          <filter id="liquid-glass-distort" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.015"
              numOctaves="3"
              seed="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          {/* Chromatic aberration filter */}
          <filter id="liquid-glass-chroma">
            <feOffset in="SourceGraphic" dx="1" dy="0" result="red" />
            <feOffset in="SourceGraphic" dx="-1" dy="0" result="blue" />
            <feColorMatrix in="red" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.3 0" result="red-out" />
            <feColorMatrix in="blue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 0.3 0" result="blue-out" />
            <feBlend in="SourceGraphic" in2="red-out" mode="screen" result="blend1" />
            <feBlend in="blend1" in2="blue-out" mode="screen" />
          </filter>
        </defs>
      </svg>

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div 
        className="font-sans min-h-screen text-neutral-200 relative overflow-x-hidden"
        onMouseMove={handleMouseMove}
      >
        
        {/* Global Spotlight Effect */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`
          }}
        />

        {/* Page Ambient Auroras - Enhanced with subtle color for glass refraction */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          {/* Top/Hero spots */}
          <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-indigo-500/[0.04] rounded-full blur-[140px] animate-aurora-1"></div>
          <div className="absolute top-[20%] right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-cyan-400/[0.03] rounded-full blur-[150px] animate-aurora-2"></div>
          
          {/* Middle/Skills/Projects spots */}
          <div className="absolute top-[40%] left-[25%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] bg-purple-500/[0.03] rounded-full blur-[160px] animate-aurora-3"></div>
          <div className="absolute top-[60%] right-[15%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-blue-500/[0.03] rounded-full blur-[130px] animate-aurora-1"></div>
          
          {/* Bottom/Experience/Contact spots */}
          <div className="absolute bottom-[10%] left-[15%] w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] bg-violet-400/[0.03] rounded-full blur-[150px] animate-aurora-2"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider inverted={true} />
            <Experience />
            <SectionDivider />
            <Certificates />
            <SectionDivider inverted={true} />
            <Skills />
            <SectionDivider />
            <Projects />
            <SectionDivider inverted={true} />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;



