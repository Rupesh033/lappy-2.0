"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { STORE_INFO } from "@/lib/mock-data";

interface Slide {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  gradientBg: string;
  accentColor: string;
  tag: string;
  bgImageUrl?: string;
}

const SLIDES: Slide[] = [
  {
    id: "laptops-deal",
    badge: "UP TO 30% OFF • B2B SAVINGS",
    titlePrefix: "Enterprise Laptops & ",
    titleHighlight: "Workstations",
    titleSuffix: " Pre-Tested For Maximum Speed",
    description: "Certified Lenovo ThinkPad, Dell Latitude, HP EliteBook, and Apple MacBook. Hardware bench inspected with genuine Windows 11 and warranty.",
    primaryCtaText: "Explore Laptops",
    primaryCtaHref: "/category/laptops-computers",
    secondaryCtaText: "Browse Top Deals",
    secondaryCtaHref: "#top-deals",
    gradientBg: "from-[#071A33] via-[#0E2849] to-[#071A33]",
    accentColor: "#D4A93A",
    tag: "100% GENUINE SILICON",
    bgImageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "printers-special",
    badge: "OFFICE ESSENTIALS • BEST VALUE",
    titlePrefix: "All-in-One Wireless ",
    titleHighlight: "Continuous Ink",
    titleSuffix: " & Laser Printers",
    description: "HP Smart Tank, Epson EcoTank, and Canon PIXMA. Ultra-low cost per page printing, high-yield bottles, and factory-sealed units ready to ship.",
    primaryCtaText: "Explore Printers",
    primaryCtaHref: "/category/printers-toners",
    secondaryCtaText: "View Consumables",
    secondaryCtaHref: "/category/printers-toners",
    gradientBg: "from-[#0F2942] via-[#071A33] to-[#0A1D36]",
    accentColor: "#0066B3",
    tag: "HIGH YIELD INK SYSTEMS",
    bgImageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "garhwa-facility",
    badge: "GARHWA STORE DESK • PAN-INDIA DELIVERY",
    titlePrefix: "Your Trusted Indian ",
    titleHighlight: "Hardware Destination",
    titleSuffix: " with 18% GST Invoice",
    description: "Madarsa Road / Chiniya Road, Garhwa, Jharkhand. Direct dispatch with BlueDart & Speed Post. Transparent pricing with full Input Tax Credit (ITC).",
    primaryCtaText: "Order On WhatsApp",
    primaryCtaHref: `https://wa.me/91${STORE_INFO.phone}?text=Hello%20LAPPY%20SOLUTION,%20I%20want%20to%20place%20an%20order`,
    secondaryCtaText: "Browse Hardware",
    secondaryCtaHref: "/category/laptops-computers",
    gradientBg: "from-[#071A33] via-[#122338] to-[#081524]",
    accentColor: "#D4A93A",
    tag: "AUTHENTIC BRAND WARRANTY",
    bgImageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1400&auto=format&fit=crop",
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative z-10 w-full bg-[#FAF8F3] py-4 md:py-6">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        {/* Main Hero Slider Container - Exactly matching BrightBookStore rounded aesthetic */}
        <div
          className="w-full max-w-[1440px] mx-auto min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] rounded-2xl md:rounded-[2rem] overflow-hidden border border-[#E7E4DD] relative shadow-xs group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Image with Deep Overlay */}
          {slide.bgImageUrl && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out scale-105"
              style={{ backgroundImage: `url(${slide.bgImageUrl})` }}
            />
          )}

          {/* Rich Gradient Overlay matching BrightBookstore Dark Aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A33]/95 via-[#071A33]/85 to-[#071A33]/60 sm:to-[#071A33]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/90 via-transparent to-transparent pointer-events-none" />

          {/* Slide Content */}
          <div className="relative z-20 h-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A93A]" />
              <span>{slide.badge}</span>
            </div>

            {/* Central Typography & CTAs */}
            <div className="my-auto py-4">
              <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-4">
                {slide.titlePrefix}
                <span className="text-[#D4A93A]">{slide.titleHighlight}</span>
                {slide.titleSuffix}
              </h1>

              <p className="text-white/80 text-xs sm:text-sm md:text-base font-normal max-w-xl leading-relaxed mb-6">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={slide.primaryCtaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066B3] hover:bg-[#004F8A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {slide.secondaryCtaHref.startsWith("http") ? (
                  <a
                    href={slide.secondaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#D4A93A]" />
                    <span>WhatsApp Desk</span>
                  </a>
                ) : (
                  <Link
                    href={slide.secondaryCtaHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                  >
                    <span>{slide.secondaryCtaText}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Bottom Info Strip */}
            <div className="flex items-center gap-6 text-[11px] text-white/70 pt-4 border-t border-white/15">
              <span className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16805A]" />
                {slide.tag}
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline">18% GST B2B Invoicing</span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline">Pan-India Express Logistics</span>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] text-[#071A33] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 -ml-0.5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] text-[#071A33] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 ml-0.5" />
          </button>

          {/* Carousel Slide Indicators */}
          <div className="absolute bottom-4 right-6 z-30 flex items-center gap-2">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-7 bg-[#D4A93A]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
