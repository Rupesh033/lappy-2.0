"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, Check } from "lucide-react";
import { Product } from "@/lib/mock-data";
import { discountPct } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useToastStore } from "@/store/toastStore";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCartStore();
  const { toggleWishlist, isWishlisted } = useWishlistStore();
  const { addToast } = useToastStore();

  const saved = isWishlisted(product.id);
  const discount = discountPct(product.price, product.mrp);
  const ratingScore = product.rating || 4.8;
  const reviewTotal = product.reviewCount || 48;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 0, 1);
    setJustAdded(true);
    addToast(`Added ${product.name} to cart.`, "success");
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowSaved = toggleWishlist(product.id);
    addToast(
      nowSaved ? `Saved ${product.name} to wishlist.` : `Removed from wishlist.`,
      "info"
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl p-3 sm:p-3.5 border border-[#E7E4DD] hover:border-[#0066B3]/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full overflow-hidden">
      {/* Top Media Area */}
      <div className="relative w-full aspect-square bg-[#FAF8F3] rounded-xl overflow-hidden border border-[#E7E4DD]/60 p-3 flex items-center justify-center">
        <Link href={`/product/${product.slug}`} className="relative w-full h-full flex items-center justify-center">
          <Image
            src={product.images.primary}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-108"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </Link>

        {/* Badge Top-Left */}
        <span className="absolute top-2.5 left-2.5 bg-[#F5E8BF] text-[#7A5A00] text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-md shadow-2xs z-10 border border-[#E7E4DD]/70 font-outfit">
          {product.badge || (discount > 15 ? `${discount}% OFF` : "NEW")}
        </span>

        {/* Wishlist Button Top-Right */}
        <button
          onClick={handleToggleWishlist}
          title={saved ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white shadow-2xs border border-[#E7E4DD] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-10 ${
            saved ? "text-[#DC2626]" : "text-[#667085] hover:text-[#0066B3]"
          }`}
        >
          <Heart
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]"
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 mt-3 sm:mt-3.5 text-left">
        {/* Category / Brand Tag */}
        <span className="text-[10px] font-bold text-[#667085] uppercase tracking-wider line-clamp-1 mb-1 font-outfit">
          {product.categoryName || product.brand}
        </span>

        {/* Product Title */}
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="text-xs sm:text-[13px] font-bold text-[#071A33] line-clamp-2 leading-snug group-hover:text-[#0066B3] transition-colors min-h-[2.4rem] font-outfit">
            {product.name}
          </h3>
        </Link>

        <div className="flex-1 min-h-[6px]" />

        {/* Price Row */}
        <div className="flex items-center justify-between mt-2 mb-1.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-extrabold text-[#071A33] font-outfit">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.mrp > product.price && (
              <span className="text-[11px] text-[#98A2B3] line-through font-medium">
                ₹{product.mrp.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {discount > 0 && (
            <span className="text-[9px] font-bold text-[#7A5A00] bg-[#F5E8BF] px-1.5 py-0.5 rounded border border-[#E7E4DD] font-outfit">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Rating Row (5 Gold Stars) */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-[#D4A93A] text-[#D4A93A]"
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-[#172033] font-outfit">
            {ratingScore}
          </span>
          <span className="text-[10px] text-[#667085] font-normal">
            ({reviewTotal})
          </span>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-auto pt-2 border-t border-[#E7E4DD]/70">
          <button
            onClick={handleQuickAdd}
            className={`w-full flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-xl font-bold transition-all duration-200 active:scale-95 shadow-xs text-xs tracking-wider uppercase group/btn ${
              justAdded
                ? "bg-[#16805A] text-white"
                : "bg-[#0066B3] hover:bg-[#004F8A] text-white hover:shadow-sm"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="font-extrabold">Added to Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5 text-white" />
                <span className="font-extrabold text-white">Add To Cart &rarr;</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
