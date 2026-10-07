"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useWishlistStore } from "@/store/wishlistStore";
import { PRODUCTS } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/ProductCard";

export default function SavedPage() {
  const { items } = useWishlistStore();

  useEffect(() => {
    useWishlistStore.persist.rehydrate();
  }, []);

  const savedProducts = PRODUCTS.filter((p) => items.includes(p.id));

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="mb-10 pb-6 border-b border-line">
        <span className="eyebrow text-gold block mb-2">PERSONAL SELECTION</span>
        <h1 className="h-display text-ink">Saved Configurations</h1>
        <p className="text-xs text-muted mt-2 font-mono">
          {savedProducts.length} {savedProducts.length === 1 ? "machine" : "machines"} bookmarked
        </p>
      </div>

      {savedProducts.length === 0 ? (
        <div className="py-24 text-center border border-line rounded-lg bg-surface max-w-xl mx-auto">
          <p className="font-display text-2xl text-ink mb-2">No saved machines.</p>
          <p className="text-xs text-muted mb-8 max-w-sm mx-auto">
            Click the heart icon on any workstation or ultraportable to save specifications for comparison.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-7 py-4 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
          >
            Explore Catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
          {savedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
