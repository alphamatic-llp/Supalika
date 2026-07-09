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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {products.slice(0, 6).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-border/30 group flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-black text-[10px] font-bold rounded-full tracking-wider uppercase shadow-md">
                    {product.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-brand-text mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-brand-text-muted mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {product.applications.slice(0, 2).map((app, i) => (
                    <span key={i} className="text-xs bg-brand-bg px-2 py-1 rounded text-brand-text-muted font-medium border border-brand-border/50">
                      {app}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-brand-border/30">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 text-center bg-brand-bg-alt hover:bg-gray-200 text-brand-text px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/919804270501?text=I%20am%20interested%20in%20${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-brand-text hover:bg-black text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
