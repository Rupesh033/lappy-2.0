import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function PromoBanners() {
  return (
    <section className="relative z-10 bg-[#FAF8F3] py-10 md:py-14 border-b border-[#E7E4DD]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Banner 1: Enterprise Computing */}
          <Link
            href="/category/laptops-computers"
            className="group relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E7E4DD] bg-[#071A33] block flex flex-col justify-between p-6 sm:p-8 text-white"
          >
            {/* Background image overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/70 to-transparent pointer-events-none" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F3] text-[#071A33] text-[10px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#D4A93A]" />
                30% OFF B2B SPECIAL
              </span>
              <span className="text-[11px] font-bold text-[#D4A93A] tracking-wider uppercase">
                Core i5 / i7 Series
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-4">
              <h3 className="font-outfit font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight mb-2 group-hover:text-[#D4A93A] transition-colors leading-tight">
                Business Laptops &amp; Mobile Workstations
              </h3>
              <p className="text-white/80 text-xs sm:text-sm line-clamp-2 mb-4 font-normal">
                Lenovo ThinkPad, Dell Latitude &amp; HP EliteBook. Pre-inspected hardware with 18% GST Invoice &amp; activated Windows.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-white group-hover:translate-x-1 transition-transform">
                <span className="bg-[#0066B3] px-4 py-2 rounded-xl">Shop Laptops Now</span>
                <ArrowRight className="w-4 h-4 text-[#D4A93A]" />
              </div>
            </div>
          </Link>

          {/* Banner 2: Continuous Ink Printers */}
          <Link
            href="/category/printers-toners"
            className="group relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E7E4DD] bg-[#0E2849] block flex flex-col justify-between p-6 sm:p-8 text-white"
          >
            {/* Background image overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=900&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2849] via-[#0E2849]/70 to-transparent pointer-events-none" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F3] text-[#071A33] text-[10px] font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-[#16805A]" />
                FACTORY SEALED UNITS
              </span>
              <span className="text-[11px] font-bold text-[#D4A93A] tracking-wider uppercase">
                Ultra Low Cost Printing
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-4">
              <h3 className="font-outfit font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight mb-2 group-hover:text-[#D4A93A] transition-colors leading-tight">
                All-in-One Ink Tank &amp; Laser Printers
              </h3>
              <p className="text-white/80 text-xs sm:text-sm line-clamp-2 mb-4 font-normal">
                HP Smart Tank, Epson EcoTank &amp; Canon PIXMA. Wi-Fi continuous ink systems with up to 18,000 pages yield in the box.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-white group-hover:translate-x-1 transition-transform">
                <span className="bg-[#0066B3] px-4 py-2 rounded-xl">Shop Printers Now</span>
                <ArrowRight className="w-4 h-4 text-[#D4A93A]" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
