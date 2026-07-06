"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Tag, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Best materials for strong construction",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time delivery, every time",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description: "Best prices without compromising quality",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environment conscious mining practices",
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative z-20 -mt-10 mb-20 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[24px] p-6 shadow-xl border border-white/40"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-brand-border/30">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 px-4 py-2 first:pt-0 md:first:pt-2 last:pb-0 md:last:pb-2">
                <div className="w-12 h-12 rounded-full border border-brand-border/50 flex items-center justify-center shrink-0 bg-white/50">
                  <feature.icon className="w-5 h-5 text-brand-text" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-sm text-brand-text">{feature.title}</h3>
                  <p className="text-xs text-brand-text-muted mt-1 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
