import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MHKMarkedia — High-Converting Websites & #1 Map SEO",
    short_name: "MHKMarkedia",
    description:
      "Scale your business with high-converting custom web apps, sub-second headless stores, and #1 Google Map Pack rankings engineered by CEO M. Hafeez Khan.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0F172A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
