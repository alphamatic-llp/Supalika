"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";

type Category = "All" | "Operations" | "Products" | "Infrastructure";

interface GalleryItem {
  id: number;
  src: string;
  category: Category;
  title: string;
}

const allImages: GalleryItem[] = [
  // Products
  { id: 1, src: "/images/railway_ballast.png", category: "Products", title: "Railway Ballast" },
  { id: 2, src: "/images/stone_aggregates.png", category: "Products", title: "Stone Aggregates" },
  { id: 3, src: "/images/crushed_stone.png", category: "Products", title: "Crushed Stone" },
  { id: 4, src: "/images/quarry_dust.png", category: "Products", title: "Quarry Dust" },
  { id: 5, src: "/images/infrastructure_aggregate.png", category: "Products", title: "Infrastructure Aggregate" },
  { id: 6, src: "/images/mining_products.png", category: "Products", title: "Mining Products" },
  
  // Infrastructure
  { id: 7, src: "/images/railway_infrastructure.png", category: "Infrastructure", title: "Railway Infrastructure" },
  { id: 8, src: "/images/national_highways.png", category: "Infrastructure", title: "National Highways" },
  { id: 9, src: "/images/building_construction.png", category: "Infrastructure", title: "Building Construction" },
  { id: 10, src: "/images/mining_operations.png", category: "Infrastructure", title: "Mining Operations" },
  { id: 11, src: "/images/ports_waterways.png", category: "Infrastructure", title: "Ports & Waterways" },
  { id: 12, src: "/images/industrial_estates.png", category: "Infrastructure", title: "Industrial Estates" },

  // Operations
  { id: 13, src: "/images/hero-bg.png", category: "Operations", title: "Quarry Extraction" },
  { id: 14, src: "/images/hero-bg1.png", category: "Operations", title: "Processing Plant" },
  { id: 15, src: "/images/about_legacy.png", category: "Operations", title: "Advanced Crushing" },
  { id: 16, src: "/images/hero-bg2.png", category: "Operations", title: "Logistics & Dispatch" },
  { id: 17, src: "/images/product-crusher.png", category: "Operations", title: "Crusher Machinery" },
];

export default function ClientGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const categories: Category[] = ["All", "Operations", "Products", "Infrastructure"];

  const filteredImages = allImages.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 lg:px-8">
      
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border-2 ${
              activeCategory === category
                ? "bg-brand-text text-white border-brand-text shadow-md"
                : "bg-transparent text-brand-text-muted border-brand-border/40 hover:border-brand-text hover:text-brand-text"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden group break-inside-avoid shadow-sm hover:shadow-2xl border border-brand-border/10 transition-shadow duration-500"
            >
              <div className="relative w-full" style={{ paddingBottom: `${(Math.random() * 30 + 70).toFixed(2)}%` }}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Search className="w-5 h-5 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.category}
                  </span>
                  <h3 className="text-white font-black text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
