import { pageMetadata } from "../../data/seo";

// page.js is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "Start a Project",
  description:
    "Tell Dynasty Web what your company needs built. Custom software, websites, and supporting services. We reply within one business day.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
