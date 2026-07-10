"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const qualityPoints = [
  "Quality Testing",
  "Material Inspection",
  "Dust Control",
  "Grading Accuracy",
  "Industry Standard Processes",
  "Safety Compliance"
];

export default function QualityAssuranceSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/quality_lab_indian.png"
              alt="Quality Assurance and Testing"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content */}
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
                Uncompromising Standards
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text uppercase tracking-tight mb-6 leading-[1.2]">
              Quality Assurance at Every Step
            </h2>
            
            <p className="text-brand-text-muted text-lg mb-8 leading-relaxed">
              Our state-of-the-art testing laboratories ensure that every aggregate produced meets the strictest national and international engineering standards. From extraction to final dispatch, quality is our foremost priority.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {qualityPoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" strokeWidth={2.5} />
                  <span className="font-semibold text-brand-text">{item}</span>
                </div>
              ))}
            </div>
            
            <Link
              href="/quality"
              className="flex items-center gap-2 bg-brand-text hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all w-fit shadow-lg"
            >
              View Quality Standards
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
