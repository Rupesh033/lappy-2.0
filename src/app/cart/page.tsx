"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, Trash2, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatINR } from "@/lib/utils";
import { calculateGst } from "@/lib/gst";
import { useToastStore } from "@/store/toastStore";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getSubtotal, getTotalCount } = useCartStore();
  const { addToast } = useToastStore();
  const [gstin, setGstin] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const rawSubtotal = getSubtotal();
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);
  const gstBreakdown = calculateGst(finalTotal);

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "LAPPY2025") {
      const discount = Math.round(rawSubtotal * 0.05); // 5% discount
      setDiscountAmount(discount);
      addToast("Coupon applied: 5% Corporate Courtesy Discount.", "success");
    } else {
      addToast("Invalid or expired coupon code.", "error");
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-16">
      {/* Page Title */}
      <div className="mb-10 pb-6 border-b border-line">
        <span className="eyebrow text-gold block mb-2">RESERVED INVENTORY</span>
        <h1 className="h-display text-ink">Shopping Bag</h1>
        <p className="text-xs text-muted mt-2 font-mono">
          {getTotalCount()} {getTotalCount() === 1 ? "unit" : "units"} allocated for your session
        </p>
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center border border-line rounded-lg bg-surface max-w-xl mx-auto">
          <p className="font-display text-2xl text-ink mb-2">Your bag is empty.</p>
          <p className="text-sm text-muted mb-8 max-w-sm mx-auto">
            You haven&apos;t reserved any machines yet. Browse our verified inventory to select your next workstation.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-7 py-4 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
          >
            Explore Laptops
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Items Table (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-line/60 border border-line rounded-lg bg-surface p-6">
            {items.map((item) => (
              <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-5">
                <div className="relative w-24 h-28 bg-cream rounded-lg overflow-hidden shrink-0 border border-line/40">
                  <Image
                    src={item.product.images.primary}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="eyebrow text-gold text-[10px] block">{item.product.brand}</span>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="font-display text-base text-ink hover:text-gold transition-colors block mt-0.5"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted font-mono mt-1">{item.configLabel}</p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                      className="text-muted hover:text-ember transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4 stroke-[1.75]" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-line/40">
                    {/* Stepper */}
                    <div className="flex items-center border border-line rounded bg-surface">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="px-2.5 py-1.5 text-muted hover:text-ink transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[1.75]" />
                      </button>
                      <span className="font-mono text-xs font-medium px-3 text-ink select-none">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="px-2.5 py-1.5 text-muted hover:text-ink transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[1.75]" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-semibold text-ink font-sans block">
                        {formatINR(item.unitPrice * item.quantity)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[10px] text-muted font-mono">
                          {formatINR(item.unitPrice)} each
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & B2B Invoicing (5 cols sticky) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="border border-line rounded-lg bg-surface p-6 space-y-6">
              <h2 className="font-display text-lg text-ink pb-3 border-b border-line">
                Financial Summary
              </h2>

              {/* Price Calculations */}
              <div className="space-y-3 text-xs text-muted">
                <div className="flex justify-between">
                  <span>Gross Base Value</span>
                  <span className="font-mono text-ink">{formatINR(gstBreakdown.baseAmount)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Input Tax Credit Eligible GST (18%)</span>
                  <span className="font-mono text-ink">{formatINR(gstBreakdown.gstAmount)}</span>
                </div>

                <div className="flex justify-between text-[11px] text-muted/80 pl-3">
                  <span>• Central GST (9% CGST)</span>
                  <span className="font-mono">{formatINR(gstBreakdown.cgst)}</span>
                </div>

                <div className="flex justify-between text-[11px] text-muted/80 pl-3">
                  <span>• State GST (9% SGST)</span>
                  <span className="font-mono">{formatINR(gstBreakdown.sgst)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-ember">
                    <span>Corporate Courtesy Discount</span>
                    <span className="font-mono">−{formatINR(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-ink pt-1">
                  <span>Air Courier & Transit Insurance</span>
                  <span className="text-sage font-medium uppercase text-[10px] tracking-wider">
                    COMPLIMENTARY
                  </span>
                </div>

                <div className="border-t border-line pt-3 flex justify-between text-base font-semibold text-ink">
                  <span>Final Payable</span>
                  <span className="font-mono text-xl">{formatINR(finalTotal)}</span>
                </div>
              </div>

              {/* B2B GSTIN Input */}
              <div className="pt-2 border-t border-line/60">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-3.5 h-3.5 text-gold stroke-[1.75]" />
                  <label htmlFor="gstin-input" className="eyebrow text-muted text-[10px]">
                    BUSINESS GSTIN (FOR 18% TAX CREDIT)
                  </label>
                </div>
                <input
                  id="gstin-input"
                  type="text"
                  maxLength={15}
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value.toUpperCase())}
                  placeholder="22AAAAA0000A1Z5"
                  className="w-full bg-cream/40 border border-line rounded px-3 py-2 text-xs font-mono text-ink uppercase focus:outline-none focus:border-ink"
                />
              </div>

              {/* Promo code */}
              <form onSubmit={applyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon code (e.g. LAPPY2025)"
                  className="flex-1 bg-cream/40 border border-line rounded px-3 py-2 text-xs font-mono text-ink uppercase focus:outline-none focus:border-ink"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border border-ink text-xs font-medium text-ink rounded hover:bg-ink hover:text-bg transition-colors"
                >
                  Apply
                </button>
              </form>

              {/* Checkout Action */}
              <Link
                href="/checkout"
                className="w-full inline-flex items-center justify-center gap-2 font-sans font-medium text-[13px] px-6 py-4 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors duration-200"
              >
                Proceed to Checkout ({formatINR(finalTotal)})
                <ArrowRight className="w-4 h-4 stroke-[1.75]" />
              </Link>
            </div>

            {/* Assurance */}
            <div className="border border-line rounded-lg bg-surface p-4 flex items-center gap-3 text-xs text-muted">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 stroke-[1.75]" />
              <p>Transactions verified via 256-bit encrypted banking channel. Free cancellation prior to dispatch.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
