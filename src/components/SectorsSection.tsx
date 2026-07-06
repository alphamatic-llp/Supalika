"use client";

import Image from "next/image";

const sectors = [
  {
    title: "RAILWAY INFRASTRUCTURE",
    description: "Certified ballast for Indian Railways mainline and branch operations",
    image: "/images/railway_infrastructure.png"
  },
  {
    title: "NATIONAL HIGHWAYS",
    description: "Base and sub-base aggregates for NH construction and maintenance",
    image: "/images/national_highways.png"
  },
  {
    title: "BUILDING CONSTRUCTION",
    description: "Structural aggregates for foundations, columns, and floor systems",
    image: "/images/building_construction.png"
  },
  {
    title: "MINING OPERATIONS",
    description: "Oversize material and support aggregates for open-cast mining sites",
    image: "/images/mining_operations.png"
  },
  {
    title: "PORTS & WATERWAYS",
    description: "Riprap, armour stone, and marine-grade aggregates for coastal infrastructure",
    image: "/images/ports_waterways.png"
  },
  {
    title: "INDUSTRIAL ESTATES",
    description: "Pavement and foundation materials for SEZs and industrial complexes",
    image: "/images/industrial_estates.png"
  }
];

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
          {sectors.map((sector, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl overflow-hidden h-[300px] border border-white/10 group"
            >
              <Image 
                src={sector.image}
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
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
