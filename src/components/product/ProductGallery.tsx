"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, ShieldCheck } from "lucide-react";

interface ProductGalleryProps {
  images: {
    primary: string;
    hover: string;
    angles: { label: string; src: string }[];
  };
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  // Consolidate all available unique images into a rich multi-angle array
  const rawAngles = images.angles && images.angles.length > 0 ? images.angles : [];
  const baseList: { label: string; src: string }[] = [];

  // Add primary image
  if (images.primary) {
    baseList.push({ label: "Main Profile", src: images.primary });
  }

  // Add hover if distinct
  if (images.hover && images.hover !== images.primary) {
    baseList.push({ label: "Alternate Angle", src: images.hover });
  }

  // Add all angle specs
  for (const a of rawAngles) {
    if (!baseList.some((item) => item.src === a.src)) {
      baseList.push(a);
    }
  }

  // Fallback if empty
  const allImages = baseList.length > 0 ? baseList : [{ label: "Product View", src: images.primary }];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Frame (4:3 aspect ratio, object-contain, high quality) */}
      <div className="relative aspect-[4/3] bg-[#FAF9F5] rounded-xl overflow-hidden border border-line p-4 sm:p-6 flex items-center justify-center group shadow-sm">
        <Image
          src={allImages[activeIndex].src}
          alt={`${productName} - ${allImages[activeIndex].label}`}
          fill
          priority
          className="object-contain p-2 sm:p-4 transition-all duration-300"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />

        {/* Current Angle Label Pill */}
        <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-mono text-ink tracking-wider border border-line/60 flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-gold" />
          <span>{allImages[activeIndex].label}</span>
          <span className="text-muted">({activeIndex + 1}/{allImages.length})</span>
        </div>

        {/* Zoom Fullscreen Trigger */}
        <button
          onClick={() => setIsZoomModalOpen(true)}
          aria-label="Enlarge product photo"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center border border-line/60 text-muted hover:text-ink hover:scale-105 transition-all shadow-sm"
        >
          <Maximize2 className="w-3.5 h-3.5 stroke-[1.75]" />
        </button>

        {/* Left / Right Carousel Controls if multiple images */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md border border-line/60 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md border border-line/60 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:scale-110"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Rail (Displays all HD angles) */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 sm:gap-3">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View ${img.label}`}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF9F5] p-1.5 border transition-all duration-200 ${
                activeIndex === idx
                  ? "border-ink ring-2 ring-ink/20 shadow-sm"
                  : "border-line/70 hover:border-muted opacity-75 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-contain p-1"
                sizes="120px"
              />
              <span className="absolute bottom-1 inset-x-1 text-[8px] font-mono text-ink bg-surface/90 backdrop-blur-xs py-0.5 rounded-xs text-center truncate">
                {img.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen HD Zoom Modal */}
      {isZoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh] bg-surface rounded-xl overflow-hidden p-6 flex items-center justify-center shadow-2xl border border-line"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-cream border border-line flex items-center justify-center text-ink hover:bg-gold hover:text-ink transition-colors"
            >
              <X className="w-4 h-4 stroke-[2]" />
            </button>

            <Image
              src={allImages[activeIndex].src}
              alt={`${productName} HD View`}
              fill
              className="object-contain p-6"
              sizes="100vw"
            />

            <div className="absolute bottom-4 left-6 bg-cream/90 backdrop-blur-md px-3 py-1.5 rounded border border-line text-xs font-mono text-ink">
              {productName} &bull; {allImages[activeIndex].label} ({activeIndex + 1}/{allImages.length})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
