import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const NewYearWish = () => {
  const [isWished, setIsWished] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userName, setUserName] = useState('')

 
  useEffect(() => {
    const handleHashChange = () => {
      if (isWished) {
        setIsWished(false); 
      }
    };

    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isWished]);

  const handleWish = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      setUserName(inputValue)
      setIsWished(true)
      
      // Fireworks Blast
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 300 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }

  return (
    <div className="relative z-[100]">
      {!isWished ? (
        /* Input Form */
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="mt-10 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl max-w-md mx-auto text-center shadow-2xl"
        >
          <h4 className="text-blue-400 text-sm font-bold mb-4 uppercase tracking-widest">Celebrate with Kashif</h4>
          <form onSubmit={handleWish} className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Enter your name..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-blue-500 outline-none text-white text-center transition-all"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl font-bold hover:scale-105 transition-transform text-white"
            >
              Wish Me & Celebrate! 🎊
            </button>
          </form>
        </motion.div>
      ) : (
        /* 🎆 FULL SCREEN CELEBRATION OVERLAY */
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl p-4 text-center"
          >
            {/* Close Button */}
            <motion.button 
              onClick={() => setIsWished(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white px-4 py-2 border border-white/20 rounded-full text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Skip to Portfolio ✕
            </motion.button>

            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <h2 className="text-blue-500 text-xl md:text-2xl font-bold mb-2">Happy New Year 2026</h2>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 uppercase">
                {userName}! 🎆
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto">
                Kashif Mehmood wishes you a year full of code, creativity, and success! 🚀
              </p>
              
              {/*  Button to  go back to home */}
              <button 
                onClick={() => setIsWished(false)}
                className="mt-12 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                Go to My Portfolio
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default NewYearWish