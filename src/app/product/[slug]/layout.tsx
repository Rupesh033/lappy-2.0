import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";

interface ProductLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found | LAPPY" };

  return {
    title: `${product.name} | LAPPY Curated Technology`,
    description: product.editorialSummary,
    openGraph: {
      title: product.name,
      description: product.editorialSummary,
      images: [{ url: product.images.primary, width: 1200, height: 900, alt: product.name }],
    },
  };
}

export default async function ProductLayout({ children, params }: ProductLayoutProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.images.primary, product.images.hover],
    description: product.editorialSummary,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://lappy.in/product/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      priceValidUntil: "2026-12-31",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
