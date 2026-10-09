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
    default: "Dynasty Web — Custom Software & Web Apps for Your Business",
    template: "%s · Dynasty Web",
  },
  description:
    "Software studio in Forney, Texas building custom web apps and business tools tailored to how you work, plus websites. Makers of On It.",
  keywords: [
    "Dynasty Web",
    "custom software development",
    "custom web app development",
    "small business software",
    "digital solutions studio",
    "web design Forney TX",
    "small business websites",
    "On It",
    "Forney Texas",
    "local business web development",
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
    title: "Dynasty Web — Custom Software Tailored to Your Business",
    description:
      "Custom web apps and business tools built around how you work, plus websites. A software studio in Forney, Texas.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynasty Web — Custom Software Tailored to Your Business",
    description:
      "Custom web apps and business tools built around how you work, plus websites. A software studio in Forney, Texas.",
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
