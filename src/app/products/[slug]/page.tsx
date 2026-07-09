import { productsData } from "@/data/products";
import PageHeader from "@/components/PageHeader";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck, Ruler, Activity, Droplets } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} | Supalika Stone Works`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageHeader 
        title={product.name}
        subtitle={product.tag}
        backgroundImage={product.image}
      />
      
      <div className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-brand-text-muted hover:text-amber-500 mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Image & Specs */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-brand-border/20">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                  <product.icon className="w-8 h-8 text-brand-text" strokeWidth={1.5} />
                </div>
              </div>

              {/* Product Specifications */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg border border-brand-border/20">
                <h3 className="text-xl font-bold text-brand-text mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-amber-500" />
                  Technical Specs
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-brand-border/20">
                    <span className="text-brand-text-muted font-medium">Source Origin</span>
                    <span className="font-bold text-brand-text">Chichinda Quarry</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-brand-border/20">
                    <span className="text-brand-text-muted font-medium">Specific Gravity</span>
                    <span className="font-bold text-brand-text">&gt; 2.7</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-brand-border/20">
                    <span className="text-brand-text-muted font-medium">Water Absorption</span>
                    <span className="font-bold text-brand-text">&lt; 0.5%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-brand-text-muted font-medium">Impact Value</span>
                    <span className="font-bold text-brand-text">&lt; 15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details & CTA */}
            <div className="lg:col-span-7 flex flex-col gap-10 justify-start">
              
              {/* Header Info */}
              <div>
                <div className="inline-block px-4 py-1.5 bg-amber-500 text-[#0a0f16] text-xs font-bold rounded-full tracking-wider mb-6 shadow-sm">
                  {product.tag}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text mb-6">
                  {product.name}
                </h2>
                <p className="text-brand-text-muted leading-relaxed text-lg mb-8">
                  {product.fullDescription}
                </p>
              </div>

              {/* Applications List */}
              <div className="bg-brand-bg-alt/50 border border-brand-border/30 rounded-[32px] p-8 md:p-10 shadow-md">
                <h3 className="text-xl font-bold text-brand-text mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-5 h-5 text-amber-500" />
                  Ideal Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="font-medium text-brand-text-muted">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Certificate Snippet */}
              <div className="bg-[#0a0f16] text-white rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 opacity-5 pointer-events-none">
                  <ShieldCheck className="w-full h-full" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-amber-500" />
                      Certified Quality
                    </h3>
                    <p className="text-white/70 text-sm max-w-md leading-relaxed">
                      This material is rigorously tested and complies with IS codes, MORTH specifications, and relevant engineering standards. Test certificates are provided with every dispatch.
                    </p>
                  </div>
                  <Link href="/quality" className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl text-sm font-bold transition-all whitespace-nowrap">
                    View Quality Protocols
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4 bg-amber-500 rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Ready to Order?</h3>
                  <p className="text-black/80 font-medium">Get a customized quote for your volume requirements.</p>
                </div>
                <a
                  href={`https://wa.me/919804270501?text=I%20am%20interested%20in%20bulk%20supply%20of%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-md text-lg whitespace-nowrap flex items-center gap-2"
                >
                  Request a Quote
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
