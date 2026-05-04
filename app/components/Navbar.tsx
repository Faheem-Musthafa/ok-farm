"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 4);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(t);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* utility strip */}
      <div className="bg-green text-white text-sm">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 flex items-center justify-between gap-4 h-9">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+919895056979" className="flex items-center gap-1.5 hover:underline">
              <PhoneIcon />
              <span className="hidden sm:inline">+91 98950 56979</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <ClockIcon />
              Open daily, 5 AM – 8 PM
            </span>
          </div>
          <a
            href="https://instagram.com/ok_farm.fresh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <InstaIcon />
            <span className="hidden sm:inline">@ok_farm.fresh</span>
          </a>
        </div>
      </div>

      {/* main header */}
      <div
        className={`bg-white transition-shadow ${
          scrolled ? "shadow-[0_4px_18px_-12px_rgba(26,36,33,0.18)] border-b border-rule" : "border-b border-rule"
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center" aria-label="OK Farm Fresh — home">
            <Image
              src="/ok farm fresh with tag.svg"
              alt="OK Farm Fresh"
              width={176}
              height={60}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = path === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[15px] px-4 py-2 rounded-lg font-semibold transition-colors ${
                    active
                      ? "text-green bg-green-soft"
                      : "text-ink hover:text-green hover:bg-green-soft/60"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 font-sans font-bold px-6 py-2.5 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-md hover:shadow-xl hover:bg-green-500 text-sm"
            >
              Order Now
            </Link>
            <button
              aria-label="Menu"
              aria-expanded={open}
              className="md:hidden p-2 -mr-2"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="block w-6 relative h-4">
                <span
                  className={`absolute left-0 top-0 w-6 h-[2px] bg-ink transition-transform ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] w-6 h-[2px] bg-ink transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] w-6 h-[2px] bg-ink transition-transform ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[var(--nav-h)] bottom-0 bg-white z-40 overflow-y-auto"
          >
        <nav className="w-full max-w-[1280px] mx-auto px-4 md:px-7 py-6 flex flex-col gap-1">
          {links.map((l) => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`py-3.5 px-4 rounded-lg text-base font-semibold ${
                  active
                    ? "bg-green-soft text-green"
                    : "text-ink hover:bg-green-soft/60"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-6 py-3.5 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-md hover:shadow-xl hover:bg-green-500 text-base mt-5">
            Order Now
          </Link>
          <div className="mt-8 pt-6 border-t border-rule space-y-2 text-sm text-muted">
            <a href="tel:+919895056979" className="block">
              📞 +91 98950 56979
            </a>
            <p>🕘 Open daily, 5 AM – 8 PM</p>
            <a
              href="https://instagram.com/ok_farm.fresh"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              ◎ @ok_farm.fresh
            </a>
            <p className="leading-relaxed pt-2">
              Palachiramade, Edarikode,
              <br />
              Kottakkal, Kerala 676501
            </p>
          </div>
        </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function InstaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
