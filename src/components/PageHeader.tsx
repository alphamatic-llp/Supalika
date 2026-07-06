"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = "/images/hero-bg.png" 
}: PageHeaderProps) {
  return (
    <section className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-20 relative z-10 text-center flex flex-col items-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-brand-bg-alt/90 backdrop-blur-md px-10 py-8 rounded-[32px] inline-flex flex-col items-center shadow-2xl border border-white/20"
        >
          {subtitle && (
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-text-muted mb-2">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text uppercase">
            {title}
          </h1>
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-bg to-transparent z-10" />
    </section>
  );
}
