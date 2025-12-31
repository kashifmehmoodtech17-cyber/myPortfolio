import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout & Global Components
import Background3D from './components/Visuals/Background3D';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewYearEvent from './components/NewYear/NewYearEvent';

// Section Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Proficiency from './components/Proficiency';
import NewYearWish from './components/NewYearWish';

function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // New Year Logic (1st Jan to 7th Jan)
    const date = new Date();
    const isNewYearPeriod = date.getMonth() === 0 && date.getDate() <= 7;
    
    // Testing mode: true 
    if (true || isNewYearPeriod) { 
      setShowEvent(true);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleEventComplete = () => {
    setShowEvent(false);
    setIsLoaded(true);
  };

  return (
    <main className="bg-dark min-h-screen text-white selection:bg-primary selection:text-black font-sans">
      {/* 3D Background Layer (Fixed) */}
      <Background3D />
      
      {/* New Year Cinematic Intro */}
      <AnimatePresence>
        {showEvent && (
          <NewYearEvent onComplete={handleEventComplete} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Layout */}
      {isLoaded && (
        <div className="relative z-10">
          <Navbar />
          
          <article>
            <Hero />
            <div className="relative z-20 -mt-20 mb-20">
               <NewYearWish />
            </div>
            <section id="about">
              <About />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
            
            <section id="skills">
              <Proficiency />
            </section>
          </article>

          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;