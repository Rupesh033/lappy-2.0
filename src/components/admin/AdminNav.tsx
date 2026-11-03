"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Image as ImageIcon, Shield, ArrowUpRight } from "lucide-react";

export function AdminNav() {
  const pathname = usePathname();

  const tabs = [
    {
      href: "/admin/banners",
      label: "Banner Management",
      icon: ImageIcon,
      active: pathname === "/admin/banners",
      badge: "Full Page & Mobile",
    },
    {
      href: "/admin/warranty",
      label: "Warranty & Claims Desk",
      icon: Shield,
      active: pathname === "/admin/warranty",
      badge: "Private Admin",
    },
    {
      href: "/admin/orders",
      label: "Order Verification",
      icon: ShoppingBag,
      active: pathname === "/admin/orders",
      badge: "UTR Check",
    },
  ];

  return (
    <div className="w-full bg-[#071A33] border-b border-[#1E3A5F] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Brand / Admin Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0066B3] flex items-center justify-center font-extrabold text-white text-xs shadow-xs">
            LS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-outfit font-extrabold text-sm tracking-tight text-white">
                LAPPY SOLUTION
              </span>
              <span className="bg-[#D4A93A] text-[#071A33] text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                Admin Console
              </span>
            </div>
            <p className="text-[11px] text-[#8EA3BF]">
              Store &amp; Homepage Control Desk
            </p>
          </div>
        </div>

        {/* Center: Admin Tabs */}
        <div className="flex items-center gap-2 bg-[#0E2849] p-1 rounded-xl border border-[#1E3A5F]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  tab.active
                    ? "bg-[#0066B3] text-white shadow-xs"
                    : "text-[#8EA3BF] hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`hidden sm:inline text-[9px] px-1.5 py-0.2 rounded ${
                      tab.active
                        ? "bg-white/20 text-white"
                        : "bg-[#1E3A5F] text-[#8EA3BF]"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Quick Homepage Link */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 text-xs text-[#D4A93A] hover:text-white font-semibold transition-colors"
          >
            <span>View Live Store</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

