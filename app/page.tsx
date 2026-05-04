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
      <section className="relative bg-cream-warm/40 overflow-hidden">
        <div className="container-x py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <span className="chip">
                <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
                Open today · 5 AM – 8 PM
              </span>
              <h1 className="mt-5">
                Pure cow milk, <br />
                <span className="text-green">straight from our farm.</span>
              </h1>
              <p className="mt-5 text-lg max-w-xl leading-relaxed">
                OK Farm Fresh — a family dairy in Edarikode, Kottakkal. Fresh
                cow milk, curd, ghee, and nadan moru, delivered or picked up
                daily.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Order Now
                </Link>
                <Link href="/products" className="btn btn-outline">
                  See products →
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="chip">✓ 100% pure cow milk</span>
                <span className="chip">✓ No adulteration</span>
                <span className="chip">✓ Same-day fresh</span>
              </div>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-green-soft">
                <Image
                  src="/hero-farm.png"
                  alt="A cow at OK Farm Fresh"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
              {/* floating call card */}
              <a
                href="tel:+919895056979"
                className="absolute -bottom-3 left-3 md:-left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 hover:shadow-2xl transition"
              >
                <span className="w-11 h-11 rounded-full bg-red text-white flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-muted">Call to order</p>
                  <p className="font-bold text-ink">+91 98950 56979</p>
                </div>
              </a>
              {/* floating product chip */}
              <div className="absolute top-3 -right-2 md:-right-5 bg-white rounded-full shadow-lg px-4 py-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green pulse-dot" />
                <span className="text-sm font-semibold">Delivered today</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-green text-white border-y border-green-dark">
        <div className="overflow-hidden py-3">
          <div className="marquee">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-10 pr-10 text-sm font-semibold uppercase tracking-widest items-center">
                <span>● Fresh cow milk</span>
                <span>● Curd</span>
                <span>● Pure ghee</span>
                <span>● Nadan moru</span>
                <span>● No adulteration</span>
                <span>● Same-day delivery</span>
                <span>● 5 AM – 8 PM</span>
                <span>● Kottakkal</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <Reveal>
              <span className="eyebrow">Our products</span>
              <h2>Made fresh, every day.</h2>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/products" className="btn btn-outline">
                View all →
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="card group h-full flex flex-col overflow-hidden">
                  <div className="aspect-square relative bg-cream-warm/40">
                    <span className="absolute top-3 left-3 z-10 chip text-[10px] !py-1 !px-2.5">
                      {p.badge}
                    </span>
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    <h3 className="text-base md:text-lg font-bold mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs text-muted mb-3">{p.weight}</p>
                    <p className="font-bold text-green text-lg mt-auto">
                      {p.price}
                    </p>
                    <Link
                      href="/contact"
                      className="btn btn-primary !py-2 text-sm mt-3"
                    >
                      Order
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-green-soft py-12 md:py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 80} className="text-center md:text-left">
                <p className="font-display font-extrabold text-3xl md:text-5xl text-green">
                  {s.v}
                </p>
                <p className="text-sm text-ink mt-1">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">From cow to cup</span>
            <h2>How your milk reaches you.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="card p-6 h-full relative">
                  <span className="absolute -top-3 left-6 chip bg-green text-white">
                    {p.step}
                  </span>
                  <h3 className="mt-3 mb-2">{p.title}</h3>
                  <p className="text-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-cream-warm/40">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Customers love us</span>
            <h2>What our customers say.</h2>
            <p className="mt-3">
              <span className="text-yellow text-lg">★★★★★</span>
              <span className="ml-2 text-sm text-muted">4.9 / 5 from 412 customers</span>
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure className="card p-6 h-full flex flex-col">
                  <span className="star">{"★".repeat(r.stars)}</span>
                  <blockquote className="mt-4 mb-5 text-ink leading-relaxed flex-1">
                    &ldquo;{r.body}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-rule text-sm">
                    <span className="w-9 h-9 rounded-full bg-green-soft text-green font-bold flex items-center justify-center">
                      {r.name[0]}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{r.name}</p>
                      <p className="text-xs text-muted">{r.place}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <span className="eyebrow">Find us</span>
              <h2>Visit the farm in Edarikode.</h2>
              <p className="mt-5 text-lg leading-relaxed">
                Drop by between 5 AM and 8 PM — pick up fresh milk, see the
                cows, or chat with us.
              </p>
              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <div className="card p-5">
                  <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-1">
                    Address
                  </p>
                  <p className="font-semibold leading-snug">
                    Palachiramade, Edarikode,
                    <br />
                    Kottakkal, Kerala 676501
                  </p>
                </div>
                <div className="card p-5">
                  <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-1">
                    Hours
                  </p>
                  <p className="font-semibold">Daily, 5 AM – 8 PM</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get directions
                </a>
                <a href="tel:+919895056979" className="btn btn-outline">
                  Call us
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <a
                href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[5/4] rounded-2xl overflow-hidden card !p-0 group"
              >
                <Image
                  src="/about-family.png"
                  alt="OK Farm Fresh in Edarikode"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 text-white">
                  <p className="font-bold">Palachiramade, Edarikode</p>
                  <p className="text-sm text-white/85">Click for directions →</p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE STRIP */}
      <section className="py-16">
        <div className="container-x">
          <div className="rounded-2xl bg-green text-white p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-white">Want fresh milk every morning?</h2>
              <p className="mt-3 text-white/85 max-w-md">
                Subscribe to daily delivery. Pause anytime. Available across
                Kottakkal &amp; nearby.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact" className="btn btn-white">
                Start Subscription
              </Link>
              <a
                href="https://wa.me/919633275787"
                target="_blank"
                rel="noopener noreferrer"
                className="btn !bg-transparent !border-white/40 text-white hover:!bg-white/10"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
