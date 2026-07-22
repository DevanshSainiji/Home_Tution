"use client";

import React from "react";
import { siteData } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";

export function Services() {
  const { services } = siteData;

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading 
            title="How We Teach" 
            subtitle="A personalized approach that coaching institutes can't match."
            centered
            chapterNumber="02"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard hoverEffect className="h-full flex flex-col items-start p-8 rounded-none border-t-2 border-t-accent-primary">
                  <div className="w-12 h-12 rounded-none border border-border bg-card/50 flex items-center justify-center mb-6">
                    <Icon className="text-accent-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 font-heading">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
