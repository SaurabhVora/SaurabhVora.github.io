import { motion } from 'framer-motion';
import { Cpu, Brain, Search, Code, Terminal } from 'lucide-react';
import TiltCard from './TiltCard';

const getSkillIcon = (name) => {
  const brandIcons = {
    'scikit-learn': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tensorflow.svg',
    'Keras': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/keras.svg',
    'Python': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg',
    'SQL (PostgreSQL)': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg',
    'Flask': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg',
    'Streamlit': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/streamlit.svg',
    'Next.js 15': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg',
    'React.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg',
    'GCP': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg',
    'Firebase': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg',
    'Supabase': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg',
    'Docker': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg',
    'Google Colab': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecolab.svg',
  };

  const cdnUrl = brandIcons[name];
  if (cdnUrl) {
    return <img src={cdnUrl} alt={name} className="w-4 h-4 filter invert opacity-80 group-hover/pill:opacity-100 transition-opacity" />;
  }

  // Fallback to Lucide icons
  switch (name) {
    case 'NLP':
      return <Brain className="text-neutral-400 group-hover/pill:text-primary transition-colors" size={16} />;
    case 'LLMs':
      return <Cpu className="text-neutral-400 group-hover/pill:text-primary transition-colors" size={16} />;
    case 'RAG':
      return <Search className="text-neutral-400 group-hover/pill:text-primary transition-colors" size={16} />;
    case 'HTML/CSS':
      return <Code className="text-neutral-400 group-hover/pill:text-primary transition-colors" size={16} />;
    default:
      return <Terminal className="text-neutral-400 group-hover/pill:text-primary transition-colors" size={16} />;
  }
};

const Skills = () => {
  const skills = [
    { category: 'ML / AI', items: ['scikit-learn', 'TensorFlow', 'Keras', 'NLP', 'LLMs', 'RAG'] },
    { category: 'Languages', items: ['Python', 'JavaScript', 'SQL (PostgreSQL)', 'HTML/CSS'] },
    { category: 'Frameworks', items: ['Flask', 'Streamlit', 'Next.js 15', 'React.js'] },
    { category: 'Cloud / Dev', items: ['GCP', 'Firebase', 'Supabase', 'Docker', 'Google Colab'] },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* 4-Column Grid of Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <TiltCard 
              key={idx} 
              className="bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-8 rounded-2xl border border-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:bg-neutral-800/50 transition-[border-color,background-color,box-shadow] duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 font-display">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }} 
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: idx * 0.2 }}
                  >
                    <Cpu className="text-white" size={22} />
                  </motion.div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {skillGroup.items.map(item => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="group/pill flex items-center gap-3 bg-neutral-900/40 text-neutral-300 px-4 py-2.5 rounded-xl border border-white/5 cursor-default hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium"
                    >
                      {getSkillIcon(item)}
                      <span className="text-sm font-semibold tracking-wide">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
