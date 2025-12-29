import React from 'react';
import { Box, Layers, MonitorPlay, Cuboid, Zap, Activity, Lightbulb, FileSpreadsheet, Clapperboard, Rocket } from 'lucide-react';

export const content = {
  company: {
    name: "Austin Visuals",
    email: "info@austinvisuals.com",
    phone: "+1 (512) 591-8024",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      github: "#"
    }
  },
  hero: {
    badge: "Full Service Animation Studio",
    titleLine1: "Explaining the",
    titleHighlight: "Complex in 3D",
    description: "From medical devices to industrial engineering. We visualize your technology with scientific accuracy and cinematic quality.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "View Showreel",
    imageProject: "Bio-Mechanical Implant",
    imageLabel: "Final Render"
  },
  clients: [
    "TechCore Systems", "MediLife Solutions", "AeroSpace Dynamics", "Future Energy", 
    "Global Motors", "Construct AI", "BioGenetics", "NanoTech Labs"
  ],
  services: {
    title: "Our Expertise",
    description: "We blend artistic vision with technical precision to deliver animations that explain, sell, and inspire.",
    items: [
      {
        icon: Box,
        title: "Product Visualization",
        desc: "Studio-quality rendering for marketing materials before your product is even manufactured.",
        tags: ["3D Modeling", "Photorealistic Rendering", "Product Launch"]
      },
      {
        icon: Activity,
        title: "Medical Animation",
        desc: "Scientifically accurate visualizations for mechanism of action (MoA) and medical devices.",
        tags: ["MoA Videos", "Surgical Training", "Device Demos"]
      },
      {
        icon: MonitorPlay,
        title: "Explainer Videos",
        desc: "Simplify complex technologies into engaging, easy-to-understand visual narratives.",
        tags: ["SaaS Explainers", "Process Visualization", "Education"]
      },
      {
        icon: Layers,
        title: "Technical Breakdown",
        desc: "Exploded views and x-ray rendering to showcase internal engineering and assembly.",
        tags: ["Exploded Views", "X-Ray Rendering", "Assembly Guides"]
      },
      {
        icon: Cuboid,
        title: "AR/VR Assets",
        desc: "Optimized low-poly assets ready for augmented reality and virtual reality applications.",
        tags: ["Real-time Assets", "Unity/Unreal", "WebAR"]
      },
      {
        icon: Zap,
        title: "VFX & Compositing",
        desc: "Seamless integration of CGI elements into live-action footage for commercials.",
        tags: ["Matchmoving", "Green Screen", "CGI Integration"]
      }
    ]
  },
  process: {
    title: "How We Work",
    description: "A streamlined, transparent production pipeline designed for efficiency and quality.",
    steps: [
      {
        icon: Lightbulb,
        step: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your technology and goals to craft a visual strategy that aligns with your audience."
      },
      {
        icon: FileSpreadsheet,
        step: "02",
        title: "Script & Storyboard",
        desc: "Our creative team outlines the narrative and visual flow, ensuring every frame has a purpose."
      },
      {
        icon: Clapperboard,
        step: "03",
        title: "Production & Rendering",
        desc: "We build 3D assets, animate motion, and apply photorealistic textures and lighting."
      },
      {
        icon: Rocket,
        step: "04",
        title: "Delivery & Launch",
        desc: "Final high-resolution output delivered in your required formats, ready for multi-channel distribution."
      }
    ]
  },
  portfolio: {
    title: "Selected Works",
    description: "A showcase of our recent high-fidelity 3D productions across various industries.",
    items: [
      { title: "Aerospace Turbine", cat: "Engineering", img: "https://picsum.photos/seed/aero/800/600" },
      { title: "Smart Watch V2", cat: "Consumer Electronics", img: "https://picsum.photos/seed/watch/800/600" },
      { title: "Nano-Bot Sequence", cat: "Medical", img: "https://picsum.photos/seed/medical/800/600" },
      { title: "EV Battery Core", cat: "Automotive", img: "https://picsum.photos/seed/auto/800/600" },
      { title: "Architectural Flow", cat: "Real Estate", img: "https://picsum.photos/seed/arch/800/600" },
      { title: "Cosmetic Bottle", cat: "Advertising", img: "https://picsum.photos/seed/bottle/800/600" },
    ]
  },
  testimonials: {
    title: "Client Stories",
    items: [
      {
        quote: "Austin Visuals transformed our CAD files into a marketing masterpiece. The level of detail in the texture work was indistinguishable from reality.",
        author: "Sarah Jenkins",
        role: "Marketing Director, AeroDynamics Inc."
      },
      {
        quote: "They understood the complex medical procedure immediately. The animation is now the centerpiece of our surgeon training program.",
        author: "Dr. James Chen",
        role: "Chief of Surgery, MedTech Solutions"
      },
      {
        quote: "Fast, professional, and incredibly talented. They took our rough sketch and turned it into a high-end product launch video in weeks.",
        author: "Marcus Thorne",
        role: "Product Lead, EcoEnergy"
      }
    ]
  }
};