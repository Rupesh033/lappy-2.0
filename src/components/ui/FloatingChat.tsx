"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { STORE_INFO } from "@/lib/mock-data";

export function FloatingChat() {
  const whatsappUrl = `https://wa.me/91${STORE_INFO.phone}?text=Hello%20LAPPY%20SOLUTION,%20I%20have%20an%20inquiry%20regarding%20laptops%20and%20products`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Garhwa Store Support Desk"
      className="fixed bottom-5 right-5 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#071A33] hover:bg-[#0066B3] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white/20"
      title="Direct Store WhatsApp Support"
    >
      <MessageCircle className="w-6 h-6 stroke-[1.8] group-hover:rotate-12 transition-transform" />
      {/* Active notification badge matching brightbookstore */}
      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4A93A] text-[#071A33] text-[10px] font-extrabold flex items-center justify-center shadow-xs border-2 border-white">
        1
      </span>
    </a>
  );
}
