import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="selection:bg-accent selection:text-bg-base">
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;