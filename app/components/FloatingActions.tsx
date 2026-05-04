"use client";

import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="tel:+919895056979"
        aria-label="Call OK Farm Fresh"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-rule/50 hover:border-green text-green-dark"
      >
        <span className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-white/90 px-3 py-1.5 text-sm font-bold text-ink shadow-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm pointer-events-none border border-rule/50">
          Call us
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href="https://wa.me/919633275787"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp OK Farm Fresh"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-xl hover:shadow-2xl hover:shadow-green/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 border border-green"
      >
        <span className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-white/90 px-3 py-1.5 text-sm font-bold text-ink shadow-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm pointer-events-none border border-rule/50">
          WhatsApp
        </span>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    </div>
  );
}
