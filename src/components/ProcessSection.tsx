"use client";

import { motion, Variants } from "framer-motion";
import { 
  ClipboardCheck, Mountain, Target, Zap, Hammer, 
  Truck, Droplets, Leaf, Scale, ArrowDownToLine, 
  Factory, Magnet, Box, ArrowRight, Settings2, 
  Filter, CheckCircle, HardHat
} from "lucide-react";

const processes = [
  { id: "01", title: "Survey & Consent to Operate", icon: ClipboardCheck },
  { id: "02", title: "Overburden Removal", icon: Mountain },
  { id: "03", title: "Drilling", icon: Target },
  { id: "04", title: "Blasting", icon: Zap },
  { id: "05", title: "Breaking", description: "Excavator with Breaker", icon: Hammer },
  { id: "06", title: "Loading of Boulders", icon: HardHat },
  { id: "07", title: "Transport to Crusher Plant", icon: Truck },
  { id: "08", title: "Dewatering & Misc. Activities", icon: Droplets },
  { id: "09", title: "Environmental Controls", description: "Road Safety, Sprinklers, Tree Plantation, Biodiversity Management", icon: Leaf },
  { id: "10", title: "Weighment at Weighbridge", icon: Scale },
  { id: "11", title: "Unload at Hopper", description: "Jaw Crusher + Grizzly Feeder", icon: ArrowDownToLine },
  { id: "12", title: "Primary Crushing & Scalping", description: "Quarry fines removed", icon: Factory },
  { id: "13", title: "Removal of Iron/Ferrous Objects", icon: Magnet },
  { id: "14", title: "Surge Hopper", icon: Box },
  { id: "15", title: "Secondary Feeding", icon: ArrowRight },
  { id: "16", title: "Cone Crusher", description: "Secondary Crushing", icon: Settings2 },
  { id: "17", title: "Screening", icon: Filter },
  { id: "18", title: "Final Products", icon: CheckCircle },
];

// We won't use staggered container variants anymore because we want them to trigger independently on scroll
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.6 }
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
            Our Complete Process
          </h2>
          <p className="text-brand-text-muted text-lg max-w-2xl">
            From extraction to the final product, every step is optimized for quality and efficiency.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Center Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-border -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-8 md:gap-4 relative z-10">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={process.id} 
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  className={`flex items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row group py-4`}
                >
                  
                  {/* Left Side Content (Empty for Odd on Desktop) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    {isEven && (
                      <div>
                        <h3 className="text-xl font-bold text-brand-text uppercase tracking-wide">{process.title}</h3>
                        {process.description && (
                          <p className="text-brand-text-muted mt-2 text-sm">{process.description}</p>
                        )}
                      </div>
                    )}
                    {!isEven && (
                      <div>
                        <h3 className="text-xl font-bold text-brand-text uppercase tracking-wide">{process.title}</h3>
                        {process.description && (
                          <p className="text-brand-text-muted mt-2 text-sm">{process.description}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-bg border-2 border-amber-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
                    <process.icon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>

                  {/* Right Side Content / Mobile Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-12 md:hidden' : 'md:hidden'}`}>
                     <div>
                        <span className="text-amber-500 font-bold text-xs mb-1 block">STEP {process.id}</span>
                        <h3 className="text-lg font-bold text-brand-text uppercase tracking-wide">{process.title}</h3>
                        {process.description && (
                          <p className="text-brand-text-muted mt-1 text-sm">{process.description}</p>
                        )}
                      </div>
                  </div>

                  {/* Desktop Step Number */}
                  <div className={`hidden md:flex w-1/2 ${isEven ? 'pl-12 justify-start' : 'pr-12 justify-end'} items-center`}>
                     <span className="text-brand-text-muted/30 font-black text-5xl italic group-hover:text-amber-500/20 transition-colors">
                        {process.id}
                     </span>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
