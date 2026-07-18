import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { ShieldCheck, Target, Factory, FlaskConical, Leaf, CheckCircle2, ClipboardCheck, Mountain, Zap, Hammer, Truck, Droplets, Scale, ArrowDownToLine, Magnet, Box, ArrowRight, Settings2, Filter, CheckCircle, HardHat } from "lucide-react";

export const metadata = {
  title: "Quality Assurance | Supalika Stone Works",
  description: "Learn about our rigorous quality testing and certification processes for premium stone aggregates.",
};

const qualityStandards = [
  {
    icon: ShieldCheck,
    title: "Stringent Quality Control",
    description: "Every batch undergoes rigorous multi-stage inspections to ensure unmatched structural integrity.",
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
    title: "Third-Party Lab Verification",
    description: "All aggregates are regularly tested and certified by independent, accredited laboratories.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Ethical mining and processing that respects environmental guidelines.",
  }
];

const processes = [
  { id: "01", title: "Survey & Consent to Operate", icon: ClipboardCheck, image: "/images/process/01-survey.png" },
  { id: "02", title: "Overburden Removal", icon: Mountain, image: "/images/process/02-overburden.png" },
  { id: "03", title: "Drilling", icon: Target, image: "/images/process/03-drilling.png" },
  { id: "04", title: "Blasting", icon: Zap, image: "/images/process/04-blasting.png" },
  { id: "05", title: "Breaking", description: "Excavator with Breaker", icon: Hammer, image: "/images/process/05-breaking.png" },
  { id: "06", title: "Loading of Boulders", icon: HardHat, image: "/images/process/06-loading.png" },
  { id: "07", title: "Transport to Crusher Plant", icon: Truck, image: "/images/process/07-transport.png" },
  { id: "08", title: "Dewatering & Misc. Activities", icon: Droplets, image: "/images/process/08-dewatering.png" },
  { id: "09", title: "Environmental Controls", description: "Road Safety, Sprinklers, Tree Plantation, Biodiversity Management", icon: Leaf, image: "/images/process/09-environmental.png" },
  { id: "10", title: "Weighment at Weighbridge", icon: Scale, image: "/images/process/10-weighment.png" },
  { id: "11", title: "Unload at Hopper", icon: ArrowDownToLine, image: "/images/process/11-unload.png" },
  { id: "12", title: "Primary Crushing & Scalping", description: "Removal of Soil/Muck", icon: Factory, image: "/images/process/12-primary.png" },
  { id: "13", title: "Removal of Iron/Ferrous Objects", description: "Via Magnetic Separator", icon: Magnet, image: "/images/process/13-iron.png" },
  { id: "14", title: "Surge Hopper", icon: Box, image: "/images/process/14-surge.png" },
  { id: "15", title: "Secondary Feeding", icon: ArrowRight, image: "/images/process/15-secondary.png" },
  { id: "16", title: "Cone Crusher", description: "With Automation", icon: Settings2, image: "/images/process/16-cone.png" },
  { id: "17", title: "Screening", icon: Filter, image: "/images/process/17-screening.png" },
  { id: "18", title: "Final Products", icon: CheckCircle, image: "/images/process/18-final.png" },
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
        
        {/* Full 18-Step Process Timeline */}
        <section className="py-20 px-4 md:px-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-text/5 rounded-br-full -z-10 blur-3xl mix-blend-multiply opacity-50" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-20 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                  Our Manufacturing Process
                </span>
                <div className="w-8 h-[2px] bg-amber-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text uppercase">
                From Earth to Infrastructure
              </h2>
              <p className="text-brand-text-muted text-lg mt-6 max-w-2xl">
                A rigorous 18-step journey ensuring that every aggregate produced meets the strictest global standards for strength and durability.
              </p>
            </div>

            <div className="relative">
              {/* Central Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand-border/40 -translate-x-1/2" />
              {/* Left Line (Mobile) */}
              <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-brand-border/40" />

              <div className="flex flex-col gap-12 md:gap-8">
                {processes.map((process, idx) => {
                  const isEven = idx % 2 !== 0;
                  return (
                    <div key={process.id} className={`relative flex items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:flex-row`}>
                      
                      {/* Center Icon Node */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-brand-bg rounded-full flex items-center justify-center shadow-xl z-10 transition-transform hover:scale-110">
                        <process.icon className="w-6 h-6 text-amber-500" strokeWidth={2} />
                      </div>

                      {/* Card Content */}
                      <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                        <div className={`bg-white rounded-3xl p-5 md:p-6 shadow-md border border-brand-border/20 hover:shadow-2xl hover:border-amber-500/30 transition-all duration-300 group flex flex-col sm:flex-row gap-5 md:gap-6 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          
                          {/* Image Thumbnail */}
                          <div className="relative w-full sm:w-32 h-48 sm:h-32 rounded-2xl overflow-hidden shrink-0">
                            <Image 
                              src={process.image}
                              alt={process.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-2 left-2 bg-brand-text/90 backdrop-blur-sm text-white text-xs font-black px-2 py-1 rounded-lg">
                              {process.id}
                            </div>
                          </div>

                          {/* Text */}
                          <div className={`flex flex-col flex-grow ${isEven ? 'md:items-end text-center sm:text-right' : 'text-center sm:text-left'}`}>
                            <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-amber-500 transition-colors">
                              {process.title}
                            </h3>
                            {process.description ? (
                              <p className="text-brand-text-muted text-sm leading-relaxed">
                                {process.description}
                              </p>
                            ) : (
                              <p className="text-brand-text-muted text-sm leading-relaxed">
                                Standardized procedure ensuring optimal quality control.
                              </p>
                            )}
                          </div>

                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        
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
                  src="/images/quality_lab_indian.png" 
                  alt="Quality Material Inspection" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/40 to-transparent mix-blend-multiply" />
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
