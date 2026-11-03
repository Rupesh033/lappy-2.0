"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { useToastStore } from "@/store/toastStore";
import { STORE_INFO } from "@/lib/mock-data";

export function Footer() {
  const [email, setEmail] = useState("");
  const { addToast } = useToastStore();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      addToast("Please provide a valid email address.", "error");
      return;
    }
    addToast("Subscribed to LAPPY SOLUTION Hardware Dispatch.", "success");
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#071A33] border-t border-[#E7E4DD] font-outfit text-[#B8C1CC] flex flex-col">
      {/* 1. Newsletter Strip - Exactly matching BrightBookStore */}
      <div className="bg-[#FAF8F3] border-b border-[#E7E4DD] w-full py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-left w-full md:w-1/2">
            <div className="p-3 bg-white rounded-xl shadow-xs hidden sm:block border border-[#E7E4DD]">
              <Mail className="w-6 h-6 text-[#0066B3]" />
            </div>
            <div>
              <h3 className="font-bold text-[#071A33] text-sm md:text-base uppercase tracking-wider font-outfit">
                Stay Connected
              </h3>
              <p className="text-xs text-[#667085] mt-1 font-normal">
                Subscribe to get exclusive hardware drops, price alerts &amp; wholesale tech deals.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 max-w-lg flex flex-col gap-2">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center bg-white border border-[#E7E4DD] rounded-full overflow-hidden shadow-xs focus-within:border-[#0066B3] transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-6 py-3 md:py-3.5 text-sm text-[#172033] placeholder-[#98A2B3] outline-none font-outfit"
              />
              <button
                type="submit"
                className="bg-[#0066B3] hover:bg-[#004F8A] text-white px-7 py-3 md:py-3.5 text-xs font-bold uppercase tracking-wider transition-all rounded-r-full shadow-xs cursor-pointer font-outfit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Deep Navy Main Footer - Matching BrightBookStore structure */}
      <div className="bg-[#071A33] pt-12 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-8">
            {/* Col 1: Brand Info */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-extrabold text-[#FFFFFF] tracking-wider uppercase mb-1 font-outfit">
                LAPPY SOLUTION
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-[#D4A93A] rounded-full" />
                <p className="text-[10px] tracking-widest text-[#D4A93A] uppercase font-bold">
                  Premium Computer Store
                </p>
              </div>
              <p className="text-xs text-[#B8C1CC] mb-6 leading-relaxed">
                Curating certified laptops, enterprise workstations, high-yield continuous ink printers, and authentic hardware upgrades for creators and businesses across India.
              </p>
              <div className="text-[11px] text-[#B8C1CC]/80 font-mono space-y-1">
                <p>{STORE_INFO.address}</p>
                <p>Phone: +91 {STORE_INFO.phone}</p>
              </div>
            </div>

            {/* Col 2: Shop Links */}
            <div>
              <h4 className="text-xs font-bold text-[#FFFFFF] mb-5 uppercase tracking-wider font-outfit">
                Shop
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link
                    href="/category/laptops-computers"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Computers &amp; Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/printers-toners"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Printers &amp; Consumables
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/storage-ram"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Storage &amp; NVMe RAM
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/keyboards-mice"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Keyboards &amp; Mice
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/batteries-adapters"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Batteries &amp; Adapters
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Customer Care */}
            <div>
              <h4 className="text-xs font-bold text-[#FFFFFF] mb-5 uppercase tracking-wider font-outfit">
                Customer Care
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href={`https://wa.me/91${STORE_INFO.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Help Center &amp; Support
                  </a>
                </li>
                <li>
                  <Link
                    href="/category/laptops-computers"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Shipping &amp; Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/laptops-computers"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Exchange &amp; Replacement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/orders"
                    className="text-[#D4A93A] hover:underline transition-colors font-semibold"
                  >
                    Track Orders &amp; Invoices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saved"
                    className="text-[#E5E7EB] hover:text-[#D4A93A] transition-colors"
                  >
                    Saved Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Store & Company */}
            <div>
              <h4 className="text-xs font-bold text-[#FFFFFF] mb-5 uppercase tracking-wider font-outfit">
                Store Facility
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <span className="text-[#E5E7EB]">Garhwa Main Facility</span>
                </li>
                <li>
                  <span className="text-[#E5E7EB]">GST Tax Invoicing (18%)</span>
                </li>
                <li>
                  <span className="text-[#E5E7EB]">Multi-Point Bench Testing</span>
                </li>
                <li>
                  <span className="text-[#E5E7EB]">BlueDart Insured Freight</span>
                </li>
                <li>
                  <span className="text-[#E5E7EB]">Pan-India Delivery</span>
                </li>
              </ul>
            </div>

            {/* Col 5: Assurances */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4A93A] shrink-0">
                  <Truck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FFFFFF] font-outfit">Fast Shipping</p>
                  <p className="text-[10px] text-[#B8C1CC]">All India Insured Transit</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4A93A] shrink-0">
                  <RotateCcw className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FFFFFF] font-outfit">7-Day Replacement</p>
                  <p className="text-[10px] text-[#B8C1CC]">Hardware Bench Warranty</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4A93A] shrink-0">
                  <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FFFFFF] font-outfit">Secure Payment</p>
                  <p className="text-[10px] text-[#B8C1CC]">100% Encrypted UPI / Cards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Strip with Payment Badges */}
      <div className="bg-[#071A33] border-t border-[#263A54] py-5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#B8C1CC]">
          <p>© {new Date().getFullYear()} LAPPY SOLUTION. All Rights Reserved. Prices inclusive of 18% GST.</p>
          <div className="flex items-center gap-2">
            <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded text-[10px] font-bold tracking-wider text-white">
              UPI
            </span>
            <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded text-[10px] font-bold tracking-wider text-white">
              RuPay
            </span>
            <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded text-[10px] font-bold italic tracking-wider text-white">
              VISA
            </span>
            <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded text-[10px] font-bold tracking-wider text-white">
              MasterCard
            </span>
            <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded text-[10px] font-bold tracking-wider text-[#D4A93A]">
              18% GST B2B
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
