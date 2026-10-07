import { create } from "zustand";

export interface ToastItem {
  id: string;
  message: string;
  type?: "success" | "info" | "error";
}

export interface ToastPushParams {
  title: string;
  desc?: string;
  type?: "success" | "info" | "error";
}

export interface ToastState {
  toasts: ToastItem[];
  addToast: (message: string, type?: "success" | "info" | "error") => void;
  push: (params: ToastPushParams) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (message, type = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts.slice(-2), { id, message, type }], // keep max 3
    }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3200);
  },
  push: ({ title, desc, type }) => {
    const id = Math.random().toString(36).substring(2, 9);
    const message = `${title}${desc ? `: ${desc}` : ""}`;
    set((state) => ({
      toasts: [...state.toasts.slice(-2), { id, message, type: type || "info" }],
    }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3200);
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },
}));

export const useToast = useToastStore;
