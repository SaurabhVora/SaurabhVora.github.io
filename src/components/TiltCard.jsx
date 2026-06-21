import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard = ({ children, className = "", tiltMax = 12 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Maps mouse position relative to card size to rotation degrees
  const rotateX = useTransform(y, [-150, 150], [tiltMax, -tiltMax]);
  const rotateY = useTransform(x, [-150, 150], [-tiltMax, tiltMax]);

  // Spring animation settings for buttery smooth returns
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20 });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates around card center
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);

    // Spotlight relative to element top-left
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Clean classNames to avoid duplicating border and background styles
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

  // Dynamic corner rounding support
  const isRounded3xl = className.includes('rounded-3xl');
  const outerRoundClass = isRounded3xl ? 'rounded-3xl' : 'rounded-2xl';
  const innerRoundClass = isRounded3xl ? 'rounded-[23px]' : 'rounded-[15px]';

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full">
      <motion.div
        className={`relative ${outerRoundClass} p-[1px] cursor-pointer group/spotlight overflow-hidden transition-all duration-300 bg-neutral-900/40 backdrop-blur-md ${layoutClassName}`}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spotlight Border Layer - illuminated by mouse coordinates */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none -z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.25), transparent 80%)`,
          }}
        />
        
        {/* Default border layer */}
        <div className={`absolute inset-0 bg-white/10 ${outerRoundClass} -z-20 pointer-events-none`} />

        {/* Inner Content Area */}
        <div
          style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
          className={`w-full h-full ${innerRoundClass} bg-neutral-950/90 overflow-hidden relative flex flex-col justify-between ${paddingClass}`}
        >
          {/* Spotlight Background Glow - illuminated by mouse coordinates */}
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
            }}
          />
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
