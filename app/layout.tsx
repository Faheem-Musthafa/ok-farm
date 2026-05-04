import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  title: "OK Farm Fresh — Pure cow milk & dairy in Kottakkal, Kerala",
  description:
    "OK Farm Fresh — fresh cow milk, curd, ghee, and nadan moru from Edarikode, Kottakkal. Open daily 5 AM – 8 PM. Call +91 98950 56979.",
  keywords:
    "OK Farm Fresh, Kottakkal milk, Edarikode dairy, fresh cow milk Kerala, ghee, curd, nadan moru, Malappuram dairy farm",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
