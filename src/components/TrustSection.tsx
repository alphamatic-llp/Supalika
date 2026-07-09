"use client";

import { motion } from "framer-motion";
import { Handshake, ShieldCheck, Clock, MessageSquare, Briefcase, Users } from "lucide-react";

const trustFactors = [
  {
    icon: Handshake,
    title: "Reliable Supply",
    description: "Consistent availability of high-volume materials for mega projects without interruption."
  },
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    description: "Rigorous testing protocols guaranteeing the exact same grade from the first to the millionth tonne."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Advanced logistics fleet ensuring materials arrive precisely when your construction schedule demands."
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear updates, direct reporting, and absolute transparency in all business dealings."
  },
  {
    icon: Briefcase,
    title: "Professional Service",
    description: "A dedicated team of experts managing every aspect of your order with enterprise-level professionalism."
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description: "Building enduring relationships with clients based on mutual growth and operational excellence."
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
              Our Core Values
            </span>
            <div className="w-8 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text uppercase">
            Why Clients Trust Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((factor, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-bg rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-brand-border/40 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <factor.icon className="w-6 h-6 text-amber-500" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                {factor.title}
              </h3>
              <p className="text-brand-text-muted leading-relaxed text-sm">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
