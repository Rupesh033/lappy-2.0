"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORE_INFO } from "@/lib/mock-data";

export interface StoreSettings {
  phone: string;
  altPhone: string;
  upiId: string;
  address: string;
  email: string;
  whatsappMessage: string;
}

interface SettingsState {
  settings: StoreSettings;
  updateSettings: (newSettings: Partial<StoreSettings>) => void;
  resetSettings: () => void;
}

const DEFAULT_SETTINGS: StoreSettings = {
  phone: "9608828288",
  altPhone: "8789320315",
  upiId: "8789320315@ptsbi",
  address: STORE_INFO.address,
  email: STORE_INFO.email,
  whatsappMessage: "Hello LAPPY SOLUTION, I want to inquire about products and orders",
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () => set({ settings: DEFAULT_SETTINGS }),
    }),
    {
      name: "lappy-store-settings",
    }
  )
);

