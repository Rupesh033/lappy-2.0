"use client";

import React, { useState, useEffect } from "react";
import {
  useWarrantyStore,
  WarrantyClaim,
  WarrantyClaimStatus,
} from "@/store/warrantyStore";
import { useToastStore } from "@/store/toastStore";
import { AdminNav } from "@/components/admin/AdminNav";
import {
  Shield,
  Search,
  Plus,
  Trash2,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Phone,
  Barcode,
  RotateCcw,
  Wrench,
  Check,
} from "lucide-react";

export default function AdminWarrantyPage() {
  const { claims, addClaim, updateStatus, deleteClaim, resetDefaults } =
    useWarrantyStore();
  const { addToast } = useToastStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | WarrantyClaimStatus>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<WarrantyClaim | null>(null);
  const [techNoteInput, setTechNoteInput] = useState("");

  // New claim form state
  const [newClaim, setNewClaim] = useState({
    customerName: "",
    customerPhone: "",
    productName: "",
    serialNumber: "",
    invoiceNumber: "",
    purchaseDate: new Date().toISOString().split("T")[0],
    warrantyPeriod: "1 Year Store Warranty",
    issueReported: "",
    status: "pending" as WarrantyClaimStatus,
  });

  useEffect(() => {
    useWarrantyStore.persist.rehydrate();
  }, []);

  // Filtered claims based on search and status
  const filteredClaims = claims.filter((claim) => {
    const matchesStatus =
      statusFilter === "all" ? true : claim.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      claim.id.toLowerCase().includes(q) ||
      claim.customerName.toLowerCase().includes(q) ||
      claim.customerPhone.includes(q) ||
      claim.serialNumber.toLowerCase().includes(q) ||
      claim.productName.toLowerCase().includes(q) ||
      claim.invoiceNumber.toLowerCase().includes(q);

    return matchesStatus && matchesSearch;
  });

  const handleCreateClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClaim.customerName || !newClaim.customerPhone || !newClaim.productName) {
      addToast("Please fill in required customer and product details.", "error");
      return;
    }

    addClaim(newClaim);
    addToast("Warranty claim registered successfully in Admin desk.", "success");
    setIsModalOpen(false);
    setNewClaim({
      customerName: "",
      customerPhone: "",
      productName: "",
      serialNumber: "",
      invoiceNumber: "",
      purchaseDate: new Date().toISOString().split("T")[0],
      warrantyPeriod: "1 Year Store Warranty",
      issueReported: "",
      status: "pending",
    });
  };

  const handleUpdateStatus = (id: string, status: WarrantyClaimStatus) => {
    updateStatus(id, status, techNoteInput);
    addToast(`Claim status updated to ${status}.`, "success");
    setSelectedClaim(null);
    setTechNoteInput("");
  };

  const getStatusBadge = (status: WarrantyClaimStatus) => {
    switch (status) {
      case "approved":
      case "repaired":
      case "replaced":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" />
            {status}
          </span>
        );
      case "inspecting":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
            <Wrench className="w-3 h-3" />
            Under Inspection
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
            <AlertCircle className="w-3 h-3" />
            Rejected
          </span>
        );
      case "pending":
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0066B3] border border-blue-200">
            <Clock className="w-3 h-3" />
            Pending Review
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#172033] font-outfit">
      <AdminNav />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E7E4DD] mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0066B3] bg-[#0066B3]/10 px-2.5 py-0.5 rounded-full">
                ADMIN EXCLUSIVE DESK
              </span>
              <span className="text-[11px] font-bold text-[#667085]">
                Internal Store Use Only (Hidden From Storefront)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#071A33]">
              Warranty &amp; Claims Desk
            </h1>
            <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-2xl font-normal">
              Manage internal hardware warranty verification, record customer repair claims, track serial numbers, and log technician service notes safely without exposing public claims on the website.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                if (confirm("Reset claims to sample demonstration records?")) {
                  resetDefaults();
                  addToast("Warranty records reset to defaults.", "success");
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E7E4DD] bg-white text-xs font-bold text-[#667085] hover:text-[#071A33] hover:bg-[#FAF8F3] transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Records</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066B3] hover:bg-[#004F8A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Register Claim</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667085]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search serial number, phone, claim ID, or customer..."
              className="w-full bg-white border border-[#E7E4DD] rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-[#071A33] placeholder-[#667085] outline-none focus:border-[#0066B3] shadow-xs"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E7E4DD] rounded-xl overflow-x-auto shadow-xs">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                statusFilter === "all"
                  ? "bg-[#071A33] text-white shadow-xs"
                  : "text-[#667085] hover:text-[#071A33]"
              }`}
            >
              All ({claims.length})
            </button>
            <button
              onClick={() => setStatusFilter("pending")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                statusFilter === "pending"
                  ? "bg-[#0066B3] text-white shadow-xs"
                  : "text-[#667085] hover:text-[#0066B3]"
              }`}
            >
              Pending ({claims.filter((c) => c.status === "pending").length})
            </button>
            <button
              onClick={() => setStatusFilter("inspecting")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                statusFilter === "inspecting"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-[#667085] hover:text-amber-700"
              }`}
            >
              Inspecting ({claims.filter((c) => c.status === "inspecting").length})
            </button>
            <button
              onClick={() => setStatusFilter("approved")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                statusFilter === "approved"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-[#667085] hover:text-emerald-700"
              }`}
            >
              Approved ({claims.filter((c) => c.status === "approved").length})
            </button>
          </div>
        </div>

        {/* Claims Table / List */}
        <div className="space-y-4">
          {filteredClaims.length === 0 ? (
            <div className="bg-white border border-[#E7E4DD] rounded-2xl p-12 text-center max-w-md mx-auto shadow-xs">
              <Shield className="w-10 h-10 text-[#667085] mx-auto mb-3 stroke-[1.5]" />
              <h4 className="font-extrabold text-lg text-[#071A33]">No Warranty Claims Found</h4>
              <p className="text-xs text-[#667085] mt-1 mb-4">
                No records match your query. Click below to register a customer claim.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#0066B3] text-white text-xs font-bold"
              >
                New Claim
              </button>
            </div>
          ) : (
            filteredClaims.map((claim) => (
              <div
                key={claim.id}
                className="bg-white border border-[#E7E4DD] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#FAF8F3]">
                  {/* Claim Identity */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E7E4DD] flex items-center justify-center font-mono font-bold text-xs text-[#0066B3] shrink-0">
                      {claim.id.slice(4)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#071A33]">
                          {claim.customerName}
                        </span>
                        <span className="text-xs text-[#667085] font-mono flex items-center gap-1">
                          <Phone className="w-3 h-3 text-[#0066B3]" />
                          +91 {claim.customerPhone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#667085] mt-0.5">
                        <span className="font-mono text-[#071A33] font-bold">{claim.id}</span>
                        <span>•</span>
                        <span>Invoice: <code>{claim.invoiceNumber || "N/A"}</code></span>
                        <span>•</span>
                        <span>Date: {claim.purchaseDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center gap-3">
                    {getStatusBadge(claim.status)}

                    <button
                      onClick={() => setSelectedClaim(claim)}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF8F3] hover:bg-[#0066B3] hover:text-white border border-[#E7E4DD] text-xs font-bold text-[#071A33] transition-colors"
                    >
                      Update Status
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Delete claim ${claim.id}?`)) {
                          deleteClaim(claim.id);
                          addToast("Claim removed from admin records.", "error");
                        }
                      }}
                      className="w-8 h-8 rounded-lg bg-[#FAF8F3] hover:bg-red-100 hover:text-red-700 border border-[#E7E4DD] flex items-center justify-center text-[#667085] transition-colors"
                      title="Delete Claim"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Hardware & Issue Specs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs">
                  <div>
                    <span className="text-[#667085] block text-[11px] uppercase font-bold mb-0.5">
                      Hardware Unit
                    </span>
                    <p className="font-bold text-[#071A33]">{claim.productName}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#667085] mt-1 font-mono">
                      <Barcode className="w-3.5 h-3.5 text-[#0066B3]" />
                      <span>S/N: <strong>{claim.serialNumber || "Unassigned"}</strong></span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#667085] block text-[11px] uppercase font-bold mb-0.5">
                      Reported Defect / Issue
                    </span>
                    <p className="text-[#071A33] leading-relaxed bg-[#FAF8F3] p-2.5 rounded-xl border border-[#E7E4DD]">
                      {claim.issueReported}
                    </p>
                  </div>

                  <div>
                    <span className="text-[#667085] block text-[11px] uppercase font-bold mb-0.5">
                      Technician Service Notes
                    </span>
                    <p className="text-[#071A33] leading-relaxed bg-[#FAF8F3] p-2.5 rounded-xl border border-[#E7E4DD] italic">
                      {claim.technicianNotes || "No technician notes logged yet."}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* REGISTER NEW CLAIM MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-[#E7E4DD] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E4DD] mb-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0066B3] bg-[#0066B3]/10 px-2.5 py-0.5 rounded-full">
                  ADMIN ONLY
                </span>
                <h3 className="text-xl font-extrabold text-[#071A33] mt-1">
                  Register Customer Warranty Claim
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#FAF8F3] hover:bg-[#E7E4DD] text-[#071A33] font-bold text-sm flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateClaim} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase mb-1">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    value={newClaim.customerName}
                    onChange={(e) =>
                      setNewClaim({ ...newClaim, customerName: e.target.value })
                    }
                    placeholder="e.g. Ramesh Singh"
                    className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none focus:border-[#0066B3] focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase mb-1">
                    Customer Phone *
                  </label>
                  <input
                    type="text"
                    value={newClaim.customerPhone}
                    onChange={(e) =>
                      setNewClaim({ ...newClaim, customerPhone: e.target.value })
                    }
                    placeholder="9608828288"
                    className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] font-mono outline-none focus:border-[#0066B3] focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#071A33] uppercase mb-1">
                  Product Name &amp; Specs *
                </label>
                <input
                  type="text"
                  value={newClaim.productName}
                  onChange={(e) =>
                    setNewClaim({ ...newClaim, productName: e.target.value })
                  }
                  placeholder="e.g. Lenovo ThinkPad T480s (Intel i5 / 16GB / 512GB)"
                  className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none focus:border-[#0066B3] focus:bg-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase mb-1">
                    Hardware Serial No (S/N)
                  </label>
                  <input
                    type="text"
                    value={newClaim.serialNumber}
                    onChange={(e) =>
                      setNewClaim({ ...newClaim, serialNumber: e.target.value })
                    }
                    placeholder="e.g. PF18Z8KQ"
                    className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase mb-1">
                    Tax Invoice No
                  </label>
                  <input
                    type="text"
                    value={newClaim.invoiceNumber}
                    onChange={(e) =>
                      setNewClaim({ ...newClaim, invoiceNumber: e.target.value })
                    }
                    placeholder="INV-2026-0812"
                    className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071A33] uppercase mb-1">
                    Warranty Duration
                  </label>
                  <select
                    value={newClaim.warrantyPeriod}
                    onChange={(e) =>
                      setNewClaim({ ...newClaim, warrantyPeriod: e.target.value })
                    }
                    className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none"
                  >
                    <option value="6 Months Store Warranty">6 Months Store Warranty</option>
                    <option value="1 Year Official Brand Warranty">1 Year Official Brand Warranty</option>
                    <option value="2 Years Extended Care">2 Years Extended Care</option>
                    <option value="Out of Warranty Service">Out of Warranty Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#071A33] uppercase mb-1">
                  Issue / Defect Description *
                </label>
                <textarea
                  value={newClaim.issueReported}
                  onChange={(e) =>
                    setNewClaim({ ...newClaim, issueReported: e.target.value })
                  }
                  rows={3}
                  placeholder="Describe hardware behavior, screen defect, battery issue, or error code..."
                  className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E4DD]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 rounded-xl border border-[#E7E4DD] text-xs font-bold text-[#667085]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#0066B3] hover:bg-[#004F8A] text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  Save Claim Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* UPDATE STATUS MODAL */}
      {selectedClaim && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E7E4DD] shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-extrabold text-[#071A33] mb-1">
              Update Claim {selectedClaim.id}
            </h3>
            <p className="text-xs text-[#667085] mb-4">
              Customer: <strong>{selectedClaim.customerName}</strong> &bull; {selectedClaim.productName}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#071A33] uppercase mb-1.5">
                  Technician / Inspection Notes
                </label>
                <textarea
                  value={techNoteInput}
                  onChange={(e) => setTechNoteInput(e.target.value)}
                  rows={3}
                  placeholder="Enter diagnosis, replaced components, or testing resolution..."
                  className="w-full px-3.5 py-2 bg-[#FAF8F3] border border-[#E7E4DD] rounded-xl text-xs text-[#071A33] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#071A33] uppercase mb-2">
                  Select New Resolution Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedClaim.id, "inspecting")}
                    className="p-2.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-800 text-xs font-bold hover:bg-amber-100"
                  >
                    🛠️ Under Inspection
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedClaim.id, "approved")}
                    className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100"
                  >
                    ✅ Approved &amp; Repaired
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedClaim.id, "replaced")}
                    className="p-2.5 rounded-xl border border-blue-300 bg-blue-50 text-blue-800 text-xs font-bold hover:bg-blue-100"
                  >
                    🔄 Replacement Unit
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedClaim.id, "rejected")}
                    className="p-2.5 rounded-xl border border-red-300 bg-red-50 text-red-800 text-xs font-bold hover:bg-red-100"
                  >
                    ❌ Claim Rejected
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E4DD] flex justify-end">
                <button
                  onClick={() => setSelectedClaim(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#667085] hover:text-[#071A33]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

