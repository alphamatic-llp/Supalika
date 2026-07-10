"use client";

import { motion } from "framer-motion";
import { Pickaxe, Zap, Factory, Filter, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const processes = [
  { id: "01", title: "Mining", description: "Precision extraction", icon: Pickaxe },
  { id: "02", title: "Blasting", description: "Controlled rock fragmentation", icon: Zap },
  { id: "03", title: "Crushing", description: "Multi-stage automated crushing", icon: Factory },
  { id: "04", title: "Screening", description: "Accurate size separation", icon: Filter },
  { id: "05", title: "Quality Check", description: "Rigorous testing protocols", icon: ShieldCheck },
  { id: "06", title: "Dispatch", description: "Weighment and delivery", icon: Truck },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
              Our Manufacturing Process
            </span>
            <div className="w-8 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text uppercase mb-6">
            From Earth to Infrastructure
          </h2>
        </div>

        {/* Horizontal Process Flow */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-brand-border/40 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-amber-500"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
            {processes.map((process, index) => (
              <motion.div 
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group w-full lg:w-1/6"
              >
                {/* Mobile/Tablet Connecting Line (Vertical) */}
                {index !== 0 && (
                  <div className="lg:hidden w-[2px] h-12 bg-brand-border/40 mb-4 flex items-center justify-center">
                     <ArrowRight className="w-4 h-4 text-brand-border/40 rotate-90" />
                  </div>
                )}
                
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-4 border-brand-bg flex flex-col items-center justify-center shadow-xl group-hover:border-amber-500 transition-all duration-300 relative z-10 mb-6 group-hover:-translate-y-2">
                  <process.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-text mb-1 group-hover:text-amber-500 transition-colors" strokeWidth={1.5} />
                  <span className="text-amber-500 font-bold text-xs">{process.id}</span>
                </div>
                
                <h3 className="text-lg font-bold text-brand-text uppercase tracking-wide mb-2 group-hover:text-amber-500 transition-colors">
                  {process.title}
                </h3>
                <p className="text-brand-text-muted text-sm px-2">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-16 flex justify-center relative z-10">
          <Link
            href="/quality"
            className="flex items-center gap-2 bg-brand-text hover:bg-black text-white px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all shadow-xl hover:-translate-y-1"
          >
            View Full Detailed Procedure
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
