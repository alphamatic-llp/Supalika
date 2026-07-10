import React from "react";
import Image from "next/image";
import { Leaf, Sun, Wind, Droplets, Zap, Users, HeartHandshake, ShieldCheck } from "lucide-react";

const initiatives = [
  {
    title: "Energy & Efficiency",
    icon: Sun,
    items: [
      "Grid-connected solar power systems",
      "Level 2 Star 2 best-in-class power efficient transformers",
      "VFD panels to minimize power transmission losses"
    ]
  },
  {
    title: "Air Quality & Emissions",
    icon: Wind,
    items: [
      "Advanced dust separation system for PM2.5, PM5, and PM10",
      "Automated water sprinklers for raw material transportation",
      "Backup diesel generators compliant with the latest Pollution Control Board norms"
    ]
  },
  {
    title: "Water & Ecology",
    icon: Leaf,
    items: [
      "Comprehensive groundwater recharge systems",
      "1,000+ saplings planted around the plant periphery",
      "Sustainable mining practices prioritizing ecological balance"
    ]
  },
  {
    title: "Social Responsibility",
    icon: HeartHandshake,
    items: [
      "100% ESI registration and welfare for all employees",
      "Ongoing Corporate Social Responsibility (CSR) programs",
      "Safe, compliant, and ethical working environments"
    ]
  }
];

export default function EnvironmentalSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg-alt">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/5 rounded-bl-full -z-10 blur-3xl mix-blend-multiply opacity-60" />
      
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-green-600" />
            <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-sm">
              Sustainability & ESG
            </span>
            <div className="w-8 h-[2px] bg-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text uppercase mb-6">
            We Take Our Environment Seriously
          </h2>
          <p className="text-brand-text-muted text-lg max-w-3xl leading-relaxed">
            At Supalika Stone Works, industrial progress does not come at the cost of nature. We are deeply committed to sustainable operations, energy efficiency, and the welfare of our workforce and surrounding communities.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {initiatives.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-brand-border/30 hover:shadow-xl hover:border-green-600/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                  <pillar.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-brand-text">
                  {pillar.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
