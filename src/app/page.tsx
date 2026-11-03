import React from "react";
import { HeroBanner } from "@/components/home/HeroBanner";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { BrandsWeDealIn } from "@/components/home/BrandsWeDealIn";
import { ProductRail } from "@/components/home/ProductRail";
import { PromoBanners } from "@/components/home/PromoBanners";
import { PRODUCTS } from "@/lib/mock-data";

export default function HomePage() {
  // Filter sets for the home page sections (5 or 10 items for perfect 5-column grid)
  const newArrivals = PRODUCTS.filter(
    (p) => p.isNewlyLaunched || p.badge === "NEW" || p.isLatest
  ).slice(0, 10);

  const bestSellers = PRODUCTS.filter(
    (p) => p.isTrending || p.isTopDeal || p.badge === "TOP DEAL" || p.rating >= 4.7
  ).slice(0, 10);

  const computingUnits = PRODUCTS.filter(
    (p) => p.categorySlug === "laptops-computers"
  ).slice(0, 10);

  const printerUnits = PRODUCTS.filter(
    (p) => p.categorySlug === "printers-toners"
  ).slice(0, 10);

  const keyboardUnits = PRODUCTS.filter(
    (p) => p.categorySlug === "keyboards-mice"
  ).slice(0, 10);

  return (
    <div className="w-full bg-[#FAF8F3] min-h-screen">
      {/* 1. Master Editorial Hero Banner (Carousel) */}
      <HeroBanner />

      {/* 2. 4-Card Trust Strip (100% Genuine, Wholesale Rates, Fast Shipping, Iconic Brands) */}
      <TrustStrip />

      {/* 3. Circular "Shop by Category" Grid */}
      <CategoryGrid />

      {/* 4. Authorized Brand Partners Section (Dell, HP, Lenovo, Apple, Epson...) */}
      <BrandsWeDealIn />

      {/* 5. Rail 1: New Arrivals (Fresh Collection) */}
      <ProductRail
        id="new-arrivals"
        eyebrow="Curated Selection"
        title="New Arrivals"
        description="Fresh Collection"
        products={newArrivals.length > 0 ? newArrivals : PRODUCTS.slice(0, 10)}
        viewAllHref="/category/laptops-computers"
        bgLight={true}
      />

      {/* 6. Rail 2: Best Sellers (Top Rated & Highly Demanded) */}
      <ProductRail
        id="best-sellers"
        eyebrow="Curated Selection"
        title="Best Sellers"
        description="Top Rated & Highly Demanded"
        products={bestSellers.length > 0 ? bestSellers : PRODUCTS.slice(5, 15)}
        viewAllHref="/category/laptops-computers"
        bgLight={false}
      />

      {/* 7. Mid-Page 2-Column Promo Banners (Apsara/Doms style) */}
      <PromoBanners />

      {/* 8. Rail 3: Enterprise Computing & Laptops */}
      <ProductRail
        id="laptops-rail"
        eyebrow="Curated Selection"
        title="Laptops & Mobile Workstations"
        description="Certified Core i5/i7 business laptops and desktop setups with genuine OS & accessories."
        products={computingUnits.length > 0 ? computingUnits : PRODUCTS.slice(0, 5)}
        viewAllHref="/category/laptops-computers"
        bgLight={true}
      />

      {/* 9. Rail 4: Dedicated Printers & Continuous Ink Systems */}
      <ProductRail
        id="printers-rail"
        eyebrow="Curated Selection"
        title="Printers & High-Yield Consumables"
        description="HP Smart Tank, Epson EcoTank, and Canon PIXMA with ultra-low printing cost."
        products={printerUnits.length > 0 ? printerUnits : PRODUCTS.slice(5, 10)}
        viewAllHref="/category/printers-toners"
        bgLight={false}
      />

      {/* 10. Rail 5: Keyboards & Tactile Input Peripherals */}
      <ProductRail
        id="keyboards-rail"
        eyebrow="Curated Selection"
        title="Keyboards, Mice & Accessories"
        description="Precision wireless and mechanical input gear for developers, designers, and office productivity."
        products={keyboardUnits.length > 0 ? keyboardUnits : PRODUCTS.slice(10, 15)}
        viewAllHref="/category/keyboards-mice"
        bgLight={true}
      />
    </div>
  );
}
