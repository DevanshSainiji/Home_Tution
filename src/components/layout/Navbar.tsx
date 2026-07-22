"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, "#")}
          className="flex flex-col leading-none"
        >
          <span className="font-handwritten text-3xl md:text-4xl font-bold tracking-tight text-accent-primary">Vijay & Ashok</span>
          <span className="text-[10px] md:text-xs font-sans font-medium text-text-secondary tracking-widest uppercase mt-0 md:mt-1 ml-1">Classes</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {siteData.navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-text-secondary hover:text-white text-sm font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <Button 
            size="sm" 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              const el = document.querySelector("#contact");
              if (el) {
                const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
              }
            }}
          >
            Contact Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-6 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {siteData.navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-text-primary text-lg font-medium block w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="w-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const el = document.querySelector("#contact");
              if (el) {
                const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
              }
            }}
          >
            Contact Now
          </Button>
        </div>
      )}
    </header>
  );
}
