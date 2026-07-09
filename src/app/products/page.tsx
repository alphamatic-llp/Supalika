import PageHeader from "@/components/PageHeader";
import { productsData } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

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
      <div className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center mb-16 flex flex-col items-center">
             <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                Complete Catalog
              </span>
              <div className="w-8 h-[2px] bg-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text uppercase mb-6">
              Quality Materials For Every Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-brand-border/20 group flex flex-col"
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-amber-500 text-black text-xs font-bold rounded-full tracking-wider uppercase shadow-lg">
                      {product.tag}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-2xl text-brand-text mb-3">
                    {product.name}
                  </h3>
                  <p className="text-brand-text-muted mb-6 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-8 flex flex-wrap gap-2">
                    {product.applications.slice(0, 3).map((app, i) => (
                      <span key={i} className="text-xs bg-brand-bg px-3 py-1.5 rounded-full text-brand-text-muted font-semibold border border-brand-border/40">
                        {app}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-brand-border/20">
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full text-center bg-brand-bg hover:bg-brand-border/30 text-brand-text px-6 py-4 rounded-[16px] text-sm font-bold transition-colors border border-brand-border/30"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/919804270501?text=I%20am%20interested%20in%20${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-brand-text hover:bg-black text-white px-6 py-4 rounded-[16px] text-sm font-bold transition-colors shadow-lg"
                    >
                      Request Quote
                    </a>
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
