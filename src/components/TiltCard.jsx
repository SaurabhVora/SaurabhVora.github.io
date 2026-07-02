import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard = ({ children, className = "", tiltMax = 10 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [tiltMax, -tiltMax]);
  const rotateY = useTransform(x, [-150, 150], [-tiltMax, tiltMax]);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20 });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);

    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Extract layout classes, stripping visual styles we override
  const cleanedClassName = className
    .replace(/\bbg-[^\s]+/g, '')
    .replace(/\bborder-[^\s]+/g, '')
    .replace(/\bborder\b/g, '')
    .replace(/\bhover:border-[^\s]+/g, '')
    .replace(/\bhover:bg-[^\s]+/g, '')
    .replace(/\bbackdrop-blur-[^\s]+/g, '')
    .replace(/\brounded-[^\s]+/g, '')
    .replace(/\bshadow-[^\s]+/g, '')
    .replace(/\bhover:shadow-[^\s]+/g, '')
    .trim();

  const paddingMatch = className.match(/\bp-[0-9a-zA-Z-/]+/g);
  const paddingClass = paddingMatch ? paddingMatch.join(' ') : 'p-6';
  const layoutClassName = cleanedClassName.replace(/\bp-[0-9a-zA-Z-/]+/g, '').trim();

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full">
      <motion.div
        className={`liquid-glass-card relative rounded-2xl cursor-pointer group/glass overflow-hidden ${layoutClassName}`}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* === LAYER 1: Iridescent Border === */}
        <div 
          className="liquid-glass-border-base absolute inset-0 rounded-2xl z-0 opacity-60 group-hover/glass:opacity-100 transition-opacity duration-500"
        />

        {/* === LAYER 2: Glass Body === */}
        <div 
          className="liquid-glass-body-base absolute inset-[1px] rounded-[15px] z-[1]"
        />

        {/* === LAYER 3: Specular Highlight (top-left light catch) === */}
        <div 
          className="liquid-glass-specular absolute z-[2] pointer-events-none rounded-[15px]"
          style={{
            top: '-20%',
            left: '-10%',
            width: '70%',
            height: '60%',
          }}
        />

        {/* === LAYER 4: Chromatic Edge Shimmer (bottom-right) === */}
        <div 
          className="liquid-glass-chromatic absolute z-[2] pointer-events-none rounded-[15px] opacity-40 group-hover/glass:opacity-70 transition-opacity duration-500"
          style={{
            bottom: '-10%',
            right: '-10%',
            width: '60%',
            height: '50%',
          }}
        />

        {/* === LAYER 5: Mouse-tracking spotlight glow === */}
        <div
          className="absolute inset-0 rounded-[15px] z-[3] transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.12), transparent 60%)`,
          }}
        />

        {/* === LAYER 6: Moving Specular Sheen (wet glass reflection) === */}
        <motion.div 
          className="liquid-glass-sheen absolute inset-0 z-[4] pointer-events-none rounded-[15px] opacity-0 group-hover/glass:opacity-100 transition-opacity duration-500"
          animate={{ 
            backgroundPosition: ['200% 0', '-200% 0']
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* === LAYER 7: Content === */}
        <div
          style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
          className={`relative z-[5] w-full h-full flex flex-col justify-between ${paddingClass}`}
        >
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
