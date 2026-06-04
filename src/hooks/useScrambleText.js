import { useState, useEffect } from 'react';

const useScrambleText = (targetText, duration = 1000, delay = 150) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;
    const chars = "!@#$%^&*()_+{}:\"<>?,./;'[]\\=-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ⚛️💻🚀🔥🧠";
    const targetLength = targetText.length;

    let start = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed < delay) {
        animationFrameId = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min((elapsed - delay) / duration, 1);
      const revealIndex = Math.floor(progress * targetLength);

      let currentText = "";
      for (let i = 0; i < targetLength; i++) {
        if (i < revealIndex) {
          currentText += targetText[i];
        } else if (progress < 1) {
          currentText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      if (isMounted) setText(currentText || chars[Math.floor(Math.random() * chars.length)]);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        if (isMounted) setText(targetText);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetText, duration, delay]);

  return text;
};

export default useScrambleText;
