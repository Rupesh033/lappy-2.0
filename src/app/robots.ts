import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout/", "/order-confirmation/"],
    },
    sitemap: "https://lappy.in/sitemap.xml",
  };
}
