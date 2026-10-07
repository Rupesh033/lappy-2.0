import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-colors duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none";

    const variantStyles = {
      primary: "bg-ink text-bg rounded-sm hover:bg-gold hover:text-ink",
      secondary: "border border-ink text-ink bg-transparent rounded-sm hover:bg-ink hover:text-bg",
      tertiary: "text-ink underline underline-offset-4 decoration-line hover:decoration-ink bg-transparent p-0",
    };

    const sizeStyles = {
      sm: "text-[12px] px-4 py-2",
      md: "text-[13px] px-6 py-3.5",
      lg: "text-[14px] px-7 py-4",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== "tertiary" && sizeStyles[size],
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
