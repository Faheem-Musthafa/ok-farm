import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ScrollProgress from "./components/ScrollProgress";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://okfarmfresh.com"),
  title: {
    default: "OK Farm Fresh — Pure cow milk & dairy in Kottakkal, Kerala",
    template: "%s — OK Farm Fresh",
  },
  description:
    "OK Farm Fresh — fresh cow milk, curd, ghee, nadan moru, lassi & sambharam from Edarikode, Kottakkal. Open daily 5 AM – 8 PM. Call +91 98950 56979.",
  keywords:
    "OK Farm Fresh, Kottakkal milk, Edarikode dairy, fresh cow milk Kerala, ghee, curd, nadan moru, lassi, sambharam, Malappuram dairy farm",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "OK Farm Fresh — Pure cow milk & dairy in Kottakkal, Kerala",
    description:
      "OK Farm Fresh — fresh cow milk, curd, ghee, nadan moru, lassi & sambharam from Edarikode, Kottakkal.",
    url: "https://okfarmfresh.com",
    siteName: "OK Farm Fresh",
    images: [
      {
        url: "/hero-farm.png",
        width: 1200,
        height: 630,
        alt: "OK Farm Fresh — Pure Dairy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OK Farm Fresh — Pure cow milk & dairy in Kottakkal, Kerala",
    description:
      "Fresh cow milk, curd, ghee, nadan moru, lassi & sambharam from Edarikode, Kottakkal.",
    images: ["/hero-farm.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  alternates: {
    canonical: "https://okfarmfresh.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://okfarmfresh.com/#business",
    name: "OK Farm Fresh",
    image: "https://okfarmfresh.com/hero-farm.png",
    logo: "https://okfarmfresh.com/ok%20farm%20fresh%20with%20tag.svg",
    description:
      "Fresh cow milk, curd, ghee, nadan moru, lassi and sambharam from Edarikode, Kottakkal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Palachiramade, Edarikode",
      addressLocality: "Kottakkal",
      addressRegion: "Kerala",
      postalCode: "676501",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.9986343,
      longitude: 75.9915314,
    },
    telephone: "+919895056979",
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "20:00",
    },
    sameAs: ["https://instagram.com/ok_farm.fresh"],
    url: "https://okfarmfresh.com",
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans relative">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
