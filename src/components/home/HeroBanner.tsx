"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Phone,
} from "lucide-react";
import { STORE_INFO } from "@/lib/mock-data";
import { useBannerStore, DEFAULT_BANNERS } from "@/store/bannerStore";
import { useSettingsStore } from "@/store/settingsStore";

export function HeroBanner() {
  const { banners } = useBannerStore();
  const { settings } = useSettingsStore();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prevSlideRef = useRef(0);

  useEffect(() => {
    useBannerStore.persist.rehydrate();
    useSettingsStore.persist.rehydrate();
  }, []);

  const phone = settings?.phone || STORE_INFO.phone;

  // Active banners with fallback
  const allBanners = banners && banners.length > 0 ? banners : DEFAULT_BANNERS;
  const activeSlides = allBanners
    .filter((b) => b.isActive)
    .sort((a, b) => a.order - b.order);

  const slides = activeSlides.length > 0 ? activeSlides : DEFAULT_BANNERS;

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => {
      prevSlideRef.current = prev;
      setPrevSlideIndex(prev);
      return (prev + 1) % slides.length;
    });
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => {
      prevSlideRef.current = prev;
      setPrevSlideIndex(prev);
      return (prev - 1 + slides.length) % slides.length;
    });
  }, [slides.length]);

  const goToSlide = useCallback((idx: number) => {
    setCurrentSlide((prev) => {
      prevSlideRef.current = prev;
      setPrevSlideIndex(prev);
      return idx;
    });
  }, []);

  // Smooth interval timer
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, slides.length]);

  const safeSlideIndex = currentSlide % slides.length;
  const currentBanner = slides[safeSlideIndex];
  const isFullPage = currentBanner.widthMode === "full";

  // Height preset class
  const heightClass =
    currentBanner.heightPreset === "compact"
      ? "h-[340px] sm:h-[400px] md:h-[450px]"
      : currentBanner.heightPreset === "standard"
      ? "h-[400px] sm:h-[460px] md:h-[520px]"
      : "h-[460px] sm:h-[520px] md:h-[600px] lg:h-[650px]";

  return (
    <section
      className={`relative z-10 w-full overflow-hidden bg-[#071A33] ${
        isFullPage ? "p-0" : "py-4 md:py-6 px-4 md:px-6"
      }`}
    >
      <div className={isFullPage ? "w-full" : "mx-auto max-w-[1440px]"}>
        {/* Main Hero Slider Container with Zero-Flicker Cross-Fade Architecture */}
        <div
          className={`w-full relative overflow-hidden select-none bg-[#071A33] ${heightClass} ${
            isFullPage
              ? "border-b border-white/10"
              : "rounded-2xl md:rounded-[2rem] border border-[#E7E4DD] shadow-sm"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ transform: "translateZ(0)" }}
        >
          {/* ZERO FLICKER ENGINE:
              1. Top active slide fades in (z-20, opacity-100)
              2. Previous slide stays solid underneath (z-10, opacity-100)
              3. Background never peeks through, avoiding any dark dip or white flash!
          */}
          {slides.map((slide, idx) => {
            const isActive = idx === safeSlideIndex;
            const isPrevious = idx === prevSlideIndex && !isActive;

            // Z-index & Opacity layers
            let zIndexClass = "z-0 opacity-0 pointer-events-none";
            if (isActive) {
              zIndexClass = "z-20 opacity-100 pointer-events-auto";
            } else if (isPrevious) {
              zIndexClass = "z-10 opacity-100 pointer-events-none";
            }

            // Synced WhatsApp Links
            const resolvedSecondaryHref = slide.secondaryCtaHref?.includes("wa.me")
              ? `https://wa.me/91${phone}?text=Hello%20LAPPY%20SOLUTION,%20I%20want%20to%20order`
              : slide.secondaryCtaHref;

            const resolvedPrimaryHref = slide.primaryCtaHref?.includes("wa.me")
              ? `https://wa.me/91${phone}?text=Hello%20LAPPY%20SOLUTION,%20I%20want%20to%20order`
              : slide.primaryCtaHref;

            return (
              <div
                key={slide.id || idx}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${zIndexClass}`}
                style={{ willChange: "opacity" }}
                aria-hidden={!isActive}
              >
                {/* 1. Background Image using native Picture for zero hydration shift */}
                <div className="absolute inset-0 overflow-hidden bg-[#071A33]">
                  <picture>
                    {slide.mobileImageUrl && (
                      <source
                        media="(max-width: 767px)"
                        srcSet={slide.mobileImageUrl}
                      />
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.desktopImageUrl}
                      alt={slide.name || "Store Banner"}
                      loading="eager"
                      fetchPriority={idx === 0 ? "high" : "auto"}
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>

                  {/* Contrast Gradients (for Editorial Mode) */}
                  {slide.displayMode === "editorial" && (
                    <>
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#071A33]/95 via-[#071A33]/85 to-[#071A33]/30 pointer-events-none"
                        style={{
                          opacity: (slide.overlayOpacity || 75) / 100,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/90 via-transparent to-transparent pointer-events-none" />
                    </>
                  )}
                </div>

                {/* 2. Slide Content Layer */}
                {slide.displayMode === "graphic_only" ? (
                  /* GRAPHIC POSTER MODE: Full Clickable Banner without text overlay */
                  <Link
                    href={resolvedPrimaryHref || "/category/laptops-computers"}
                    className="relative z-30 w-full h-full flex flex-col justify-end p-6 md:p-10 cursor-pointer group/poster"
                    title={slide.name}
                  >
                    <div className="sr-only">
                      <h2>{slide.name}</h2>
                    </div>
                    <div className="self-end inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black/60 hover:bg-[#0066B3] backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md">
                      <span>View Offer</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4A93A]" />
                    </div>
                  </Link>
                ) : (
                  /* EDITORIAL MODE: Text & CTA Buttons (No public warranty claim promises) */
                  <div className="relative z-30 h-full w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col justify-between py-8 sm:py-12 md:py-16">
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase self-start">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4A93A]" />
                      <span>{slide.badge || "FEATURED COLLECTION"}</span>
                    </div>

                    {/* Central Typography & CTAs */}
                    <div className="my-auto py-4 max-w-3xl">
                      <h1 className="font-outfit font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-3 sm:mb-4">
                        {slide.titlePrefix}
                        <span className="text-[#D4A93A]">{slide.titleHighlight}</span>
                        {slide.titleSuffix}
                      </h1>

                      <p className="text-white/85 text-xs sm:text-sm md:text-base font-normal max-w-xl leading-relaxed mb-6 sm:mb-8 line-clamp-3 sm:line-clamp-none">
                        {slide.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={resolvedPrimaryHref || "/category/laptops-computers"}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066B3] hover:bg-[#004F8A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
                        >
                          <span>{slide.primaryCtaText || "Explore Catalog"}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        {resolvedSecondaryHref && (
                          resolvedSecondaryHref.startsWith("http") ? (
                            <a
                              href={resolvedSecondaryHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                            >
                              <Phone className="w-4 h-4 text-[#D4A93A]" />
                              <span>{slide.secondaryCtaText || "WhatsApp Desk"}</span>
                            </a>
                          ) : (
                            <Link
                              href={resolvedSecondaryHref}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                            >
                              <span>{slide.secondaryCtaText}</span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>

                    {/* Bottom Info Strip - Clean Verified Specs without warranty claims */}
                    <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] text-white/70 pt-3 sm:pt-4 border-t border-white/15">
                      <span className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-white">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#16805A]" />
                        {slide.tag || "100% GENUINE SILICON"}
                      </span>
                      <span className="hidden sm:inline text-white/30">•</span>
                      <span className="hidden sm:inline">18% GST B2B Invoicing</span>
                      <span className="hidden sm:inline text-white/30">•</span>
                      <span className="hidden sm:inline">Pan-India Express Logistics</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Carousel Left Arrow Button */}
          {slides.length > 1 && (
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] text-[#071A33] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer opacity-85 hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 -ml-0.5" />
            </button>
          )}

          {/* Carousel Right Arrow Button */}
          {slides.length > 1 && (
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] text-[#071A33] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer opacity-85 hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 ml-0.5" />
            </button>
          )}

          {/* Carousel Slide Indicators */}
          {slides.length > 1 && (
            <div className="absolute bottom-4 right-6 z-40 flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id || idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === safeSlideIndex
                      ? "w-8 bg-[#D4A93A]"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
