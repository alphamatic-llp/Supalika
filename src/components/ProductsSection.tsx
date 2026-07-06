"use client";

import { motion } from "framer-motion";
import { ArrowRight, Hexagon, Sun, Box, Layers, Droplets, Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { productsData as products } from "@/data/products";

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4 md:px-8 bg-brand-bg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-text-muted">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text max-w-lg uppercase">
              Quality Aggregates For Every Need
            </h2>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-2 bg-brand-bg-alt hover:bg-brand-border/50 text-brand-text px-6 py-3 rounded-full text-sm font-semibold transition-all border border-brand-border/50 self-start md:self-auto"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="relative w-full overflow-hidden flex items-center mt-12 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-4 w-max"
          >
            {[...products, ...products, ...products].map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="relative rounded-xl overflow-hidden shadow-sm group w-[280px] md:w-[320px] h-[360px] flex-shrink-0"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  {/* Tag */}
                  <div className="self-start px-3 py-1 bg-amber-500 text-[#0a0f16] text-[10px] font-bold rounded-full tracking-wider">
                    {product.tag}
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="font-black text-xl text-white mb-3 tracking-tight group-hover:text-amber-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                {/* Link overlay */}
                <Link href={`/products/${product.slug}`} className="absolute inset-0 z-20">
                  <span className="sr-only">View {product.name}</span>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
