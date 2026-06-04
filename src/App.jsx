import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen text-neutral-200 relative bg-black overflow-x-hidden">
      
      {/* Page Ambient Gold Auroras - Fixed Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/10 rounded-full blur-[120px] animate-aurora-1"></div>
        <div className="absolute top-[30%] left-[40%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-yellow-600/10 rounded-full blur-[120px] animate-aurora-2"></div>
        <div className="absolute top-[20%] left-[50%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-aurora-3"></div>
      </div>

      <div className="relative z-10 pl-0 md:pl-24">
        <Sidebar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

