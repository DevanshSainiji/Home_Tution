"use client";

import React from "react";
import { siteData } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Phone, Award, BookOpen } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function About() {
  const vijay = siteData.tutors[0];
  const ashok = siteData.tutors[1];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading 
            title="Meet Your Teachers" 
            subtitle="Experienced educators dedicated to your child's success."
            chapterNumber="01"
          />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 relative before:hidden lg:before:block before:absolute before:left-[55%] before:top-0 before:bottom-0 before:w-[1px] before:bg-border">
          {/* Vijay Sir Card */}
          <ScrollReveal delay={0.1} className="lg:w-[55%] lg:pr-8">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-2">{vijay.name}</h3>
                  <span className="text-accent-primary font-handwritten text-2xl">{vijay.tag}</span>
                </div>
                <div className="hidden sm:flex w-16 h-16 rounded-full border border-accent-primary/20 items-center justify-center text-accent-primary bg-accent-primary/5">
                  <Award size={32} />
                </div>
              </div>
              
              <p className="text-text-secondary text-lg leading-relaxed mb-8 font-serif italic">
                "{vijay.bio}"
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {vijay.qualifications.map((q, i) => (
                  <span key={i} className="px-3 py-1 bg-card border border-border text-xs text-text-primary">
                    {q}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-border">
                <div className="mb-6">
                  <h4 className="text-sm text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BookOpen size={16} /> Teaches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {vijay.teaches.map((t, i) => (
                      <span key={i} className="px-4 py-1.5 border border-accent-primary/20 text-accent-primary text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                  <Button 
                    className="w-full sm:w-auto"
                    onClick={() => window.location.href = `tel:+91${vijay.phone}`}
                  >
                    Call <Phone size={14} className="ml-2" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full sm:w-auto"
                    onClick={() => window.open(`https://wa.me/91${vijay.phone}`, "_blank")}
                  >
                    WhatsApp <WhatsAppIcon size={14} className="ml-2 text-[#25D366]" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Ashok Sir Card */}
          <ScrollReveal delay={0.2} className="lg:w-[45%] lg:pl-8">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-2">{ashok.name}</h3>
                  <span className="text-accent-secondary font-handwritten text-2xl">{ashok.tag}</span>
                </div>
                <div className="hidden sm:flex w-16 h-16 rounded-full border border-accent-secondary/20 items-center justify-center text-accent-secondary bg-accent-secondary/5">
                  <Award size={32} />
                </div>
              </div>
              
              <p className="text-text-secondary text-lg leading-relaxed mb-8 font-serif italic">
                "{ashok.bio}"
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {ashok.qualifications.map((q, i) => (
                  <span key={i} className="px-3 py-1 bg-card border border-border text-xs text-text-primary">
                    {q}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-border">
                <div className="mb-6">
                  <h4 className="text-sm text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BookOpen size={16} /> Teaches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ashok.teaches.map((t, i) => (
                      <span key={i} className="px-4 py-1.5 border border-accent-secondary/20 text-accent-secondary text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                  <Button 
                    className="w-full sm:w-auto bg-accent-secondary text-primary hover:bg-accent-secondary/90 border border-accent-secondary/20"
                    onClick={() => window.location.href = `tel:+91${ashok.phone}`}
                  >
                    Call <Phone size={14} className="ml-2" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full sm:w-auto"
                    onClick={() => window.open(`https://wa.me/91${ashok.phone}`, "_blank")}
                  >
                    WhatsApp <WhatsAppIcon size={14} className="ml-2 text-[#25D366]" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
