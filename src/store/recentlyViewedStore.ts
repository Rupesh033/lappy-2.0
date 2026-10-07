"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentlyViewedState {
  productIds: string[];
  addProduct: (id: string) => void;
  clearRecentlyViewed: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set) => ({
      productIds: [],
      addProduct: (id: string) =>
        set((state) => {
          // Remove if already present, put at front, keep max 12
          const filtered = state.productIds.filter((pid) => pid !== id);
          return {
            productIds: [id, ...filtered].slice(0, 12),
          };
        }),
      clearRecentlyViewed: () => set({ productIds: [] }),
    }),
    {
      name: "lappy-recently-viewed",
    }
  )
);
