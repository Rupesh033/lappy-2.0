"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Truck,
  Sparkles,
  Package,
  ChevronDown,
  Menu,
  X,
  Laptop,
  Printer,
  HardDrive,
  Keyboard,
  BatteryCharging,
  ShieldAlert,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { CATEGORIES } from "@/lib/mock-data";
import { SearchOverlay } from "./SearchOverlay";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  const { toggleDrawer, getTotalCount } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
    useWishlistStore.persist.rehydrate();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalCartCount = getTotalCount();
  const totalWishlistCount = wishlistItems.length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setIsSearchOverlayOpen(true);
      return;
    }
    router.push(`/category/laptops-computers?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case "laptops-computers":
        return <Laptop className="w-4 h-4 text-[#0066B3]" />;
      case "printers-toners":
        return <Printer className="w-4 h-4 text-[#0066B3]" />;
      case "storage-ram":
        return <HardDrive className="w-4 h-4 text-[#0066B3]" />;
      case "keyboards-mice":
        return <Keyboard className="w-4 h-4 text-[#0066B3]" />;
      case "batteries-adapters":
        return <BatteryCharging className="w-4 h-4 text-[#0066B3]" />;
      default:
        return <ShieldAlert className="w-4 h-4 text-[#0066B3]" />;
    }
  };

  return (
    <>
      {/* 1. Top Announcement Bar - BrightBookStore Style */}
      <div className="bg-[#FAF8F3] text-[#172033] text-[11px] font-medium py-2 hidden md:block border-b border-[#E7E4DD]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex justify-between items-center tracking-wider uppercase">
          <span className="flex items-center gap-2 text-[#667085]">
            <Truck className="w-3.5 h-3.5 text-[#0066B3]" /> FAST ALL-INDIA DISPATCH
          </span>
          <span className="flex items-center gap-2 font-bold text-[#071A33]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A93A]" /> 10% OFF ON PREPAID &amp; UPI
          </span>
          <span className="flex items-center gap-2 text-[#667085]">
            <Package className="w-3.5 h-3.5 text-[#0066B3]" /> VERIFIED 18% GST INVOICE
          </span>
        </div>
      </div>

      {/* 2. Desktop Navigation Bar - 74px height, exact brightbookstore style */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E7E4DD] shadow-xs hidden md:block">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[74px] flex items-center gap-6">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="h-10 w-10 rounded-full bg-[#FAF8F3] border border-[#E7E4DD] flex items-center justify-center font-extrabold text-[#0066B3] text-sm shadow-xs group-hover:border-[#0066B3] transition-colors">
              LS
            </div>
            <span className="font-outfit text-xl font-extrabold tracking-tight text-[#071A33] group-hover:text-[#0066B3] transition-colors">
              LAPPY<span className="text-[#0066B3]">SOLUTION</span>
            </span>
          </Link>

          {/* Integrated Search Input */}
          <div className="flex-1 max-w-md relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laptops, printers, SSDs, keyboards..."
                className="w-full bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl pl-4 pr-12 py-2.5 text-sm text-[#172033] placeholder-[#667085] outline-none focus:border-[#0066B3] focus:bg-white focus:ring-2 focus:ring-[#0066B3]/15 transition-all font-outfit"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#0066B3] text-white flex items-center justify-center transition-all hover:bg-[#004F8A] shadow-xs"
              >
                <Search className="w-3.5 h-3.5 text-white" />
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 ml-auto">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-semibold text-[#172033] hover:text-[#0066B3] hover:bg-[#FAF8F3] transition-colors rounded-lg font-outfit"
            >
              Home
            </Link>

            {/* Categories Dropdown Menu */}
            <div className="relative" ref={categoryDropdownRef}>
              <button
                onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg font-outfit ${
                  isCategoryMenuOpen
                    ? "text-[#0066B3] bg-[#FAF8F3]"
                    : "text-[#172033] hover:text-[#0066B3] hover:bg-[#FAF8F3]"
                }`}
              >
                <span>Categories</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isCategoryMenuOpen ? "rotate-180 text-[#0066B3]" : ""
                  }`}
                />
              </button>

              {isCategoryMenuOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-[#E7E4DD] rounded-2xl shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-1.5 text-[10px] font-bold text-[#667085] uppercase tracking-wider border-b border-[#E7E4DD] mb-1">
                    Store Catalog
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      onClick={() => setIsCategoryMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#071A33] hover:bg-[#FAF8F3] hover:text-[#0066B3] transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        {getCategoryIcon(cat.slug)}
                        <span>{cat.title}</span>
                      </span>
                      <span className="text-[10px] font-medium text-[#667085] bg-[#FAF8F3] px-2 py-0.5 rounded-full border border-[#E7E4DD]">
                        {cat.itemCount}
                      </span>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-[#E7E4DD] px-4">
                    <Link
                      href="/category/laptops-computers"
                      onClick={() => setIsCategoryMenuOpen(false)}
                      className="text-[11px] font-bold text-[#0066B3] hover:underline flex items-center justify-between"
                    >
                      <span>Browse All Products</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/category/laptops-computers"
              className="px-3.5 py-2 text-sm font-semibold text-[#172033] hover:text-[#0066B3] hover:bg-[#FAF8F3] transition-colors rounded-lg font-outfit"
            >
              Shop All
            </Link>

            <Link
              href="/category/laptops-computers"
              className="px-3.5 py-2 text-sm font-semibold text-[#172033] hover:text-[#0066B3] hover:bg-[#FAF8F3] transition-colors rounded-lg font-outfit"
            >
              Wholesale
            </Link>

            <Link
              href="/admin/banners"
              className="px-3.5 py-2 text-sm font-semibold text-[#0066B3] hover:bg-[#FAF8F3] transition-colors rounded-lg font-outfit flex items-center gap-1.5"
            >
              <span>Banners</span>
              <span className="text-[9px] bg-[#D4A93A] text-[#071A33] font-extrabold px-1.5 py-0.2 rounded">Admin</span>
            </Link>

            <Link
              href="/admin/orders"
              className="px-3.5 py-2 text-sm font-semibold text-[#172033] hover:text-[#0066B3] hover:bg-[#FAF8F3] transition-colors rounded-lg font-outfit"
            >
              Orders Desk
            </Link>
          </div>

          {/* Action Icons (Account, Wishlist, Cart) */}
          <div className="flex items-center gap-1 border-l border-[#E7E4DD] pl-4 ml-1">
            <Link
              href="/admin/orders"
              className="w-9 h-9 flex items-center justify-center text-[#172033] hover:text-[#0066B3] rounded-full hover:bg-[#FAF8F3] transition-colors"
              title="Orders & Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </Link>

            <Link
              href="/saved"
              className="relative w-9 h-9 flex items-center justify-center text-[#172033] hover:text-[#0066B3] rounded-full hover:bg-[#FAF8F3] transition-colors"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              {totalWishlistCount > 0 && (
                <span className="absolute 1 -top-0.5 -right-0.5 bg-[#DC2626] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                  {totalWishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={toggleDrawer}
              className="relative w-9 h-9 flex items-center justify-center text-[#172033] hover:text-[#0066B3] rounded-full hover:bg-[#FAF8F3] transition-colors cursor-pointer"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#0066B3] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Header - Exactly matching BrightBookStore Mobile UI */}
      <div className="md:hidden sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#E7E4DD] shadow-xs">
        {/* Top Mobile Bar */}
        <div className="px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#FAF8F3] border border-[#E7E4DD] flex items-center justify-center font-extrabold text-[#0066B3] text-xs shadow-xs">
              LS
            </div>
            <span className="font-outfit text-lg font-extrabold tracking-tight text-[#071A33]">
              LAPPY<span className="text-[#0066B3]">SOLUTION</span>
            </span>
          </Link>

          <div className="flex gap-1.5 items-center">
            <Link
              href="/admin/orders"
              className="w-8 h-8 flex items-center justify-center text-[#172033] bg-[#FAF8F3] rounded-full"
            >
              <User className="w-4 h-4 text-[#071A33]" />
            </Link>

            <Link
              href="/saved"
              className="relative w-8 h-8 flex items-center justify-center text-[#172033] bg-[#FAF8F3] rounded-full"
            >
              <Heart className="w-4 h-4 text-[#071A33]" />
              {totalWishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#DC2626] text-white text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  {totalWishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={toggleDrawer}
              className="relative w-8 h-8 flex items-center justify-center text-[#172033] bg-[#FAF8F3] rounded-full"
            >
              <ShoppingBag className="w-4 h-4 text-[#071A33]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0066B3] text-white text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#071A33] w-8 h-8 flex items-center justify-center bg-[#FAF8F3] rounded-full ml-1"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="px-4 pb-2">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-[#FAF8F3] border border-[#E7E4DD] rounded-full pl-4 pr-12 py-2.5 text-sm text-[#172033] placeholder-[#667085] outline-none focus:border-[#0066B3]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 aspect-square rounded-full bg-[#0066B3] text-white flex items-center justify-center"
              >
                <Search className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Category Scroll Pills Bar */}
        <div className="px-4 pb-2.5 overflow-x-auto no-scrollbar flex items-center gap-5 border-t border-[#E7E4DD] pt-2.5">
          <Link
            href="/"
            className="text-xs font-bold text-[#0066B3] whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            href="/category/laptops-computers"
            className="text-xs font-bold text-[#667085] hover:text-[#0066B3] whitespace-nowrap"
          >
            Laptops
          </Link>
          <Link
            href="/category/printers-toners"
            className="text-xs font-bold text-[#667085] hover:text-[#0066B3] whitespace-nowrap"
          >
            Printers
          </Link>
          <Link
            href="/category/storage-ram"
            className="text-xs font-bold text-[#667085] hover:text-[#0066B3] whitespace-nowrap"
          >
            Storage &amp; RAM
          </Link>
          <Link
            href="/category/keyboards-mice"
            className="text-xs font-bold text-[#667085] hover:text-[#0066B3] whitespace-nowrap"
          >
            Keyboards
          </Link>
          <Link
            href="/category/batteries-adapters"
            className="text-xs font-bold text-[#667085] hover:text-[#0066B3] whitespace-nowrap"
          >
            Batteries
          </Link>
          <Link
            href="/category/laptops-computers"
            className="text-xs font-bold text-[#667085] hover:text-[#0066B3] whitespace-nowrap"
          >
            Shop All
          </Link>
        </div>

        {/* Mobile Nav Drawer dropdown when toggled */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-[#E7E4DD] px-4 py-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#667085]">
              CATEGORIES
            </p>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-xs font-bold text-[#071A33] hover:text-[#0066B3] border-b border-[#FAF8F3]"
                >
                  <span className="flex items-center gap-2">
                    {getCategoryIcon(cat.slug)}
                    <span>{cat.title}</span>
                  </span>
                  <span className="text-[#667085] font-normal">({cat.itemCount})</span>
                </Link>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2 border-t border-[#E7E4DD] text-xs">
              <Link
                href="/admin/banners"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#0066B3] font-bold py-1"
              >
                <span>🖼️ Banner Manager (Phone &amp; PC)</span>
                <span className="text-[10px] bg-[#D4A93A] text-[#071A33] px-2 py-0.5 rounded font-extrabold uppercase">Admin</span>
              </Link>
              <Link
                href="/admin/orders"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#071A33] font-semibold py-1"
              >
                <span>📦 Orders &amp; Settlement Desk</span>
                <span>&rarr;</span>
              </Link>
            </div>
            <div className="pt-2 flex justify-between text-xs text-[#667085]">
              <span>Garhwa Store Facility</span>
              <span className="text-[#16805A] font-bold">Pan-India Express</span>
            </div>
          </div>
        )}
      </div>

      {/* Global Search Dialog Modal */}
      <SearchOverlay isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)} />
    </>
  );
}
