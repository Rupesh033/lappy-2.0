import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/mock-data";
import { PlpClient } from "@/components/plp/PlpClient";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found | LAPPY" };

  return {
    title: `${category.title} Laptops | LAPPY Curated Technology`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) notFound();

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === slug);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted mb-8">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 stroke-[1.5]" />
        <span className="text-ink font-medium">{category.title}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-12 max-w-2xl">
        <span className="eyebrow text-gold block mb-2">{category.eyebrow}</span>
        <h1 className="h-display text-ink mb-4">{category.title}</h1>
        <p className="text-sm text-muted leading-relaxed font-sans">{category.description}</p>
      </div>

      {/* Interactive PLP Client (Sidebar + Products) */}
      <PlpClient initialProducts={categoryProducts} />
    </div>
  );
}
