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
            className="bg-[#EAEAEA]/95 backdrop-blur-xl rounded-[32px] p-8 lg:p-10 w-full lg:w-[55%] shadow-2xl relative z-10"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-text-muted">
                Premium Stone Aggregates
              </span>

              <h1 className="text-[40px] md:text-5xl lg:text-[48px] xl:text-[56px] font-bold tracking-tight leading-[1.05] text-brand-text">
                STRONGER <br />
                FOUNDATIONS.<br />
                <span className="text-[#888888]">BETTER TOMORROWS.</span>
              </h1>

              <p className="text-sm lg:text-base text-brand-text-muted max-w-md font-medium mt-1 mb-2">
                High quality stone aggregates for construction, infrastructure and a better tomorrow.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="#products"
                  className="flex items-center gap-2 bg-brand-btn hover:bg-brand-btn-hover text-white px-7 py-4 rounded-[16px] text-sm font-semibold transition-all shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button className="flex items-center gap-3 py-4 text-brand-text hover:text-black transition-all font-semibold text-sm group">
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
            className="bg-[#3a3a3a]/90 backdrop-blur-xl rounded-[24px] p-6 lg:p-7 w-full lg:w-[60%] lg:-ml-12 shadow-2xl z-20 mb-[-20px] lg:mb-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0 first:pt-0">
                <div className="flex items-center gap-2 text-white">
                  <Factory className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span className="text-2xl font-bold">250 TPH</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">Integrated Plant<br />Capacity</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 text-white">
                  <Gem className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span className="text-2xl font-bold">5M+</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">Tonnes<br />Delivered</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span className="text-2xl font-bold">Railway</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">Standard Certified<br />Quality</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span className="text-2xl font-bold">Eastern India</span>
                </div>
                <span className="text-[10px] font-medium text-white/70 text-center uppercase tracking-wider">Trusted Supplier<br />Network</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
