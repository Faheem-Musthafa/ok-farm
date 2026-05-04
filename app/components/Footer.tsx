import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 overflow-hidden bg-ink text-white/85 shadow-[0_-20px_40px_rgb(0,0,0,0.1)]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.08] pointer-events-none" />
      <div className="absolute -top-[300px] -right-[200px] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] bg-green-800/40 rounded-full blur-[120px] pointer-events-none" />

      {/* top accent strip */}
      <div className="h-1.5 bg-gradient-to-r from-green via-yellow-400 to-green shadow-[0_2px_10px_rgba(250,204,21,0.2)]" />

      {/* CTA band */}
      <div className="border-b border-white/10 relative z-10 bg-white/[0.02] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center md:px-7 md:py-14">
          <Reveal>
            <p className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl tracking-tight">
              Fresh dairy, delivered daily.
            </p>
            <p className="mt-3 text-sm text-white/70 md:text-base font-medium">
              Order today before 8 PM — same-day pickup or doorstep delivery.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-3.5 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-lg hover:shadow-xl hover:bg-green-500 text-base"
            >
              Order Now
            </Link>
            <a
              href="tel:+919895056979"
              className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-3.5 rounded-xl border-2 border-white/30 cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white shadow-sm hover:shadow-md text-base"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Call +91 98950 56979
            </a>
          </Reveal>
        </div>
      </div>

      {/* main grid */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-12 md:gap-10 md:px-7 md:py-20 relative z-10">
        <Reveal delay={0} className="md:col-span-5">
          <Link
            href="/"
            aria-label="OK Farm Fresh — home"
            className="inline-block transition-transform hover:scale-105 duration-300"
          >
            <Image
              src="/ok farm fresh with tag.svg"
              alt="OK Farm Fresh"
              width={260}
              height={88}
              className="h-16 w-auto md:h-20 drop-shadow-md"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80 md:text-base font-medium">
            Pure cow milk, curd, ghee, and nadan moru — made fresh every day on
            our family farm in Edarikode, Kottakkal.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://instagram.com/ok_farm.fresh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:border-green hover:bg-green hover:-translate-y-1 shadow-lg hover:shadow-green/30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              href="tel:+919895056979"
              aria-label="Call"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:border-green hover:bg-green hover:-translate-y-1 shadow-lg hover:shadow-green/30"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
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
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:border-green hover:bg-green hover:-translate-y-1 shadow-lg hover:shadow-green/30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-2">
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white">
            Pages
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/" className="text-white/70 transition hover:text-green">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/70 transition hover:text-green">
                About us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white/70 transition hover:text-green">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/70 transition hover:text-green">
                Contact
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={200} className="md:col-span-2">
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white">
            Products
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/products" className="text-white/70 transition hover:text-green">
                Fresh Cow Milk
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white/70 transition hover:text-green">
                Curd
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white/70 transition hover:text-green">
                Pure Ghee
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white/70 transition hover:text-green">
                Nadan Moru
              </Link>
            </li>
          </ul>
        </Reveal>

      <Reveal delay={300} className="md:col-span-3">
        <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white">
          Reach us
        </h4>
        <ul className="space-y-4 text-sm text-white/70 font-medium">
          <li className="flex items-start gap-4">
            <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white shadow-inner border border-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <a href="tel:+919895056979" className="pt-2.5 transition hover:text-white font-bold tracking-wide">
              +91 98950 56979
            </a>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white shadow-inner border border-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <a
              href="https://www.google.com/maps/place/10%C2%B059%2755.1%22N+75%C2%B059%2729.5%22E/@10.9986343,75.9915314,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 leading-relaxed transition hover:text-white"
            >
              Palachiramade, Edarikode,
              <br />
              Kottakkal, Kerala 676501
            </a>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white shadow-inner border border-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="pt-2">Open daily, 5 AM – 8 PM</span>
          </li>
        </ul>
      </Reveal>
    </div>

      {/* bottom bar */ }
      <div className="border-t border-white/10 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-white/60 sm:flex-row md:px-7 font-medium tracking-wide">
          <p>© {year} OK Farm Fresh. All rights reserved.</p>
          <p className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            Made fresh in Kerala
            <span className="inline-block h-2 w-2 rounded-full bg-green shadow-[0_0_8px_rgba(19,122,77,0.8)]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
