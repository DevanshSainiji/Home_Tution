"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px on desktop, always show on mobile
      if (window.innerWidth < 768 || window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const whatsappUrl = `https://wa.me/91${siteConfig.tutors.vijay.whatsapp}`;
  const phoneUrl = `tel:+91${siteConfig.tutors.vijay.phone}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end"
        >
          {/* Phone Button with Tooltip */}
          <div 
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-card border border-border rounded-none p-3 shadow-xl backdrop-blur-md w-max"
                >
                  <div className="flex flex-col gap-2 text-sm">
                    <a href={`tel:+91${siteConfig.tutors.vijay.phone}`} className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                      <Phone size={14} /> Vijay Sir (Maths)
                    </a>
                    <a href={`tel:+91${siteConfig.tutors.ashok.phone}`} className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                      <Phone size={14} /> Ashok Sir (Physics)
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <a
              href={phoneUrl}
              className="w-12 h-12 rounded-full bg-accent-primary text-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              aria-label="Call Us"
            >
              <Phone size={20} fill="currentColor" />
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20"></div>
            
            <WhatsAppIcon size={22} fill="currentColor" />
            <span className="font-semibold text-sm hidden sm:block">Chat Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
