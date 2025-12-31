import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Confetti from 'react-confetti';

// Direct image imports
import heroImg from '../assets/hero.jpg';
import kashifImg from '../assets/kashif.png';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImg); // default first image
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentImage(prev => (prev === heroImg ? kashifImg : heroImg)); // toggle between two images
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#8B5CF6', '#EC4899'];

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen px-4 pt-32 pb-16 md:py-24 overflow-hidden bg-[#05070a] text-white">

      {/* Full-screen Confetti */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={180}
        gravity={0.1}
        colors={googleColors}
        opacity={0.4}
      />

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', x: Math.random() * windowSize.width, opacity: 0 }}
            animate={{ y: '-10vh', opacity: [0, 1, 1, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'linear', delay: Math.random() * 5 }}
            className="absolute text-2xl opacity-20"
          >
            {['✨', '🎈', '🎉', '🎊', '⭐'][i % 5]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/40 text-blue-300 text-xs font-bold mb-6"
          >
            <span>🎈</span> Happy New Year 2026 <span>🎈</span>
          </motion.div>

          <h3 className="text-blue-400 font-medium tracking-widest mb-1 uppercase text-xs md:text-sm">Hey, I'm</h3>

          {/* Name */}
          <h1 className="text-[2.6rem] xs:text-5xl sm:text-7xl lg:text-7xl font-black leading-tight mb-4 tracking-tighter whitespace-nowrap flex justify-center lg:justify-start">
            {"KASHIF".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.1, color: googleColors[i % googleColors.length] }}
                transition={{ delay: i * 0.1 }}
                className="inline-block cursor-default"
              >
                {char}
              </motion.span>
            ))}
            <span className="mx-2"></span>
            {"MEHMOOD".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.1, color: googleColors[(i + 3) % googleColors.length] }}
                transition={{ delay: (i + 6) * 0.1 }}
                className="inline-block cursor-default"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Typewriter */}
          <div className="text-lg md:text-3xl font-medium text-gray-300 mb-8 h-10">
            <Typewriter
              options={{
                strings: ['Web Developer', 'CS Student', 'App Developer', 'AI Expert'],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-blue-400"
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-center lg:justify-start gap-3 md:gap-5">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold bg-blue-600 text-white shadow-lg shadow-blue-900/20"
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold bg-transparent text-white border border-gray-700 hover:border-blue-500 transition-all"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>

        {/* Right Circle Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[240px] h-[240px] md:w-[420px] md:h-[420px] mx-auto order-1 lg:order-2"
        >
          {/* Glow rings */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -inset-4 border-2 border-dashed border-yellow-500/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
          <div className="absolute -inset-8 border border-blue-500/10 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>

          {/* Decorative icons */}
          <div className="absolute -top-4 -right-4 text-4xl">🎉</div>
          <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce">🎇</div>

          {/* Image */}
          <div className="relative h-full w-full bg-[#1e293b] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage} // use variable directly
                src={currentImage} // direct variable
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
