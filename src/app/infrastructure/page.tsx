import PageHeader from "@/components/PageHeader";
import MachinerySection from "@/components/MachinerySection";
import Image from "next/image";
import { Hammer, Truck, Factory, ShieldCheck, Leaf, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Infrastructure | Supalika Stone Works",
  description: "Discover our massive production capacity, advanced machinery fleet, and robust logistics infrastructure.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader 
        title="Our Infrastructure" 
        subtitle="Powering Scale" 
        backgroundImage="/images/product-boulders.png" 
      />
      
      <div className="bg-brand-bg pb-24">
        
        {/* Intro */}
        <section className="py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                Scale & Capacity
              </span>
              <div className="w-8 h-[2px] bg-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text uppercase mb-8">
              Engineered for Massive Throughput
            </h2>
            <p className="text-brand-text-muted text-lg leading-relaxed">
              At Supalika Stone Works, our infrastructure is designed to handle the colossal demands of modern infrastructure development. With an integrated 250 TPH two-stage crushing plant, extensive quarry reserves, and a dedicated logistics fleet, we guarantee uninterrupted supply for the largest projects in Eastern India.
            </p>
          </div>
        </section>

        {/* Quarrying & Mining Details */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/infra_quarry.png"
                  alt="Quarry Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-text uppercase tracking-tight">
                    Advanced Quarrying
                  </h3>
                </div>
                <p className="text-brand-text-muted text-lg leading-relaxed">
                  Our raw material is extracted from premium hard rock reserves using controlled precision drilling and blasting techniques. This ensures optimal fragmentation, reducing secondary breaking and maximizing crusher throughput.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <ShieldCheck className="w-5 h-5 text-amber-500" /> Large verified reserves for long-term supply
                  </li>
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <ShieldCheck className="w-5 h-5 text-amber-500" /> Controlled blasting for environmental safety
                  </li>
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <ShieldCheck className="w-5 h-5 text-amber-500" /> Dedicated excavators and heavy-duty breakers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plant Capabilities */}
        <section className="py-12 px-4 md:px-8 mt-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
              <div className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/infra_plant.png"
                  alt="Crushing Plant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <Factory className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-text uppercase tracking-tight">
                    250 TPH Crushing Plant
                  </h3>
                </div>
                <p className="text-brand-text-muted text-lg leading-relaxed">
                  Our fully automated two-stage crushing setup features a primary jaw crusher and a secondary cone crusher, coupled with multi-deck vibrating screens. This configuration ensures perfect cubical shape index and precise grading.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <ShieldCheck className="w-5 h-5 text-amber-500" /> 250 Tonnes Per Hour integrated capacity
                  </li>
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <ShieldCheck className="w-5 h-5 text-amber-500" /> Automated multi-deck screening
                  </li>
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <ShieldCheck className="w-5 h-5 text-amber-500" /> Built-in dust suppression systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery List from Homepage */}
        <div className="pt-12">
          <MachinerySection />
        </div>

        {/* Logistics & Dispatch */}
        <section className="py-24 px-4 md:px-8">
          <div className="container mx-auto bg-brand-text rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image src="/images/hero-bg2.png" alt="Texture" fill className="object-cover" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tight">
                    Logistics & Weighment
                  </h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Fast, accurate, and transparent dispatch is critical. Our facility features digital weighbridges integrated with computerized billing systems to ensure exact tonnage is recorded and dispatched without delays.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" /> High-capacity electronic weighbridges
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" /> Automated invoicing and SMS alerts
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" /> Extensive fleet of GPS-tracked dump trucks
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" /> Optimized traffic flow for zero wait times
                  </li>
                </ul>
              </div>
              
              <div className="relative h-[300px] md:h-[400px] rounded-[32px] overflow-hidden border border-white/20">
                <Image 
                  src="/images/infra_logistics.png"
                  alt="Weighbridge and Logistics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <CTASection />

      </div>
    </>
  );
}
