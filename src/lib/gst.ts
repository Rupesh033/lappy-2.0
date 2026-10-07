export interface GstBreakdown {
  baseAmount: number;
  gstRate: number; // e.g., 0.18 for 18%
  gstAmount: number;
  totalAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
}

export function calculateGst(inclusiveTotal: number, isInterState = false, rate = 0.18): GstBreakdown {
  const baseAmount = Math.round(inclusiveTotal / (1 + rate));
  const gstAmount = inclusiveTotal - baseAmount;
  
  if (isInterState) {
    return {
      baseAmount,
      gstRate: rate,
      gstAmount,
      totalAmount: inclusiveTotal,
      cgst: 0,
      sgst: 0,
      igst: gstAmount,
    };
  }

  const halfGst = Math.round(gstAmount / 2);
  return {
    baseAmount,
    gstRate: rate,
    gstAmount,
    totalAmount: inclusiveTotal,
    cgst: halfGst,
    sgst: gstAmount - halfGst,
    igst: 0,
  };
}
