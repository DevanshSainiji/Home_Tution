"use client";

import React from "react";
import { siteData } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const { features } = siteData;

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="What sets us apart from large coaching institutes."
            centered
            chapterNumber="03"
          />
        </ScrollReveal>

        <div className="flex flex-col mt-12 max-w-4xl mx-auto border-t border-accent-primary/30">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={0.1 + index * 0.1}>
              <div className="flex items-start md:items-center gap-6 p-6 md:p-8 ruled-line-bottom group hover:bg-card transition-colors">
                <span className="text-4xl md:text-5xl font-heading font-bold text-accent-primary/40 group-hover:text-accent-primary transition-colors shrink-0">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-text-primary text-lg md:text-xl font-medium">{feature}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
