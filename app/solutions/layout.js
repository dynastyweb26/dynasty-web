import { pageMetadata } from "../../data/seo";

// page.js is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "Solutions: Custom Software & Supporting Services",
  description:
    "Custom software built around your company, plus websites, branding, social media, invoicing with On It, analytics, email marketing, and local SEO.",
  path: "/solutions",
});

export default function SolutionsLayout({ children }) {
  return children;
}
