"use client";

import Image from "next/image";
import Link from "next/link";
import { sectorsData, type SectorData } from "@/data/sectors";

function SectorCard({ sector }: { sector: SectorData }) {
  return (
    <Link
      href={`/industries/${sector.slug}`}
      className="relative rounded-2xl overflow-hidden h-[340px] group block shadow-md hover:shadow-2xl transition-all duration-500"
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
  );
}

export default function SectorsSection() {
  return (
    <section className="py-20 bg-brand-bg-alt px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-500">
            SECTORS WE SERVE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text uppercase">
            INDUSTRIES THAT BUILD ON US
          </h2>
        </div>

        {/* Mobile / tablet: static grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {sectorsData.map((sector) => (
            <SectorCard key={sector.slug} sector={sector} />
          ))}
        </div>

        {/* Desktop: continuously auto-scrolling train of sectors (never pauses, only links redirect) */}
        <div className="hidden md:block relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div
            className="flex w-max gap-6 lg:gap-8 [animation-name:marquee] [animation-timing-function:linear] [animation-iteration-count:infinite]"
            style={{ animationDuration: `${sectorsData.length * 7}s` }}
          >
            {[...sectorsData, ...sectorsData].map((sector, idx) => (
              <div key={`${sector.slug}-${idx}`} className="w-[380px] lg:w-[420px] shrink-0">
                <SectorCard sector={sector} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
