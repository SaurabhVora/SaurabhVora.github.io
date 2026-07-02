import { motion } from 'framer-motion';
import { ExternalLink, Award, Briefcase, BrainCircuit, Cpu } from 'lucide-react';
import LiquidGlass from './LiquidGlass';

const Certificates = () => {
  const certifications = [
    {
      title: 'OCI AI Foundations Associate',
      issuer: 'Oracle',
      date: 'Dec 2025',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=23E02B6E7E4748D412312617BBC62006A4081AFFF1D7783B7AC81D708DBD45D5',
      icon: <Award className="text-amber-400" size={24} />,
      color: 'from-amber-500/10 to-yellow-500/5',
      glow: 'group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
      brandColor: 'text-amber-400'
    },
    {
      title: 'Project Management Professional',
      issuer: 'IBM',
      date: 'Jul 2024',
      link: 'https://www.credly.com/badges/46864d00-81a3-4197-b98e-caf4e9a04989/linked_in_profile',
      icon: <Briefcase className="text-cyan-400" size={24} />,
      color: 'from-cyan-500/10 to-blue-500/5',
      glow: 'group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
      brandColor: 'text-cyan-400'
    },
    {
      title: 'Microsoft Explore Generative AI',
      issuer: 'Microsoft',
      date: 'May 2026',
      link: 'https://learn.microsoft.com/api/achievements/share/en-in/SaurabhVora-0640/JHLGYGFT?sharingId=55EECCE691BD5039',
      icon: <BrainCircuit className="text-indigo-400" size={24} />,
      color: 'from-indigo-500/10 to-purple-500/5',
      glow: 'group-hover:border-indigo-500/30 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]',
      brandColor: 'text-indigo-400'
    },
    {
      title: 'Microsoft Explore AI Basics',
      issuer: 'Microsoft',
      date: 'May 2026',
      link: 'https://learn.microsoft.com/api/achievements/share/en-in/SaurabhVora-0640/8VXY4T4W?sharingId=55EECCE691BD5039',
      icon: <Cpu className="text-blue-400" size={24} />,
      color: 'from-blue-500/10 to-indigo-500/5',
      glow: 'group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      brandColor: 'text-blue-400'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-display">Credentials & Badges</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Technical <span className="text-primary">Certifications</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between h-[230px] transition-all duration-300"
            >
              <LiquidGlass className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/5 ${cert.brandColor}`}>
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-xs text-neutral-500 font-medium">Achieved: {cert.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-white transition-colors">
                    Verify <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </LiquidGlass>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
