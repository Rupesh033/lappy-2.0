import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/mock-data";

export function CategoryGrid() {
  return (
    <section className="relative z-10 w-full bg-[#FAF8F3] py-10 md:py-16 border-b border-[#E7E4DD]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header matching BrightBookStore */}
        <div className="text-center mb-10 md:mb-14 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-6 bg-[#D4A93A] rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A93A]">
              BROWSE ESSENTIALS
            </span>
            <span className="h-[2px] w-6 bg-[#D4A93A] rounded-full"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A33] font-outfit tracking-tight uppercase">
            Shop by Category
          </h2>
        </div>

        {/* Circular Categories Grid - Matching BrightBookStore circular icons */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 justify-start lg:justify-center overflow-x-auto no-scrollbar scroll-smooth py-3 px-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group flex-shrink-0 flex flex-col items-center text-center w-[120px] sm:w-[150px] md:w-[170px]"
            >
              {/* Circular Image Container */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative bg-white p-1 mb-3.5">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#FAF8F3]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100px, 150px"
                  />
                </div>
              </div>

              {/* Title & Link */}
              <h3 className="text-xs sm:text-sm font-bold text-[#071A33] group-hover:text-[#0066B3] transition-colors uppercase tracking-tight font-outfit mb-1">
                {cat.title}
              </h3>
              <span className="text-[11px] font-medium text-[#667085] group-hover:text-[#0066B3] transition-colors flex items-center gap-1">
                <span>Shop Now</span>
                <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
