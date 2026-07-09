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
              href={`/industries/${sector.slug}`}
              key={idx}
              className="relative rounded-[24px] overflow-hidden h-[340px] group block shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src={sector.heroImage}
                alt={sector.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bold text-2xl text-white mb-2 tracking-tight">
                    {sector.title}
                  </h3>
                  <div className="h-1 w-12 bg-amber-500 mb-4 rounded-full" />
                  <p className="text-white/80 text-sm leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {sector.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
