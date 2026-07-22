"use client";

import React, { useState } from "react";
import { siteData } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  const { hero } = siteData;
  const [vijayHovered, setVijayHovered] = useState(false);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Editorial diagonal rules */}
        <div className="absolute top-0 right-1/4 w-[1px] h-[150vh] bg-accent-primary/20 origin-top-right rotate-[15deg]"></div>
        <div className="absolute top-20 right-[30%] w-[1px] h-[150vh] bg-accent-primary/10 origin-top-right rotate-[15deg]"></div>
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-background to-transparent z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left mt-12 lg:mt-0">
          <ScrollReveal delay={0.1}>
            <span className="inline-block px-4 py-1 border border-accent-primary/30 text-accent-primary font-handwritten text-2xl mb-4 -rotate-2 bg-accent-primary/5">
              {hero.eyebrow}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold font-heading leading-[1.05] tracking-tight">
              Expert Home Tuition for <br className="hidden lg:block" />
              <span className="text-accent-primary">Class 11 & 12 Students</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {hero.subheading}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
            <Button onClick={scrollToContact} className="w-full sm:w-auto">
              Call Vijay Sir <Phone className="ml-2" size={18} />
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto"
              onClick={() => window.open(`https://wa.me/91${siteConfig.tutors.vijay.whatsapp}`, "_blank")}
            >
              WhatsApp <WhatsAppIcon className="ml-2 text-[#25D366]" size={18} />
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = `tel:+91${siteConfig.tutors.ashok.phone}`}
            >
              Call Ashok Sir
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="mt-12 grid grid-cols-3 gap-8 pt-8 ruled-line-top">
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-4xl md:text-5xl font-bold text-text-primary font-heading border-b-2 border-accent-secondary/30 pb-2 inline-block w-max">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-text-secondary uppercase tracking-widest font-medium mt-2">{stat.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Photos / Visuals */}
        <div className="relative h-[500px] lg:h-[600px] w-full max-w-md mx-auto lg:max-w-none">
          {/* Vijay Sir — wrapper div handles hover so ScrollReveal props stay clean */}
          <div
            className={`absolute top-0 right-0 w-3/4 h-4/5 transition-all duration-300 cursor-pointer ${
              vijayHovered
                ? "z-30 scale-[1.02]"
                : "z-10"
            }`}
            onMouseEnter={() => setVijayHovered(true)}
            onMouseLeave={() => setVijayHovered(false)}
          >
            <ScrollReveal
              delay={0.4}
              direction="left"
              className={`w-full h-full overflow-hidden border-2 shadow-xl transition-all duration-300 ${
                vijayHovered ? "border-accent-primary" : "border-border"
              }`}
            >
              <div className="absolute inset-0 bg-secondary">
                <img 
                  src={siteData.tutors[0].imagePlaceholder} 
                  alt="Vijay Sir" 
                  className="object-cover object-top w-full h-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 500"><rect width="400" height="500" fill="%23111d3c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%238da4c9">Vijay Sir</text></svg>';
                  }}
                />
                {/* subtle dark gradient at the bottom for the name label readability */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-md p-4 border border-border shadow-sm">
                <p className="text-text-primary font-bold font-heading text-xl">Vijay Sir</p>
                <p className="text-accent-primary text-sm font-medium">Mathematics Expert</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.6} direction="right" className="absolute bottom-0 left-0 w-3/4 h-3/4 overflow-hidden border-2 border-border shadow-xl z-20">
            {/* Ashok Sir Photo */}
            <div className="absolute inset-0 bg-card">
              <img 
                src={siteData.tutors[1].imagePlaceholder} 
                alt="Ashok Sir" 
                className="object-cover object-top w-full h-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect width="400" height="400" fill="%230d1530"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%238da4c9">Ashok Sir</text></svg>';
                }}
              />
              {/* subtle dark gradient at the bottom for the name label readability */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-md p-4 border border-border shadow-sm">
              <p className="text-text-primary font-bold font-heading text-xl">Ashok Sir</p>
              <p className="text-accent-secondary text-sm font-medium">Physics Expert</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
