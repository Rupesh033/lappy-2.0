"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatINR } from "@/lib/utils";
import { calculateGst } from "@/lib/gst";

export function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    getSubtotal,
    getTotalCount,
  } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const subtotal = getSubtotal();
  const gstBreakdown = calculateGst(subtotal);

  if (!isDrawerOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Your shopping bag"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-surface shadow-drawer border-l border-line flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <div className="flex items-baseline gap-2">
            <h2 className="font-display text-xl text-ink">Your bag</h2>
            <span className="font-mono text-xs text-muted">({getTotalCount()} items)</span>
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close cart"
            className="text-muted hover:text-ink transition-colors p-1"
          >
            <X className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-line/60">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-display text-lg text-ink mb-1">Your bag is empty.</p>
              <p className="text-sm text-muted mb-6">Discover our curated selection of high-performance laptops.</p>
              <button
                onClick={closeDrawer}
                className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-6 py-3.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="py-5 first:pt-0 last:pb-0 flex gap-4">
                <div className="relative w-20 h-24 bg-cream rounded-lg overflow-hidden shrink-0 border border-line/40">
                  <Image
                    src={item.product.images.primary}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] eyebrow text-gold block">{item.product.brand}</span>
                    <h3 className="text-sm font-medium text-ink truncate leading-tight mt-0.5">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted font-mono mt-1">{item.configLabel}</p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Stepper */}
                    <div className="flex items-center border border-line rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="p-1.5 text-muted hover:text-ink transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[1.75]" />
                      </button>
                      <span className="font-mono text-xs px-2.5 text-ink select-none font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="p-1.5 text-muted hover:text-ink transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[1.75]" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-ink font-sans">
                        {formatINR(item.unitPrice * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="text-muted hover:text-ember transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.75]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {items.length > 0 && (
          <div className="p-6 border-t border-line bg-cream/30 space-y-4">
            <div className="space-y-2 text-xs text-muted">
              <div className="flex justify-between">
                <span>Subtotal (Base value)</span>
                <span className="font-mono">{formatINR(gstBreakdown.baseAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated GST (18%)</span>
                <span className="font-mono">{formatINR(gstBreakdown.gstAmount)}</span>
              </div>
              <div className="flex justify-between text-ink">
                <span>Insured Express Shipping</span>
                <span className="text-sage font-medium uppercase text-[10px] tracking-wider">COMPLIMENTARY</span>
              </div>
              <div className="border-t border-line/60 pt-2 flex justify-between text-base font-semibold text-ink">
                <span>Total (Incl. all taxes)</span>
                <span className="font-mono text-lg">{formatINR(subtotal)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="w-full inline-flex items-center justify-center gap-2 font-sans font-medium text-[13px] px-6 py-3.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors duration-200"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 stroke-[1.75]" />
              </Link>
              <Link
                href="/cart"
                onClick={closeDrawer}
                className="text-center text-xs text-muted hover:text-ink transition-colors py-1.5"
              >
                View Full Bag & GST Breakdown
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
