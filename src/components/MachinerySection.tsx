"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const machinery = [
  {
    name: "Jaw Crusher",
    description: "Primary crushing for large boulders and oversize materials.",
    image: "/images/machinery/jaw_crusher_supalika.png",
  },
  {
    name: "Cone Crusher",
    description: "Secondary and tertiary crushing for precise aggregate shaping.",
    image: "/images/machinery/cone_crusher_supalika.png",
  },
  {
    name: "Excavator",
    description: "Heavy-duty extraction and loading at the quarry face.",
    image: "/images/machinery/excavator_supalika.png",
  },
  {
    name: "Wheel Loader",
    description: "Efficient loading and stockpiling of finished materials.",
    image: "/images/machinery/wheel_loader.png",
  },
  {
    name: "Dump Truck",
    description: "High-capacity transport from quarry to crushing plant.",
    image: "/images/machinery/dump_truck.png",
  },
  {
    name: "Screening Plant",
    description: "Multi-deck vibrating screens for accurate product grading.",
    image: "/images/machinery/screening_plant.png",
  },
];

export default function MachinerySection() {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text uppercase">
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
              className="relative h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group block"
            >
              <Image 
                src={machine.image}
                alt={machine.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bold text-2xl text-white mb-2 tracking-tight">
                    {machine.name}
                  </h3>
                  <div className="h-1 w-8 bg-amber-500 mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-white/80 text-sm leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {machine.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
