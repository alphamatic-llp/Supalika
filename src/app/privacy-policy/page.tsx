import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy | Supalika Stone Works",
  description: "Privacy policy and data protection practices for Supalika Stone Works.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
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
              <h2 className="text-2xl font-bold text-brand-text mb-4">1. Introduction</h2>
              <p>
                Welcome to Supalika Stone Works. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">2. The Data We Collect About You</h2>
              <p className="mb-4">
                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-brand-text">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong className="text-brand-text">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong className="text-brand-text">Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong className="text-brand-text">Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">3. How We Use Your Personal Data</h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing a quotation for our stone aggregates).</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">5. Contact Details</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
              </p>
              <div className="bg-brand-bg p-6 rounded-xl border border-brand-border/30">
                <p className="font-bold text-brand-text mb-2">Supalika Stone Works</p>
                <p>Email: <a href="mailto:info@supalikastone.com" className="text-amber-600 hover:underline">info@supalikastone.com</a></p>
                <p>Phone: +91 98042 70501</p>
                <p className="mt-4 text-sm">
                  Corporate Office: Room 2C, Bajaj Kunj, 118-Bangur Avenue, Block-C, Kolkata-700055
                </p>
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
