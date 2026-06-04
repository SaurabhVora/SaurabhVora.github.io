import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard = ({ children, className = "", tiltMax = 15 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Maps mouse position relative to card size to rotation degrees
  const rotateX = useTransform(y, [-100, 100], [tiltMax, -tiltMax]);
  const rotateY = useTransform(x, [-100, 100], [-tiltMax, tiltMax]);

  // Spring animation settings for buttery smooth returns (high damping for responsiveness)
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates around card center
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        className={`${className} cursor-pointer`}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
