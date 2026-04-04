import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Analytics from './components/Analytics';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="relative bg-[#050505] text-slate-100 min-h-screen selection:bg-blue-500/30">
      {/* Custom Animated Cursor */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-2 border-blue-500/50 rounded-full pointer-events-none z-[100] transition-transform duration-100 ease-out hidden md:block"
        style={{ transform: `translate(${cursorPos.x - 24}px, ${cursorPos.y - 24}px)` }}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[100] hidden md:block"
        style={{ transform: `translate(${cursorPos.x - 4}px, ${cursorPos.y - 4}px)` }}
      />

      <Background3D />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Analytics />
          <Achievements />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-slate-400 glass-panel border-t border-slate-800/50 mt-20">
          <p className="font-poppins">© {new Date().getFullYear()} Yash Pangaonkar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
