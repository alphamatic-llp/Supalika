import PageHeader from "@/components/PageHeader";
import { sectorsData } from "@/data/sectors";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industries We Serve | Supalika Stone Works",
  description: "Providing premium stone aggregates for Railway Infrastructure, National Highways, Building Construction, Industrial Projects, Mining Operations, and Ports & Waterways.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader 
        title="Industries We Serve" 
        subtitle="Sectors" 
        backgroundImage="/images/hero-bg.png" 
      />
      
      <div className="py-24 bg-brand-bg-alt px-4 md:px-8">
        <div className="container mx-auto">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                Our Reach
              </span>
              <div className="w-8 h-[2px] bg-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text uppercase mb-6">
              Industries That Build On Us
            </h2>
            <p className="text-brand-text-muted text-lg max-w-2xl">
              We supply millions of tonnes of precisely engineered materials to the most demanding infrastructure and development sectors across Eastern India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsData.map((sector, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-border/20 group flex flex-col"
              >
                <div className="relative h-[280px] w-full overflow-hidden">
                  <Image 
                    src={sector.heroImage}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-bold text-2xl text-white tracking-tight">
                      {sector.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-brand-text-muted mb-6 leading-relaxed line-clamp-3">
                    {sector.shortDescription}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-brand-border/20">
                    <Link 
                      href={`/industries/${sector.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-500 group/btn hover:text-black transition-colors"
                    >
                      View Capabilities
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
