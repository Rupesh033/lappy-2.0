import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "gold" | "ember" | "sage" | "muted";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "gold", children, className }: BadgeProps) {
  const variantStyles = {
    gold: "bg-gold text-ink",
    ember: "bg-ember text-surface",
    sage: "bg-sage text-surface",
    muted: "bg-cream text-muted border border-line",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-sans font-medium px-2 py-0.5 rounded-sm tracking-wider uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
