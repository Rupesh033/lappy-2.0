"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Order {
  id: string;
  amount: number;
  items: { name: string; price: number; quantity: number }[];
  status: "pending_payment" | "utr_submitted" | "verified" | "failed";
  utr?: string;
  createdAt: number;
  verifiedAt?: number;
}

interface OrderState {
  orders: Order[];
  createOrder: (order: Omit<Order, "createdAt" | "status">) => void;
  submitUtr: (orderId: string, utr: string) => void;
  verifyOrder: (orderId: string) => void;
  failOrder: (orderId: string, reason?: string) => void;
  getOrder: (orderId: string) => Order | undefined;
}

export const useOrders = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      createOrder: (order) =>
        set((s) => {
          // Avoid duplicate order with same ID
          if (s.orders.some((o) => o.id === order.id)) return s;
          return {
            orders: [
              { ...order, status: "pending_payment", createdAt: Date.now() },
              ...s.orders,
            ],
          };
        }),
      submitUtr: (orderId, utr) =>
        set((s) => ({
          orders: s.orders.map((o) =>
            o.id === orderId ? { ...o, status: "utr_submitted", utr } : o
          ),
        })),
      verifyOrder: (orderId) =>
        set((s) => ({
          orders: s.orders.map((o) =>
            o.id === orderId
              ? { ...o, status: "verified", verifiedAt: Date.now() }
              : o
          ),
        })),
      failOrder: (orderId) =>
        set((s) => ({
          orders: s.orders.map((o) =>
            o.id === orderId ? { ...o, status: "failed" } : o
          ),
        })),
      getOrder: (orderId) => get().orders.find((o) => o.id === orderId),
    }),
    { name: "lappy-orders" }
  )
);
