import { productsData } from "@/data/products";
import PageHeader from "@/components/PageHeader";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
        subtitle="Product Details"
        backgroundImage={product.image}
      />
      
      <div className="py-16 bg-brand-bg relative">
        <div className="container mx-auto px-4 lg:px-20 relative z-10">
          
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-brand-text-muted hover:text-brand-text mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Image & Icon */}
            <div className="relative">
              <div className="sticky top-32">
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
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col gap-8 justify-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-amber-500 text-[#0a0f16] text-xs font-bold rounded-full tracking-wider mb-4 shadow-sm">
                  {product.tag}
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-brand-text mb-6">
                  {product.name}
                </h2>
                <p className="text-brand-text-muted leading-relaxed text-lg">
                  {product.fullDescription}
                </p>
              </div>

              <div className="bg-brand-bg-alt/50 border border-brand-border/30 rounded-[32px] p-8 md:p-10 shadow-lg mt-4">
                <h3 className="text-xl font-bold text-brand-text mb-6 uppercase tracking-wider">
                  Ideal Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-text shrink-0 mt-0.5" />
                      <span className="font-medium text-brand-text-muted">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/919804270501?text=I%20want%20to%20know%20more%20about%20your%20product%20and%20want%20an%20quotation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-btn hover:bg-brand-btn-hover text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-md text-lg"
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
