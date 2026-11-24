import { SITE_URL } from "../data/seo";
import { siteData } from "../data/site";

// /products (storefront proxy) is intentionally left out: direct link only.
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/on-it", priority: 0.8, changeFrequency: "monthly" },
  { path: "/packages", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ...siteData.work
    .filter((w) => !w.builtInHouse && w.slug && w.caseStudy)
    .map((w) => ({ path: `/work/${w.slug}`, priority: 0.8, changeFrequency: "monthly" })),
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
