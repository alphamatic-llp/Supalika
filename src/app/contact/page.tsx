import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Supalika Stone Works",
  description: "Get in touch with Supalika Stone Works for premium stone aggregates, project quotes, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get In Touch" 
        backgroundImage="/images/hero-bg1.png" 
      />
      <div className="py-12 bg-brand-bg">
        <ContactForm />
      </div>
    </>
  );
}
