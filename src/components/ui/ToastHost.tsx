"use client";

import React from "react";
import { useToastStore } from "@/store/toastStore";
import { Check, Info, AlertCircle, X } from "lucide-react";

export function ToastHost() {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none w-full max-w-sm px-4"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 w-full bg-ink text-bg px-5 py-3 rounded-lg shadow-drawer border border-graphite transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="flex items-center gap-3">
            {toast.type === "error" ? (
              <span className="w-5 h-5 rounded-full bg-ember flex items-center justify-center shrink-0">
                <AlertCircle className="w-3.5 h-3.5 text-surface stroke-[2]" />
              </span>
            ) : toast.type === "info" ? (
              <span className="w-5 h-5 rounded-full bg-blue flex items-center justify-center shrink-0">
                <Info className="w-3.5 h-3.5 text-surface stroke-[2]" />
              </span>
            ) : (
              <span className="w-5 h-5 rounded-full bg-sage flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-surface stroke-[2.5]" />
              </span>
            )}
            <span className="text-[13px] font-sans text-bg font-normal">{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            aria-label="Dismiss notification"
            className="text-muted hover:text-bg transition-colors"
          >
            <X className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>
      ))}
    </div>
  );
}
