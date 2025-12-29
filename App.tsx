import React from 'react';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Consultation from './components/Consultation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-100 selection:bg-indigo-500 selection:text-white">
      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Consultation />
      </main>
    </div>
  );
};

export default App;