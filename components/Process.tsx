import React from 'react';
import { content } from '../content';

const Process: React.FC = () => {
  const { process } = content;

  return (
    <section id="process" className="py-24 bg-lumina-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{process.title}</h2>
          <p className="text-gray-400">
            {process.description}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          
          {process.steps.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="w-24 h-24 mx-auto bg-lumina-card border border-white/5 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-indigo-500/50 transition-colors shadow-lg">
                <div className="text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-xs font-bold text-white border-4 border-lumina-dark">
                  {item.step}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;