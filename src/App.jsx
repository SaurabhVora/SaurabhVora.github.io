import React, { useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Download, Code, Briefcase, Mail, MapPin, Phone, ExternalLink, Code2, Cpu, GraduationCap, Award, BrainCircuit, Target } from 'lucide-react';
import ParticleNetwork from './components/ParticleNetwork';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => (
  <header className="fixed top-0 w-full bg-darker/80 backdrop-blur-md z-50 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        SV.
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>
      <a href="/pdf/Saurabh_Vora_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2">
        <Download size={16} /> Resume
      </a>
    </div>
  </header>
);

const Hero = () => {
  return (
  <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pointer-events-none">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pointer-events-auto">
        <h2 className="text-primary font-medium tracking-wider mb-2">HELLO, I'M</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight flex flex-col">
          <span className="overflow-hidden">
            <motion.span 
              className="block text-white" 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Saurabh
            </motion.span>
          </span>
          <span className="overflow-hidden">
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400" 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Vora
            </motion.span>
          </span>
        </h1>
        <motion.div 
          className="overflow-hidden whitespace-nowrap mb-6"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl text-slate-300 flex items-center gap-2 w-max pr-4 border-r-2 border-primary animate-pulse">
            <Code2 className="text-primary flex-shrink-0" /> Data Science & AI/ML Developer
          </h3>
        </motion.div>
        <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
          Graduate IT engineer with hands-on experience in machine learning, NLP, and full-stack AI development. Passionate about building intelligent systems.
        </p>
        <div className="flex gap-4 mb-8">
          <a href="https://www.linkedin.com/in/saurabh-vora-971037257/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-slate-400">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/SaurabhVora" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition-all text-slate-400">
            <FaGithub size={20} />
          </a>
          <a href="mailto:saurabhvora27@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative flex justify-center pointer-events-auto mt-12 md:mt-0">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 relative z-10 bg-gradient-to-br from-slate-800 to-slate-950 shadow-2xl flex items-center justify-center">
          <img src="/profile_cropped.png" alt="Saurabh Vora" className="w-full h-full object-cover" />
        </div>
        
        {/* Floating Badges */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
          className="absolute -top-4 -left-4 md:top-4 md:-left-8 bg-slate-900/60 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <BrainCircuit size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium text-left">Role</p>
            <p className="text-sm font-bold text-white">AI/ML Engineer</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} 
          className="absolute -bottom-4 -right-4 md:bottom-10 md:-right-8 bg-slate-900/60 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
            <Target size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium text-left">Top Model</p>
            <p className="text-sm font-bold text-white">82% Accuracy</p>
          </div>
        </motion.div>
      </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, margin: "-50px" }} 
            className="h-[400px] w-full bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl"
          >
            <ResponsiveContainer width="100%" height="100%">
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
          </motion.div>

          {/* Cards Column */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: idx * 0.2 }}>
                    <Cpu className="text-primary" size={20} />
                  </motion.div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span key={item} className="bg-slate-800 text-slate-300 px-3 py-1 text-sm rounded-full">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300">
              <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
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
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-primary" /> Work Experience
          </h2>
          <div className="relative border-l-2 border-white/10 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-4 ring-4 ring-darker"></div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
              <div className="text-primary text-sm font-medium mb-3">Unified Mentor • Jun - Jul 2024</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Built an employee attrition classifier using Random Forest (82% accuracy). Designed interactive Power BI dashboards visualizing model predictions against historical sales trends for stakeholder drill-down analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Certs Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h2>
          <div className="relative border-l-2 border-white/10 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-4 ring-4 ring-darker"></div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white">B.E. Information Technology</h3>
              <div className="text-slate-300 text-sm font-medium mb-2">LDCE, Ahmedabad • 2022 - 2025</div>
              <div className="text-primary text-sm">CGPA: 7.73</div>
            </div>
          </div>
          <div className="relative border-l-2 border-white/10 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-4 ring-4 ring-darker"></div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white">Diploma in Mechanical Engineering</h3>
              <div className="text-slate-300 text-sm font-medium mb-2">Government Polytechnic Ahmedabad • 2018 - 2022</div>
              <div className="text-primary text-sm">CGPA: 7.41</div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-8 flex items-center gap-3">
            <Award className="text-primary" /> Certifications
          </h2>
          <div className="space-y-4">
            <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=23E02B6E7E4748D412312617BBC62006A4081AFFF1D7783B7AC81D708DBD45D5" target="_blank" rel="noreferrer" className="block bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">OCI AI Foundations Associate</span>
              <span className="text-sm text-slate-400">Oracle (Dec 2025)</span>
            </a>
            <a href="https://www.credly.com/badges/46864d00-81a3-4197-b98e-caf4e9a04989/linked_in_profile" target="_blank" rel="noreferrer" className="block bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">Project Management Professional</span>
              <span className="text-sm text-slate-400">IBM (Jul 2024)</span>
            </a>
            <a href="https://learn.microsoft.com/api/achievements/share/en-in/SaurabhVora-0640/JHLGYGFT?sharingId=55EECCE691BD5039" target="_blank" rel="noreferrer" className="block bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">Microsoft Explore Generative AI</span>
              <span className="text-sm text-slate-400">Microsoft (May 2026)</span>
            </a>
            <a href="https://learn.microsoft.com/api/achievements/share/en-in/SaurabhVora-0640/8VXY4T4W?sharingId=55EECCE691BD5039" target="_blank" rel="noreferrer" className="block bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-slate-800/50 transition-all duration-300 group">
              <span className="font-medium text-white group-hover:text-primary transition-colors">Microsoft Explore AI Basics</span>
              <span className="text-sm text-slate-400">Microsoft (May 2026)</span>
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
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work <span className="text-primary">Together</span></h2>
      <p className="text-slate-400 mb-12 text-lg">I'm currently looking for new opportunities as a fresher in Data Science, AI/ML, or Data Analytics. My inbox is always open.</p>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <a href="mailto:saurabhvora27@gmail.com" className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
          <Mail size={20} /> saurabhvora27@gmail.com
        </a>
        <a href="tel:+919974645560" className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium transition-all border border-slate-700 hover:-translate-y-1">
          <Phone size={20} /> +91 9974645560
        </a>
      </div>

      <div className="flex justify-center items-center gap-2 text-slate-400">
        <MapPin size={18} className="text-primary" /> Ahmedabad, Gujarat, India
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-slate-800 bg-darker py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
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
    <div className="font-sans min-h-screen text-slate-200 relative">
      <ParticleNetwork />
      
      {/* Antigravity Aurora Background - Fixed Position */}
      <motion.div style={{ y: y1 }} className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-aurora-1"></div>
        <div className="absolute top-[30%] left-[40%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-aurora-2"></div>
        <div className="absolute top-[20%] left-[50%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-aurora-3"></div>
      </motion.div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
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
