import React from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../content';

const Services: React.FC = () => {
  const { services } = content;

  return (
    <section id="services" className="py-24 relative bg-lumina-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{services.title}</h2>
          <p className="text-gray-400">
            {services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass-panel hover:bg-white/5 transition-colors border-transparent hover:border-indigo-500/30 group flex flex-col h-full">
              <div className="mb-6 p-4 rounded-xl bg-indigo-500/10 w-fit group-hover:bg-indigo-500/20 transition-colors">
                <service.icon className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                 {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                        {tag}
                    </span>
                 ))}
              </div>

              <a href="#consultation" className="inline-flex items-center text-sm font-bold text-white group-hover:text-indigo-400 transition-colors mt-auto">
                Start a Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;