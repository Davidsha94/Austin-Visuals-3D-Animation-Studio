import React from 'react';
import { content } from '../content';

const Portfolio: React.FC = () => {
  const { portfolio } = content;

  return (
    <section id="work" className="py-24 bg-lumina-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{portfolio.title}</h2>
            <p className="text-gray-400 max-w-xl">
              {portfolio.description}
            </p>
          </div>
          <button className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
            View Full Portfolio &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.items.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lumina-dark/90 via-lumina-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.cat}</span>
                <h3 className="text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;