"use client";

import React from "react";
import { siteData } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { testimonials } = siteData;
  const topTestimonials = testimonials.slice(0, 3); // Take top 3 for static layout

  const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading 
            title="What Parents Say" 
            subtitle="Real experiences from our students and their families."
            centered
            chapterNumber="04"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {topTestimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={0.1 + idx * 0.1}>
              <div 
                className={cn(
                  "flex flex-col p-8 h-full bg-[#1e1a16] border border-border shadow-md transition-transform duration-300 hover:rotate-0 hover:z-10 hover:scale-[1.02]",
                  rotations[idx % rotations.length]
                )}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent-primary text-accent-primary" />
                  ))}
                </div>

                <p className="text-text-primary text-lg font-serif italic leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border border-dashed">
                  <div>
                    <p className="text-text-primary font-bold font-heading">{t.author}</p>
                    <p className="text-accent-primary font-handwritten text-xl mt-1">{t.detail}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
