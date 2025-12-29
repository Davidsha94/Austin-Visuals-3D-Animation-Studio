import React from 'react';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { content } from '../content';

const Footer: React.FC = () => {
  const { company } = content;
  
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-white mb-4">AUSTIN<span className="text-indigo-500">VISUALS</span></h2>
            <p className="text-gray-500 max-w-sm">
              We are a digital production studio specializing in high-end 3D animation, visual effects, and motion graphics for forward-thinking brands.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Studio</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#work" className="hover:text-indigo-400 transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href={company.social.twitter} className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href={company.social.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={company.social.instagram} className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={company.social.github} className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              {company.email}<br />
              {company.phone}
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;