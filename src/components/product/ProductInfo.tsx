"use client";

import React, { useState } from "react";
import { Star, Heart, Plus, Minus, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { Product } from "@/lib/mock-data";
import { formatINR, discountPct } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useToastStore } from "@/store/toastStore";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedConfigIdx, setSelectedConfigIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCartStore();
  const { toggleWishlist, isWishlisted } = useWishlistStore();
  const { addToast } = useToastStore();

  const saved = isWishlisted(product.id);
  const selectedConfig = product.configurations[selectedConfigIdx] || product.configurations[0];
  const finalUnitPrice = product.price + (selectedConfig.priceModifier || 0);
  const discount = discountPct(finalUnitPrice, product.mrp);

  const handleAddToCart = () => {
    addItem(product, selectedConfigIdx, quantity);
    addToast(`Added ${quantity}x ${product.name} (${selectedConfig.label}) to bag.`, "success");
  };

  const handleToggleWishlist = () => {
    const nowSaved = toggleWishlist(product.id);
    addToast(nowSaved ? `Saved to wishlist.` : `Removed from wishlist.`, "info");
  };

  return (
    <div className="flex flex-col">
      {/* 1. Brand eyebrow (gold) */}
      <span className="eyebrow text-gold block mb-2">{product.brand}</span>

      {/* 2. Product name (Fraunces, clamp) */}
      <h1 className="font-display text-[clamp(28px,3vw,38px)] text-ink font-normal leading-tight mb-2">
        {product.name}
      </h1>

      {/* 3. Tagline (muted) */}
      <p className="text-[13px] text-muted font-sans mb-4">{product.tagline}</p>

      {/* 4. Rating row (stars + rating + review count) -> border-b hairline pb-8 */}
      <div className="flex items-center gap-2 border-b hairline pb-8 mb-8 text-xs text-muted">
        <div className="flex items-center text-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <span className="font-mono text-ink font-medium">{product.rating.toFixed(1)}</span>
        <span>•</span>
        <span className="underline cursor-pointer hover:text-ink">{product.reviewCount} Verified Client Reviews</span>
        <span>•</span>
        <span className="font-mono text-sage text-[11px]">In Stock / Ready to Ship</span>
      </div>

      {/* 5. Price (large) + MRP strikethrough + % off (ember) + Inclusive of all taxes */}
      <div className="mb-6">
        <div className="flex items-baseline gap-3">
          <span className="font-sans text-3xl font-semibold text-ink">
            {formatINR(finalUnitPrice)}
          </span>
          {product.mrp > finalUnitPrice && (
            <>
              <span className="text-base text-muted line-through font-normal">
                {formatINR(product.mrp)}
              </span>
              {discount > 0 && (
                <span className="text-sm text-ember font-medium font-mono">
                  −{discount}%
                </span>
              )}
            </>
          )}
        </div>
        <p className="text-[11px] text-muted mt-1">
          Inclusive of 18% GST (Input Tax Credit eligible) + Free Insured Delivery
        </p>
      </div>

      {/* 6. Description (max 3 lines, muted) */}
      <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-8">
        {product.editorialSummary}
      </p>

      {/* 7. Configuration selector (flat chips, bg-ink text-bg active) */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-3">
          <label className="eyebrow text-muted">HARDWARE SPECIFICATION</label>
          <span className="font-mono text-xs text-muted">SKU: {product.sku}</span>
        </div>
        <div className="flex flex-col gap-2">
          {product.configurations.map((cfg, idx) => (
            <button
              key={cfg.label}
              onClick={() => setSelectedConfigIdx(idx)}
              className={`flex items-center justify-between p-3.5 rounded text-left transition-colors border ${
                selectedConfigIdx === idx
                  ? "bg-ink text-bg border-ink"
                  : "bg-surface text-ink border-line hover:border-ink"
              }`}
            >
              <div>
                <span className="text-xs font-semibold block">{cfg.label}</span>
                <span
                  className={`text-[11px] ${
                    selectedConfigIdx === idx ? "text-bg/70" : "text-muted"
                  }`}
                >
                  {cfg.specs}
                </span>
              </div>
              <span className="font-mono text-xs font-medium">
                {cfg.priceModifier === 0 ? "Standard" : `+${formatINR(cfg.priceModifier)}`}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 8. Quantity stepper + Add to bag (bg-ink, hover:bg-gold) + Save heart */}
      <div className="flex items-center gap-3 mb-8">
        {/* Quantity Stepper */}
        <div className="flex items-center border border-line rounded bg-surface">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
            className="px-3 py-3.5 text-muted hover:text-ink transition-colors"
          >
            <Minus className="w-4 h-4 stroke-[1.75]" />
          </button>
          <span className="font-mono text-xs font-medium px-2 min-w-[28px] text-center select-none text-ink">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
            className="px-3 py-3.5 text-muted hover:text-ink transition-colors"
          >
            <Plus className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

        {/* Add to Bag Button */}
        <button
          onClick={handleAddToCart}
          className="flex-1 inline-flex items-center justify-center font-sans font-medium text-[13px] px-6 py-3.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors duration-200 select-none"
        >
          Add to bag · {formatINR(finalUnitPrice * quantity)}
        </button>

        {/* Save Wishlist Heart */}
        <button
          onClick={handleToggleWishlist}
          aria-label={saved ? "Remove from saved" : "Save configuration"}
          className={`p-3.5 rounded-sm border border-line bg-surface hover:border-ink transition-colors ${
            saved ? "text-ember" : "text-ink"
          }`}
        >
          <Heart className="w-4 h-4 stroke-[1.75]" fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* 9. Trust row (3 columns, icons + label) */}
      <div className="grid grid-cols-3 gap-2 py-4 px-3 border border-line rounded-lg bg-cream/40 text-center mb-8">
        <div className="flex flex-col items-center justify-center gap-1.5 p-1">
          <Truck className="w-4 h-4 text-blue stroke-[1.75]" />
          <span className="text-[11px] text-ink font-medium leading-tight">Free Air Express</span>
          <span className="text-[9px] text-muted">2-3 days India</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 p-1 border-x border-line">
          <RefreshCw className="w-4 h-4 text-sage stroke-[1.75]" />
          <span className="text-[11px] text-ink font-medium leading-tight">7-Day DOA Replacement</span>
          <span className="text-[9px] text-muted">Hassle-free guarantee</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 p-1">
          <ShieldCheck className="w-4 h-4 text-gold stroke-[1.75]" />
          <span className="text-[11px] text-ink font-medium leading-tight">Official Warranty</span>
          <span className="text-[9px] text-muted">Brand certified</span>
        </div>
      </div>

      {/* 10. Specifications (<dl> with hairline dividers) */}
      <div className="border-t hairline pt-6">
        <h4 className="eyebrow text-muted mb-4">PRIMARY HARDWARE SIGNATURE</h4>
        <dl className="divide-y divide-line/60 text-xs font-sans">
          <div className="py-2.5 flex justify-between">
            <dt className="text-muted">Processor</dt>
            <dd className="font-mono text-ink text-right max-w-[260px] truncate">{product.specs.processor}</dd>
          </div>
          <div className="py-2.5 flex justify-between">
            <dt className="text-muted">System Memory</dt>
            <dd className="font-mono text-ink text-right">{product.specs.ram}</dd>
          </div>
          <div className="py-2.5 flex justify-between">
            <dt className="text-muted">Fast Storage</dt>
            <dd className="font-mono text-ink text-right">{product.specs.storage}</dd>
          </div>
          <div className="py-2.5 flex justify-between">
            <dt className="text-muted">Display Panel</dt>
            <dd className="font-mono text-ink text-right max-w-[260px] truncate">{product.specs.display}</dd>
          </div>
          <div className="py-2.5 flex justify-between">
            <dt className="text-muted">Chassis Weight</dt>
            <dd className="font-mono text-ink text-right">{product.specs.weight}</dd>
          </div>
        </dl>
      </div>

      {/* Mobile Sticky Add to Bag bar (bottom of viewport) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-surface/95 backdrop-blur-md border-t border-line flex items-center justify-between gap-3 shadow-drawer">
        <div>
          <span className="text-[11px] text-muted block leading-none">{product.brand}</span>
          <span className="text-sm font-semibold text-ink font-sans">
            {formatINR(finalUnitPrice)}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-5 py-2.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}
