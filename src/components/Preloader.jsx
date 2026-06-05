import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 12) + 4;
      currentProgress = Math.min(currentProgress + step, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        const timeout = setTimeout(() => {
          onComplete();
        }, 500);
        return () => clearTimeout(timeout);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center gap-10">
        
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-36 h-36 md:w-48 md:h-48"
        >
          <img 
            src="/new logo.png" 
            alt="Saurabh Vora Monogram" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          />
        </motion.div>

        {/* Apple style thin progress bar */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 md:w-56 h-[3px] bg-neutral-800 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.15 }}
              className="absolute top-0 bottom-0 left-0 bg-primary shadow-[0_0_8px_rgba(212,175,55,0.5)]"
            />
          </div>
          <span className="text-[10px] text-neutral-500 font-medium tracking-widest font-display">
            SYSTEM BOOTING
          </span>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;
