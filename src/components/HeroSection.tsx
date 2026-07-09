"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Gem, Factory, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100vh] lg:min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-brand-bg">
      {/* Background Image full width */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg2.png"
          alt="Quarry Operations"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-bg to-transparent z-10" />
      </div>

      {/* Vertical Navigation Indicator (Left Edge) */}
      <div className="hidden xl:flex flex-col items-center justify-center gap-6 absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <span className="text-black font-bold text-sm">01</span>
        <div className="w-[2px] h-16 bg-black/20 relative rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-black rounded-full" />
        </div>
        <span className="text-black/40 font-medium text-sm">02</span>
        <span className="text-black/40 font-medium text-sm">03</span>
        <span className="text-black/40 font-medium text-sm">04</span>
      </div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10 w-full h-full flex flex-col justify-center">


        <div className="flex flex-col lg:flex-row items-end gap-0 mt-8 relative">

          {/* Main Left Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#EAEAEA]/95 backdrop-blur-xl rounded-[32px] p-8 lg:p-10 w-full lg:w-[45%] xl:w-[45%] lg:shrink-0 shadow-2xl relative z-10"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-text-muted">
                Premium Stone Aggregates
              </span>

              <h1 className="text-[40px] md:text-5xl lg:text-[48px] xl:text-[56px] font-bold tracking-tight leading-[1.05] text-brand-text">
                BUILDING <br />
                INFRASTRUCTURE.<br />
                <span className="text-[#888888]">SHAPING TOMORROW.</span>
              </h1>

              <p className="text-sm lg:text-base text-brand-text-muted max-w-md font-medium mt-1 mb-2 leading-relaxed">
                Premium stone aggregates engineered for national highways, railways, and mega commercial projects. Trusted by industry leaders for uncompromised quality.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="flex items-center gap-2 bg-brand-btn hover:bg-brand-btn-hover text-white px-6 py-3.5 rounded-[16px] text-sm font-semibold transition-all shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/919804270501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-text hover:bg-black text-white px-6 py-3.5 rounded-[16px] text-sm font-semibold transition-all shadow-lg"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button className="flex items-center gap-3 py-3 px-2 text-brand-text hover:text-black transition-all font-semibold text-sm group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                  </div>
                  Watch Video
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Dark Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#3a3a3a]/90 backdrop-blur-xl rounded-[24px] p-5 xl:p-6 w-full lg:w-[65%] xl:w-[60%] lg:shrink-0 lg:-ml-10 shadow-2xl z-20 mb-[-20px] lg:mb-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 xl:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0 first:pt-0">
                <div className="flex items-center gap-1.5 xl:gap-2 text-white">
                  <Factory className="w-5 h-5 xl:w-6 xl:h-6 text-white" strokeWidth={1.5} />
                  <span className="text-base lg:text-sm xl:text-lg font-bold whitespace-nowrap tracking-tight">Modern Plant</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">Advanced Crushing<br />Technology</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0">
                <div className="flex items-center gap-1.5 xl:gap-2 text-white">
                  <Gem className="w-5 h-5 xl:w-6 xl:h-6 text-white" strokeWidth={1.5} />
                  <span className="text-base lg:text-sm xl:text-lg font-bold whitespace-nowrap tracking-tight">High Grade</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">Premium Stone<br />Quality</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0">
                <div className="flex items-center gap-1.5 xl:gap-2 text-white">
                  <ShieldCheck className="w-5 h-5 xl:w-6 xl:h-6 text-white" strokeWidth={1.5} />
                  <span className="text-base lg:text-sm xl:text-lg font-bold whitespace-nowrap tracking-tight">Fast Delivery</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">On-Time Logistics<br />Network</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0">
                <div className="flex items-center gap-1.5 xl:gap-2 text-white">
                  <MapPin className="w-5 h-5 xl:w-6 xl:h-6 text-white" strokeWidth={1.5} />
                  <span className="text-base lg:text-sm xl:text-lg font-bold whitespace-nowrap tracking-tight">Eco-Friendly</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">Sustainable Mining<br />Practices</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
