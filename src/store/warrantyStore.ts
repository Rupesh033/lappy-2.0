"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WarrantyClaimStatus =
  | "pending"
  | "inspecting"
  | "approved"
  | "repaired"
  | "replaced"
  | "rejected";

export interface WarrantyClaim {
  id: string;
  customerName: string;
  customerPhone: string;
  productName: string;
  serialNumber: string;
  invoiceNumber: string;
  purchaseDate: string;
  warrantyPeriod: string; // e.g. "1 Year", "6 Months"
  issueReported: string;
  technicianNotes?: string;
  status: WarrantyClaimStatus;
  createdAt: number;
  resolvedAt?: number;
}

interface WarrantyState {
  claims: WarrantyClaim[];
  addClaim: (claim: Omit<WarrantyClaim, "id" | "createdAt">) => void;
  updateStatus: (
    id: string,
    status: WarrantyClaimStatus,
    technicianNotes?: string
  ) => void;
  updateClaim: (id: string, updates: Partial<WarrantyClaim>) => void;
  deleteClaim: (id: string) => void;
  resetDefaults: () => void;
}

const DEFAULT_CLAIMS: WarrantyClaim[] = [
  {
    id: "CLM-8821",
    customerName: "Rajesh Kumar",
    customerPhone: "9835123456",
    productName: "Lenovo ThinkPad T480s (Intel Core i5 8th Gen / 16GB / 512GB SSD)",
    serialNumber: "PF18Z8KQ",
    invoiceNumber: "INV-2026-0812",
    purchaseDate: "2026-06-15",
    warrantyPeriod: "1 Year Store Warranty",
    issueReported: "Battery draining faster than expected after Windows update",
    technicianNotes: "Battery bench health tested at 88%. Performed battery gauge reset & power driver update. Unit operational.",
    status: "approved",
    createdAt: Date.now() - 86400000 * 5,
    resolvedAt: Date.now() - 86400000 * 2,
  },
  {
    id: "CLM-8822",
    customerName: "Amit Verma",
    customerPhone: "8789320315",
    productName: "HP Smart Tank 580 All-in-One Wireless Continuous Ink Printer",
    serialNumber: "CN2389140A",
    invoiceNumber: "INV-2026-0940",
    purchaseDate: "2026-08-20",
    warrantyPeriod: "1 Year Official Warranty",
    issueReported: "Paper feed sensor jam error during duplex scanning",
    technicianNotes: "Roller cleaned and pickup gear realigned. Test print batch verified 50 pages without obstruction.",
    status: "inspecting",
    createdAt: Date.now() - 86400000 * 2,
  },
  {
    id: "CLM-8823",
    customerName: "Sunita Devi",
    customerPhone: "9431109876",
    productName: "Dell Latitude 7490 (Intel Core i7 8th Gen / 16GB / 256GB NVMe)",
    serialNumber: "8HK3P92",
    invoiceNumber: "INV-2026-1011",
    purchaseDate: "2026-09-02",
    warrantyPeriod: "6 Months Hardware Warranty",
    issueReported: "Touchpad click button not registering right-clicks consistently",
    status: "pending",
    createdAt: Date.now() - 86400000 * 1,
  },
];

export const useWarrantyStore = create<WarrantyState>()(
  persist(
    (set) => ({
      claims: DEFAULT_CLAIMS,

      addClaim: (claimData) =>
        set((state) => ({
          claims: [
            {
              ...claimData,
              id: `CLM-${Math.floor(1000 + Math.random() * 9000)}`,
              createdAt: Date.now(),
            },
            ...state.claims,
          ],
        })),

      updateStatus: (id, status, technicianNotes) =>
        set((state) => ({
          claims: state.claims.map((c) =>
            c.id === id
              ? {
                  ...c,
                  status,
                  technicianNotes: technicianNotes || c.technicianNotes,
                  resolvedAt:
                    status === "approved" || status === "repaired" || status === "replaced"
                      ? Date.now()
                      : c.resolvedAt,
                }
              : c
          ),
        })),

      updateClaim: (id, updates) =>
        set((state) => ({
          claims: state.claims.map((c) => (c.id === id ? { ...c, ...updates } : c)),
        })),

      deleteClaim: (id) =>
        set((state) => ({
          claims: state.claims.filter((c) => c.id !== id),
        })),

      resetDefaults: () => set({ claims: DEFAULT_CLAIMS }),
    }),
    {
      name: "lappy-warranty-claims",
    }
  )
);

