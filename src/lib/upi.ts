"use server";

import { UPIQR, UPILink } from "smart-upiqr";
import path from "path";
import fs from "fs";

export async function generateOrderUpiQr(params: {
  orderId: string;
  amount: number;
  note?: string;
}) {
  const { orderId, amount, note } = params;

  const payeeUpi = process.env.UPI_VPA || "8789320315@ptsbi";
  const payeeName = process.env.UPI_NAME || "LAPPY SOLUTION";

  // 1. UPI Intent Link (mobile ke liye)
  const upiLink = UPILink({
    PayeeUPI: payeeUpi,
    PayeeName: payeeName,
    Amount: amount,
    TransactionNote: note || `Order ${orderId}`,
    TransactionRef: orderId,
    QrExpireDays: 1, // package-level expiry (din mein)
  });

  // 2. Resolve logo path safely from filesystem
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const hasLogo = fs.existsSync(logoPath);

  // 3. UPI QR Code (base64 image string)
  const upiQr = await UPIQR({
    PayeeUPI: payeeUpi,
    PayeeName: payeeName,
    Amount: amount,
    TransactionNote: note || `Order ${orderId}`,
    TransactionRef: orderId,
    QrExpireDays: 1,
    ...(hasLogo ? { logo: logoPath, logoSize: 70 } : {}),
    color: {
      dark: "#111111", // LAPPY ink
      light: "#FFFFFF",
    },
  });

  return { upiLink, upiQr: upiQr || "" };
}

export async function buildUpiUri(params: {
  vpa: string;
  payeeName: string;
  amount: number;
  transactionNote: string;
  transactionRef: string;
}): Promise<string> {
  const query = new URLSearchParams({
    pa: params.vpa,
    pn: params.payeeName,
    am: params.amount.toFixed(2),
    tn: params.transactionNote,
    tr: params.transactionRef,
    cu: "INR",
  });
  return `upi://pay?${query.toString()}`;
}
