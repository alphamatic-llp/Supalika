import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { ShieldCheck, Target, Factory, FlaskConical, Leaf, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Quality Assurance | Supalika Stone Works",
  description: "Learn about our rigorous quality testing and certification processes for premium stone aggregates.",
};

const qualityStandards = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Operations",
    description: "Fully certified quality management systems ensuring consistent aggregate production.",
  },
  {
    icon: Factory,
    title: "Automated Crushing",
    description: "Precision-controlled crushers guarantee uniform sizes and superior shape index.",
  },
  {
    icon: Target,
    title: "Rigorous Index Testing",
    description: "Continuous testing for flakiness, elongation, and impact values.",
  },
  {
    icon: FlaskConical,
    title: "On-site Quality Lab",
    description: "Dedicated testing facility at the quarry for immediate batch verification.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Ethical mining and processing that respects environmental guidelines.",
  }
];

export default function QualityPage() {
  return (
    <>
      <PageHeader 
        title="Quality Assurance" 
        subtitle="Tested & Certified" 
        backgroundImage="/images/product-20mm.png" 
      />
      
      <div className="bg-brand-bg pb-24">
        
        {/* Split Section: Our Commitment */}
        <section className="py-24 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-[2px] bg-amber-500" />
                  <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                    Our Commitment
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 uppercase tracking-tight">
                  Zero Compromise on Quality
                </h3>
                <div className="space-y-6 text-brand-text-muted text-lg leading-relaxed">
                  <p>
                    At Supalika Stone Works, quality is not just a standard—it's our foundation. Every batch of stone aggregate that leaves our quarry undergoes rigorous laboratory testing to ensure it meets the highest structural and durability requirements.
                  </p>
                  <p>
                    Our aggregates are continuously tested for compressive strength, specific gravity, water absorption, and impact value, ensuring they are perfectly suited for heavy infrastructure, national highways, and premium commercial construction.
                  </p>
                  <div className="bg-brand-bg-alt/80 border border-brand-border/30 rounded-2xl p-6 mt-4 flex items-start gap-4 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <p className="font-semibold text-brand-text text-base">
                      All materials are verified against IS codes, Railway Board circulars, and MORTH specifications before dispatch.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[400px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-brand-border/20 group">
                <Image 
                  src="/images/quality_inspection.png" 
                  alt="Quality Material Inspection" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16]/60 via-transparent to-transparent opacity-60" />
              </div>

            </div>
          </div>
        </section>

        {/* Laboratory Banner Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-[40px] overflow-hidden shadow-2xl group flex items-center justify-center">
              <Image 
                src="/images/quality_lab.png"
                alt="State of the art quality laboratory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              
              <div className="relative z-10 text-center max-w-3xl px-8">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-lg">
                  State-of-the-Art Testing Facility
                </h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium drop-shadow-md">
                  We don't guess; we test. Our dedicated on-site laboratory guarantees that every tonne of aggregate dispatched is structurally sound, chemically stable, and physically flawless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Standards Grid */}
        <section className="py-24 px-4 md:px-8 bg-brand-bg-alt mt-12">
          <div className="container mx-auto">
            
            <div className="text-center mb-16 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                  Standards
                </span>
                <div className="w-8 h-[2px] bg-amber-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text uppercase">
                Testing & Certification
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {qualityStandards.map((std, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-brand-border/30 hover:shadow-xl transition-shadow duration-300 group flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-brand-bg-alt rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
                    <std.icon className="w-10 h-10 text-brand-text group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">
                    {std.title}
                  </h3>
                  <p className="text-brand-text-muted leading-relaxed text-sm">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </section>

      </div>
    </>
  );
}
