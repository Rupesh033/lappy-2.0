import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center">
      <span className="font-mono text-xs text-gold font-semibold tracking-wider block mb-3">
        404 · UNIT NOT LOCATED
      </span>
      <h1 className="h-display text-4xl md:text-5xl text-ink mb-4">
        Specification Not Found
      </h1>
      <p className="text-sm text-muted max-w-md font-sans mb-8">
        The hardware model or catalog segment you requested is no longer archived or has been repositioned.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-7 py-4 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
      >
        Return to Catalog Index
      </Link>
    </div>
  );
}
