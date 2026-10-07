import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentState {
  recentProductIds: string[];
  addRecent: (productId: string) => void;
}

export const useRecentStore = create<RecentState>()(
  persist(
    (set) => ({
      recentProductIds: [],
      addRecent: (productId: string) => {
        set((state) => {
          const filtered = state.recentProductIds.filter((id) => id !== productId);
          return {
            recentProductIds: [productId, ...filtered].slice(0, 8),
          };
        });
      },
    }),
    {
      name: "lappy-recent-products",
      skipHydration: true,
    }
  )
);
