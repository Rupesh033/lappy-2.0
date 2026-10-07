import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block eyebrow text-muted mb-2">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full bg-surface border border-line rounded px-4 py-3 text-sm text-ink",
            "placeholder:text-muted",
            "focus:outline-none focus:border-ink focus:ring-1 focus:ring-gold/30",
            "transition-colors duration-150",
            error && "border-ember focus:border-ember",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-ember">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
