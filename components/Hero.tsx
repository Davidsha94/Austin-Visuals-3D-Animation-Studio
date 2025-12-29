import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { content } from '../content';

const Hero: React.FC = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-lumina-dark via-lumina-dark to-transparent"></div>
        {/* Animated Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            {hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            {hero.titleLine1} <br />
            <span className="gradient-text">{hero.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#consultation" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25">
              {hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </a>
            <button className="px-8 py-4 glass-panel text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" /> {hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Hero Visual Placeholder - Simulating a 3D view */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
          <img 
            src="https://picsum.photos/seed/tech3d/800/1000" 
            alt="3D Abstract Art" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lumina-dark via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
             <div className="p-4 rounded-lg bg-black/40 backdrop-blur-md border border-white/5">
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-indigo-400 text-sm font-mono mb-1">PROJECT_01</p>
                      <h3 className="text-white font-bold text-lg">{hero.imageProject}</h3>
                   </div>
                   <div className="text-right">
                      <p className="text-xs text-gray-400">{hero.imageLabel}</p>
                      <p className="text-white font-mono">4K</p>
                   </div>
                </div>
                <div className="mt-2 w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                   <div className="bg-indigo-500 h-full w-[100%] shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;