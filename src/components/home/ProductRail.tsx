import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Product } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductRailProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  products: Product[];
  viewAllHref?: string;
  bgLight?: boolean;
}

export function ProductRail({
  id,
  eyebrow,
  title,
  description,
  products,
  viewAllHref,
  bgLight = true,
}: ProductRailProps) {
  if (!products || products.length === 0) return null;

  return (
    <section
      id={id}
      className={`relative z-10 w-full py-10 md:py-16 border-b border-[#E7E4DD] ${
        bgLight ? "bg-[#FAF8F3]" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header matching BrightBookStore */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12 text-center relative">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E4DD] text-[#071A33] text-[11px] font-bold uppercase tracking-widest mb-2.5 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#D4A93A]" />
            <span>{eyebrow}</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A33] font-outfit tracking-tight">
            {title}
          </h2>

          {/* Subtitle */}
          {description && (
            <p className="text-xs sm:text-sm md:text-base text-[#667085] mt-1.5 max-w-lg font-normal">
              {description}
            </p>
          )}

          {/* Gold Underline Bar */}
          <div className="w-16 h-1 bg-[#D4A93A] rounded-full mt-3 opacity-80" />

          {/* View All Link on top right for desktop */}
          {viewAllHref && (
            <div className="mt-3 md:mt-0 md:absolute md:right-0 md:bottom-2">
              <Link
                href={viewAllHref}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0066B3] hover:text-[#004F8A] transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {/* 5-Column Grid matching BrightBookStore desktop layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
