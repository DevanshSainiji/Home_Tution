"use client";

import React, { useState } from "react";
import { siteData } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { faq } = siteData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-secondary relative">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading 
            title="Frequently Asked Questions" 
            centered
            chapterNumber="06"
          />
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className="overflow-hidden transition-all duration-300 border-b border-border"
                >
                  <button
                    className="w-full py-6 flex items-center justify-between text-left group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className={cn("text-lg font-medium pr-8 transition-colors font-heading", isOpen ? "text-accent-primary" : "text-text-primary group-hover:text-accent-primary/80")}>
                      {item.q}
                    </span>
                    <div className={cn(
                      "shrink-0 w-8 h-8 flex items-center justify-center transition-colors",
                      isOpen ? "text-accent-primary" : "text-text-muted group-hover:text-accent-primary/80"
                    )}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="pb-8 pt-0 text-text-secondary leading-relaxed font-serif italic">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
