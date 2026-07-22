"use client";

import React from "react";
import { siteData } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calculator, Atom } from "lucide-react";

export function Subjects() {
  const { mathematics, physics } = siteData.subjects;

  return (
    <section id="subjects" className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading 
            title="Subjects & Curriculum" 
            subtitle="Comprehensive coverage for Board exams and competitive entrance tests."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Mathematics */}
          <ScrollReveal delay={0.1}>
            <GlassCard hoverEffect className="h-full border-t-4 border-t-accent-primary">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Calculator size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{mathematics.title}</h3>
                  <p className="text-accent-primary text-sm font-medium">By {mathematics.tutor}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-3">Boards</h4>
                  <div className="flex flex-wrap gap-2">
                    {mathematics.boards.map(board => (
                      <span key={board} className="px-3 py-1 rounded-md bg-white/5 text-text-secondary text-sm">
                        {board}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-3">Exams</h4>
                  <div className="flex flex-wrap gap-2">
                    {mathematics.exams?.map(exam => (
                      <span key={exam} className="px-3 py-1 rounded-md bg-accent-primary/10 text-accent-primary text-sm border border-accent-primary/20">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-3">Key Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {mathematics.topics.map(topic => (
                      <span key={topic} className="px-3 py-1 rounded-full bg-background border border-white/5 text-text-secondary text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Physics */}
          <ScrollReveal delay={0.2}>
            <GlassCard hoverEffect className="h-full border-t-4 border-t-accent-secondary">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent-secondary/20 flex items-center justify-center text-accent-secondary">
                  <Atom size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{physics.title}</h3>
                  <p className="text-accent-secondary text-sm font-medium">By {physics.tutor}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-3">Boards</h4>
                  <div className="flex flex-wrap gap-2">
                    {physics.boards.map(board => (
                      <span key={board} className="px-3 py-1 rounded-md bg-white/5 text-text-secondary text-sm">
                        {board}
                      </span>
                    ))}
                  </div>
                </div>

                {physics.exams && physics.exams.length > 0 && (
                  <div>
                    <h4 className="text-xs text-text-muted uppercase tracking-wider mb-3">Exams</h4>
                    <div className="flex flex-wrap gap-2">
                      {physics.exams.map(exam => (
                        <span key={exam} className="px-3 py-1 rounded-md bg-accent-secondary/10 text-accent-secondary text-sm border border-accent-secondary/20">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-3">Key Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {physics.topics.map(topic => (
                      <span key={topic} className="px-3 py-1 rounded-full bg-background border border-white/5 text-text-secondary text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
