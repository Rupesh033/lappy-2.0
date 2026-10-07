"use client";

import React, { useEffect, useState } from "react";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import { PRODUCTS, Product } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/ProductCard";
import { Clock } from "lucide-react";

interface RecentlyViewedRailProps {
  currentProductId: string;
}

export function RecentlyViewedRail({ currentProductId }: RecentlyViewedRailProps) {
  const { productIds, addProduct } = useRecentlyViewedStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (currentProductId) {
      addProduct(currentProductId);
    }
  }, [currentProductId, addProduct]);

  if (!mounted) return null;

  // Filter out the current active product
  const otherIds = productIds.filter((id) => id !== currentProductId);
  let viewedProducts: Product[] = otherIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p))
    .slice(0, 4);

  // If user hasn't browsed other items yet, show trending store recommendations
  if (viewedProducts.length === 0) {
    viewedProducts = PRODUCTS.filter((p) => p.id !== currentProductId && (p.isTrending || p.isTopDeal)).slice(0, 4);
  }

  return (
    <section className="mt-20 md:mt-28 border-t border-line/60 pt-14">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="eyebrow text-gold block mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            BROWSING HISTORY &bull; GARHWA STORE
          </span>
          <h2 className="h-section text-ink">Recently Viewed Products</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
        {viewedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
