import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

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
  title: "OK Farm Fresh — Pure cow milk & dairy in Kottakkal, Kerala",
  description:
    "OK Farm Fresh — fresh cow milk, curd, ghee, and nadan moru from Edarikode, Kottakkal. Open daily 5 AM – 8 PM. Call +91 98950 56979.",
  keywords:
    "OK Farm Fresh, Kottakkal milk, Edarikode dairy, fresh cow milk Kerala, ghee, curd, nadan moru, Malappuram dairy farm",
  openGraph: {
    title: "OK Farm Fresh — Pure cow milk & dairy in Kottakkal, Kerala",
    description: "OK Farm Fresh — fresh cow milk, curd, ghee, and nadan moru from Edarikode, Kottakkal.",
    url: "https://okfarmfresh.com",
    siteName: "OK Farm Fresh",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OK Farm Fresh - Pure Dairy",
      },
    ],
    locale: "en_IN",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DairyStore",
    name: "OK Farm Fresh",
    image: "https://okfarmfresh.com/icon-new-1.jpg.jpeg",
    description: "Fresh cow milk, curd, ghee, and nadan moru from Edarikode, Kottakkal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Palachiramade, Edarikode",
      addressLocality: "Kottakkal",
      addressRegion: "Kerala",
      postalCode: "676501",
      addressCountry: "IN",
    },
    telephone: "+919895056979",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
