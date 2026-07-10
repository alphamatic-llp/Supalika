import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms & Conditions | Supalika Stone Works",
  description: "Terms and conditions of service for Supalika Stone Works.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHeader 
        title="Terms & Conditions" 
        subtitle="Legal Information" 
        backgroundImage="/images/hero-bg2.png" 
      />
      
      <main className="py-20 bg-brand-bg relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-brand-text/5 rounded-bl-full -z-10 blur-3xl mix-blend-multiply" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-brand-border/20 text-brand-text-muted space-y-8 leading-relaxed">
            
            <p className="font-semibold text-brand-text">
              Last updated: July 2026
            </p>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Supalika Stone Works website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">2. Products and Services</h2>
              <p className="mb-4">
                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the website. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors.
              </p>
              <p>
                All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">3. Quotations and Pricing</h2>
              <p>
                Any quotations provided via this website, email, or telephone are estimates based on the information provided and are subject to change. Final pricing will be confirmed upon formal agreement and order placement. Prices for our products are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">4. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">5. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website or our products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">6. Contact Us</h2>
              <p className="mb-4">
                In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:
              </p>
              <div className="bg-brand-bg p-6 rounded-xl border border-brand-border/30">
                <p className="font-bold text-brand-text mb-2">Supalika Stone Works</p>
                <p>Email: <a href="mailto:info@supalikastone.com" className="text-amber-600 hover:underline">info@supalikastone.com</a></p>
                <p>Phone: +91 98042 70501</p>
              </div>
            </section>

          </div>
          
          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-brand-text font-bold hover:text-amber-600 transition-colors">
              Return to Homepage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
