import { useState } from 'react';

/**
 * LiquidGlass - A lightweight iOS 26-style liquid glass container.
 * Use this for elements that don't need the 3D tilt effect (e.g., Experience cards, Contact form).
 * For 3D tilt + liquid glass, use TiltCard instead.
 */
const LiquidGlass = ({ children, className = "", as: Tag = "div" }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Tag
      className={`liquid-glass-card relative rounded-2xl overflow-hidden group/glass ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Iridescent Border */}
      <div 
        className="liquid-glass-border-base absolute inset-0 rounded-2xl z-0 opacity-40 group-hover/glass:opacity-80 transition-opacity duration-500 pointer-events-none"
      />

      {/* Glass Body */}
      <div 
        className="liquid-glass-body-base absolute inset-[1px] rounded-[15px] z-[1] pointer-events-none"
      />

      {/* Specular Highlight */}
      <div 
        className="liquid-glass-specular absolute z-[2] pointer-events-none"
        style={{
          top: '-20%',
          left: '-10%',
          width: '70%',
          height: '60%',
        }}
      />

      {/* Chromatic Edge */}
      <div 
        className="liquid-glass-chromatic absolute z-[2] pointer-events-none opacity-30 group-hover/glass:opacity-60 transition-opacity duration-500"
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '60%',
          height: '50%',
        }}
      />

      {/* Mouse Spotlight */}
      <div
        className="absolute inset-0 rounded-[15px] z-[3] transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.10), transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-[5]">
        {children}
      </div>
    </Tag>
  );
};

export default LiquidGlass;
