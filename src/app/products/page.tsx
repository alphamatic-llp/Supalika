import PageHeader from "@/components/PageHeader";
import { productsData } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Products | Supalika Stone Works",
  description: "Explore our wide range of premium stone aggregates including crusher aggregate, stone dust, sand, and boulders.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader 
        title="Our Products" 
        subtitle="Premium Aggregates" 
        backgroundImage="/images/product-crusher.png" 
      />
      <div className="py-20 bg-brand-bg-alt">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="relative bg-brand-card rounded-[32px] overflow-hidden shadow-xl border border-brand-border/20 group h-[400px] flex flex-col"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  {/* Tag */}
                  <div className="self-start px-4 py-1.5 bg-amber-500 text-[#0a0f16] text-xs font-bold rounded-full tracking-wider shadow-lg">
                    {product.tag}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="font-black text-2xl text-white mb-3 group-hover:text-amber-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/70 line-clamp-3 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <Link 
                      href={`/products/${product.slug}`} 
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-500 group/btn"
                    >
                      View Details
                      <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-amber-500 group-hover/btn:text-[#0a0f16] transition-colors backdrop-blur-sm">
                        <ArrowRight className="w-4 h-4" />
                      </span>
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
