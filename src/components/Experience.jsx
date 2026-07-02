import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import LiquidGlass from './LiquidGlass';

const workExperience = [
  {
    title: 'Data Science Intern',
    company: 'Unified Mentor',
    period: 'Jun - Jul 2024',
    desc: 'Built an employee attrition classifier using Random Forest (82% accuracy). Designed interactive Power BI dashboards visualizing model predictions against historical sales trends for stakeholder drill-down analysis.'
  }
];

const education = [
  {
    title: 'B.E. Information Technology',
    school: 'LDCE, Ahmedabad',
    period: '2022 - 2025',
    gpa: 'CGPA: 7.73'
  },
  {
    title: 'Diploma in Mechanical Engineering',
    school: 'Government Polytechnic Ahmedabad',
    period: '2018 - 2022',
    gpa: 'CGPA: 7.41'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const leftCardVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};

const TimelineBullet = () => (
  <div className="absolute -left-[7px] top-6 z-10 flex items-center justify-center">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: [0.8, 1.2, 1],
        opacity: 1,
        boxShadow: [
          "0 0 0 0 rgba(255, 255, 255, 0)",
          "0 0 0 8px rgba(255, 255, 255, 0.25)",
          "0 0 0 0 rgba(255, 255, 255, 0)"
        ]
      }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        scale: { duration: 0.6, ease: "easeOut" },
        boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
      }}
      className="w-3.5 h-3.5 bg-primary rounded-full ring-4 ring-neutral-950 flex items-center justify-center"
    >
      <div className="w-1.5 h-1.5 bg-neutral-950 rounded-full" />
    </motion.div>
  </div>
);

const Experience = () => {
  const containerRef = useRef(null);
  
  // Track scroll relative to section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 relative">
          
          {/* Experience Column */}
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display"
            >
              <Briefcase className="text-primary animate-pulse" /> Work Experience
            </motion.h2>

            <div className="relative pl-8">
              {/* Vertical line track */}
              <div className="absolute left-0 top-4 bottom-0 w-[2px] bg-white/10" />
              {/* Active scroll-drawn line */}
              <motion.div 
                style={{ scaleY, transformOrigin: 'top' }}
                className="absolute left-0 top-4 bottom-0 w-[2px] bg-primary"
              />

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-12"
              >
                {workExperience.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={leftCardVariants}
                    className="relative"
                  >
                    <TimelineBullet />
                    <LiquidGlass className="p-6 hover:-translate-y-2 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white font-display transition-colors">{item.title}</h3>
                      <div className="text-primary text-sm font-semibold mb-3">{item.company} • {item.period}</div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </LiquidGlass>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Education Column */}
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display"
            >
              <GraduationCap className="text-primary animate-pulse" /> Education
            </motion.h2>

            <div className="relative pl-8">
              {/* Vertical line track */}
              <div className="absolute left-0 top-4 bottom-0 w-[2px] bg-white/10" />
              {/* Active scroll-drawn line */}
              <motion.div 
                style={{ scaleY, transformOrigin: 'top' }}
                className="absolute left-0 top-4 bottom-0 w-[2px] bg-primary"
              />

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-12"
              >
                {education.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={rightCardVariants}
                    className="relative"
                  >
                    <TimelineBullet />
                    <LiquidGlass className="p-6 hover:-translate-y-2 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                      <div className="text-neutral-300 text-sm font-semibold mb-2">{item.school} • {item.period}</div>
                      <div className="text-primary text-sm font-bold">{item.gpa}</div>
                    </LiquidGlass>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
