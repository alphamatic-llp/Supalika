import Image from "next/image";

export default function DirectorsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-brand-bg-alt">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
              Leadership
            </span>
            <div className="w-8 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text uppercase">
            Meet Our Directors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          
          {/* Managing Director */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-brand-border/20 group hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden">
              <Image 
                src="/images/products/SANJAY.png" 
                alt="Sanjay Kumar Pradhan" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              {/* Name & Title inside the image */}
              <div className="absolute bottom-6 left-8 right-8 z-10">
                <span className="text-amber-500 font-bold text-xs tracking-widest uppercase block mb-1">
                  Managing Director
                </span>
                <h3 className="text-white text-3xl font-black tracking-tight">
                  Sanjay Kumar Pradhan
                </h3>
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex-grow">
              <p className="text-brand-text-muted text-base leading-relaxed">
                Guiding Supalika Stone Works with decades of industry expertise and a relentless commitment to operational excellence. His visionary leadership has been instrumental in scaling the company to meet national infrastructure demands.
              </p>
            </div>
          </div>

          {/* Director */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-brand-border/20 group hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden">
              <Image 
                src="/images/products/PRANAT.png" 
                alt="Pranat Bajaj" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              {/* Name & Title inside the image */}
              <div className="absolute bottom-6 left-8 right-8 z-10">
                <span className="text-amber-500 font-bold text-xs tracking-widest uppercase block mb-1">
                  Director
                </span>
                <h3 className="text-white text-3xl font-black tracking-tight">
                  Pranat Bajaj
                </h3>
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex-grow">
              <p className="text-brand-text-muted text-base leading-relaxed">
                Driving innovation, strategic growth, and fostering strong relationships with our infrastructure partners across India. He focuses on integrating modern technologies to streamline production and maximize efficiency.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
