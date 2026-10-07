import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  items: string[]; // product IDs
  toggleWishlist: (productId: string) => boolean; // returns true if added, false if removed
  isWishlisted: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggleWishlist: (productId: string) => {
        const exists = get().items.includes(productId);
        if (exists) {
          set((state) => ({ items: state.items.filter((id) => id !== productId) }));
          return false;
        } else {
          set((state) => ({ items: [...state.items, productId] }));
          return true;
        }
      },
      isWishlisted: (productId: string) => {
        return get().items.includes(productId);
      },
    }),
    {
      name: "lappy-wishlist-storage",
      skipHydration: true,
    }
  )
);
