
const SectionDivider = ({ speed = 15, height = "h-12 md:h-20", inverted = false, color = "fill-[#000000]" }) => {
  // SVG path for a looping wave
  const wavePath1 = "M0,32 C150,90 350,0 600,40 C850,80 1050,10 1200,32 L1200,100 L0,100 Z";
  
  return (
    <div className={`relative w-full ${height} overflow-hidden pointer-events-none z-10 bg-transparent ${inverted ? 'rotate-180' : ''}`}>
      {/* Wave Layer 1 */}
      <svg 
        className="absolute bottom-0 left-0 w-[200%] h-full fill-white/[0.02]" 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
        style={{
          animation: `wave-slide-left ${speed}s linear infinite`
        }}
      >
        <path d={wavePath1} />
        <path d="M1200,32 C1350,90 1550,0 1800,40 C2050,80 2250,10 2400,32 L2400,100 L1200,100 Z" />
      </svg>

      {/* Wave Layer 2 (Opposite direction, different opacity) */}
      <svg 
        className="absolute bottom-0 right-0 w-[200%] h-full fill-white/[0.01]" 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
        style={{
          animation: `wave-slide-right ${speed * 1.3}s linear infinite`
        }}
      >
        <path d={wavePath1} />
        <path d="M1200,32 C1350,90 1550,0 1800,40 C2050,80 2250,10 2400,32 L2400,100 L1200,100 Z" />
      </svg>
      
      {/* Wave Layer 3 (Foreground solid color transition) */}
      <svg 
        className={`absolute bottom-0 left-0 w-[200%] h-full ${color}`} 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
        style={{
          animation: `wave-slide-left ${speed * 1.8}s linear infinite`
        }}
      >
        <path d="M0,50 C180,80 380,20 600,60 C820,100 1020,30 1200,50 L1200,100 L0,100 Z" />
        <path d="M1200,50 C1380,80 1580,20 1800,60 C2020,100 2220,30 2400,50 L2400,100 L1200,100 Z" />
      </svg>

      {/* Tailwind classes helper style injection for keyframes */}
      <style>{`
        @keyframes wave-slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-slide-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </div>
  );
};

export default SectionDivider;
