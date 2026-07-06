import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-alt pt-20 pb-10 border-t border-brand-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 inline-flex" style={{ mixBlendMode: 'darken' }}>
              <Image 
                src="/images/logo.png" 
                alt="Supalika Stone Works Logo" 
                width={320} 
                height={96} 
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </Link>
            <p className="text-sm text-brand-text-muted max-w-xs">
              High quality aggregates. Strong foundations. Better tomorrows.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-2">Quick Links</h4>
            <Link href="#home" className="text-sm text-brand-text-muted hover:text-brand-text transition-colors">Home</Link>
            <Link href="#about" className="text-sm text-brand-text-muted hover:text-brand-text transition-colors">About Us</Link>
            <Link href="#products" className="text-sm text-brand-text-muted hover:text-brand-text transition-colors">Products</Link>
            <Link href="#gallery" className="text-sm text-brand-text-muted hover:text-brand-text transition-colors">Gallery</Link>
            <Link href="#quality" className="text-sm text-brand-text-muted hover:text-brand-text transition-colors">Quality</Link>
            <Link href="#contact" className="text-sm text-brand-text-muted hover:text-brand-text transition-colors">Contact Us</Link>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-2">Our Products</h4>
            <span className="text-sm text-brand-text-muted">Crusher Aggregate</span>
            <span className="text-sm text-brand-text-muted">Stone Dust</span>
            <span className="text-sm text-brand-text-muted">20MM Aggregate</span>
            <span className="text-sm text-brand-text-muted">10MM Aggregate</span>
            <span className="text-sm text-brand-text-muted">Sand</span>
            <span className="text-sm text-brand-text-muted">Boulders</span>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-2">Contact Us</h4>
            <p className="text-sm text-brand-text-muted">
              Khandagiri, Bhubaneswar,<br />
              Odisha - 751030
            </p>
            <p className="text-sm text-brand-text-muted mt-2">
              +91 98765 43210
            </p>
            <p className="text-sm text-brand-text-muted">
              info@supalikastone.com
            </p>
          </div>
        </div>

        {/* Bottom Bar with CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-border/50 pt-8 mt-12 gap-6 relative">
          
          <div className="text-xs text-brand-text-muted order-2 md:order-1">
            © 2026 Supalika Stone Works. All Rights Reserved.
          </div>
          
          {/* Footer CTA Card */}
          <div className="md:absolute right-0 bottom-4 bg-[#5b5b5b] text-white p-6 rounded-2xl w-full md:w-80 shadow-2xl order-1 md:order-2">
            <h3 className="font-bold text-lg mb-2">NEED A QUOTE?</h3>
            <p className="text-sm text-white/80 mb-6">
              Get the best price for your requirement.
            </p>
            <a
              href="https://wa.me/919804270501?text=I%20want%20to%20know%20more%20about%20your%20product%20and%20want%20an%20quotation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-white text-brand-text px-4 py-3 rounded-xl text-sm font-bold transition-all hover:bg-gray-100"
            >
              Get A Quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs text-brand-text-muted order-3">
            <Link href="#" className="hover:text-brand-text transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-brand-text transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
