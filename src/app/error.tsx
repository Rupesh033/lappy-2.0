"use client";

import React, { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("LAPPY Application Error:", error);
  }, [error]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 rounded-full bg-ember/15 text-ember flex items-center justify-center mb-6">
        <AlertCircle className="w-6 h-6 stroke-[1.75]" />
      </div>
      <span className="eyebrow text-ember block mb-2">SYSTEM INTERRUPT</span>
      <h1 className="h-display text-3xl text-ink mb-4">Something went wrong</h1>
      <p className="text-sm text-muted max-w-md font-sans mb-8">
        An unexpected error occurred while resolving this hardware catalog view. Our telemetry has logged the anomaly.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-6 py-3.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
        >
          Re-initialize Session
        </button>
      </div>
    </div>
  );
}
