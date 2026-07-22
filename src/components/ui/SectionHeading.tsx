import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  chapterNumber?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  chapterNumber,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 relative",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {chapterNumber && (
        <span className={cn(
          "editorial-number text-7xl md:text-9xl -top-10 md:-top-16 opacity-50",
          centered ? "left-1/2 -translate-x-1/2" : "-left-4 md:-left-8"
        )}>
          {chapterNumber}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight relative z-10 text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed relative z-10">
          {subtitle}
        </p>
      )}
    </div>
  );
}
