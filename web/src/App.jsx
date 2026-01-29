import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  // Dark mode removed as per requirements


  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
