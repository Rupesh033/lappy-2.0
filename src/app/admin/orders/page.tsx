"use client";

import { useState } from "react";
import { useOrders, Order } from "@/store/orderStore";
import { formatINR } from "@/lib/utils";
import { Check, X, ShieldCheck, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useToastStore } from "@/store/toastStore";
import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminOrdersPage() {
  const { orders, verifyOrder, failOrder } = useOrders();
  const { addToast } = useToastStore();
  const [filter, setFilter] = useState<"utr_submitted" | "verified" | "failed" | "all">("utr_submitted");

  const filteredOrders = orders.filter((o) => {
    if (filter === "all") return true;
    return o.status === filter;
  });

  const pendingCount = orders.filter((o) => o.status === "utr_submitted").length;
  const verifiedCount = orders.filter((o) => o.status === "verified").length;

  const handleVerify = (id: string) => {
    verifyOrder(id);
    addToast(`Order ${id} approved & verified successfully.`, "success");
  };

  const handleReject = (id: string) => {
    failOrder(id);
    addToast(`Order ${id} marked as rejected.`, "error");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <AdminNav />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-line gap-4 mb-8">
        <div>
          <span className="eyebrow text-gold block mb-2">MERCHANT SETTLEMENT PORTAL</span>
          <h1 className="h-display text-3xl md:text-4xl text-ink">
            Order UTR Verification
          </h1>
          <p className="text-xs text-muted mt-1 font-sans">
            Cross-reference customer 12-digit UTR numbers with your SBI UPI merchant statement.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-cream/40 rounded-sm border border-line">
          <button
            onClick={() => setFilter("utr_submitted")}
            className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
              filter === "utr_submitted"
                ? "bg-ink text-bg"
                : "text-muted hover:text-ink"
            }`}
          >
            Pending ({pendingCount})
          </button>
          <button
            onClick={() => setFilter("verified")}
            className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
              filter === "verified"
                ? "bg-ink text-bg"
                : "text-muted hover:text-ink"
            }`}
          >
            Verified ({verifiedCount})
          </button>
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
              filter === "all"
                ? "bg-ink text-bg"
                : "text-muted hover:text-ink"
            }`}
          >
            All Orders ({orders.length})
          </button>
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="bg-surface border border-line rounded-lg p-12 text-center max-w-md mx-auto shadow-sm">
          <Clock className="w-10 h-10 text-muted mx-auto stroke-[1.5] mb-3" />
          <h3 className="font-display text-xl text-ink">No orders found</h3>
          <p className="text-xs text-muted mt-1 font-sans">
            {filter === "utr_submitted"
              ? "All submitted UPI payments have been verified or no customer has submitted a UTR yet."
              : "No orders match the selected filter."}
          </p>
        </div>
      ) : (
        <div className="bg-surface border border-line rounded-lg overflow-hidden divide-y divide-line/60 shadow-card">
          {filteredOrders.map((o: Order) => (
            <div
              key={o.id}
              className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:bg-cream/10 transition-colors"
            >
              {/* Order Meta */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-sm font-semibold text-ink">{o.id}</span>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm tracking-wider ${
                      o.status === "verified"
                        ? "bg-sage/15 text-sage border border-sage/30"
                        : o.status === "utr_submitted"
                        ? "bg-gold/15 text-gold border border-gold/30"
                        : o.status === "failed"
                        ? "bg-ember/15 text-ember border border-ember/30"
                        : "bg-cream text-muted border border-line"
                    }`}
                  >
                    {o.status.replace("_", " ")}
                  </span>
                </div>
                <p className="text-[11px] text-muted font-mono mt-1">
                  Placed: {new Date(o.createdAt).toLocaleString("en-IN")}
                </p>
              </div>

              {/* Amount */}
              <div className="text-left md:text-right">
                <span className="eyebrow text-muted text-[10px] block">PAYABLE</span>
                <span className="font-mono text-base sm:text-lg font-semibold text-ink">
                  {formatINR(o.amount)}
                </span>
              </div>

              {/* UTR Pill */}
              <div className="bg-cream/50 border border-line rounded px-3 py-2 text-left md:text-center min-w-[160px]">
                <span className="eyebrow text-muted text-[9px] block">12-DIGIT UTR / RRN</span>
                <span className="font-mono text-xs font-semibold text-ink select-all">
                  {o.utr || "NOT SUBMITTED"}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {o.status === "utr_submitted" && (
                  <>
                    <button
                      onClick={() => handleVerify(o.id)}
                      className="px-4 py-2 bg-sage text-bg text-xs font-medium rounded-sm hover:opacity-90 transition-opacity flex items-center gap-1.5"
                    >
                      <Check size={14} className="stroke-[2.5]" />
                      Verify
                    </button>
                    <button
                      onClick={() => handleReject(o.id)}
                      className="px-4 py-2 border border-ember text-ember text-xs font-medium rounded-sm hover:bg-ember hover:text-bg transition-colors flex items-center gap-1.5"
                    >
                      <X size={14} className="stroke-[2.5]" />
                      Reject
                    </button>
                  </>
                )}

                {o.status === "verified" && (
                  <div className="flex items-center gap-1.5 text-sage text-xs font-medium font-sans">
                    <CheckCircle2 size={16} className="stroke-[2]" />
                    <span>Settled</span>
                  </div>
                )}

                {o.status === "failed" && (
                  <div className="flex items-center gap-1.5 text-ember text-xs font-medium font-sans">
                    <XCircle size={16} className="stroke-[2]" />
                    <span>Rejected</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Admin Notice */}
      <div className="mt-8 border border-line rounded-lg p-4 bg-cream/30 flex items-center gap-3 text-xs text-muted">
        <ShieldCheck className="w-4 h-4 text-gold shrink-0 stroke-[1.75]" />
        <span>
          Merchant verification operates locally in demo mode. In a multi-user environment, connect to a central database to synchronize orders across administrative terminals.
        </span>
      </div>
    </div>
  </div>
  );
}
