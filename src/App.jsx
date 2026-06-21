import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="font-sans min-h-screen text-neutral-200 relative overflow-x-hidden">
        
        {/* Page Ambient Monochromatic Auroras - Full Page Fixed Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          {/* Top/Hero spots */}
          <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-white/4 rounded-full blur-[140px] animate-aurora-1"></div>
          <div className="absolute top-[20%] right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-neutral-900/30 rounded-full blur-[150px] animate-aurora-2"></div>
          
          {/* Middle/Skills/Projects spots */}
          <div className="absolute top-[40%] left-[25%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] bg-white/3 rounded-full blur-[160px] animate-aurora-3"></div>
          <div className="absolute top-[60%] right-[15%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-neutral-900/20 rounded-full blur-[130px] animate-aurora-1"></div>
          
          {/* Bottom/Experience/Contact spots */}
          <div className="absolute bottom-[10%] left-[15%] w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] bg-white/3 rounded-full blur-[150px] animate-aurora-2"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Experience />
            <Certificates />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

