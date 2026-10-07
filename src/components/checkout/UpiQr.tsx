"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Loader2, XCircle, QrCode } from "lucide-react";
import Timer from "./Timer";
import { useOrders } from "@/store/orderStore";
import { formatINR } from "@/lib/utils";

export default function UpiQr({
  orderId,
  amount,
  upiQrBase64,
  upiLink,
  vpa = process.env.NEXT_PUBLIC_UPI_VPA || "8789320315@ptsbi",
  onSuccess,
}: {
  orderId: string;
  amount: number;
  upiQrBase64: string;
  upiLink: string;
  vpa?: string;
  onSuccess?: () => void;
}) {
  const [expired, setExpired] = useState(false);
  const [utr, setUtr] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const { submitUtr } = useOrders();

  // UTR validation — UPI UTR is 12 digits numeric
  const isValidUtr = /^\d{12}$/.test(utr);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(vpa);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const handleSubmitUtr = () => {
    if (!isValidUtr) return;
    setSubmitting(true);
    setTimeout(() => {
      submitUtr(orderId, utr);
      setSubmitting(false);
      onSuccess?.();
    }, 800);
  };

  if (expired) {
    return (
      <div className="bg-surface border border-line rounded-lg p-10 text-center max-w-sm mx-auto shadow-card">
        <XCircle className="mx-auto text-ember" size={40} strokeWidth={1.5} />
        <p className="mt-4 text-ink font-display text-xl font-medium">QR Expired</p>
        <p className="text-xs text-muted mt-1.5 font-sans">
          The 5-minute security settlement window has lapsed. Please regenerate the payment QR to proceed.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center justify-center font-sans font-medium text-xs px-5 py-2.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
        >
          Regenerate QR Code
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 max-w-sm mx-auto text-center shadow-card">
      {/* QR Image Container */}
      <div className="bg-white p-3 inline-block rounded border border-line relative shadow-sm">
        {upiQrBase64 ? (
          <Image
            src={upiQrBase64}
            alt="UPI QR Code"
            width={220}
            height={220}
            unoptimized // base64 string image
            className="w-52 h-52 object-contain"
          />
        ) : (
          <div className="w-52 h-52 flex flex-col items-center justify-center text-muted gap-2">
            <Loader2 className="animate-spin text-gold" size={24} />
            <span className="text-xs font-mono">Generating QR...</span>
          </div>
        )}
      </div>

      {/* Amount in JetBrains Mono */}
      <p className="mt-4 font-mono text-2xl sm:text-3xl font-semibold text-ink">
        {formatINR(amount)}
      </p>
      <p className="text-xs text-muted mt-1 font-sans flex items-center justify-center gap-1.5">
        <QrCode className="w-3.5 h-3.5 text-gold" />
        Scan with any UPI app
      </p>

      {/* VPA Copy Pill */}
      <div className="mt-4">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-ink transition-colors px-3 py-1.5 rounded bg-cream/50 border border-line/60"
          title="Click to copy UPI ID"
        >
          {copied ? <Check size={13} className="text-sage stroke-[2.5]" /> : <Copy size={13} />}
          <span className="select-all">{vpa}</span>
        </button>
      </div>

      {/* 5-Minute Timer */}
      <div className="mt-3.5 pt-3 border-t border-line/40">
        <Timer seconds={300} onExpire={() => setExpired(true)} />
      </div>

      {/* Mobile: Open in UPI App */}
      <a
        href={upiLink}
        className="mt-4 block w-full bg-ink text-bg py-3 text-xs font-medium rounded-sm hover:bg-gold hover:text-ink transition-colors"
      >
        Open in UPI App (GPay / PhonePe / Paytm)
      </a>

      <p className="mt-2.5 text-[11px] text-muted">
        GPay &bull; PhonePe &bull; Paytm &bull; BHIM &bull; Super.money
      </p>

      {/* Divider */}
      <div className="my-6 border-t border-line/60" />

      {/* UTR Form */}
      <div className="text-left">
        <label className="eyebrow text-muted text-[10px] mb-1.5 block">
          PAYMENT UTR / RRN (12 DIGITS)
        </label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={12}
          value={utr}
          onChange={(e) => setUtr(e.target.value.replace(/\D/g, "").slice(0, 12))}
          placeholder="e.g. 427819384729"
          className="w-full bg-bg border border-line rounded-sm px-4 py-2.5 text-xs font-mono text-ink placeholder:text-muted/60 focus:outline-none focus:border-ink focus:ring-1 focus:ring-gold/30 transition-colors"
        />
        <p className="text-[10px] text-muted mt-1.5 font-sans">
          UPI App &rarr; History &rarr; Tap Transaction &rarr; 12-digit UTR / UPI Ref ID
        </p>

        <button
          onClick={handleSubmitUtr}
          disabled={!isValidUtr || submitting}
          className="mt-4 w-full bg-ink text-bg py-3 text-xs font-medium rounded-sm hover:bg-gold hover:text-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" size={14} />
              Submitting UTR…
            </>
          ) : (
            "I Have Paid"
          )}
        </button>
      </div>
    </div>
  );
}
