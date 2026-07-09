"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-brand-text rounded-[40px] p-10 md:p-16 lg:p-20 overflow-hidden shadow-2xl flex flex-col items-center text-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="/images/hero-bg2.png"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase mb-6 leading-tight">
              Need Premium Stone Aggregates for Your Next Project?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl">
              Partner with us for reliable supply, certified quality, and timely delivery of infrastructure materials.
            </p>

            <div className="flex flex-wrap justify-center gap-4 w-full">
              <a
                href="https://wa.me/919804270501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-[16px] text-sm font-bold transition-all shadow-lg min-w-[200px]"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919804270501"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-brand-text px-8 py-4 rounded-[16px] text-sm font-bold transition-all shadow-lg min-w-[200px]"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href="mailto:info@supalikastone.com"
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-[16px] text-sm font-bold transition-all shadow-sm min-w-[200px]"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
