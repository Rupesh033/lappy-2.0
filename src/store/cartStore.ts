import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/lib/mock-data";

export interface CartItem {
  id: string; // composite key: product.id + configLabel
  product: Product;
  configLabel: string;
  unitPrice: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  addItem: (product: Product, configIndex?: number, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  clear: () => void;
  getSubtotal: () => number;
  getTotalCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

      addItem: (product, configIndex = 0, quantity = 1) => {
        const config = product.configurations[configIndex] || {
          label: "Standard",
          priceModifier: 0,
        };
        const unitPrice = product.price + (config.priceModifier || 0);
        const itemId = `${product.id}-${config.label}`;

        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.id === itemId);
          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex].quantity += quantity;
            return { items: updated, isDrawerOpen: true };
          }
          return {
            items: [
              ...state.items,
              {
                id: itemId,
                product,
                configLabel: config.label,
                unitPrice,
                quantity,
              },
            ],
            isDrawerOpen: true,
          };
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      clear: () => set({ items: [] }),

      getSubtotal: () => {
        return get().items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
      },

      getTotalCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
    }),
    {
      name: "lappy-cart-storage",
      skipHydration: true,
    }
  )
);

export const useCart = useCartStore;



