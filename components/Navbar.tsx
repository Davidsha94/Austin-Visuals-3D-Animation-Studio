import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b-0' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Hexagon className="w-8 h-8 text-indigo-500 group-hover:rotate-90 transition-transform duration-500" fill="currentColor" fillOpacity={0.2} />
          <span className="text-2xl font-display font-bold tracking-tight">LUMINA<span className="text-indigo-400">3D</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Work', 'Services', 'Process', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <a href="#consultation" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-gray-800 p-6 flex flex-col gap-6">
           {['Work', 'Services', 'Process', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
           <a 
            href="#consultation" 
            className="w-full text-center py-3 bg-indigo-600 text-white font-semibold rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
           >
            Start Project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;