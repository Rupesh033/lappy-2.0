"use client";

import React, { useState } from "react";
import { Product } from "@/lib/mock-data";
import { Star, ChevronDown, CheckCircle2, Box, Shield, HelpCircle } from "lucide-react";

interface ProductBelowTheFoldProps {
  product: Product;
}

export function ProductBelowTheFold({ product }: ProductBelowTheFoldProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const isPrinter = product.categorySlug === "printers-toners" || /printer/i.test(product.name);

  const getSpecLabel = (key: string) => {
    if (isPrinter) {
      switch (key) {
        case "processor": return "Print Engine & Technology";
        case "ram": return "Buffer / Internal Memory";
        case "storage": return "Page Yield & Duty Cycle";
        case "display": return "Control Panel & Indicators";
        case "graphics": return "Print Resolution (DPI)";
        case "battery": return "Power Consumption";
        case "weight": return "Machine Weight";
        case "os": return "Supported Operating Systems";
        case "ports": return "Connectivity & Interfaces";
        default: return key;
      }
    }
    return key;
  };

  const faqs = isPrinter
    ? [
        {
          q: "Is this printer eligible for 18% GST Input Tax Credit (ITC)?",
          a: "Yes, 100%. LAPPY SOLUTION Garhwa issues a tax-compliant GST e-invoice with your company's GSTIN and legal business name, allowing full 18% input credit against your output tax liabilities.",
        },
        {
          q: "Are genuine starter ink bottles or toner cartridges included in the box?",
          a: "Yes! Every printer arrives sealed in original manufacturer packaging with full starter ink bottles or toner cartridges included, ready for instant plug-and-play setup.",
        },
        {
          q: "How is the printer packaged for safe all-India delivery?",
          a: `Every printer is shipped with heavy-duty multi-layer shockproof packing and insured transit via BlueDart & Speed Post Air across India.`,
        },
        {
          q: "Can I get an official 18% GST invoice with company GSTIN?",
          a: "Yes, enter your GSTIN during checkout and we issue a full tax-compliant B2B tax invoice with matching HSN code.",
        },
      ]
    : [
        {
          q: "Is this machine eligible for 18% GST Input Tax Credit (ITC)?",
          a: "Yes, 100%. LAPPY issues a tax-compliant GST e-invoice with your company's GSTIN and legal business name, allowing full 18% input credit against your output liabilities.",
        },
        {
          q: "How is the hardware tested before dispatch?",
          a: "Every unit undergoes strict multi-point technical bench checks for display clarity, keyboard responsiveness, battery health, and genuine Windows activation.",
        },
        {
          q: "How is safe pan-India shipping handled?",
          a: "All shipments are protected with tamper-evident insured seals and dispatched via leading express couriers with live tracking SMS updates.",
        },
        {
          q: "Can I upgrade RAM or NVMe storage after purchase?",
          a: `For the ${product.name}, ${
            product.brand === "Apple"
              ? "unified memory and storage are factory-soldered onto the Apple Silicon SoC; please choose your desired configuration upfront."
              : "upgrades can be performed without voiding warranty when conducted through brand authorized service centers."
          }`,
        },
      ];

  return (
    <div className="mt-24 md:mt-32 space-y-20 border-t border-line pt-16">
      {/* 1. Highlights Section */}
      <section>
        <span className="eyebrow text-gold block mb-2">ENGINEERING DISTINCTIONS</span>
        <h2 className="h-section text-ink mb-8">Architectural Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-surface border border-line flex items-start gap-4"
            >
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5 stroke-[1.75]" />
              <p className="text-sm text-ink leading-relaxed font-sans">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Technical Specifications Detailed Grid */}
      <section>
        <span className="eyebrow text-gold block mb-2">COMPLETE DATASHEET</span>
        <h2 className="h-section text-ink mb-8">Technical Specifications</h2>
        <div className="border border-line rounded-lg overflow-hidden bg-surface">
          <dl className="divide-y divide-line text-sm">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-1 md:grid-cols-3 px-6 py-4 hover:bg-cream/30 transition-colors"
              >
                <dt className="eyebrow text-muted self-center capitalize">{getSpecLabel(key)}</dt>
                <dd className="md:col-span-2 font-mono text-xs md:text-sm text-ink self-center">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. What's In The Box & Warranty (2 cols) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* In the Box */}
        <div className="p-8 rounded-lg bg-surface border border-line flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Box className="w-5 h-5 text-ink stroke-[1.75]" />
            <h3 className="font-display text-lg text-ink">In The Box</h3>
          </div>
          <ul className="space-y-3 font-mono text-xs md:text-sm text-muted flex-1">
            {product.inTheBox.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Store Quality Verification & GST Invoicing */}
        <div className="p-8 rounded-lg bg-surface border border-line flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-gold stroke-[1.75]" />
            <h3 className="font-display text-lg text-ink">Store Quality Verification</h3>
          </div>
          <p className="text-sm text-muted font-sans leading-relaxed mb-6">
            100% factory authentic hardware inspected by LAPPY SOLUTION hardware engineers with verified serial authenticity, genuine OS, and full 18% GST tax invoice.
          </p>
          <div className="pt-6 border-t border-line text-xs font-mono text-muted space-y-1.5 mt-auto">
            <p className="text-ink font-medium">LAPPY SOLUTION Retail Care</p>
            <p>Direct assistance via Garhwa IT Support Concierge</p>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Accordion) */}
      <section>
        <span className="eyebrow text-gold block mb-2">COMMON INQUIRIES</span>
        <h2 className="h-section text-ink mb-8">Frequently Asked Questions</h2>
        <div className="border border-line rounded-lg divide-y divide-line bg-surface">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="p-6">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="font-display text-base text-ink group-hover:text-gold transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-ink" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm text-muted font-sans leading-relaxed pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Editorial Reviews & Ratings Block */}
      <section className="p-8 md:p-12 rounded-lg bg-surface border border-line flex flex-col md:flex-row gap-8 items-center justify-between">
        <div>
          <span className="eyebrow text-gold block mb-1">CLIENT ASSESSMENTS</span>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-mono text-4xl text-ink font-bold">{product.rating}</span>
            <span className="text-xs text-muted font-mono">/ 5.0 RATING</span>
          </div>
          <div className="flex items-center gap-1 text-gold mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-current stroke-none"
              />
            ))}
          </div>
          <p className="text-xs text-muted">
            Based on {product.reviewCount} verified enterprise & retail purchases across Jharkhand & Bihar.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <div className="px-6 py-4 rounded border border-line bg-cream/40 text-center">
            <span className="font-mono text-xs text-ink font-medium block">
              100% GENUINE INDIAN RETAIL INVENTORY
            </span>
            <span className="text-[11px] text-muted">
              Pre-dispatched & verified through LAPPY SOLUTION Garhwa
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
