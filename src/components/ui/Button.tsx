import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "pill";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-accent-primary text-primary hover:bg-accent-primary/90 shadow-sm border border-accent-primary/20",
      secondary: "glass-button",
      outline: "border border-accent-primary text-accent-primary hover:bg-accent-primary/10",
      pill: "rounded-full bg-card border border-border text-text-primary hover:bg-white/5 text-sm px-4 py-1",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
    };

    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variant !== "pill" && sizes[size],
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
