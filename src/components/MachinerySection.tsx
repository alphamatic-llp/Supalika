"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const machinery = [
  {
    name: "Jaw Crusher",
    description: "Primary crushing for large boulders and oversize materials.",
    image: "https://loremflickr.com/800/600/jaw,crusher/all",
  },
  {
    name: "Cone Crusher",
    description: "Secondary and tertiary crushing for precise aggregate shaping.",
    image: "https://loremflickr.com/800/600/cone,crusher/all",
  },
  {
    name: "Excavator",
    description: "Heavy-duty extraction and loading at the quarry face.",
    image: "https://loremflickr.com/800/600/excavator,mining/all",
  },
  {
    name: "Wheel Loader",
    description: "Efficient loading and stockpiling of finished materials.",
    image: "https://loremflickr.com/800/600/loader,mining/all",
  },
  {
    name: "Dump Truck",
    description: "High-capacity transport from quarry to crushing plant.",
    image: "https://loremflickr.com/800/600/dumptruck,mining/all",
  },
  {
    name: "Screening Plant",
    description: "Multi-deck vibrating screens for accurate product grading.",
    image: "https://loremflickr.com/800/600/screening,mining/all",
  },
];

export default function MachinerySection() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
              Our Infrastructure
            </span>
            <div className="w-8 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text uppercase">
            Heavy Machinery Fleet
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machinery.map((machine, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-brand-border/30 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-text mb-2">
                  {machine.name}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {machine.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
