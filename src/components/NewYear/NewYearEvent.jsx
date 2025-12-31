import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const NewYearEvent = ({ onComplete }) => {
  const [stage, setStage] = useState('intro');

  useEffect(() => {
    const introTimer = setTimeout(() => setStage('celebrate'), 7000);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (stage === 'celebrate') {
      triggerFireworks();
      const endTimer = setTimeout(() => {
        onComplete();
      }, 14000); 
      return () => clearTimeout(endTimer);
    }
  }, [stage, onComplete]);

  const triggerFireworks = () => {
    const duration = 8000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.7 },
        colors: ['#00f2ea', '#ff0055', '#ffd700']
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.7 },
        colors: ['#00f2ea', '#ff0055', '#ffd700']
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <AnimatePresence mode='wait'>
        {stage === 'intro' && (
          <motion.div key="intro" className="text-center">
            <div className="text-9xl font-mono text-white font-bold tracking-widest">
              <CountDown />
            </div>
          </motion.div>
        )}

        {stage === 'celebrate' && (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Balloons Animation */}
            <BalloonsContainer />

            <div className="text-center relative z-20 w-full px-4">
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                {/* 1. GOODBYE 2025 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                  transition={{ times: [0, 0.2, 0.8, 1], duration: 3.5 }}
                  className="absolute text-5xl md:text-7xl font-bold text-gray-500 tracking-wider"
                >
                  GOODBYE 2025
                </motion.div>

                {/* 2. WELCOME 2026 */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 1.2] }}
                  transition={{ delay: 3.8, times: [0, 0.2, 0.8, 1], duration: 4 }}
                  className="absolute flex flex-col items-center"
                >
                  <span className="text-3xl md:text-5xl text-cyan-400 font-light tracking-[15px] uppercase">Welcome</span>
                  <h2 className="text-9xl md:text-[14rem] font-black text-white tracking-tighter">
                    202<span className="text-fuchsia-500">6</span>
                  </h2>
                </motion.div>

                {/* 3. HAPPY NEW YEAR */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 8, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  <motion.h1 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: ["0 0 20px #00f2ea", "0 0 40px #ff0055", "0 0 20px #00f2ea"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-7xl md:text-[12rem] font-black leading-none text-white drop-shadow-2xl"
                  >
                    HAPPY <br /> NEW YEAR
                  </motion.h1>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// New Balloons Component
const BalloonsContainer = () => {
  const colors = ['#ff4d4d', '#ffdb4d', '#4dff4d', '#4d94ff', '#ff4dff'];
  const balloons = Array.from({ length: 15 }); // 15 Balloons

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {balloons.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0.8 }}
          animate={{ y: "-20vh", x: `${(Math.random() * 100)}vw` }}
          transition={{
            delay: 8 + Math.random() * 2, // Happy New Year ke saath shuru honge
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-12 h-16 md:w-20 md:h-28 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.2)'
          }}
        >
          {/* Balloon String */}
          <div className="absolute -bottom-10 left-1/2 w-[2px] h-10 bg-gray-400 opacity-50" />
        </motion.div>
      ))}
    </div>
  );
};

const CountDown = () => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    if(count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={count}
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 2, opacity: 1 }}
        exit={{ scale: 4, opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="text-white"
      >
        {count > 0 ? count : "GO"}
      </motion.div>
    </AnimatePresence>
  );
};

export default NewYearEvent;