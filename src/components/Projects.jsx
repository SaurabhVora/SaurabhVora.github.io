import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

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
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <TiltCard 
              key={idx} 
              className="group relative bg-neutral-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:bg-neutral-800/50 transition-[border-color,background-color,box-shadow] duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 bg-neutral-800 relative overflow-hidden flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-display">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <motion.span 
                        key={t} 
                        whileHover={{ scale: 1.08, y: -1 }}
                        className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/25 cursor-default hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                      >
                        {t}
                      </motion.span>
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
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
