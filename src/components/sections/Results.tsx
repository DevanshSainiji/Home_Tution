"use client";

import React from "react";
import { siteData } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Results() {
  const stats = [
    { value: 10, suffix: "+", label: "Years of Combined Experience" },
    { value: 500, suffix: "+", label: "Students Taught" },
    { value: 95, suffix: "%", label: "Board Exam Success Rate" },
    { value: 100, suffix: "%", label: "Personal Attention Guaranteed" }
  ];

  return (
    <section id="results" className="py-20 relative bg-secondary border-y border-border">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-card rounded-none p-8 md:p-12 relative overflow-hidden bg-background">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {stats.map((stat, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 0.1} 
                className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0"
              >
                <div className="text-5xl md:text-6xl font-bold font-heading text-text-primary mb-4 border-b-2 border-accent-primary/30 pb-2 inline-block">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-text-secondary text-xs uppercase tracking-widest font-medium max-w-[150px]">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
