import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Cpu } from 'lucide-react';
import TiltCard from './TiltCard';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-950/95 backdrop-blur-md border border-white/25 p-3 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.08)]">
        <p className="text-xs font-semibold text-neutral-400 font-display mb-1">{payload[0].payload.subject}</p>
        <p className="text-sm font-bold text-white">
          Proficiency: <span className="text-neutral-300">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
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

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* 3D Tilt Radar Chart Column */}
          <TiltCard className="bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl flex flex-col justify-center h-[400px]">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <defs>
                  <filter id="white-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="white-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#a3a3a3" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <PolarGrid stroke="#262626" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#a3a3a3', fontSize: 11, fontWeight: 600, fontFamily: 'Outfit' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Radar
                  name="Proficiency"
                  dataKey="score"
                  stroke="#ffffff"
                  strokeWidth={2}
                  fill="url(#white-gradient)"
                  filter="url(#white-glow)"
                  activeDot={{ r: 6, fill: '#ffffff', stroke: '#e5e5e5', strokeWidth: 1.5 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </TiltCard>

          {/* Cards Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <TiltCard 
                key={idx} 
                className="bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:bg-neutral-800/50 transition-[border-color,background-color,box-shadow] duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-display">
                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: idx * 0.2 }}>
                      <Cpu className="text-white" size={20} />
                    </motion.div>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(item => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="bg-neutral-800/80 text-neutral-300 px-3 py-1 text-sm rounded-full border border-white/5 cursor-default hover:border-white/40 hover:text-white hover:shadow-[0_0_12px_rgba(255,255,255,0.12)] transition-all duration-300 font-medium"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
