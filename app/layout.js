import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
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
    default: "Dynasty Web — Custom Software Built Around Your Company",
    template: "%s · Dynasty Web",
  },
  description:
    "Software studio in the Dallas–Fort Worth area designing and building custom web applications, quoting and operations tools, and customer-facing apps for companies. Makers of On It.",
  keywords: [
    "Dynasty Web",
    "custom software development",
    "custom web application development",
    "software development company Texas",
    "custom software Dallas Fort Worth",
    "quoting software development",
    "customer portal development",
    "On It",
    "Forney Texas",
    "web design Forney TX",
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
    title: "Dynasty Web — Custom Software Built Around Your Company",
    description:
      "Custom software, web applications, and operations tools designed around how your company works. A software studio in Texas.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynasty Web — Custom Software Built Around Your Company",
    description:
      "Custom software, web applications, and operations tools designed around how your company works. A software studio in Texas.",
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
        <Script
          id="js-class-init"
          strategy="beforeInteractive"
          src="data:text/javascript,document.documentElement.classList.add('js')"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
