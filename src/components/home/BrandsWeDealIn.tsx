"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BRANDS_WE_DEAL_IN } from "@/lib/mock-data";

export function BrandsWeDealIn() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 w-full bg-white py-14 md:py-20 border-b border-[#E7E4DD]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Title matching BrightBookStore */}
        <div className="text-center mb-10 md:mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F3] border border-[#E7E4DD] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16805A]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#071A33]">
              Authorized Brand Partners
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A33] tracking-tight font-outfit mb-3">
            Premier Hardware Brands <span className="text-[#0066B3]">You Trust</span>
          </h2>

          <div className="h-[2px] w-12 bg-[#D4A93A] rounded-full mb-3" />

          <p className="text-[#667085] text-xs sm:text-sm md:text-base max-w-2xl text-center leading-relaxed font-normal">
            100% genuine products sourced directly from India and the world&#39;s leading manufacturers. Certified quality for office, enterprise, and educational computing.
          </p>
        </div>

        {/* Carousel Wrapper with Prev/Next buttons */}
        <div className="relative group px-1 sm:px-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="hidden md:flex absolute -left-2 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center border border-[#E7E4DD] text-[#071A33] bg-white hover:bg-[#0066B3] hover:text-white hover:border-[#0066B3] transition-all duration-200 z-30 shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 ml-[-1px]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1"
          >
            {BRANDS_WE_DEAL_IN.map((brand) => (
              <Link
                key={brand.name}
                href={`/category/laptops-computers?brand=${encodeURIComponent(brand.name)}`}
                className="group flex-shrink-0 flex flex-col justify-between w-[160px] sm:w-[190px] md:w-[210px] p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E4DD] hover:border-[#0066B3] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top Badge & In-Stock Indicator */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[10px] font-semibold text-[#667085] uppercase tracking-wider bg-[#FAF8F3] border border-[#E7E4DD] px-2 py-0.5 rounded-md group-hover:text-[#0066B3] group-hover:border-[#0066B3] transition-colors truncate max-w-[120px]">
                    {brand.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16805A]" title="In Stock" />
                </div>

                {/* Brand Visual Display Area */}
                <div className="h-20 sm:h-24 w-full flex items-center justify-center p-3 rounded-xl bg-[#FAF8F3] group-hover:bg-white transition-colors relative overflow-hidden border border-[#E7E4DD]">
                  <span className="font-outfit text-xl sm:text-2xl font-extrabold tracking-tight text-[#071A33] group-hover:text-[#0066B3] transition-colors text-center">
                    {brand.name}
                  </span>
                </div>

                {/* Bottom Row */}
                <div className="mt-4 pt-3 border-t border-[#E7E4DD] flex items-center justify-between w-full">
                  <div className="flex flex-col text-left">
                    <h3 className="text-xs sm:text-sm font-bold text-[#071A33] group-hover:text-[#0066B3] transition-colors leading-tight truncate">
                      {brand.name}
                    </h3>
                    <span className="text-[11px] text-[#667085] font-medium mt-0.5 truncate">
                      {brand.tagline}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#FAF8F3] border border-[#E7E4DD] group-hover:bg-[#0066B3] group-hover:border-[#0066B3] flex items-center justify-center text-[#071A33] group-hover:text-white transition-all duration-300 shadow-2xs group-hover:translate-x-0.5 shrink-0 ml-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="hidden md:flex absolute -right-2 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center border border-[#E7E4DD] text-[#071A33] bg-white hover:bg-[#0066B3] hover:text-white hover:border-[#0066B3] transition-all duration-200 z-30 shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 mr-[-1px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
