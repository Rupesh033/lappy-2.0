"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import UpiQr from "@/components/checkout/UpiQr";
import { generateOrderUpiQr } from "@/lib/upi";
import { useOrders } from "@/store/orderStore";
import { useCartStore } from "@/store/cartStore";
import { useToastStore } from "@/store/toastStore";
import { Loader2, CheckCircle2 } from "lucide-react";
import { formatINR } from "@/lib/utils";

function PaymentInner() {
  const params = useSearchParams();
  const router = useRouter();
  const toast = useToastStore((s) => s.push);
  const clearCart = useCartStore((s) => s.clear);
  const { createOrder, getOrder } = useOrders();

  const [orderId] = useState(
    () => params.get("id") || params.get("orderId") || `LP-${Date.now().toString().slice(-6)}`
  );
  const [amount] = useState(() => {
    const pAmt = Number(params.get("amt") || params.get("amount") || 0);
    if (pAmt > 0) return pAmt;
    return useCartStore.getState().getSubtotal() || 189900;
  });

  const [qrData, setQrData] = useState<{ upiQr: string; upiLink: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<"qr" | "submitted">("qr");

  // Rehydrate cart store & create initial pending order on mount
  useEffect(() => {
    useCartStore.persist.rehydrate();
    if (!getOrder(orderId)) {
      createOrder({ id: orderId, amount, items: [] });
    }
  }, [orderId, amount, createOrder, getOrder]);

  // Generate QR on mount via Server Action
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const data = await generateOrderUpiQr({ orderId, amount });
        if (isMounted) {
          setQrData({ upiQr: data.upiQr, upiLink: data.upiLink });
        }
      } catch (e) {
        console.error("QR generation failed", e);
        toast({ title: "QR generation failed", desc: "Please reload to try again.", type: "error" });
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [orderId, amount, toast]);

  if (loading) {
    return (
      <div className="py-32 text-center flex flex-col items-center justify-center space-y-4">
        <Loader2 className="animate-spin text-gold" size={32} />
        <h3 className="font-display text-xl text-ink">Generating UPI Payment QR…</h3>
        <p className="text-xs text-muted font-sans">Connecting to LAPPY SOLUTION payment gateway</p>
      </div>
    );
  }

  if (step === "submitted") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-sage/15 text-sage mx-auto flex items-center justify-center">
          <CheckCircle2 size={36} strokeWidth={1.75} />
        </div>
        <p className="eyebrow text-gold mt-6 mb-2">UTR SUBMITTED</p>
        <h1 className="h-display text-3xl md:text-4xl text-ink mb-3">
          Verification in Progress
        </h1>
        <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
          We&apos;ll verify your payment reference against our SBI merchant ledger within 30 minutes.
          You can track dispatch directly from your order manifest.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => router.push(`/order-confirmation?orderId=${orderId}&id=${orderId}&amount=${amount}&amt=${amount}`)}
            className="px-6 py-3 bg-ink text-bg text-xs font-medium rounded-sm hover:bg-gold hover:text-ink transition-colors"
          >
            View Order Status Manifest
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-20 text-center">
      <span className="eyebrow text-gold mb-2 block">SECURE UPI SETTLEMENT</span>
      <h1 className="h-display text-3xl md:text-4xl text-ink mb-2">
        Scan &amp; Pay
      </h1>
      <p className="text-xs text-muted mb-8 font-mono">
        ORDER IDENTIFIER: <span className="text-ink font-semibold">{orderId}</span> &bull; {formatINR(amount)}
      </p>

      {qrData && (
        <UpiQr
          orderId={orderId}
          amount={amount}
          upiQrBase64={qrData.upiQr}
          upiLink={qrData.upiLink}
          onSuccess={() => {
            setStep("submitted");
            clearCart();
            toast({ title: "UTR Submitted", desc: "Our team will verify shortly.", type: "success" });
          }}
        />
      )}

      <p className="mt-8 text-[11px] text-muted text-center max-w-md mx-auto leading-relaxed">
        Payment is verified by our billing desk at LAPPY SOLUTION, Chiniya Road, Garhwa. For urgent confirmation, WhatsApp our helpline at <strong className="text-ink">9608828288</strong>.
      </p>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="py-32 text-center text-xs font-mono text-muted flex flex-col items-center gap-3">
          <Loader2 className="animate-spin text-gold" size={24} />
          Loading payment interface...
        </div>
      }
    >
      <PaymentInner />
    </Suspense>
  );
}
