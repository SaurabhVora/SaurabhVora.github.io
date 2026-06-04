import { motion } from 'framer-motion';
import Hero from './Hero';
import { StatsTile, PillarsTile, StoryTile } from './About';
import { RadarTile, TechStackTile } from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certificates from './Certificates';
import { ContactInfoTile, ContactFormTile } from './Contact';

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const tileVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16
      }
    }
  };

  return (
    <section id="bento-dashboard" className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
      
      {/* 4-column layout on desktop (lg), 2-column on tablet (md), 1-column on mobile */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto"
      >
        
        {/* Row 1 & 2: Hero Tile (2x2) */}
        <motion.div variants={tileVariants} className="lg:col-span-2 lg:row-span-2">
          <Hero />
        </motion.div>

        {/* Row 1: Stats Tile (1x1) */}
        <motion.div variants={tileVariants} className="lg:col-span-1 lg:row-span-1">
          <StatsTile />
        </motion.div>

        {/* Row 1: Pillars Tile (1x1) */}
        <motion.div variants={tileVariants} className="lg:col-span-1 lg:row-span-1">
          <PillarsTile />
        </motion.div>

        {/* Row 2: Story/Biography Tile (2x1) */}
        <motion.div variants={tileVariants} className="lg:col-span-2 lg:row-span-1">
          <StoryTile />
        </motion.div>

        {/* Row 3 & 4: Skills Radar Chart (2x2) */}
        <motion.div variants={tileVariants} id="skills" className="lg:col-span-2 lg:row-span-2 scroll-mt-24">
          <RadarTile />
        </motion.div>

        {/* Row 3 & 4: Tech Stack Badges (2x2) */}
        <motion.div variants={tileVariants} className="lg:col-span-2 lg:row-span-2">
          <TechStackTile />
        </motion.div>

        {/* Row 5: Projects Slider/Grid (4x2 or full width) */}
        <motion.div variants={tileVariants} id="projects" className="lg:col-span-4 scroll-mt-24">
          <Projects />
        </motion.div>

        {/* Row 6 & 7: Timeline (Experience & Education) (2x2) */}
        <motion.div variants={tileVariants} id="experience" className="lg:col-span-2 lg:row-span-2 scroll-mt-24">
          <Experience />
        </motion.div>

        {/* Row 6: Certifications (2x1) */}
        <motion.div variants={tileVariants} className="lg:col-span-2 lg:row-span-1">
          <Certificates />
        </motion.div>

        {/* Row 7: Contact Info (2x1) */}
        <motion.div variants={tileVariants} className="lg:col-span-2 lg:row-span-1">
          <ContactInfoTile />
        </motion.div>

        {/* Row 8: Contact Message Form (4x1 or full width) */}
        <motion.div variants={tileVariants} id="contact" className="lg:col-span-4 scroll-mt-24">
          <ContactFormTile />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BentoGrid;
