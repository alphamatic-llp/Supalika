import { sectorsData } from "@/data/sectors";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowUpRight, Shield } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return sectorsData.map((sector) => ({
    slug: sector.slug,
  }));
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const sector = sectorsData.find((s) => s.slug === resolvedParams.slug);

  if (!sector) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-bg pb-20">
      <PageHeader 
        title={sector.title}
        subtitle={sector.shortDescription}
      />

      <div className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-text-muted mb-4 block">
              Sector Overview
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text uppercase mb-8 leading-tight">
              Building for <br/>
              <span className="text-brand-text-muted">{sector.title}</span>
            </h2>
            
            <div className="flex flex-col gap-6 text-brand-text-muted">
              {sector.detailedDescription.map((desc, idx) => (
                <p key={idx} className="leading-relaxed text-lg">
                  {desc}
                </p>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-brand-border/20 group">
              <Image 
                src={sector.heroImage} 
                alt={sector.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>

        {/* Features & Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Key Advantages */}
          <div>
            <h3 className="text-2xl font-bold text-brand-text uppercase mb-8 flex items-center gap-3">
              <Shield className="w-6 h-6 text-amber-500" />
              Key Advantages
            </h3>
            <div className="flex flex-col gap-6">
              {sector.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-border/30 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-brand-text text-lg mb-2">{feature.title}</h4>
                  <p className="text-brand-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Applications */}
          <div>
            <h3 className="text-2xl font-bold text-brand-text uppercase mb-8">
              Core Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.applications.map((app, idx) => (
                <div key={idx} className="bg-brand-bg-alt p-6 rounded-2xl border border-brand-border/50 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-brand-text-muted">{app}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Box */}
            <div className="mt-8 bg-brand-text text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 uppercase">Ready to Start?</h4>
                <p className="text-white/80 mb-8 max-w-sm">
                  Get premium aggregates for your next {sector.title.toLowerCase()} project.
                </p>
                <a
                  href="https://wa.me/919804270501?text=I%20want%20to%20know%20more%20about%20your%20aggregates%20for%20my%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-md text-lg"
                >
                  Request a Quote
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
