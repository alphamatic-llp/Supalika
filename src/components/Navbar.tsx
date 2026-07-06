"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Hexagon } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Quality", href: "/quality" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 lg:px-20">
      <div
        className={`w-full transition-all duration-300 rounded-[32px] px-6 py-4 flex items-center justify-between ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-lg border border-white/50" 
            : "bg-white/80 backdrop-blur-xl shadow-sm border border-white/50"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" style={{ mixBlendMode: 'darken' }}>
          <Image 
            src="/images/logo.png" 
            alt="Supalika Stone Works Logo" 
            width={320} 
            height={96} 
            className="h-16 md:h-20 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={idx}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative group ${
                  isActive ? "text-brand-text" : "text-brand-text-muted hover:text-brand-text"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-text rounded-full" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919804270501?text=I%20want%20to%20know%20more%20about%20your%20product%20and%20want%20an%20quotation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-btn hover:bg-brand-btn-hover text-white px-5 py-2.5 rounded-[16px] text-sm font-medium transition-all shadow-md"
          >
            Get A Quote
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 text-brand-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-[32px] border border-white/50 flex flex-col items-center py-8 px-6 gap-6 lg:hidden"
          >
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive ? "text-brand-text font-bold" : "text-brand-text-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://wa.me/919804270501?text=I%20want%20to%20know%20more%20about%20your%20product%20and%20want%20an%20quotation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-btn text-white px-6 py-3 rounded-2xl text-base font-medium w-full justify-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get A Quote
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}
