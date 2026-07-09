import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/GallerySection";

export const metadata = {
  title: "Gallery | Supalika Stone Works",
  description: "View our quarry operations, stone mining process, and state-of-the-art aggregate crushers.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Gallery" 
        subtitle="Work In Action" 
        backgroundImage="/images/hero-bg.png" 
      />
      <GallerySection />
    </>
  );
}
