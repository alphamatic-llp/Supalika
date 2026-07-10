"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { productsData as products } from "@/data/products";

type Product = (typeof products)[number];

const CATEGORIES = ["All", "Quarry Boulders", "Crusher Aggregates", "Sand"] as const;

const TAG_STYLES: Record<string, { badge: string; dot: string; active: string }> = {
  "QUARRY BOULDERS": { badge: "bg-amber-500 text-black", dot: "bg-amber-500", active: "bg-amber-500 border-amber-500 text-black" },
  "CRUSHER AGGREGATES": { badge: "bg-slate-800 text-white", dot: "bg-slate-800", active: "bg-slate-800 border-slate-800 text-white" },
  "SAND": { badge: "bg-yellow-600 text-white", dot: "bg-yellow-600", active: "bg-yellow-600 border-yellow-600 text-white" },
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const style = TAG_STYLES[product.tag] ?? TAG_STYLES["QUARRY BOULDERS"];
  const Icon = product.icon;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-border/30 hover:border-brand-text/20 group flex flex-col h-full">
      <div className="relative h-64 w-full overflow-hidden bg-brand-bg-alt">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-[10px] font-bold rounded-full tracking-wider uppercase shadow-md ${style.badge}`}>
            {product.tag}
          </span>
        </div>

        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md">
          <Icon className="w-4 h-4 text-brand-text" strokeWidth={1.75} />
        </div>

        <span className="absolute bottom-4 left-4 text-white/80 text-xs font-bold tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-brand-text mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-brand-text-muted mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {product.applications.slice(0, 2).map((app, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs bg-brand-bg px-2.5 py-1 rounded-full text-brand-text-muted font-medium border border-brand-border/50">
              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
              {app}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-brand-border/30">
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-text group/link"
          >
            View Details
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
          <a
            href={`https://wa.me/919804270501?text=I%20am%20interested%20in%20${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-text hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Request Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const visible = useMemo(() => {
    if (active === "All") {
      return CATEGORIES.slice(1).flatMap((cat) =>
        products.filter((p) => p.tag === cat.toUpperCase()).slice(0, 2)
      );
    }
    return products.filter((p) => p.tag === active.toUpperCase()).slice(0, 6);
  }, [active]);

  return (
    <section id="products" className="py-20 px-4 md:px-8 bg-brand-bg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
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
            className="flex items-center gap-2 bg-brand-bg-alt hover:bg-brand-border/50 text-brand-text px-6 py-3 rounded-full text-sm font-semibold transition-all border border-brand-border/50 self-start md:self-auto group"
          >
            View All Products
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            const style = cat === "All" ? null : TAG_STYLES[cat.toUpperCase()];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  isActive
                    ? style
                      ? style.active
                      : "bg-brand-text border-brand-text text-white"
                    : "bg-white border-brand-border/60 text-brand-text-muted hover:border-brand-text/40 hover:text-brand-text"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Fixed card grid on every breakpoint */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <ProductCard product={product} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
