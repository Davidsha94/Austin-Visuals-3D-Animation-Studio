import React from 'react';
import { content } from '../content';

const Clients: React.FC = () => {
  const { clients } = content;

  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex w-full whitespace-nowrap overflow-hidden relative">
        <div className="flex animate-scroll min-w-full gap-16 items-center">
          {/* First Loop */}
          {clients.map((client, i) => (
            <span key={i} className="text-xl font-display font-bold text-gray-700 uppercase tracking-widest shrink-0 hover:text-indigo-500 transition-colors cursor-default">
              {client}
            </span>
          ))}
          {/* Second Loop for seamless transition */}
          {clients.map((client, i) => (
            <span key={`dup-${i}`} className="text-xl font-display font-bold text-gray-700 uppercase tracking-widest shrink-0 hover:text-indigo-500 transition-colors cursor-default">
              {client}
            </span>
          ))}
          {/* Third Loop for safety on wide screens */}
          {clients.map((client, i) => (
            <span key={`dup2-${i}`} className="text-xl font-display font-bold text-gray-700 uppercase tracking-widest shrink-0 hover:text-indigo-500 transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Clients;