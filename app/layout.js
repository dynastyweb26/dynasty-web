import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://dynastyweb.co";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dynasty Web — Software for the trades",
    template: "%s · Dynasty Web",
  },
  description:
    "A solo-run product studio in Forney, Texas, building subscription software for small trade businesses. Makers of On It and T-Vault.",
  keywords: [
    "Dynasty Web",
    "product studio",
    "trade software",
    "invoicing software",
    "On It",
    "T-Vault",
    "Forney Texas",
    "small business software",
  ],
  authors: [{ name: "Brandon Fotsing Talla" }],
  creator: "Brandon Fotsing Talla",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Dynasty Web",
    title: "Dynasty Web — Software for the trades",
    description:
      "A solo-run product studio building subscription software for small trade businesses. Makers of On It and T-Vault.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynasty Web — Software for the trades",
    description:
      "A solo-run product studio building subscription software for small trade businesses. Makers of On It and T-Vault.",
  },
  icons: {
    icon: "/icon",
  },
};

export const viewport = {
  themeColor: "#faf4e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Mark JS as available before first paint so the scroll-reveal
            styles only apply when they can actually be undone. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
