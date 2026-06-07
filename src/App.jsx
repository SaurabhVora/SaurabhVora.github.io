import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="font-sans min-h-screen text-neutral-200 relative overflow-x-hidden">
        
        {/* Page Ambient Gold Auroras - Full Page Fixed Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          {/* Top/Hero spots */}
          <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-[140px] animate-aurora-1"></div>
          <div className="absolute top-[20%] right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-yellow-600/8 rounded-full blur-[150px] animate-aurora-2"></div>
          
          {/* Middle/Skills/Projects spots */}
          <div className="absolute top-[40%] left-[25%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] bg-amber-500/6 rounded-full blur-[160px] animate-aurora-3"></div>
          <div className="absolute top-[60%] right-[15%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-primary/8 rounded-full blur-[130px] animate-aurora-1"></div>
          
          {/* Bottom/Experience/Contact spots */}
          <div className="absolute bottom-[10%] left-[15%] w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] bg-yellow-600/8 rounded-full blur-[150px] animate-aurora-2"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={
                <>
                  <About />
                  <Experience />
                  <Certificates />
                </>
              } />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

