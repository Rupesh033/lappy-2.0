"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useBannerStore,
  BannerItem,
  BannerDeviceTarget,
  BannerDisplayMode,
  BannerHeightPreset,
  BannerWidthMode,
  DEFAULT_BANNERS,
} from "@/store/bannerStore";
import { useSettingsStore } from "@/store/settingsStore";
import { useToastStore } from "@/store/toastStore";
import { AdminNav } from "@/components/admin/AdminNav";
import {
  Plus,
  Trash2,
  Edit2,
  Eye,
  EyeOff,
  MoveUp,
  MoveDown,
  Monitor,
  Smartphone,
  Globe,
  Maximize2,
  Minimize2,
  Sparkles,
  Phone,
  Save,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function AdminBannersPage() {
  const {
    banners,
    addBanner,
    updateBanner,
    deleteBanner,
    toggleBanner,
    reorderBanners,
    resetToDefaults,
  } = useBannerStore();
  const { settings, updateSettings } = useSettingsStore();
  const { addToast } = useToastStore();

  const [activeTab, setActiveTab] = useState<"all" | "desktop" | "mobile">("all");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [editingBanner, setEditingBanner] = useState<BannerItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Store phone settings form state
  const [phoneInput, setPhoneInput] = useState(settings?.phone || "9608828288");
  const [altPhoneInput, setAltPhoneInput] = useState(settings?.altPhone || "8789320315");

  useEffect(() => {
    useBannerStore.persist.rehydrate();
    useSettingsStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (settings?.phone) setPhoneInput(settings.phone);
    if (settings?.altPhone) setAltPhoneInput(settings.altPhone);
  }, [settings]);

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneInput.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      addToast("Please enter a valid 10-digit Indian phone number.", "error");
      return;
    }
    updateSettings({ phone: cleanPhone, altPhone: altPhoneInput.replace(/\D/g, "") });
    addToast(`Primary store phone updated to +91 ${cleanPhone}. Live on homepage!`, "success");
  };

  const handleQuickSetPhone = (num: string) => {
    setPhoneInput(num);
    updateSettings({ phone: num });
    addToast(`Homepage phone number set to +91 ${num}!`, "success");
  };

  // Filtered banners based on target filter tab
  const filteredBanners = banners
    .slice()
    .sort((a, b) => a.order - b.order)
    .filter((b) => {
      if (activeTab === "all") return true;
      if (activeTab === "desktop") return b.deviceTarget === "desktop" || b.deviceTarget === "all";
      if (activeTab === "mobile") return b.deviceTarget === "mobile" || b.deviceTarget === "all";
      return true;
    });

  // Reorder handlers
  const handleMove = (index: number, direction: "up" | "down") => {
    const sorted = banners.slice().sort((a, b) => a.order - b.order);
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sorted.length) return;

    const temp = sorted[index];
    sorted[index] = sorted[targetIndex];
    sorted[targetIndex] = temp;

    const orderedIds = sorted.map((b) => b.id);
    reorderBanners(orderedIds);
    addToast("Banner priority updated.", "success");
  };

  const openAddModal = () => {
    setEditingBanner({
      id: "",
      name: "New Homepage Banner",
      badge: "SPECIAL PROMO • LIMITED TIME",
      titlePrefix: "Next-Gen ",
      titleHighlight: "Computing Deals",
      titleSuffix: " Pre-Tested Hardware",
      description: "Direct store dispatch with 18% GST tax invoice and pan-India express logistics.",
      primaryCtaText: "Shop Collection",
      primaryCtaHref: "/category/laptops-computers",
      secondaryCtaText: "WhatsApp Order",
      secondaryCtaHref: `https://wa.me/91${phoneInput}?text=Hello%20LAPPY%20SOLUTION,%20I%20want%20to%20order`,
      desktopImageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1920&auto=format&fit=crop",
      mobileImageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop",
      deviceTarget: "all",
      displayMode: "editorial",
      heightPreset: "large",
      widthMode: "full",
      tag: "100% GENUINE SILICON",
      accentColor: "#D4A93A",
      isActive: true,
      order: banners.length,
      overlayOpacity: 75,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (banner: BannerItem) => {
    setEditingBanner({ ...banner });
    setIsModalOpen(true);
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBanner) return;

    if (!editingBanner.desktopImageUrl.trim()) {
      addToast("Please provide a valid banner image URL.", "error");
      return;
    }

    if (!editingBanner.id) {
      // Adding new banner
      const { id, order, ...rest } = editingBanner;
      addBanner(rest);
      addToast("New banner added successfully to homepage!", "success");
    } else {
      // Updating existing banner
      updateBanner(editingBanner.id, editingBanner);
      addToast("Banner details updated.", "success");
    }
    setIsModalOpen(false);
    setEditingBanner(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#172033] font-outfit">
      <AdminNav />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E7E4DD] mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0066B3] bg-[#0066B3]/10 px-2.5 py-0.5 rounded-full">
                HOMEPAGE BANNER SYSTEM
              </span>
              <span className="text-[11px] font-bold text-[#16805A] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Live Sync Active
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#071A33]">
              Banner &amp; Device Manager
            </h1>
            <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-2xl font-normal">
              Manage full-page desktop &amp; phone banners, customize exact dimensions, display style (graphic poster vs editorial), and control store phone numbers across the site.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                if (confirm("Reset banners to default high-definition presets?")) {
                  resetToDefaults();
                  addToast("Banners reset to factory presets.", "success");
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E7E4DD] bg-white text-xs font-bold text-[#667085] hover:text-[#071A33] hover:bg-[#FAF8F3] transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066B3] hover:bg-[#004F8A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Banner</span>
            </button>
          </div>
        </div>

        {/* 1. STORE PHONE & WHATSAPP SETTINGS CARD (Solves the "dusra phone number homepage pe dikha rha hai" issue) */}
        <section className="bg-white rounded-2xl border border-[#E7E4DD] p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-[#0066B3] font-bold text-xs uppercase tracking-wider mb-1">
                <Phone className="w-4 h-4 text-[#D4A93A]" />
                <span>Store Phone Number &amp; WhatsApp Desk Sync</span>
              </div>
              <h2 className="text-lg font-extrabold text-[#071A33]">
                Homepage Phone Number Settings
              </h2>
              <p className="text-xs text-[#667085] mt-1">
                Controls the contact number shown on the Homepage Footer, Hero Banner CTA, and Floating WhatsApp chat. Ensure your primary merchant number is active here.
              </p>
            </div>

            <form onSubmit={handleSavePhone} className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#667085]">
                    +91
                  </span>
                  <input
                    type="text"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    maxLength={10}
                    placeholder="8789320315"
                    className="w-40 sm:w-48 pl-10 pr-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs sm:text-sm font-mono font-bold text-[#071A33] focus:border-[#0066B3] focus:bg-white outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#071A33] hover:bg-[#0066B3] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5 text-[#D4A93A]" />
                  <span>Update Phone</span>
                </button>
              </div>

              {/* Quick Select Buttons */}
              <div className="flex items-center gap-1.5 text-[11px] text-[#667085]">
                <span>Quick switch:</span>
                <button
                  type="button"
                  onClick={() => handleQuickSetPhone("9608828288")}
                  className={`px-2 py-1 rounded-lg border font-mono font-bold transition-colors ${
                    phoneInput === "9608828288"
                      ? "bg-[#0066B3] text-white border-[#0066B3]"
                      : "bg-[#FAF8F3] text-[#071A33] border-[#E7E4DD] hover:border-[#0066B3]"
                  }`}
                >
                  9608828288 (Primary Desk)
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickSetPhone("8789320315")}
                  className={`px-2 py-1 rounded-lg border font-mono font-bold transition-colors ${
                    phoneInput === "8789320315"
                      ? "bg-[#0066B3] text-white border-[#0066B3]"
                      : "bg-[#FAF8F3] text-[#071A33] border-[#E7E4DD] hover:border-[#0066B3]"
                  }`}
                >
                  8789320315 (UPI Alternate)
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* 2. BANNER DIMENSION & DEVICE SPECIFICATION GUIDE */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Guide Card 1: PC Full Page Dimensions */}
          <div className="bg-white border border-[#E7E4DD] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#0066B3] uppercase tracking-wider">
                  <Monitor className="w-4 h-4 text-[#0066B3]" /> PC / Desktop Banner
                </span>
                <span className="text-[10px] font-bold bg-[#FAF8F3] border border-[#E7E4DD] text-[#071A33] px-2 py-0.5 rounded-full">
                  100% Full Width
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#071A33]">
                1920 × 600 px (Recommended)
              </h3>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed font-normal">
                Spans edge-to-edge horizontally across the entire screen. For ultra-wide full immersion, you can also use <strong>1920 × 750 px</strong> or <strong>21:9</strong> panoramic artwork.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7E4DD] flex items-center justify-between text-[11px] text-[#667085]">
              <span>Aspect: 16:5 to 16:6</span>
              <span className="font-bold text-[#16805A]">Zero Clipping</span>
            </div>
          </div>

          {/* Guide Card 2: Phone / Mobile Dimensions */}
          <div className="bg-white border border-[#E7E4DD] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#D4A93A] uppercase tracking-wider">
                  <Smartphone className="w-4 h-4 text-[#D4A93A]" /> Phone / Mobile Banner
                </span>
                <span className="text-[10px] font-bold bg-[#FAF8F3] border border-[#E7E4DD] text-[#071A33] px-2 py-0.5 rounded-full">
                  High Clarity
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#071A33]">
                1080 × 1080 or 1080 × 1350 px
              </h3>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed font-normal">
                Mobile screens look best with square (1:1) or vertical posters, or compact <strong>1080 × 600 px</strong> landscape cards so products and deals remain crystal clear without tiny text.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7E4DD] flex items-center justify-between text-[11px] text-[#667085]">
              <span>Aspect: 1:1 or 4:5 or 16:9</span>
              <span className="font-bold text-[#16805A]">Finger-Friendly</span>
            </div>
          </div>

          {/* Guide Card 3: Anti-Flicker Architecture */}
          <div className="bg-[#071A33] text-white border border-[#1E3A5F] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#D4A93A] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#D4A93A]" /> Anti-Flicker Engine
                </span>
                <span className="text-[10px] font-bold bg-white/10 text-white px-2 py-0.5 rounded-full">
                  Enabled
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white">
                Smooth Cross-Fade Active
              </h3>
              <p className="text-xs text-[#B8C1CC] mt-1.5 leading-relaxed font-normal">
                Slides are now pre-rendered with absolute opacity stacking. No white blank frames, no image unloading flicker, and instant caching across transitions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#B8C1CC]">
              <span>Hardware Acceleration</span>
              <span className="font-bold text-[#D4A93A]">60 FPS Fluid</span>
            </div>
          </div>
        </section>

        {/* 3. DEVICE FILTER TABS & LIVE PREVIEW TOGGLE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Target Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E7E4DD] rounded-xl self-start shadow-xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#071A33] text-white shadow-xs"
                  : "text-[#667085] hover:text-[#071A33]"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>All Banners ({banners.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("desktop")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "desktop"
                  ? "bg-[#0066B3] text-white shadow-xs"
                  : "text-[#667085] hover:text-[#0066B3]"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>PC / Desktop ({banners.filter((b) => b.deviceTarget !== "mobile").length})</span>
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "mobile"
                  ? "bg-[#D4A93A] text-[#071A33] shadow-xs"
                  : "text-[#667085] hover:text-[#071A33]"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Phone / Mobile ({banners.filter((b) => b.deviceTarget !== "desktop").length})</span>
            </button>
          </div>

          <div className="text-xs text-[#667085] flex items-center gap-2">
            <span>Use arrows <strong>↑ ↓</strong> to change banner display sequence on homepage.</span>
          </div>
        </div>

        {/* 4. BANNERS LIST */}
        <div className="space-y-4">
          {filteredBanners.length === 0 ? (
            <div className="bg-white border border-[#E7E4DD] rounded-2xl p-12 text-center max-w-md mx-auto shadow-xs">
              <Layers className="w-10 h-10 text-[#667085] mx-auto mb-3 stroke-[1.5]" />
              <h4 className="font-extrabold text-lg text-[#071A33]">No Banners Found</h4>
              <p className="text-xs text-[#667085] mt-1 mb-4">
                No banners match the selected device filter. Click below to add one.
              </p>
              <button
                onClick={openAddModal}
                className="px-4 py-2 rounded-xl bg-[#0066B3] text-white text-xs font-bold"
              >
                Create Banner
              </button>
            </div>
          ) : (
            filteredBanners.map((banner, index) => {
              const isFirst = index === 0;
              const isLast = index === filteredBanners.length - 1;

              return (
                <div
                  key={banner.id}
                  className={`bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all ${
                    banner.isActive ? "border-[#E7E4DD]" : "border-red-200 bg-red-50/20 opacity-75"
                  }`}
                >
                  <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    {/* Left: Banner Thumbnail & Identity */}
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Priority Reordering Buttons */}
                      <div className="flex flex-col gap-1 items-center justify-center shrink-0">
                        <button
                          onClick={() => handleMove(index, "up")}
                          disabled={isFirst}
                          title="Move Up"
                          className="w-7 h-7 rounded-lg bg-[#FAF8F3] hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] flex items-center justify-center text-[#667085] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        >
                          <MoveUp className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[11px] font-mono font-bold text-[#667085]">
                          #{index + 1}
                        </span>
                        <button
                          onClick={() => handleMove(index, "down")}
                          disabled={isLast}
                          title="Move Down"
                          className="w-7 h-7 rounded-lg bg-[#FAF8F3] hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] flex items-center justify-center text-[#667085] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        >
                          <MoveDown className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Thumbnail Preview */}
                      <div className="relative w-32 sm:w-44 h-20 sm:h-24 rounded-xl overflow-hidden bg-[#071A33] border border-[#E7E4DD] shrink-0 group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={banner.desktopImageUrl}
                          alt={banner.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Device Badge over thumbnail */}
                        <div className="absolute bottom-1.5 left-1.5">
                          {banner.deviceTarget === "desktop" && (
                            <span className="inline-flex items-center gap-1 bg-[#0066B3] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                              <Monitor className="w-2.5 h-2.5" /> PC Only
                            </span>
                          )}
                          {banner.deviceTarget === "mobile" && (
                            <span className="inline-flex items-center gap-1 bg-[#D4A93A] text-[#071A33] text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                              <Smartphone className="w-2.5 h-2.5" /> Phone Only
                            </span>
                          )}
                          {banner.deviceTarget === "all" && (
                            <span className="inline-flex items-center gap-1 bg-[#071A33] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                              <Globe className="w-2.5 h-2.5" /> PC + Phone
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-extrabold text-sm sm:text-base text-[#071A33]">
                            {banner.name}
                          </h3>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                              banner.isActive
                                ? "bg-[#16805A]/10 text-[#16805A]"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {banner.isActive ? "Active on Homepage" : "Disabled"}
                          </span>
                          <span className="text-[10px] font-bold bg-[#FAF8F3] border border-[#E7E4DD] text-[#667085] px-2 py-0.5 rounded-full uppercase">
                            {banner.widthMode === "full" ? "100% Full Page" : "Contained"}
                          </span>
                          <span className="text-[10px] font-bold bg-[#FAF8F3] border border-[#E7E4DD] text-[#667085] px-2 py-0.5 rounded-full uppercase">
                            {banner.heightPreset}
                          </span>
                        </div>

                        <p className="text-xs text-[#071A33] font-medium line-clamp-1">
                          {banner.titlePrefix}
                          <span className="text-[#0066B3] font-bold">{banner.titleHighlight}</span>
                          {banner.titleSuffix}
                        </p>

                        <p className="text-[11px] text-[#667085] line-clamp-1">
                          {banner.description}
                        </p>

                        <div className="flex items-center gap-3 text-[11px] text-[#667085] pt-1">
                          <span>Link: <code className="bg-[#FAF8F3] px-1 py-0.5 rounded text-[#071A33] font-mono">{banner.primaryCtaHref}</code></span>
                          <span>•</span>
                          <span>Style: <strong className="text-[#071A33]">{banner.displayMode === "graphic_only" ? "Graphic Poster" : "Editorial"}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 ml-auto lg:ml-0 shrink-0">
                      <button
                        onClick={() => toggleBanner(banner.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                          banner.isActive
                            ? "bg-[#FAF8F3] hover:bg-amber-100 text-[#667085] hover:text-amber-800"
                            : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                        }`}
                        title={banner.isActive ? "Hide from homepage" : "Show on homepage"}
                      >
                        {banner.isActive ? (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            <span>Disable</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5" />
                            <span>Activate</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => openEditModal(banner)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F3] hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] text-xs font-bold text-[#071A33] transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Delete banner "${banner.name}"?`)) {
                            deleteBanner(banner.id);
                            addToast("Banner deleted.", "error");
                          }
                        }}
                        className="w-9 h-9 rounded-xl bg-[#FAF8F3] hover:bg-red-100 hover:text-red-700 border border-[#E7E4DD] flex items-center justify-center text-[#667085] transition-colors"
                        title="Delete banner"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      {/* 5. ADD / EDIT BANNER MODAL */}
      {isModalOpen && editingBanner && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-[#E7E4DD] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E4DD] mb-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0066B3] bg-[#0066B3]/10 px-2.5 py-0.5 rounded-full">
                  BANNER CONFIGURATION
                </span>
                <h3 className="text-xl font-extrabold text-[#071A33] mt-1">
                  {editingBanner.id ? "Edit Homepage Banner" : "Add New Homepage Banner"}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#FAF8F3] hover:bg-[#E7E4DD] text-[#071A33] font-bold text-sm flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-6">
              {/* Row 1: Target Device & Banner Width */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Target Device */}
                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider mb-2">
                    Where to Show (Device Target) *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, deviceTarget: "all" })
                      }
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        editingBanner.deviceTarget === "all"
                          ? "bg-[#071A33] text-white border-[#071A33] shadow-xs"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD] hover:border-[#071A33]"
                      }`}
                    >
                      <Globe className="w-4 h-4" />
                      <span>PC + Phone</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, deviceTarget: "desktop" })
                      }
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        editingBanner.deviceTarget === "desktop"
                          ? "bg-[#0066B3] text-white border-[#0066B3] shadow-xs"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD] hover:border-[#0066B3]"
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                      <span>PC Only</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, deviceTarget: "mobile" })
                      }
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        editingBanner.deviceTarget === "mobile"
                          ? "bg-[#D4A93A] text-[#071A33] border-[#D4A93A] shadow-xs"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD] hover:border-[#D4A93A]"
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Phone Only</span>
                    </button>
                  </div>
                </div>

                {/* Width Mode (Full Page vs Contained) */}
                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider mb-2">
                    Page Layout Width (Full Page Mode) *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, widthMode: "full" })
                      }
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        editingBanner.widthMode === "full"
                          ? "bg-[#0066B3] text-white border-[#0066B3] shadow-xs"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD] hover:border-[#0066B3]"
                      }`}
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Full Page (100% Edge-to-Edge)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, widthMode: "contained" })
                      }
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        editingBanner.widthMode === "contained"
                          ? "bg-[#071A33] text-white border-[#071A33] shadow-xs"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD] hover:border-[#071A33]"
                      }`}
                    >
                      <Minimize2 className="w-4 h-4" />
                      <span>Boxed (1440px)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 2: Height & Display Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Height Presets */}
                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider mb-2">
                    Banner Height / Size Presets *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, heightPreset: "large" })
                      }
                      className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                        editingBanner.heightPreset === "large"
                          ? "bg-[#071A33] text-white border-[#071A33]"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD]"
                      }`}
                    >
                      <div>Full Hero</div>
                      <div className="text-[10px] font-normal opacity-80">600 - 650px</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, heightPreset: "standard" })
                      }
                      className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                        editingBanner.heightPreset === "standard"
                          ? "bg-[#071A33] text-white border-[#071A33]"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD]"
                      }`}
                    >
                      <div>Standard</div>
                      <div className="text-[10px] font-normal opacity-80">480 - 520px</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, heightPreset: "compact" })
                      }
                      className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                        editingBanner.heightPreset === "compact"
                          ? "bg-[#071A33] text-white border-[#071A33]"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD]"
                      }`}
                    >
                      <div>Compact</div>
                      <div className="text-[10px] font-normal opacity-80">350 - 400px</div>
                    </button>
                  </div>
                </div>

                {/* Display Mode */}
                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider mb-2">
                    Banner Content Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, displayMode: "editorial" })
                      }
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        editingBanner.displayMode === "editorial"
                          ? "bg-[#0066B3] text-white border-[#0066B3]"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD]"
                      }`}
                    >
                      <div>✍️ Editorial Overlay</div>
                      <div className="text-[10px] font-normal opacity-80">Title + Text + CTAs</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setEditingBanner({ ...editingBanner, displayMode: "graphic_only" })
                      }
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        editingBanner.displayMode === "graphic_only"
                          ? "bg-[#0066B3] text-white border-[#0066B3]"
                          : "bg-[#FAF8F3] text-[#667085] border-[#E7E4DD]"
                      }`}
                    >
                      <div>🖼️ Graphic Poster</div>
                      <div className="text-[10px] font-normal opacity-80">Full image only (No text)</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Banner Name & Admin Label */}
              <div>
                <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider mb-1.5">
                  Internal Banner Name *
                </label>
                <input
                  type="text"
                  value={editingBanner.name}
                  onChange={(e) => setEditingBanner({ ...editingBanner, name: e.target.value })}
                  placeholder="e.g. Diwal / New Year Laptop Flash Sale"
                  className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs sm:text-sm text-[#071A33] font-bold focus:border-[#0066B3] focus:bg-white outline-none"
                  required
                />
              </div>

              {/* Images: Desktop URL & Optional Mobile URL */}
              <div className="space-y-3 p-4 bg-[#FAF8F3] rounded-2xl border border-[#E7E4DD]">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider">
                      PC / Desktop Banner Image URL * (Rec: 1920 × 600 px)
                    </label>
                    <span className="text-[11px] text-[#0066B3] font-bold">Primary</span>
                  </div>
                  <input
                    type="url"
                    value={editingBanner.desktopImageUrl}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, desktopImageUrl: e.target.value })
                    }
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E7E4DD] rounded-xl text-xs font-mono text-[#071A33] focus:border-[#0066B3] outline-none"
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider">
                      Mobile Specific Banner Image URL (Optional - Rec: 1080 × 1080 px)
                    </label>
                    <span className="text-[11px] text-[#667085]">Falls back to desktop image</span>
                  </div>
                  <input
                    type="url"
                    value={editingBanner.mobileImageUrl || ""}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, mobileImageUrl: e.target.value })
                    }
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E7E4DD] rounded-xl text-xs font-mono text-[#071A33] focus:border-[#0066B3] outline-none"
                  />
                </div>

                {/* Quick Presets for Demo / Testing */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-[11px] font-bold text-[#667085]">Quick Sample Images:</span>
                  <button
                    type="button"
                    onClick={() =>
                      setEditingBanner({
                        ...editingBanner,
                        desktopImageUrl:
                          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1920&auto=format&fit=crop",
                      })
                    }
                    className="px-2 py-0.5 rounded bg-white border border-[#E7E4DD] text-[10px] font-bold text-[#071A33] hover:border-[#0066B3]"
                  >
                    💻 Laptops
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setEditingBanner({
                        ...editingBanner,
                        desktopImageUrl:
                          "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1920&auto=format&fit=crop",
                      })
                    }
                    className="px-2 py-0.5 rounded bg-white border border-[#E7E4DD] text-[10px] font-bold text-[#071A33] hover:border-[#0066B3]"
                  >
                    🖨️ Printers
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setEditingBanner({
                        ...editingBanner,
                        desktopImageUrl:
                          "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1920&auto=format&fit=crop",
                      })
                    }
                    className="px-2 py-0.5 rounded bg-white border border-[#E7E4DD] text-[10px] font-bold text-[#071A33] hover:border-[#0066B3]"
                  >
                    ⚡ Workstation GPU
                  </button>
                </div>
              </div>

              {/* If Editorial Mode, show Title & CTA Fields */}
              {editingBanner.displayMode === "editorial" && (
                <div className="space-y-4 pt-2 border-t border-[#E7E4DD]">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#071A33]">
                    Banner Typography &amp; Action Buttons
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#667085] uppercase mb-1">
                        Top Badge Text
                      </label>
                      <input
                        type="text"
                        value={editingBanner.badge}
                        onChange={(e) =>
                          setEditingBanner({ ...editingBanner, badge: e.target.value })
                        }
                        placeholder="UP TO 30% OFF • B2B SAVINGS"
                        className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#667085] uppercase mb-1">
                        Highlighted Gold Keyword
                      </label>
                      <input
                        type="text"
                        value={editingBanner.titleHighlight}
                        onChange={(e) =>
                          setEditingBanner({
                            ...editingBanner,
                            titleHighlight: e.target.value,
                          })
                        }
                        placeholder="Workstations"
                        className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#D4A93A] font-bold outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#667085] uppercase mb-1">
                        Title Prefix
                      </label>
                      <input
                        type="text"
                        value={editingBanner.titlePrefix}
                        onChange={(e) =>
                          setEditingBanner({ ...editingBanner, titlePrefix: e.target.value })
                        }
                        placeholder="Enterprise Laptops & "
                        className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#667085] uppercase mb-1">
                        Title Suffix
                      </label>
                      <input
                        type="text"
                        value={editingBanner.titleSuffix}
                        onChange={(e) =>
                          setEditingBanner({ ...editingBanner, titleSuffix: e.target.value })
                        }
                        placeholder=" Pre-Tested For Maximum Speed"
                        className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#667085] uppercase mb-1">
                      Description Paragraph
                    </label>
                    <textarea
                      value={editingBanner.description}
                      onChange={(e) =>
                        setEditingBanner({ ...editingBanner, description: e.target.value })
                      }
                      rows={2}
                      placeholder="Brief promo details, hardware specifications, and warranty information."
                      className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#667085] uppercase mb-1">
                        Primary CTA Button Text
                      </label>
                      <input
                        type="text"
                        value={editingBanner.primaryCtaText}
                        onChange={(e) =>
                          setEditingBanner({
                            ...editingBanner,
                            primaryCtaText: e.target.value,
                          })
                        }
                        placeholder="Explore Laptops"
                        className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] font-bold outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#667085] uppercase mb-1">
                        Primary CTA Target Link
                      </label>
                      <input
                        type="text"
                        value={editingBanner.primaryCtaHref}
                        onChange={(e) =>
                          setEditingBanner({
                            ...editingBanner,
                            primaryCtaHref: e.target.value,
                          })
                        }
                        placeholder="/category/laptops-computers"
                        className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs font-mono text-[#071A33] outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* If Graphic Only, show single link */}
              {editingBanner.displayMode === "graphic_only" && (
                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase tracking-wider mb-1.5">
                    Click Link Destination * (Where user goes when clicking the banner)
                  </label>
                  <input
                    type="text"
                    value={editingBanner.primaryCtaHref}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, primaryCtaHref: e.target.value })
                    }
                    placeholder="/category/laptops-computers"
                    className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs font-mono text-[#071A33] focus:border-[#0066B3] outline-none"
                    required
                  />
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E4DD]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#E7E4DD] text-xs font-bold text-[#667085] hover:text-[#071A33]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#0066B3] hover:bg-[#004F8A] text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  {editingBanner.id ? "Save Changes" : "Create Banner"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

