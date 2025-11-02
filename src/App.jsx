import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <footer className="border-t border-gray-100 bg-white py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} MomentumFlow AI. Built for creative professionals.
        </p>
      </footer>
    </div>
  );
}

export default App;
