import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import MachinerySection from "@/components/MachinerySection";
import QualityAssuranceSection from "@/components/QualityAssuranceSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Target, Lightbulb, Shield, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Supalika Stone Works",
  description: "Learn about Supalika Stone Works, our history, and our commitment to providing premium stone aggregates.",
};

const values = [
  "Integrity in every transaction",
  "Commitment to highest engineering standards",
  "Environmental sustainability",
  "Safety of our workforce",
  "Customer-centric logistics",
  "Continuous technological advancement"
];

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Our Company" 
        backgroundImage="/images/hero-bg2.png" 
      />
      
      {/* Company Introduction */}
      <div className="pt-12 pb-12 bg-brand-bg">
        <AboutSection />
      </div>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-brand-bg-alt px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Mission */}
            <div className="bg-white rounded-[32px] p-10 shadow-lg border border-brand-border/20 group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-bg-alt rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-4 uppercase">Our Mission</h3>
              <p className="text-brand-text-muted text-lg leading-relaxed">
                To consistently manufacture and deliver premium grade stone aggregates that form the unshakeable foundations of India's most ambitious infrastructure, commercial, and national development projects, while upholding the highest standards of operational efficiency and environmental responsibility.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-[32px] p-10 shadow-lg border border-brand-border/20 group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-bg-alt rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-4 uppercase">Our Vision</h3>
              <p className="text-brand-text-muted text-lg leading-relaxed">
                To be universally recognized as the premier and most reliable partner for high-volume, superior-quality aggregate materials in Eastern India, driving the transformation of regional infrastructure through technological innovation and absolute customer trust.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-brand-text rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image src="/images/hero-bg.png" alt="Texture" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-8 h-8 text-amber-500" />
                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">Core Values</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" strokeWidth={2.5} />
                    <span className="font-semibold text-white/90 text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure / Manufacturing Excellence */}
      <MachinerySection />

      {/* Quality Commitment */}
      <QualityAssuranceSection />

      {/* Gallery */}
      <GallerySection />

      {/* Call to Action */}
      <CTASection />
    </>
  );
}
