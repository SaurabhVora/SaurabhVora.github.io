import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Download, Mail, Code2, BrainCircuit, Target } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import useScrambleText from '../hooks/useScrambleText';

const Hero = () => {
  const scrambledSaurabh = useScrambleText("Saurabh", 800, 150);
  const scrambledVora = useScrambleText("Vora", 800, 350);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [12, -12]);
  const rotateY = useTransform(x, [-200, 200], [-12, 12]);

  const springX = useSpring(rotateX, { stiffness: 120, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 25 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const bioText = "Between raw data and real-world impact lies the space where I build. From semantic search engines to personalized learning platforms, my work revolves around intelligence, precision, and purpose. Through Python, LLMs, and full-stack delivery — I turn ideas into systems that actually work.";
  const bioWords = bioText.split(" ");

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-transparent">

      {/* Hero Background Video (Veo AI Generated Character) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10 select-none pointer-events-none transition-opacity duration-1000"
        src="/Character_sitting_at_workstation_202606011152.mp4"
      />

      {/* Pulsating Studio Vignette Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.35, 0.55, 0.35] 
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 10, 
            ease: "easeInOut" 
          }} 
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/8 rounded-full blur-[140px]" 
        />
      </div>



      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pointer-events-none w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pointer-events-auto">
          


          {/* Pre-header Mask Line Reveal */}
          <div className="overflow-hidden flex items-center gap-3 mb-3">
            <motion.span 
              className="h-[1px] bg-primary/40 block" 
              initial={{ width: 0 }}
              animate={{ width: 45 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.h2 
              className="text-primary font-bold tracking-[0.2em] font-display text-xs md:text-sm leading-none"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              HELLO, I'M
            </motion.h2>
          </div>

          {/* Matrix Decoder Scramble + Gold Shimmer Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight flex flex-col tracking-wide font-display">
            <span className="shimmer-text py-1 select-none">
              {scrambledSaurabh}
            </span>
            <span className="shimmer-text py-1 select-none">
              {scrambledVora}
            </span>
          </h1>

          <motion.div 
            className="overflow-hidden whitespace-nowrap mb-6"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl text-neutral-300 flex items-center gap-2 w-max pr-4 border-r-2 border-primary animate-pulse">
              <Code2 className="text-primary flex-shrink-0" /> Data Science & AI/ML Developer
            </h3>
          </motion.div>

          {/* Word-by-Word Bio Paragraph Stagger Spring */}
          <motion.p 
            className="text-neutral-400 mb-8 max-w-lg leading-relaxed flex flex-wrap gap-x-1.5 gap-y-1"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.02,
                  delayChildren: 0.7
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {bioWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 20 } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#projects" className="bg-primary hover:bg-yellow-500 text-darker font-bold px-8 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-center">
              View My Work
            </a>
            <a href="/pdf/Saurabh_Vora_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/80 hover:bg-neutral-700 text-white border border-neutral-700 px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2">
              <Download size={18} /> Download CV
            </a>
          </div>
          <div className="flex gap-4 mb-8">
            <a href="https://www.linkedin.com/in/saurabh-vora-971037257/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-neutral-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/SaurabhVora" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-all text-neutral-400">
              <FaGithub size={20} />
            </a>
            <a href="mailto:saurabhvora27@gmail.com" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-400">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Column — Circular Ring Portrait */}
        <div className="relative flex justify-center mt-12 md:mt-0 items-center h-[420px]">
          
          {/* Radial gold aura glow */}
          <div
            className="absolute inset-0 rounded-full animate-pulse-gold pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.07) 55%, transparent 75%)",
              transform: "scale(1.3)",
              zIndex: 0,
            }}
          />

          {/* Slow rotating dashed orbit ring */}
          <div
            className="absolute rounded-full animate-orbit pointer-events-none"
            style={{
              inset: "-18px",
              zIndex: 1,
              border: "1.5px dashed rgba(212,175,55,0.4)",
              borderRadius: "9999px",
              boxShadow: "0 0 14px rgba(212,175,55,0.18)",
            }}
          />

          {/* Second counter-orbit ring (slower, reversed) */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: "-32px",
              zIndex: 1,
              border: "1px dashed rgba(212,175,55,0.18)",
              borderRadius: "9999px",
              animation: "orbit 14s infinite linear reverse",
            }}
          />

          {/* Main 3D tilt wrapper */}
          <motion.div
            className="relative z-10 cursor-pointer w-80 h-80 md:w-96 md:h-96"
            style={{
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Gold gradient border ring */}
            <div
              className="w-full h-full rounded-full p-[3px]"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #f5e27a 35%, #a07820 65%, #d4af37 100%)",
                boxShadow: "0 0 45px rgba(212,175,55,0.4), 0 0 90px rgba(212,175,55,0.15)",
                transform: "translateZ(0px)",
              }}
            >
              {/* Frosted glass inner circle */}
              <div
                className="w-full h-full rounded-full overflow-hidden relative"
                style={{
                  background: "rgba(10,10,10,0.6)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <img
                  src="/saurabh new profile image.png"
                  alt="Saurabh Vora"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  style={{ objectPosition: "center 35%" }}
                />
                {/* Inner bottom vignette */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 45%)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Badge — Role */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-6 -left-2 md:-left-10 bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 select-none pointer-events-none"
          >
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <BrainCircuit size={20} />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Role</p>
              <p className="text-sm font-bold text-white">AI/ML Engineer</p>
            </div>
          </motion.div>

          {/* Floating Badge — Accuracy */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 -right-2 md:-right-10 bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 select-none pointer-events-none"
          >
            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
              <Target size={20} />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Top Model</p>
              <p className="text-sm font-bold text-white">82% Accuracy</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
