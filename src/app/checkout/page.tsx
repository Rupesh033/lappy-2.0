"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatINR } from "@/lib/utils";
import { calculateGst } from "@/lib/gst";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, ArrowRight, Check, MapPin, Truck, QrCode } from "lucide-react";
import { useToastStore } from "@/store/toastStore";
import { STORE_INFO } from "@/lib/mock-data";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal } = useCartStore();
  const { addToast } = useToastStore();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    altPhone: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    deliveryNotes: "",
    isB2b: false,
    gstin: "",
    companyName: "",
    shippingMethod: "express_air",
  });

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const subtotal = getSubtotal();
  const gstBreakdown = calculateGst(subtotal);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        addToast("Please fill in required contact information.", "error");
        return;
      }
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentStep === 2) {
      if (!formData.addressLine1 || !formData.city || !formData.state || !formData.pincode) {
        addToast("Please complete all shipping address fields.", "error");
        return;
      }
      if (formData.pincode.length !== 6) {
        addToast("Please provide a valid 6-digit Indian postal PIN code.", "error");
        return;
      }
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Save customer info in sessionStorage
      if (typeof window !== "undefined") {
        sessionStorage.setItem("lappy_checkout_data", JSON.stringify(formData));
      }
      const orderId = `LP-${Date.now().toString().slice(-6)}`;
      router.push(`/checkout/payment?id=${orderId}&amt=${subtotal}`);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 text-center">
        <div className="border border-line rounded-lg bg-surface p-12 max-w-lg mx-auto">
          <p className="font-display text-2xl text-ink mb-2">Your bag is empty.</p>
          <p className="text-xs text-muted mb-8">
            Please add hardware from the store before proceeding to checkout.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center font-sans font-medium text-[13px] px-6 py-3.5 rounded-sm bg-ink text-bg hover:bg-gold hover:text-ink transition-colors"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-16">
      {/* Page Header */}
      <div className="mb-8 text-center max-w-xl mx-auto">
        <span className="eyebrow text-gold block mb-1">
          {STORE_INFO.name} &bull; SECURE CHECKOUT
        </span>
        <h1 className="h-display text-3xl md:text-4xl text-ink">Finalize Order</h1>
        <p className="text-xs text-muted mt-1 font-sans">
          All orders are verified by our technical staff before insured courier handover.
        </p>
      </div>

      {/* 3-Step Progress Bar (Thin line with filled dots) */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-line -translate-y-1/2 z-0" />

          {[
            { step: 1, label: "01 Contact" },
            { step: 2, label: "02 Shipping Address" },
            { step: 3, label: "03 Payment Review" },
          ].map(({ step, label }) => {
            const isDone = currentStep > step;
            const isCurrent = currentStep === step;

            return (
              <button
                key={step}
                type="button"
                onClick={() => isDone && setCurrentStep(step as 1 | 2 | 3)}
                className="relative z-10 flex flex-col items-center group cursor-pointer bg-bg px-2"
              >
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isDone
                      ? "bg-gold text-ink"
                      : isCurrent
                      ? "bg-ink ring-4 ring-gold/20"
                      : "bg-surface border border-line"
                  }`}
                >
                  {isDone && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
                <span
                  className={`text-[11px] font-mono mt-2 transition-colors ${
                    isCurrent ? "text-ink font-semibold" : "text-muted"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: 7 cols Form + 5 cols Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Form Column (7 cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleNext} className="border border-line rounded-lg bg-surface p-6 sm:p-8 space-y-8">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-line pb-4">
                  <span className="eyebrow text-gold block mb-1">STEP 01</span>
                  <h2 className="font-display text-2xl text-ink">Client Identity &amp; Tax Info</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name *"
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                  <Input
                    label="Email Address (For PDF Invoice) *"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Mobile Number (For Courier OTP) *"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Input
                    label="Alternate / WhatsApp Phone"
                    type="tel"
                    placeholder="Optional backup number"
                    value={formData.altPhone}
                    onChange={(e) => setFormData({ ...formData, altPhone: e.target.value })}
                  />
                </div>

                {/* B2B GSTIN Invoicing Toggle */}
                <div className="pt-4 border-t border-line/60">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.isB2b}
                      onChange={(e) => setFormData({ ...formData, isB2b: e.target.checked })}
                      className="w-4 h-4 rounded-sm accent-ink"
                    />
                    <div>
                      <span className="text-xs font-semibold text-ink block">
                        Need 18% GST Input Tax Credit (ITC) Commercial Tax Invoice?
                      </span>
                      <span className="text-[11px] text-muted block">
                        Claim input tax credit on your corporate or business GST return.
                      </span>
                    </div>
                  </label>

                  {formData.isB2b && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-4 rounded bg-cream/30 border border-line">
                      <Input
                        label="Registered Business GSTIN *"
                        value={formData.gstin}
                        onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
                        placeholder="e.g. 20AAAAA0000A1Z5"
                        required={formData.isB2b}
                      />
                      <Input
                        label="Company / Firm Legal Name *"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Enterprise Tech Pvt Ltd"
                        required={formData.isB2b}
                      />
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button type="submit" size="md">
                    Proceed to Delivery Address <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Delivery Destination */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-line pb-4 flex justify-between items-baseline">
                  <div>
                    <span className="eyebrow text-gold block mb-1">STEP 02</span>
                    <h2 className="font-display text-2xl text-ink">Shipping Address</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-muted hover:text-ink underline"
                  >
                    Edit Contact Info
                  </button>
                </div>

                <Input
                  label="Flat / Building / House No. &amp; Street *"
                  placeholder="e.g. Flat 302, Green Park Apartments, Main Road"
                  value={formData.addressLine1}
                  onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Area / Colony / Locality"
                    placeholder="e.g. Chiniya Road, Near G P Plaza"
                    value={formData.addressLine2}
                    onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                  />
                  <Input
                    label="Nearby Landmark"
                    placeholder="e.g. Opposite Post Office"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input
                    label="City / Town *"
                    placeholder="e.g. Garhwa / Ranchi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                  <Input
                    label="State / Province *"
                    placeholder="e.g. Jharkhand"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                  />
                  <Input
                    label="Postal PIN Code (6 digits) *"
                    placeholder="e.g. 822114"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                    required
                  />
                </div>

                <Input
                  label="Delivery Instructions (Optional)"
                  placeholder="e.g. Call before delivery, deliver between 10am - 6pm"
                  value={formData.deliveryNotes}
                  onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                />

                <div className="pt-4 border-t border-line/60">
                  <span className="eyebrow text-muted block mb-3">SELECT SHIPPING OPTION</span>
                  <div className="border border-ink p-4 rounded bg-cream/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-blue stroke-[1.75]" />
                      <div>
                        <span className="text-xs font-semibold text-ink block">
                          Insured Express Air Logistics (BlueDart / Delhivery / Speed Post)
                        </span>
                        <span className="text-[11px] text-muted block mt-0.5">
                          Direct from Garhwa store with shock-proof sealed security strip packaging
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-sage font-mono">FREE</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setCurrentStep(1)}
                  >
                    Back
                  </Button>
                  <Button type="submit">
                    Review &amp; Pay via UPI QR <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Verification Review */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-line pb-4 flex justify-between items-baseline">
                  <div>
                    <span className="eyebrow text-gold block mb-1">STEP 03</span>
                    <h2 className="font-display text-2xl text-ink">Payment Method</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-xs text-muted hover:text-ink underline"
                  >
                    Change Address
                  </button>
                </div>

                <div className="space-y-3 p-4 bg-cream/30 rounded border border-line text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ink block">
                        {formData.fullName} ({formData.phone})
                      </span>
                      <p className="text-muted text-[11px] mt-0.5">
                        {formData.addressLine1}
                        {formData.addressLine2 ? `, ${formData.addressLine2}` : ""}
                        {formData.landmark ? `, Near ${formData.landmark}` : ""}
                        , {formData.city}, {formData.state} - {formData.pincode}
                      </p>
                    </div>
                  </div>

                  {formData.isB2b && (
                    <div className="border-t border-line/60 pt-2 text-[11px] flex justify-between">
                      <span className="text-gold font-medium">B2B Tax Invoice (18% ITC):</span>
                      <span className="font-mono text-ink">{formData.gstin} ({formData.companyName})</span>
                    </div>
                  )}
                </div>

                {/* UPI QR Payment Highlight Box */}
                <div className="p-6 border border-ink rounded-lg bg-surface space-y-4">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-6 h-6 text-gold stroke-[1.75]" />
                    <div>
                      <h4 className="text-sm font-semibold text-ink">
                        Scan UPI QR Code &bull; Direct Merchant Settlement
                      </h4>
                      <p className="text-xs text-muted">
                        Official Store UPI ID: <strong className="font-mono text-ink">{STORE_INFO.upiId}</strong>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed font-sans border-t border-line/60 pt-3">
                    Clicking the button below will immediately open the dedicated UPI payment screen with a dynamic QR code for <strong className="text-ink">{formatINR(subtotal)}</strong>. You can scan with PhonePe, Google Pay, Paytm, or BHIM.
                  </p>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setCurrentStep(2)}
                  >
                    Back
                  </Button>
                  <Button type="submit">
                    Generate UPI QR Code ({formatINR(subtotal)})
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Sticky Order Summary Column (5 cols) */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="border border-line rounded-lg bg-surface p-6 space-y-6">
            <div className="flex justify-between items-baseline pb-3 border-b border-line">
              <h3 className="font-display text-lg text-ink">
                Order Manifest ({items.length} {items.length === 1 ? "item" : "items"})
              </h3>
              <Link href="/cart" className="text-xs text-muted hover:text-ink underline">
                Edit Bag
              </Link>
            </div>

            {/* Compact items list */}
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1 divide-y divide-line/40">
              {items.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 flex items-center gap-3">
                  <div className="relative w-14 h-14 bg-cream rounded shrink-0 overflow-hidden border border-line/40">
                    <Image
                      src={item.product.images.primary}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-ink truncate">{item.product.name}</h4>
                    <span className="font-mono text-[10px] text-muted block">{item.configLabel}</span>
                    <span className="text-[11px] text-muted">Qty: {item.quantity}</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-ink">
                    {formatINR(item.unitPrice * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Financial breakdown */}
            <div className="pt-4 border-t border-line space-y-2 text-xs text-muted font-sans">
              <div className="flex justify-between">
                <span>Base Taxable Value</span>
                <span className="font-mono text-ink">{formatINR(gstBreakdown.baseAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Input Tax Credit GST (18%)</span>
                <span className="font-mono text-ink">{formatINR(gstBreakdown.gstAmount)}</span>
              </div>
              <div className="flex justify-between text-ink">
                <span>Insured Transit (India)</span>
                <span className="text-sage font-medium uppercase text-[10px] tracking-wider">
                  FREE
                </span>
              </div>
              <div className="pt-3 border-t border-line flex justify-between text-base font-semibold text-ink">
                <span>Total Amount Due</span>
                <span className="font-mono text-xl">{formatINR(subtotal)}</span>
              </div>
            </div>

            {/* Store Guarantee */}
            <div className="pt-4 border-t border-line/60 flex items-start gap-2.5 text-[11px] text-muted">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5 stroke-[1.75]" />
              <p>
                Authorized retail sale by <strong>{STORE_INFO.name}</strong>. Certified invoice generated upon transaction settlement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
