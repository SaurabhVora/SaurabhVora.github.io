import Magnetic from './Magnetic';

const Footer = () => (
  <footer className="border-t border-neutral-800 bg-darker py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
      <p>© {new Date().getFullYear()} Saurabh Vora. All rights reserved.</p>
      <div className="flex gap-4 items-center">
        <Magnetic strength={0.15}>
          <a href="https://www.linkedin.com/in/saurabh-vora-971037257/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors px-2 py-1 block">LinkedIn</a>
        </Magnetic>
        <Magnetic strength={0.15}>
          <a href="https://github.com/SaurabhVora" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors px-2 py-1 block">GitHub</a>
        </Magnetic>
      </div>
    </div>
  </footer>
);

export default Footer;
