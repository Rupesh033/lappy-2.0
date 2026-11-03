"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BannerDeviceTarget = "all" | "desktop" | "mobile";
export type BannerDisplayMode = "graphic_only" | "editorial";
export type BannerHeightPreset = "compact" | "standard" | "large" | "auto";
export type BannerWidthMode = "full" | "contained";

export interface BannerItem {
  id: string;
  name: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  desktopImageUrl: string;
  mobileImageUrl?: string;
  deviceTarget: BannerDeviceTarget;
  displayMode: BannerDisplayMode;
  heightPreset: BannerHeightPreset;
  widthMode: BannerWidthMode;
  tag: string;
  accentColor: string;
  isActive: boolean;
  order: number;
  overlayOpacity: number; // 0 to 100
}

interface BannerStoreState {
  banners: BannerItem[];
  addBanner: (banner: Omit<BannerItem, "id" | "order">) => void;
  updateBanner: (id: string, updates: Partial<BannerItem>) => void;
  deleteBanner: (id: string) => void;
  toggleBanner: (id: string) => void;
  reorderBanners: (orderedIds: string[]) => void;
  resetToDefaults: () => void;
}

export const DEFAULT_BANNERS: BannerItem[] = [
  {
    id: "banner-laptops-deal",
    name: "Enterprise Laptops & Workstations",
    badge: "UP TO 30% OFF • B2B SAVINGS",
    titlePrefix: "Enterprise Laptops & ",
    titleHighlight: "Workstations",
    titleSuffix: " Pre-Tested For Maximum Speed",
    description: "Certified Lenovo ThinkPad, Dell Latitude, HP EliteBook, and Apple MacBook. Hardware bench inspected with genuine Windows 11 and 18% GST invoice.",
    primaryCtaText: "Explore Laptops",
    primaryCtaHref: "/category/laptops-computers",
    secondaryCtaText: "Browse Top Deals",
    secondaryCtaHref: "#top-deals",
    desktopImageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1920&auto=format&fit=crop",
    mobileImageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop",
    deviceTarget: "all",
    displayMode: "editorial",
    heightPreset: "large",
    widthMode: "full",
    tag: "100% GENUINE SILICON",
    accentColor: "#D4A93A",
    isActive: true,
    order: 0,
    overlayOpacity: 75,
  },
  {
    id: "banner-printers-special",
    name: "Continuous Ink & Office Printers",
    badge: "OFFICE ESSENTIALS • BEST VALUE",
    titlePrefix: "All-in-One Wireless ",
    titleHighlight: "Continuous Ink",
    titleSuffix: " & Laser Printers",
    description: "HP Smart Tank, Epson EcoTank, and Canon PIXMA. Ultra-low cost per page printing, high-yield bottles, and factory-sealed units ready to ship.",
    primaryCtaText: "Explore Printers",
    primaryCtaHref: "/category/printers-toners",
    secondaryCtaText: "View Consumables",
    secondaryCtaHref: "/category/printers-toners",
    desktopImageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1920&auto=format&fit=crop",
    mobileImageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=900&auto=format&fit=crop",
    deviceTarget: "all",
    displayMode: "editorial",
    heightPreset: "large",
    widthMode: "full",
    tag: "HIGH YIELD INK SYSTEMS",
    accentColor: "#0066B3",
    isActive: true,
    order: 1,
    overlayOpacity: 70,
  },
  {
    id: "banner-mobile-special",
    name: "Garhwa Store Mobile Showcase",
    badge: "FAST WHATSAPP ORDER DESK",
    titlePrefix: "Direct Hardware Store & ",
    titleHighlight: "Express Dispatch",
    titleSuffix: " Across India",
    description: "Madarsa Road / Chiniya Road, Garhwa, Jharkhand. Order instantly via WhatsApp desk with 18% GST tax invoice.",
    primaryCtaText: "Chat On WhatsApp",
    primaryCtaHref: "https://wa.me/919608828288?text=Hello%20LAPPY%20SOLUTION,%20I%20want%20to%20order%20laptops%20and%20hardware",
    secondaryCtaText: "View Products",
    secondaryCtaHref: "/category/laptops-computers",
    desktopImageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1920&auto=format&fit=crop",
    mobileImageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=900&auto=format&fit=crop",
    deviceTarget: "mobile",
    displayMode: "editorial",
    heightPreset: "standard",
    widthMode: "full",
    tag: "100% BRAND VERIFIED",
    accentColor: "#D4A93A",
    isActive: true,
    order: 2,
    overlayOpacity: 80,
  },
  {
    id: "banner-desktop-power",
    name: "Pro Computing Hardware & GPUs",
    badge: "DESKTOP EXCLUSIVE • WORKSTATIONS",
    titlePrefix: "Architectural & Coding ",
    titleHighlight: "High-Performance Rigs",
    titleSuffix: " Ready To Deploy",
    description: "Configured with high-speed NVMe Gen 4 SSDs, DDR5 memory, and multi-core processors for uninterrupted heavy CAD and software development.",
    primaryCtaText: "Shop Hardware",
    primaryCtaHref: "/category/storage-ram",
    secondaryCtaText: "Keyboards & Input",
    secondaryCtaHref: "/category/keyboards-mice",
    desktopImageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1920&auto=format&fit=crop",
    deviceTarget: "desktop",
    displayMode: "editorial",
    heightPreset: "large",
    widthMode: "full",
    tag: "MAX OVERCLOCK SPEED",
    accentColor: "#0066B3",
    isActive: true,
    order: 3,
    overlayOpacity: 75,
  },
];

export const useBannerStore = create<BannerStoreState>()(
  persist(
    (set) => ({
      banners: DEFAULT_BANNERS,

      addBanner: (bannerData) =>
        set((state) => {
          const newBanner: BannerItem = {
            ...bannerData,
            id: `banner-${Date.now()}`,
            order: state.banners.length,
          };
          return {
            banners: [...state.banners, newBanner],
          };
        }),

      updateBanner: (id, updates) =>
        set((state) => ({
          banners: state.banners.map((b) => (b.id === id ? { ...b, ...updates } : b)),
        })),

      deleteBanner: (id) =>
        set((state) => ({
          banners: state.banners.filter((b) => b.id !== id),
        })),

      toggleBanner: (id) =>
        set((state) => ({
          banners: state.banners.map((b) =>
            b.id === id ? { ...b, isActive: !b.isActive } : b
          ),
        })),

      reorderBanners: (orderedIds) =>
        set((state) => {
          const bannerMap = new Map(state.banners.map((b) => [b.id, b]));
          const reordered: BannerItem[] = [];
          orderedIds.forEach((id, index) => {
            const item = bannerMap.get(id);
            if (item) {
              reordered.push({ ...item, order: index });
            }
          });
          // Append any missing items
          state.banners.forEach((item) => {
            if (!orderedIds.includes(item.id)) {
              reordered.push({ ...item, order: reordered.length });
            }
          });
          return { banners: reordered };
        }),

      resetToDefaults: () => set({ banners: DEFAULT_BANNERS }),
    }),
    {
      name: "lappy-banner-store",
    }
  )
);

