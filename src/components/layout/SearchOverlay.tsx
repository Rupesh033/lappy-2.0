"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { PRODUCTS } from "@/lib/mock-data";
import { formatINR } from "@/lib/utils";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.specs.processor.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search laptops"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-ink/40 backdrop-blur-sm transition-opacity"
    >
      <div className="w-full max-w-2xl bg-surface rounded-lg shadow-drawer border border-line overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-5 py-4 border-b border-line gap-3">
          <Search className="w-5 h-5 text-muted stroke-[1.75]" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by model, brand, processor, RAM (e.g. M3, ThinkPad, OLED)..."
            className="flex-1 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="text-muted hover:text-ink transition-colors p-1"
          >
            <X className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query.trim() === "" ? (
            <div className="py-8 text-center">
              <p className="text-xs eyebrow text-muted mb-2">QUICK SUGGESTIONS</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {["MacBook Pro", "ThinkPad X1", "Dell XPS", "ROG Zephyrus", "OLED"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 rounded-sm bg-cream text-ink hover:border-ink border border-line transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-muted">
              <p className="text-sm">No machines found matching &ldquo;{query}&rdquo;.</p>
              <p className="text-xs mt-1">Try searching for &lsquo;Apple&rsquo;, &lsquo;Intel&rsquo;, or &lsquo;32GB&rsquo;.</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-line/50">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 py-3 px-2 hover:bg-cream/50 transition-colors rounded"
                >
                  <div className="relative w-14 h-14 bg-cream rounded shrink-0 overflow-hidden">
                    <Image
                      src={product.images.primary}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] eyebrow text-gold block">{product.brand}</span>
                    <h4 className="text-sm font-medium text-ink truncate">{product.name}</h4>
                    <p className="text-xs text-muted truncate">{product.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-semibold text-ink block">{formatINR(product.price)}</span>
                    <span className="text-[11px] text-sage">In Stock</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
