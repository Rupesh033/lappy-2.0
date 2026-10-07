import React from "react";
import { ShieldCheck, Percent, Truck, Award } from "lucide-react";

export function TrustStrip() {
  const highlights = [
    {
      title: "100% Genuine",
      description: "Direct brand distribution",
      icon: ShieldCheck,
    },
    {
      title: "Wholesale Rates",
      description: "Best pricing & 18% GST",
      icon: Percent,
    },
    {
      title: "Fast Shipping",
      description: "All India express delivery",
      icon: Truck,
    },
    {
      title: "Iconic Brands",
      description: "15+ premier manufacturers",
      icon: Award,
    },
  ];

  return (
    <section className="relative z-10 w-full bg-[#FAF8F3] py-2 md:py-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-[#E7E4DD] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:border-[#0066B3]/60 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FAF8F3] border border-[#E7E4DD] flex items-center justify-center shrink-0 text-[#0066B3] group-hover:bg-[#0066B3] group-hover:text-white group-hover:border-[#0066B3] transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-[#071A33] group-hover:text-[#0066B3] transition-colors leading-tight truncate font-outfit">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#667085] font-normal truncate mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
