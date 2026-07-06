"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const galleryImages = [
  { id: 1, src: "/images/hero-bg.png", alt: "Quarry Operations" },
  { id: 2, src: "/images/product-crusher.png", alt: "Crusher Machine" },
  { id: 3, src: "/images/product-boulders.png", alt: "Aggregate Piles" },
  { id: 4, src: "/images/hero-bg.png", alt: "Trucks Loading Stone" },
  { id: 5, src: "/images/product-20mm.png", alt: "Stone Mining" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-brand-bg-alt overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-text-muted">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text uppercase">
            See Our Work In Action
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg-alt to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg-alt to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["-50%", 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-4 w-max"
        >
          {[...galleryImages, ...galleryImages, ...galleryImages].map((image, idx) => (
            <div 
              key={`${image.id}-${idx}`}
              className="min-w-[80vw] md:min-w-[400px] lg:min-w-[450px] h-[300px] relative rounded-2xl overflow-hidden shrink-0 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
