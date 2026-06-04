import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display"
          >
            <Briefcase className="text-primary" /> Work Experience
          </motion.h2>
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

        {/* Education Column */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display"
          >
            <GraduationCap className="text-primary" /> Education
          </motion.h2>
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
        </div>

      </div>
    </div>
  </section>
);

export default Experience;
