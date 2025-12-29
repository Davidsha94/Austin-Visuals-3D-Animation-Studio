import React from 'react';
import { Quote } from 'lucide-react';
import { content } from '../content';

const Testimonials: React.FC = () => {
  const { testimonials } = content;

  return (
    <section className="py-24 bg-lumina-card/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{testimonials.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/5 relative">
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
              <p className="text-gray-300 mb-6 relative z-10 italic">"{item.quote}"</p>
              <div>
                <h4 className="text-white font-bold">{item.author}</h4>
                <p className="text-sm text-indigo-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;