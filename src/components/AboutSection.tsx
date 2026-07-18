"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const checklist = [
  "Premium Aggregates",
  "Modern Machinery",
  "Reliable Supply",
  "Quality Assurance",
  "Customer First",
  "Competitive Pricing"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden flex flex-col justify-end p-8 shadow-2xl"
          >
            <Image
              src="/images/control_room.jpg"
              alt="Supalika Workers at Control Room"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content & Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                About Supalika Stone
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text uppercase tracking-tight mb-6 leading-[1.2]">
              Building Strong Foundations with Premium Stone Aggregates
            </h2>
            
            <p className="text-brand-text-muted text-lg mb-8 leading-relaxed">
              We are a professional aggregate manufacturing company dedicated to delivering premium quality materials across Eastern India. With integrated crushing systems, reliable logistics, and a commitment to sustainable operations, we serve the nation's most demanding infrastructure projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" strokeWidth={2.5} />
                  <span className="font-semibold text-brand-text">{item}</span>
                </div>
              ))}
            </div>
            
            <Link
              href="/about"
              className="flex items-center gap-2 bg-brand-text hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all w-fit shadow-lg"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
