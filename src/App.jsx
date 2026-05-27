import React, { useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Download, Code, Briefcase, Mail, MapPin, Phone, ExternalLink, Code2, Cpu, GraduationCap, Award, BrainCircuit, Target, Home, FolderGit2, User, Sparkles, Zap, Globe } from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
    <a href="#about" className="text-neutral-400 hover:text-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] p-2 md:p-3 rounded-full transition-all duration-300 group relative">
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

const useScrambleText = (targetText, duration = 1000, delay = 150) => {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    let isMounted = true;
    const chars = "!@#$%^&*()_+{}:\"<>?,./;'[]\\=-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ⚛️💻🚀🔥🧠";
    const targetLength = targetText.length;

    let start = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed < delay) {
        animationFrameId = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min((elapsed - delay) / duration, 1);
      const revealIndex = Math.floor(progress * targetLength);

      let currentText = "";
      for (let i = 0; i < targetLength; i++) {
        if (i < revealIndex) {
          currentText += targetText[i];
        } else if (progress < 1) {
          currentText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      if (isMounted) setText(currentText || chars[Math.floor(Math.random() * chars.length)]);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        if (isMounted) setText(targetText);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetText, duration, delay]);

  return text;
};

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
  <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-transparent">
    
    {/* 6. Pulsating Studio Vignette Background */}
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

    {/* 3. Deep Neural Backdrop Typography */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
      <h1 
        className="text-[10vw] font-black tracking-[0.12em] uppercase leading-none select-none font-display opacity-35 whitespace-nowrap"
        style={{ WebkitTextStroke: "1.5px #d4af37", color: "transparent" }}
      >
        INTELLIGENCE
      </h1>
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
                WebkitBackdropFilter: "blur(4px)",
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

const About = () => {
  const stats = [
    { value: '3+', label: 'Projects Built', icon: <FolderGit2 className="text-primary" size={22} /> },
    { value: '10+', label: 'Technologies', icon: <Cpu className="text-primary" size={22} /> },
    { value: '1+', label: 'Year Experience', icon: <Briefcase className="text-primary" size={22} /> },
  ];

  const pillars = [
    {
      icon: <BrainCircuit size={24} className="text-primary" />,
      title: 'Intelligence First',
      desc: 'I approach every problem through the lens of AI and data — asking what patterns exist, what can be predicted, and how machines can amplify human decisions.'
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: 'Precision Engineering',
      desc: 'From sub-50ms cosine similarity search to 82% accuracy classifiers, I obsess over measurable outcomes and build systems that perform under real-world constraints.'
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: 'Full-Stack Delivery',
      desc: 'I bridge the gap between model and product — wrapping ML pipelines in scalable APIs, containerized services, and polished user interfaces that actually ship.'
    },
  ];

  return (
    <section id="about-me" className="py-24 relative overflow-hidden">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-display">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left — Story */}
          <div className="space-y-6">
            <p className="text-neutral-300 text-lg leading-relaxed">
              I'm <span className="text-primary font-semibold">Saurabh Vora</span>, a Data Science & AI/ML developer from Ahmedabad, India. I hold a B.E. in Information Technology from LDCE and have been building intelligent systems since I discovered that the most interesting problems live at the intersection of data and impact.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              My journey started with traditional engineering, pivoted through a diploma in Mechanical Engineering, and eventually found its true calling in machine learning, NLP, and full-stack AI product development. I've worked with LLMs, vector databases, semantic search engines, and real-time data pipelines — turning raw data into systems that people actually use.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              When I'm not building, I'm studying the latest research, contributing to open-source projects, and looking for the next hard problem worth solving.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="bg-primary hover:bg-yellow-500 text-darker font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">View My Work</a>
              <a href="/pdf/Saurabh_Vora_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-primary/50 text-primary hover:bg-primary/10 px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>

          {/* Right — Stats + highlights */}
          <div className="space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-primary font-display">{stat.value}</div>
                  <div className="text-xs text-neutral-400 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Pillar cards */}
            <div className="space-y-4">
              {pillars.map((p, i) => (
                <div key={i} className="bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex gap-4 items-start hover:border-primary/40 hover:bg-neutral-800/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const radarData = [
    { subject: 'Machine Learning', score: 95, fullMark: 100 },
    { subject: 'NLP & LLMs', score: 85, fullMark: 100 },
    { subject: 'Python Data Stack', score: 90, fullMark: 100 },
    { subject: 'Web Dev (React)', score: 75, fullMark: 100 },
    { subject: 'Backend & APIs', score: 85, fullMark: 100 },
    { subject: 'Cloud & Docker', score: 80, fullMark: 100 },
  ];

  const skills = [
    { category: 'ML / AI', items: ['scikit-learn', 'TensorFlow', 'Keras', 'NLP', 'LLMs', 'RAG'] },
    { category: 'Languages', items: ['Python', 'JavaScript', 'SQL (PostgreSQL)', 'HTML/CSS'] },
    { category: 'Frameworks', items: ['Flask', 'Streamlit', 'Next.js 15', 'React.js'] },
    { category: 'Cloud / Dev', items: ['GCP', 'Firebase', 'Supabase', 'Docker', 'Google Colab'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart Column */}
          <div className="h-[400px] w-full bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }} 
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="score"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  activeDot={{ r: 6, fill: '#60a5fa' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Cards Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: idx * 0.2 }}>
                    <Cpu className="text-primary" size={20} />
                  </motion.div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span key={item} className="bg-neutral-800 text-neutral-300 px-3 py-1 text-sm rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Anime Recommendation System',
      tech: ['Python', 'Flask', 'NLP', 'Next.js 15', 'Docker'],
      description: 'Built a semantic search engine on a 3,000+ anime dataset using Sentence Transformers. Implemented sub-50ms cosine similarity search against a pre-indexed vector database. Fully containerized with Docker Compose.',
      link: 'https://github.com/SaurabhVora/Anime_Picker_Recommendation_System',
      image: '/project-1.png'
    },
    {
      title: 'StudySync AI — Learning Platform',
      tech: ['Python', 'Streamlit', 'Supabase', 'Gemini API'],
      description: 'Engineered an AI study companion using Gemini 2.0 to curate learning playlists from 10,000+ videos. Implemented semantic gap analysis and a generative syllabus feature that creates topic breakdowns in seconds.',
      link: 'https://github.com/SaurabhVora/study-sync-ai',
      image: '/project-2.png'
    },
    {
      title: 'Stock Sentiment & Price Analyzer',
      tech: ['Python', 'PyTorch', 'FinBERT', 'SQLite', 'Plotly', 'Streamlit'],
      description: 'Developed a real-time data engineering and NLP pipeline that correlates financial news headlines with live stock market prices to analyze market sentiment trends. The system processes market data dynamically and renders it on a premium interactive dashboard.',
      link: 'https://github.com/SaurabhVora/stock-sentiment-analyzer',
      demo: 'https://stock-sentiment-analyzer2.streamlit.app/',
      image: '/project-3.png'
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-neutral-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 bg-neutral-800 relative overflow-hidden flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <p className="text-neutral-400 mb-4 text-xs leading-relaxed line-clamp-4">{project.description}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0 flex gap-4 items-center">
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-primary transition-colors">
                  GitHub <ExternalLink size={12} />
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors">
                    Live Demo <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display">
            <Briefcase className="text-primary" /> Work Experience
          </h2>
          <div className="relative border-l-2 border-white/10 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-4 ring-4 ring-darker"></div>
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
              <div className="text-primary text-sm font-medium mb-3">Unified Mentor • Jun - Jul 2024</div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Built an employee attrition classifier using Random Forest (82% accuracy). Designed interactive Power BI dashboards visualizing model predictions against historical sales trends for stakeholder drill-down analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Certs Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display">
            <GraduationCap className="text-primary" /> Education
          </h2>
          <div className="relative border-l-2 border-white/10 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-neutral-600 rounded-full -left-[9px] top-4 ring-4 ring-darker"></div>
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white">B.E. Information Technology</h3>
              <div className="text-neutral-300 text-sm font-medium mb-2">LDCE, Ahmedabad • 2022 - 2025</div>
              <div className="text-primary text-sm">CGPA: 7.73</div>
            </div>
          </div>
          <div className="relative border-l-2 border-white/10 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-neutral-600 rounded-full -left-[9px] top-4 ring-4 ring-darker"></div>
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white">Diploma in Mechanical Engineering</h3>
              <div className="text-neutral-300 text-sm font-medium mb-2">Government Polytechnic Ahmedabad • 2018 - 2022</div>
              <div className="text-primary text-sm">CGPA: 7.41</div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-8 flex items-center gap-3 font-display">
            <Award className="text-primary" /> Certifications
          </h2>
          <div className="space-y-4">
            <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=23E02B6E7E4748D412312617BBC62006A4081AFFF1D7783B7AC81D708DBD45D5" target="_blank" rel="noreferrer" className="block bg-neutral-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">OCI AI Foundations Associate</span>
              <span className="text-sm text-neutral-400">Oracle (Dec 2025)</span>
            </a>
            <a href="https://www.credly.com/badges/46864d00-81a3-4197-b98e-caf4e9a04989/linked_in_profile" target="_blank" rel="noreferrer" className="block bg-neutral-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">Project Management Professional</span>
              <span className="text-sm text-neutral-400">IBM (Jul 2024)</span>
            </a>
            <a href="https://learn.microsoft.com/api/achievements/share/en-in/SaurabhVora-0640/JHLGYGFT?sharingId=55EECCE691BD5039" target="_blank" rel="noreferrer" className="block bg-neutral-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">Microsoft Explore Generative AI</span>
              <span className="text-sm text-neutral-400">Microsoft (May 2026)</span>
            </a>
            <a href="https://learn.microsoft.com/api/achievements/share/en-in/SaurabhVora-0640/8VXY4T4W?sharingId=55EECCE691BD5039" target="_blank" rel="noreferrer" className="block bg-neutral-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-neutral-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">Microsoft Explore AI Basics</span>
              <span className="text-sm text-neutral-400">Microsoft (May 2026)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-t-full blur-[100px] -z-10"></div>
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">Let's Work <span className="text-primary">Together</span></h2>
      <p className="text-neutral-400 mb-12 text-lg">I'm currently looking for new opportunities as a fresher in Data Science, AI/ML, or Data Analytics. My inbox is always open.</p>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <a href="mailto:saurabhvora27@gmail.com" className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
          <Mail size={20} /> saurabhvora27@gmail.com
        </a>
        <a href="tel:+919974645560" className="flex items-center justify-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-xl font-medium transition-all border border-neutral-700 hover:-translate-y-1">
          <Phone size={20} /> +91 9974645560
        </a>
      </div>

      <div className="flex justify-center items-center gap-2 text-neutral-400">
        <MapPin size={18} className="text-primary" /> Ahmedabad, Gujarat, India
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-neutral-800 bg-darker py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
      <p>© {new Date().getFullYear()} Saurabh Vora. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/saurabh-vora-971037257/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="https://github.com/SaurabhVora" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, 600]);

  return (
    <div className="font-sans min-h-screen text-neutral-200 relative">
      
      {/* Antigravity Aurora Background - Fixed Position */}
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
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
