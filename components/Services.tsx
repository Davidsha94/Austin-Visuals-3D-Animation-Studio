import React from 'react';
import { Box, Layers, MonitorPlay, Cuboid, Zap, Activity, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Box className="w-8 h-8 text-indigo-400" />,
    title: "Product Visualization",
    desc: "Studio-quality rendering for marketing materials before your product is even manufactured.",
    tags: ["3D Modeling", "Photorealistic Rendering", "Product Launch"]
  },
  {
    icon: <Activity className="w-8 h-8 text-indigo-400" />,
    title: "Medical Animation",
    desc: "Scientifically accurate visualizations for mechanism of action (MoA) and medical devices.",
    tags: ["MoA Videos", "Surgical Training", "Device Demos"]
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-indigo-400" />,
    title: "Explainer Videos",
    desc: "Simplify complex technologies into engaging, easy-to-understand visual narratives.",
    tags: ["SaaS Explainers", "Process Visualization", "Education"]
  },
  {
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
    title: "Technical Breakdown",
    desc: "Exploded views and x-ray rendering to showcase internal engineering and assembly.",
    tags: ["Exploded Views", "X-Ray Rendering", "Assembly Guides"]
  },
  {
    icon: <Cuboid className="w-8 h-8 text-indigo-400" />,
    title: "AR/VR Assets",
    desc: "Optimized low-poly assets ready for augmented reality and virtual reality applications.",
    tags: ["Real-time Assets", "Unity/Unreal", "WebAR"]
  },
  {
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
    title: "VFX & Compositing",
    desc: "Seamless integration of CGI elements into live-action footage for commercials.",
    tags: ["Matchmoving", "Green Screen", "CGI Integration"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-lumina-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-400">
            We blend artistic vision with technical precision to deliver animations that explain, sell, and inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass-panel hover:bg-white/5 transition-colors border-transparent hover:border-indigo-500/30 group flex flex-col h-full">
              <div className="mb-6 p-4 rounded-xl bg-indigo-500/10 w-fit group-hover:bg-indigo-500/20 transition-colors">
                {service.icon}
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