"use client";

import { servicesMenu, businessInfo } from "@/lib/data";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Carte des soins", href: "#tarifs" },
    { name: "Avis", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#1a1815]/80 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          {/* Logo Section */}
          <a href="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-serif text-secondary tracking-[0.15em] font-bold group-hover:text-white transition-colors">
              Maison de la Beauté
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 group-hover:text-secondary transition-colors">
              Institut & Bien-être
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-secondary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${businessInfo.phoneRaw}`} 
              className="hidden lg:flex items-center gap-2 text-[11px] uppercase tracking-widest text-secondary hover:text-white transition-colors border border-secondary/20 px-4 py-2 rounded-full"
            >
              <Phone className="w-3 h-3" /> {businessInfo.phone}
            </a>
            <a 
              href="#contact" 
              className="hidden sm:flex px-6 py-3 bg-secondary text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-secondary transition-all rounded-full shadow-lg"
            >
              Prendre RDV
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1a1815] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-secondary text-white text-center rounded-xl font-bold uppercase tracking-widest">
                  Prendre Rendez-vous
                </a>
                <a href={`tel:${businessInfo.phoneRaw}`} className="w-full py-4 border border-white/10 text-white text-center rounded-xl font-medium">
                  Appelez-nous
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
