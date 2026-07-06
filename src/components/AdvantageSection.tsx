"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Settings, FileCheck, Truck, Award, MapPin } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Certified Quality Standards",
    description: "Every tonne tested against Indian Railway ballast specifications and National Highway aggregate standards — zero compromise on compliance.",
  },
  {
    icon: Settings,
    title: "High-Volume Throughput",
    description: "250 TPH integrated crushing capacity operating round-the-clock to meet the most demanding project timelines and volume requirements.",
  },
  {
    icon: FileCheck,
    title: "Compliance First",
    description: "Materials verified against IS codes, railway circulars, and MORTH specifications — with full test certificates for every consignment dispatched.",
  },
  {
    icon: Truck,
    title: "Reliable On-Time Delivery",
    description: "Regional logistics network with GPS-tracked fleet ensures consistent supply to project sites across Odisha and Eastern India.",
  },
  {
    icon: Award,
    title: "Expert Leadership",
    description: "Modern domain expertise in quarrying, aggregate production, and infrastructure material supply, setting new standards for the industry.",
  },
  {
    icon: MapPin,
    title: "Eastern India Coverage",
    description: "Strategically located in Odisha with pan-Eastern supply capability — serving projects from Bihar to Andhra Pradesh.",
  },
];

export default function AdvantageSection() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
              The Supalika Advantage
            </span>
            <div className="w-8 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text uppercase">
            Why Industry Leaders Choose Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {advantages.map((adv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-brand-border/30 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-bg-alt rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <adv.icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                {adv.title}
              </h3>
              <p className="text-brand-text-muted leading-relaxed text-sm">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
