"use client";

import Image from "next/image";
import Link from "next/link";
import { sectorsData } from "@/data/sectors";

export default function SectorsSection() {
  return (
    <section className="py-24 bg-brand-bg-alt px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-500">
            SECTORS WE SERVE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text uppercase">
            INDUSTRIES THAT BUILD ON US
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsData.map((sector, idx) => (
            <Link 
              href={`/sectors/${sector.slug}`}
              key={idx}
              className="relative rounded-2xl overflow-hidden h-[300px] border border-white/10 group block"
            >
              <Image 
                src={sector.heroImage}
                alt={sector.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Note: Deliberately avoiding any dark overlays or gradients here as requested by user. */}
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                <h3 
                  className="font-black text-2xl text-white mb-2 tracking-tight uppercase"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)" }}
                >
                  {sector.title}
                </h3>
                <p 
                  className="text-white/90 text-sm leading-relaxed font-medium"
                  style={{ textShadow: "0 2px 5px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
                >
                  {sector.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
