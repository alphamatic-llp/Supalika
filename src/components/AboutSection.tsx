"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, ShieldCheck, Network, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Settings,
    title: "Modern Equipment",
    description: "Advanced infrastructure for efficient production.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Strict quality control at every step.",
  },
  {
    icon: Network,
    title: "Wide Supply Network",
    description: "Serving clients across the region.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description: "Dedicated support for all your requirements.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Image with Dark Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden flex flex-col justify-end p-8 md:p-10"
          >
            <Image
              src="/images/hero-bg.png"
              alt="Quarry Operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            <div className="relative z-10 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-white/70">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                Modern Stone,<br />
                Strength & Infrastructure
              </h2>
              <p className="text-white/80 text-sm max-w-md mt-2">
                Supalika Stone Works LLP is a registered aggregate company delivering premium quality materials across Odisha and Eastern India. With advanced quarrying operations and integrated crushing systems, we serve the nation's most demanding projects.
              </p>
              
              <Link
                href="#about"
                className="mt-6 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold transition-all border border-white/20 self-start"
              >
                Know More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Decorative dot pattern */}
            <div className="absolute bottom-10 left-10 opacity-30 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center gap-8"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-bg-alt flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-brand-text" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="font-bold text-brand-text">{feature.title}</h3>
                  <p className="text-sm text-brand-text-muted mt-1 max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
