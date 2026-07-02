import { Download, Cpu, Briefcase, FolderGit2, BrainCircuit, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import AnimatedCounter from './AnimatedCounter';
import Magnetic from './Magnetic';
import LiquidGlass from './LiquidGlass';

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
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-display">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

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
              <Magnetic>
                <a href="#projects" className="bg-white hover:bg-neutral-200 text-black font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">View My Work</a>
              </Magnetic>
              <Magnetic>
                <a href="/pdf/Saurabh_Vora_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-primary/50 text-primary hover:bg-primary/10 px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                  <Download size={14} /> Download CV
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Right — Stats + highlights */}
          <div className="space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <TiltCard key={i} className="bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 rounded-2xl p-5 text-center flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-primary font-display">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 leading-tight">{stat.label}</div>
                </TiltCard>
              ))}
            </div>

            {/* Pillar cards */}
            <div className="space-y-4">
              {pillars.map((p, i) => (
                <LiquidGlass key={i} className="p-5 flex gap-4 items-start transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </LiquidGlass>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
