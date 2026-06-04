import { Home, User, BrainCircuit, FolderGit2, Briefcase, Mail } from 'lucide-react';

const Sidebar = () => (
  <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto bg-neutral-950/20 backdrop-blur-xl border border-white/10 rounded-full py-4 px-8 md:py-8 md:px-4 flex flex-row md:flex-col gap-6 md:gap-8 z-50 shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_1px_1px_rgba(255,255,255,0.15),0_0_30px_rgba(212,175,55,0.15)]">
    <a href="#" className="text-neutral-400 hover:text-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] p-2 md:p-3 rounded-full transition-all duration-300 group relative">
      <Home size={20} />
      <span className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">Home</span>
    </a>
    <a href="#about-me" className="text-neutral-400 hover:text-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] p-2 md:p-3 rounded-full transition-all duration-300 group relative">
      <User size={20} />
      <span className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">About</span>
    </a>
    <a href="#skills" className="text-neutral-400 hover:text-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] p-2 md:p-3 rounded-full transition-all duration-300 group relative">
      <BrainCircuit size={20} />
      <span className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">Skills</span>
    </a>
    <a href="#projects" className="text-neutral-400 hover:text-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] p-2 md:p-3 rounded-full transition-all duration-300 group relative">
      <FolderGit2 size={20} />
      <span className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">Projects</span>
    </a>
    <a href="#experience" className="text-neutral-400 hover:text-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] p-2 md:p-3 rounded-full transition-all duration-300 group relative">
      <Briefcase size={20} />
      <span className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">Experience</span>
    </a>
    <a href="#contact" className="text-neutral-400 hover:text-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] p-2 md:p-3 rounded-full transition-all duration-300 group relative">
      <Mail size={20} />
      <span className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">Contact</span>
    </a>
  </nav>
);

export default Sidebar;
