import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/mock-data";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductBelowTheFold } from "@/components/product/ProductBelowTheFold";
import { ProductRail } from "@/components/home/ProductRail";
import { RecentlyViewedRail } from "@/components/product/RecentlyViewedRail";
import { ChevronRight } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  // Recommended products in the same category or brand (balanced 4 items)
  let recommendedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.brand === product.brand)
  ).slice(0, 4);

  if (recommendedProducts.length < 4) {
    const extra = PRODUCTS.filter(
      (p) => p.id !== product.id && !recommendedProducts.some((r) => r.id === p.id)
    ).slice(0, 4 - recommendedProducts.length);
    recommendedProducts = [...recommendedProducts, ...extra];
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted mb-8">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 stroke-[1.5]" />
        <Link href={`/category/${product.categorySlug}`} className="hover:text-ink transition-colors">
          {product.categoryName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 stroke-[1.5]" />
        <span className="text-ink font-medium truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Main PDP Grid: 7 cols Gallery + 5 cols Info (sticky) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Gallery (7 cols) */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Info (5 cols sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Below the Fold: Highlights, Technical Specs, In the Box, Warranty, Reviews, FAQs */}
      <ProductBelowTheFold product={product} />

      {/* Recommended Products Rail */}
      {recommendedProducts.length > 0 && (
        <ProductRail
          eyebrow="CURATED PAIRINGS &bull; HARDWARE COMPATIBILITY"
          title="Recommended Products"
          description="Carefully tested complementary hardware and alternatives matching your selected unit."
          products={recommendedProducts}
        />
      )}

      {/* Recently Viewed Products Rail */}
      <RecentlyViewedRail currentProductId={product.id} />
    </div>
  );
}

