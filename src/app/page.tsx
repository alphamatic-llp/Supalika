import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import AdvantageSection from "@/components/AdvantageSection";
import ProductsSection from "@/components/ProductsSection";
import SectorsSection from "@/components/SectorsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <AdvantageSection />
      <ProductsSection />
      <SectorsSection />
      <ProcessSection />
      <AboutSection />
      <GallerySection />
    </>
  );
}
