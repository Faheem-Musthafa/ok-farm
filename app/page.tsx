import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";

const products = [
  {
    name: "Fresh Cow Milk",
    weight: "500 ml & 1 L",
    price: "₹35 / 500ml",
    src: "/product-milk.png",
    badge: "Daily fresh",
  },
  {
    name: "Curd",
    weight: "200g & 500g",
    price: "₹40 / 200g",
    src: "/product-yogurt.png",
    badge: "Set fresh",
  },
  {
    name: "Pure Ghee",
    weight: "250 ml & 500 ml",
    price: "₹420 / 250ml",
    src: "/product-butter.png",
    badge: "Slow-cooked",
  },
  {
    name: "Nadan Moru",
    weight: "500 ml",
    price: "₹25 / 500ml",
    src: "/product-cream.png",
    badge: "Traditional",
  },
];

const stats = [
  { v: "5 AM", l: "Daily milking" },
  { v: "100%", l: "Pure cow milk" },
  { v: "Same-day", l: "Delivered fresh" },
  { v: "8 PM", l: "Last collection" },
];

const process = [
  {
    step: "01",
    title: "Grass-fed cows",
    body: "Cows raised with care on local fodder.",
  },
  {
    step: "02",
    title: "Hand-milked at dawn",
    body: "Fresh milk drawn at 5 AM, daily.",
  },
  {
    step: "03",
    title: "Tested & bottled",
    body: "Quality-checked, no adulteration.",
  },
  {
    step: "04",
    title: "Reaches you fresh",
    body: "Same day delivery or pickup.",
  },
];

const reviews = [
  {
    name: "Rahul",
    place: "Kottakkal",
    stars: 5,
    body: "Best milk in Edarikode. Whole family on the daily delivery now.",
  },
  {
    name: "Meera",
    place: "Tirurangadi",
    stars: 5,
    body: "Their curd reminds me of my grandmother's. Thick, slightly tart, perfect.",
  },
  {
    name: "Anand",
    place: "Manjeri",
    stars: 5,
    body: "Ghee is the real thing — properly cultured, slow-cooked. Tastes amazing.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[calc(100dvh-var(--nav-h))] flex items-center">
        {/* bg image */}
        <Image
          src="/hero-farm.png"
          alt="OK Farm Fresh pasture"
          fill
          priority
          className="object-cover -z-10"
          sizes="100vw"
        />
        {/* dark gradient overlay for legibility */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />

        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 py-16 md:py-24 w-full relative">
          <div className="max-w-2xl text-white">
            <Reveal delay={0}>
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-[pulse-dot_1.8s_ease-out_infinite]" />
                Open today · 5 AM – 8 PM
              </span>
            </Reveal>
            
            <Reveal delay={150}>
              <h1 className="mt-6 text-[clamp(2.75rem,6.5vw,5.5rem)] text-white font-extrabold leading-[1.05] tracking-tight [text-shadow:0_4px_16px_rgb(0_0_0_/_0.3)]">
                Pure cow milk,{" "}
                <span className="text-yellow-300">straight from our farm.</span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed text-white/90 font-medium [text-shadow:0_2px_4px_rgb(0_0_0_/_0.4)]">
                OK Farm Fresh — a family dairy in Edarikode, Kottakkal. Fresh
                cow milk, curd, ghee, and nadan moru, delivered or picked up
                daily.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 text-base md:text-lg">
                  Order Now
                </Link>
                <Link href="/products" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-white/80 cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-green text-base md:text-lg">
                  See products →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-12 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">✓ 100% pure cow milk</span>
                <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">✓ No adulteration</span>
                <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">✓ Same-day fresh</span>
              </div>
            </Reveal>
          </div>

          {/* floating call card */}
          <Reveal delay={800} className="hidden md:flex absolute bottom-8 right-8 z-20">
            <a
              href="tel:+919895056979"
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex items-center gap-4 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 border border-white/20"
            >
              <span className="w-12 h-12 rounded-full bg-red text-white flex items-center justify-center shadow-lg shadow-red/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs text-muted font-semibold tracking-wider uppercase">Call to order</p>
                <p className="font-extrabold text-ink text-lg tracking-tight">+91 98950 56979</p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-green-dark border-y border-green text-white py-3 md:py-4">
        <div className="overflow-hidden">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused] opacity-90">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 pr-12 text-sm md:text-base font-bold uppercase tracking-[0.15em] items-center">
                <span>✦ Fresh cow milk</span>
                <span>✦ Curd</span>
                <span>✦ Pure ghee</span>
                <span>✦ Nadan moru</span>
                <span>✦ No adulteration</span>
                <span>✦ Same-day delivery</span>
                <span>✦ 5 AM – 8 PM</span>
                <span>✦ Kottakkal</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Subtle background blur elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-soft/40 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div>
              <Reveal delay={0}>
                <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">Our products</span>
              </Reveal>
              <Reveal delay={150}>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Made fresh, every day.</h2>
              </Reveal>
            </div>
            <Reveal delay={300}>
              <Link href="/products" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-6 py-3 rounded-xl border-2 border-rule cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap text-ink bg-white hover:border-green hover:text-green hover:shadow-lg">
                View all products →
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 150}>
                <article className="group relative bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 h-full flex flex-col overflow-hidden isolate">
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-cream-warm/50 to-white flex items-center justify-center p-6">
                    <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-green-dark border border-white shadow-sm text-[10px]">
                      {p.badge}
                    </span>
                    <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                      <Image
                        src={p.src}
                        alt={p.name}
                        fill
                        className="object-contain drop-shadow-xl"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col bg-white/40">
                    <h3 className="text-xl md:text-2xl font-extrabold mb-1 tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted font-medium mb-4">{p.weight}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <p className="font-black text-green text-xl">
                        {p.price}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green text-white shadow-lg shadow-green/30 transition-transform duration-300 group-hover:scale-110 hover:bg-green-dark"
                        aria-label={`Order ${p.name}`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-green-soft py-16 md:py-20 relative overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 150} className="text-center md:text-left">
                <p className="font-heading font-black text-4xl md:text-6xl text-green drop-shadow-sm">
                  {s.v}
                </p>
                <p className="text-sm md:text-base font-bold text-ink mt-2 tracking-wide">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-32 bg-cream-warm/20">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <Reveal className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">From cow to cup</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">How your milk reaches you.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 150}>
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 p-8 h-full relative isolate shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <span className="absolute -top-4 left-8 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-green text-white font-black text-lg shadow-lg shadow-green/30 rotate-[-4deg] group-hover:rotate-0 transition-transform">
                    {p.step}
                  </span>
                  <h3 className="mt-6 mb-3 text-xl font-bold tracking-tight">{p.title}</h3>
                  <p className="text-muted font-medium leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-32 bg-cream-warm/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 relative z-10">
          <Reveal className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">Customers love us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">What our customers say.</h2>
            <p className="mt-5 flex items-center justify-center gap-3">
              <span className="text-yellow-400 text-xl tracking-widest drop-shadow-sm">★★★★★</span>
              <span className="text-sm font-semibold text-muted bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-rule/50">4.9 / 5 from 412 customers</span>
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 150}>
                <figure className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 p-8 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] isolate">
                  <span className="inline-block text-yellow-400 tracking-[0.2em] text-xl drop-shadow-sm mb-4">{"★".repeat(r.stars)}</span>
                  <blockquote className="mb-6 text-ink/90 font-medium leading-relaxed flex-1 text-lg">
                    &ldquo;{r.body}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-4 pt-6 border-t border-rule/60">
                    <span className="w-12 h-12 rounded-full bg-green text-white font-black text-lg flex items-center justify-center shadow-inner">
                      {r.name[0]}
                    </span>
                    <div>
                      <p className="font-bold text-ink">{r.name}</p>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wider">{r.place}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">Find us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Visit the farm in Edarikode.</h2>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink/75 font-medium">
                Drop by between 5 AM and 8 PM — pick up fresh milk, see the
                cows, or chat with us.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                <div className="bg-cream-warm/30 border border-rule/50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-green/30">
                  <p className="text-xs text-green font-black uppercase tracking-[0.15em] mb-2">
                    Address
                  </p>
                  <p className="font-bold text-lg leading-snug">
                    Palachiramade, Edarikode,
                    <br />
                    Kottakkal, Kerala 676501
                  </p>
                </div>
                <div className="bg-cream-warm/30 border border-rule/50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-green/30">
                  <p className="text-xs text-green font-black uppercase tracking-[0.15em] mb-2">
                    Hours
                  </p>
                  <p className="font-bold text-lg">Daily, 5 AM – 8 PM</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 text-base md:text-lg"
                >
                  Get directions
                </a>
                <a href="tel:+919895056979" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-rule cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap text-ink bg-white hover:border-green hover:text-green shadow-sm hover:shadow-xl text-base md:text-lg">
                  Call us
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[5/4] rounded-3xl overflow-hidden bg-cream-warm shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgb(19,122,77,0.15)] group isolate"
              >
                <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-20 pointer-events-none" />
                <Image
                  src="/about-family.png"
                  alt="OK Farm Fresh in Edarikode"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-8 pt-20 text-white z-10 transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="font-extrabold text-2xl mb-1">Palachiramade, Edarikode</p>
                  <p className="text-sm font-semibold text-white/80 uppercase tracking-widest flex items-center gap-2">Click for directions <span className="text-green-400 group-hover:translate-x-1 transition-transform">→</span></p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE STRIP */}
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-green p-8 md:p-16 grid md:grid-cols-2 gap-10 items-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-400/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">Want fresh milk every morning?</h2>
                <p className="mt-5 text-white/90 max-w-md text-lg font-medium leading-relaxed">
                  Subscribe to daily delivery. Pause anytime. Available across
                  Kottakkal &amp; nearby.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end relative z-10">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-white text-green shadow-xl hover:shadow-2xl hover:bg-cream text-base md:text-lg">
                  Start Subscription
                </Link>
                <a
                  href="https://wa.me/919633275787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-white/30 cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-transparent text-white hover:bg-white/10 hover:border-white text-base md:text-lg backdrop-blur-sm"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
