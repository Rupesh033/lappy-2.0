"use client";

import React, { useState, useMemo } from "react";
import { Product } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/ProductCard";
import { formatINR } from "@/lib/utils";
import { SlidersHorizontal, ArrowUpDown, X, Check } from "lucide-react";

interface PlpClientProps {
  initialProducts: Product[];
}

export function PlpClient({ initialProducts }: PlpClientProps) {
  const isPrinterCategory = useMemo(() => {
    return initialProducts.some((p) => p.categorySlug === "printers-toners");
  }, [initialProducts]);

  const maxPossiblePrice = useMemo(() => {
    if (initialProducts.length === 0) return 100000;
    const max = Math.max(...initialProducts.map((p) => p.price));
    return Math.ceil(max / 5000) * 5000;
  }, [initialProducts]);

  const minPossiblePrice = useMemo(() => {
    if (initialProducts.length === 0) return 0;
    const min = Math.min(...initialProducts.map((p) => p.price));
    return Math.max(0, Math.floor(min / 1000) * 1000);
  }, [initialProducts]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(maxPossiblePrice);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Available Brands from dataset
  const allBrands = useMemo(() => {
    return Array.from(new Set(initialProducts.map((p) => p.brand))).filter(Boolean);
  }, [initialProducts]);

  const printerTypes = ["Ink Tank", "Laser", "Inkjet", "All in One"];
  const allRam = ["16GB", "32GB", "36GB", "48GB", "64GB"];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleType = (t: string) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((item) => item !== t) : [...prev, t]
    );
  };

  const toggleRam = (ram: string) => {
    setSelectedRam((prev) =>
      prev.includes(ram) ? prev.filter((r) => r !== ram) : [...prev, ram]
    );
  };

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((p) => {
        if (p.price > maxPrice) return false;
        if (onlyInStock && !p.inStock) return false;
        if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;

        if (isPrinterCategory && selectedTypes.length > 0) {
          const matchType = selectedTypes.some((t) =>
            p.name.toLowerCase().includes(t.toLowerCase()) ||
            p.tagline.toLowerCase().includes(t.toLowerCase()) ||
            p.specs.processor.toLowerCase().includes(t.toLowerCase())
          );
          if (!matchType) return false;
        }

        if (!isPrinterCategory && selectedRam.length > 0) {
          const matchRam = selectedRam.some((r) => p.specs?.ram?.includes(r));
          if (!matchRam) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // featured default
      });
  }, [initialProducts, maxPrice, onlyInStock, selectedBrands, selectedTypes, selectedRam, sortBy, isPrinterCategory]);

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedTypes([]);
    setSelectedRam([]);
    setMaxPrice(maxPossiblePrice);
    setOnlyInStock(false);
  };

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedTypes.length > 0 ||
    selectedRam.length > 0 ||
    maxPrice < maxPossiblePrice ||
    onlyInStock;

  return (
    <div>
      {/* Mobile Top Bar: [ Filter ] [ Sort ] buttons */}
      <div className="lg:hidden flex items-center justify-between gap-3 mb-6 pb-4 border-b border-line">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-line bg-surface text-xs font-medium text-ink"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 stroke-[1.75]" />
          Filters {hasActiveFilters && "(Active)"}
        </button>

        <div className="relative flex-1">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none px-4 py-2.5 rounded border border-line bg-surface text-xs font-medium text-ink focus:outline-none"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <ArrowUpDown className="w-3.5 h-3.5 text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.75]" />
        </div>
      </div>

      {/* Main 2-Column PLP Layout: 240px Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
        {/* Desktop Sidebar (Sticky) */}
        <aside className="hidden lg:block sticky top-28 space-y-8 pr-4 border-r border-line/60">
          <div className="flex items-center justify-between pb-3 border-b border-line">
            <span className="eyebrow text-muted text-[10px]">REFINED HARDWARE</span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-muted hover:text-ink transition-colors font-medium"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-medium text-ink">Max Budget</span>
              <span className="font-mono text-xs text-muted">{formatINR(maxPrice)}</span>
            </div>
            <input
              type="range"
              min={minPossiblePrice}
              max={maxPossiblePrice}
              step={Math.max(500, Math.floor((maxPossiblePrice - minPossiblePrice) / 20))}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-ink cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted/80 mt-1">
              <span>{formatINR(minPossiblePrice)}</span>
              <span>{formatINR(maxPossiblePrice)}</span>
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <span className="text-xs font-medium text-ink block mb-3">Brand Manufacturer</span>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {allBrands.map((brand) => (
                <label key={brand} className="flex items-center gap-2.5 text-xs text-muted cursor-pointer hover:text-ink">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded-sm border-line text-ink accent-ink w-3.5 h-3.5"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Printer Technology Filter OR Memory Filter */}
          {isPrinterCategory ? (
            <div>
              <span className="text-xs font-medium text-ink block mb-3">Print Technology</span>
              <div className="space-y-2">
                {printerTypes.map((t) => (
                  <label key={t} className="flex items-center gap-2.5 text-xs text-muted cursor-pointer hover:text-ink">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(t)}
                      onChange={() => toggleType(t)}
                      className="rounded-sm border-line text-ink accent-ink w-3.5 h-3.5"
                    />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <span className="text-xs font-medium text-ink block mb-3">System Memory</span>
              <div className="space-y-2">
                {allRam.map((ram) => (
                  <label key={ram} className="flex items-center gap-2.5 text-xs text-muted cursor-pointer hover:text-ink">
                    <input
                      type="checkbox"
                      checked={selectedRam.includes(ram)}
                      onChange={() => toggleRam(ram)}
                      className="rounded-sm border-line text-ink accent-ink w-3.5 h-3.5"
                    />
                    <span>{ram}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Availability */}
          <div className="pt-2 border-t border-line/60">
            <label className="flex items-center gap-2.5 text-xs text-muted cursor-pointer hover:text-ink">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="rounded-sm border-line text-ink accent-ink w-3.5 h-3.5"
              />
              <span className="text-ink font-medium">In Stock Only</span>
            </label>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div>
          {/* Desktop Sort Header */}
          <div className="hidden lg:flex items-center justify-between pb-6 mb-8 border-b border-line">
            <span className="text-xs text-muted font-mono">
              Showing {filteredProducts.length} verified {filteredProducts.length === 1 ? "unit" : "units"}
            </span>

            <div className="flex items-center gap-3">
              <span className="eyebrow text-muted text-[10px]">SORT BY:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs font-medium text-ink border-b border-ink/40 pb-0.5 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Selection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products List */}
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center border border-line rounded-lg bg-surface">
              <p className="font-display text-xl text-ink mb-2">No matching products found.</p>
              <p className="text-xs text-muted mb-6">
                Try widening your price range or clearing active filters.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-6 py-3.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Bottom Sheet */}
      {isMobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-ink/40 backdrop-blur-sm">
          <div className="bg-surface rounded-t-lg p-6 max-h-[85vh] overflow-y-auto space-y-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <h3 className="font-display text-lg text-ink">Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-muted hover:text-ink p-1"
                aria-label="Close filters"
              >
                <X className="w-5 h-5 stroke-[1.75]" />
              </button>
            </div>

            {/* Price */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-medium text-ink">Max Budget</span>
                <span className="font-mono text-xs text-muted">{formatINR(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={minPossiblePrice}
                max={maxPossiblePrice}
                step={Math.max(500, Math.floor((maxPossiblePrice - minPossiblePrice) / 20))}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-ink"
              />
            </div>

            {/* Brands */}
            <div>
              <span className="text-xs font-medium text-ink block mb-3">Brands</span>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                {allBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className={`p-2.5 rounded text-xs text-center border transition-colors ${
                      selectedBrands.includes(brand)
                        ? "bg-ink text-bg border-ink"
                        : "bg-surface text-ink border-line"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Print Technology or RAM */}
            {isPrinterCategory ? (
              <div>
                <span className="text-xs font-medium text-ink block mb-3">Print Technology</span>
                <div className="grid grid-cols-2 gap-2">
                  {printerTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggleType(t)}
                      className={`p-2.5 rounded text-xs text-center border transition-colors ${
                        selectedTypes.includes(t)
                          ? "bg-ink text-bg border-ink"
                          : "bg-surface text-ink border-line"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-medium text-ink block mb-3">System Memory</span>
                <div className="grid grid-cols-2 gap-2">
                  {allRam.map((ram) => (
                    <button
                      key={ram}
                      onClick={() => toggleRam(ram)}
                      className={`p-2.5 rounded text-xs text-center border transition-colors ${
                        selectedRam.includes(ram)
                          ? "bg-ink text-bg border-ink"
                          : "bg-surface text-ink border-line"
                      }`}
                    >
                      {ram}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-line flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 text-xs text-muted border border-line rounded"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-3 text-xs font-medium bg-ink text-bg rounded"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
