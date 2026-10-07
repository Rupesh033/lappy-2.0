import React, { Suspense } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Truck, QrCode, Building2, Phone } from "lucide-react";
import { formatINR } from "@/lib/utils";
import { calculateGst } from "@/lib/gst";
import { STORE_INFO } from "@/lib/mock-data";

interface OrderConfirmationContentProps {
  searchParams: Promise<{ orderId?: string; id?: string; amount?: string; amt?: string; utr?: string }>;
}

async function OrderConfirmationContent({ searchParams }: OrderConfirmationContentProps) {
  const resolved = await searchParams;
  const orderId = resolved.orderId || resolved.id || "LP-982341";
  const amount = Number(resolved.amount || resolved.amt) || 189900;
  const utr = resolved.utr || "428910294821";
  const gst = calculateGst(amount);

  return (
    <div className="max-w-2xl mx-auto border border-line rounded-lg bg-surface p-6 sm:p-10 md:p-12 shadow-card space-y-8">
      {/* Success Badge & Header */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-sage/15 text-sage mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 stroke-[1.75]" />
        </div>
        <span className="eyebrow text-gold block">PAYMENT SETTLED &bull; NPCI TRANSACTION VERIFIED</span>
        <h1 className="h-display text-3xl md:text-4xl text-ink">Order Confirmed</h1>
        <p className="text-xs text-muted font-mono">
          ORDER IDENTIFIER: <strong className="text-ink">{orderId}</strong>
        </p>
      </div>

      {/* Payment Settlement Receipt Box */}
      <div className="border border-line rounded-lg p-5 bg-cream/30 space-y-3.5 text-xs">
        <div className="flex justify-between items-center pb-2.5 border-b border-line/60">
          <span className="eyebrow text-muted text-[10px]">PAYMENT METHOD</span>
          <span className="text-sage font-semibold uppercase tracking-wider font-mono text-[11px] flex items-center gap-1.5">
            <QrCode className="w-3.5 h-3.5 text-sage" />
            UPI QR SETTLED
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted">Settled To Store VPA:</span>
          <span className="font-mono font-medium text-ink">{STORE_INFO.upiId}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted">Bank UTR / Transaction Ref:</span>
          <span className="font-mono font-semibold text-ink">{utr}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted">Authorized Merchant:</span>
          <span className="font-medium text-ink">{STORE_INFO.name} ({STORE_INFO.legalName})</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted">Dispatch Fulfillment Center:</span>
          <span className="font-medium text-ink">Garhwa Store (Jharkhand 822114)</span>
        </div>
      </div>

      {/* Manifest Overview */}
      <div className="border border-line rounded-lg p-5 bg-surface space-y-3 text-xs">
        <div className="flex justify-between items-center pb-2 border-b border-line/60">
          <span className="eyebrow text-muted text-[10px]">LOGISTICS MANIFEST</span>
          <span className="text-sage font-semibold uppercase tracking-wider font-mono">
            ALLOCATED FOR COURIER DISPATCH
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Estimated Delivery:</span>
          <span className="font-medium text-ink">Within 48–72 hours via Insured Air Express</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Packaging Clearance:</span>
          <span className="font-medium text-ink">Shock-Proof Seal &amp; Quality Diagnostics Cleared</span>
        </div>
      </div>

      {/* Tax Breakdown */}
      <div className="space-y-3 border-t border-line pt-6 text-xs text-muted">
        <h3 className="eyebrow text-ink text-[11px] mb-2">OFFICIAL GST TAX INVOICE</h3>
        <div className="flex justify-between">
          <span>HSN Code {STORE_INFO.hsnComputing} (Computing Equipment &amp; Peripherals)</span>
          <span className="font-mono text-ink">{formatINR(gst.baseAmount)}</span>
        </div>
        <div className="flex justify-between">
          <span>Central GST (CGST @ 9%)</span>
          <span className="font-mono text-ink">{formatINR(gst.cgst)}</span>
        </div>
        <div className="flex justify-between">
          <span>State GST (SGST @ 9%)</span>
          <span className="font-mono text-ink">{formatINR(gst.sgst)}</span>
        </div>
        <div className="pt-2 border-t border-line flex justify-between text-sm font-semibold text-ink">
          <span>Total Settled (Inclusive of 18% GST)</span>
          <span className="font-mono text-base">{formatINR(amount)}</span>
        </div>
      </div>

      {/* Store Contact & Helpline Bar */}
      <div className="bg-cream/40 rounded border border-line p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-ink">
          <Building2 className="w-4 h-4 text-gold shrink-0" />
          <span>{STORE_INFO.address}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted shrink-0">
          <Phone className="w-3.5 h-3.5 text-ink" />
          <span className="font-mono text-ink font-medium">{STORE_INFO.phone}</span>
        </div>
      </div>

      {/* Logistics & Invoice Actions */}
      <div className="pt-2 border-t border-line flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-ink text-bg rounded text-xs font-medium hover:bg-gold hover:text-ink transition-colors"
        >
          Return to Catalog
          <ArrowRight className="w-3.5 h-3.5 stroke-[1.75]" />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-2 text-center text-[11px] text-muted pt-2">
        <Truck className="w-3.5 h-3.5 text-blue stroke-[1.75]" />
        <span>BlueDart / Speed Post Air Waybill tracking details sent to your phone via WhatsApp &amp; SMS.</span>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; id?: string; amount?: string; amt?: string; utr?: string }>;
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-24">
      <Suspense fallback={<div className="text-center py-20 font-mono text-xs">Loading order details...</div>}>
        <OrderConfirmationContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

