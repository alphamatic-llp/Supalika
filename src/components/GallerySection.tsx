"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/gallery/gallery_new_1.jpeg", alt: "Crusher Plant", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/gallery/stone_yard_indian.png", alt: "Stone Yard", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/images/gallery/gallery_new_3.jpeg", alt: "Mining Area", span: "md:col-span-1 md:row-span-2" },
  { id: 4, src: "/images/gallery/gallery_new_4.jpeg", alt: "Loading", span: "md:col-span-1 md:row-span-1" },
  { id: 5, src: "/images/gallery/gallery_new_5.jpeg", alt: "Dispatch", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "/images/gallery/gallery_new_6.jpeg", alt: "Heavy Machinery", span: "md:col-span-2 md:row-span-1" },
  { id: 7, src: "/images/gallery/gallery_new_7.jpeg", alt: "Operations", span: "md:col-span-1 md:row-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-brand-bg-alt overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                Project Gallery
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text uppercase">
              Operations in Action
            </h2>
          </div>
          <Link
            href="/gallery"
            className="flex items-center gap-2 bg-brand-bg hover:bg-brand-border/30 text-brand-text px-6 py-3 rounded-xl text-sm font-semibold transition-all border border-brand-border/30 self-start md:self-auto shadow-sm"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryImages.map((image, idx) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group shadow-md ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                <span className="text-white font-bold text-lg tracking-wide uppercase">{image.alt}</span>
                <div className="h-1 w-8 bg-amber-500 mt-2 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
