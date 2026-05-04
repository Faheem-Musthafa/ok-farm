import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/80 mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/OKfarm white.png"
              alt=""
              width={40}
              height={40}
              className="rounded-full bg-white/10 p-0.5"
            />
            <p className="font-display font-extrabold text-xl text-white">
              OK Farm <span className="text-yellow">Fresh</span>
            </p>
          </div>
          <p className="mt-5 text-white/70 max-w-xs leading-relaxed text-sm">
            Pure cow milk, curd, ghee, and nadan moru — made fresh every day on
            our family farm in Edarikode, Kottakkal.
          </p>
          <div className="mt-6 flex gap-2.5">
            <a
              href="https://instagram.com/ok_farm.fresh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              href="tel:+919895056979"
              aria-label="Call"
              className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
              href="https://wa.me/919895056979"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition text-xs font-semibold"
            >
              W
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-4">Pages</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About us</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/products" className="hover:text-white transition">Fresh Cow Milk</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Curd</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Pure Ghee</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Nadan Moru</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4">Reach us</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="tel:+919895056979" className="hover:text-white transition">
                +91 98950 56979
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition leading-relaxed inline-block"
              >
                Palachiramade, Edarikode,
                <br />
                Kottakkal, Kerala 676501
              </a>
            </li>
            <li className="pt-1">Open daily, 5 AM – 8 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} OK Farm Fresh. All rights reserved.</p>
          <p>Made fresh in Kerala 🌿</p>
        </div>
      </div>
    </footer>
  );
}
