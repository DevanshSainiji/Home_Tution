"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Areas() {
  const { areas } = siteData;
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simple lazy load timeout for iframe or just load immediately since it's far down
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading 
            title="Areas We Cover" 
            subtitle="Providing home tuition across South Jaipur."
            centered
            chapterNumber="05"
          />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
          {areas.map((area, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex items-center gap-2 px-6 py-3 bg-card border border-border hover:border-accent-primary/50 hover:bg-accent-primary/5 transition-colors shadow-sm">
                <MapPin size={18} className="text-accent-primary" />
                <span className="text-text-primary font-medium">{area}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="max-w-4xl mx-auto">
          <div className="glass-card p-2 rounded-none overflow-hidden aspect-video relative border-2 border-border">
            {!mapLoaded && (
              <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-accent-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {mapLoaded && (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113945.36624933705!2d75.72376249218376!3d26.814321683401567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9781c002bf5%3A0x7d8e23f03b29c9cc!2sPratap%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Areas Covered Map"
              ></iframe>
            )}
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-card px-6 py-3 border border-border flex items-center gap-4 shadow-xl whitespace-nowrap">
              <span className="text-sm text-text-primary font-medium hidden sm:inline">Not sure if we cover your area?</span>
              <Button size="sm" onClick={() => window.open(`https://wa.me/91${siteData.tutors[0].phone}`, "_blank")}>
                WhatsApp to Check
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
