"use client";

import React from "react";
import { siteData } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
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
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col leading-none">
              <span className="font-handwritten text-3xl md:text-4xl font-bold tracking-tight text-accent-primary">Vijay & Ashok</span>
              <span className="text-xs font-sans font-medium text-text-secondary tracking-widest uppercase mt-1 ml-1">Classes</span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs">
              Expert Mathematics & Physics Home Tuition in Jaipur. Personal attention and proven results for Class 11, 12, IIT-JEE and NEET.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-bold font-heading uppercase tracking-widest mb-2 text-sm opacity-80">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {siteData.navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-secondary hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-bold font-heading uppercase tracking-widest mb-2 text-sm opacity-80">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <p>
                <strong className="text-white font-medium mr-2">Vijay Sir (Maths):</strong> 
                <a href={`tel:+91${siteConfig.tutors.vijay.phone}`} className="hover:text-accent-primary transition-colors">
                  {siteConfig.tutors.vijay.phone}
                </a>
              </p>
              <p>
                <strong className="text-white font-medium mr-2">Ashok Sir (Physics):</strong> 
                <a href={`tel:+91${siteConfig.tutors.ashok.phone}`} className="hover:text-accent-primary transition-colors">
                  {siteConfig.tutors.ashok.phone}
                </a>
              </p>
              <div className="mt-2">
                <strong className="text-text-primary font-medium block mb-1">Areas Covered:</strong>
                <p>{siteData.areas.slice(0, -1).join(" · ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
