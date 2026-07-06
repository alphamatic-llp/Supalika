"use client";

import { motion, Variants } from "framer-motion";
import { Mountain, Settings, Filter, Droplets, FlaskConical, Truck } from "lucide-react";

const processes = [
  {
    id: 1,
    title: "QUARRY EXTRACTION",
    description: "Controlled blasting and excavation from certified mineral reserves",
    icon: Mountain,
  },
  {
    id: 2,
    title: "PRIMARY CRUSHING",
    description: "High-capacity jaw crushers reduce oversize material to feed grade",
    icon: Settings,
  },
  {
    id: 3,
    title: "SECONDARY SCREENING",
    description: "Vibrating screens separate material into precise size fractions",
    icon: Filter,
  },
  {
    id: 4,
    title: "WASHING & GRADING",
    description: "Water-wash systems remove dust and clay for clean output",
    icon: Droplets,
  },
  {
    id: 5,
    title: "QUALITY TESTING",
    description: "Laboratory analysis verifies gradation, shape index, and strength",
    icon: FlaskConical,
  },
  {
    id: 6,
    title: "DISPATCH & LOGISTICS",
    description: "Weigh-bridge verified loading with fleet tracking to site",
    icon: Truck,
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster stagger
      delayChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function ProcessSection() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
              How We Work
            </span>
            <div className="w-8 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text uppercase mb-6">
            From Earth To Excellence
          </h2>
          <p className="text-brand-text-muted text-lg max-w-2xl">
            Our end-to-end production process
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-24 pb-12">
          
          {/* Animated Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-[2px] bg-brand-border z-0">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "linear", delay: 0.2 }}
              className="absolute top-0 left-0 h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10"
          >
            {processes.map((process, idx) => (
              <motion.div 
                key={process.id} 
                variants={itemVariants}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Hexagon Wrapper */}
                <div className="relative w-28 h-28 mb-8 flex justify-center items-center">
                  
                  {/* Hexagon SVG Background */}
                  <svg 
                    viewBox="0 0 100 100" 
                    className="absolute inset-0 w-full h-full text-brand-bg-alt drop-shadow-sm"
                  >
                    <polygon 
                      points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" 
                      fill="currentColor" 
                      stroke="rgba(245, 158, 11, 0.4)" 
                      strokeWidth="2"
                      className="group-hover:stroke-amber-500 transition-colors duration-500"
                    />
                  </svg>

                  {/* Icon */}
                  <process.icon className="w-10 h-10 text-amber-500 relative z-10 transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-amber-500 text-white font-bold rounded-full flex items-center justify-center text-sm z-20 shadow-lg border-2 border-brand-bg">
                    {process.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-brand-text font-bold text-sm tracking-wide uppercase mb-3 px-2">
                  {process.title}
                </h3>
                <p className="text-brand-text-muted text-xs leading-relaxed px-2">
                  {process.description}
                </p>
                
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
