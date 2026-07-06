import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import Image from "next/image";

export const metadata = {
  title: "About Us | Supalika Stone Works",
  description: "Learn about Supalika Stone Works, our history, and our commitment to providing premium stone aggregates.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Our Story" 
        backgroundImage="/images/hero-bg2.png" 
      />
      
      {/* Intro Section */}
      <div className="pt-12 bg-brand-bg">
        <AboutSection />
      </div>

      {/* Extended Story Section - Split Layout */}
      <section className="py-24 bg-brand-bg px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Text */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                  Our Journey
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 uppercase tracking-tight">
                A Legacy of Excellence
              </h3>
              <div className="space-y-6 text-brand-text-muted text-lg leading-relaxed">
                <p>
                  Supalika Stone Works LLP is a registered aggregate company delivering premium quality materials across Odisha and Eastern India. With advanced quarrying operations and integrated crushing systems, we serve the nation's most demanding infrastructure, railway, and construction projects.
                </p>
                <p>
                  Our state-of-the-art 250 TPH two-stage production plant operates with precision automation, delivering consistent gradation, superior shape index, and zero contamination — meeting railway ballast specifications and national highway standards alike.
                </p>
                <p className="font-semibold text-brand-text border-l-4 border-amber-500 pl-6 py-2">
                  From deep quarry extraction to final dispatch, every tonne of aggregate bears the mark of operational excellence that has made Supalika the trusted choice for contractors, developers, and public sector infrastructure across Eastern India.
                </p>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-brand-border/20 group">
              <Image 
                src="/images/about_legacy.png" 
                alt="Supalika Stone Works Legacy" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16]/80 via-transparent to-transparent opacity-60" />
            </div>

          </div>
        </div>
      </section>

      {/* Premium Leadership Section */}
      <section className="py-24 bg-brand-bg-alt px-4 md:px-8">
        <div className="container mx-auto">
          
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                Leadership
              </span>
              <div className="w-8 h-[2px] bg-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text uppercase">
              Meet Our Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Sanjay Kumar Pradhan */}
            <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-brand-border/20 group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-96 w-full overflow-hidden">
                <Image 
                  src="/images/director_1.png"
                  alt="Sanjay Kumar Pradhan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-8">
                  <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">Managing Director</p>
                  <h3 className="text-3xl font-black text-white tracking-tight">Sanjay Kumar Pradhan</h3>
                </div>
              </div>
              <div className="p-10 flex-1">
                <p className="text-brand-text-muted text-lg leading-relaxed">
                  Guiding Supalika Stone Works with decades of industry expertise and a relentless commitment to operational excellence. His visionary leadership has been instrumental in scaling the company to meet national infrastructure demands.
                </p>
              </div>
            </div>

            {/* Pranat Bajaj */}
            <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-brand-border/20 group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-96 w-full overflow-hidden">
                <Image 
                  src="/images/director_2.png"
                  alt="Pranat Bajaj"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-8">
                  <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">Director</p>
                  <h3 className="text-3xl font-black text-white tracking-tight">Pranat Bajaj</h3>
                </div>
              </div>
              <div className="p-10 flex-1">
                <p className="text-brand-text-muted text-lg leading-relaxed">
                  Driving innovation, strategic growth, and fostering strong relationships with our infrastructure partners across India. He focuses on integrating modern technologies to streamline production and maximize efficiency.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
