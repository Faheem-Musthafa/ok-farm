import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Products — OK Farm Fresh",
  description:
    "Fresh cow milk, curd, pure ghee, and nadan moru — all from OK Farm Fresh, Kottakkal.",
};

type Product = {
  name: string;
  desc: string;
  src: string;
  badge: string;
  variants: { size: string; price: string }[];
};

const products: Product[] = [
  {
    name: "Fresh Cow Milk",
    desc: "Whole milk, milked the same morning. 100% pure cow milk, no mixing.",
    src: "/product-milk.png",
    badge: "Daily fresh",
    variants: [
      { size: "500 ml", price: "₹35" },
      { size: "1 litre", price: "₹65" },
    ],
  },
  {
    name: "Curd",
    desc: "Set in earthen pots, the proper Kerala way. Thick, creamy, perfectly tart.",
    src: "/product-yogurt.png",
    badge: "Set fresh",
    variants: [
      { size: "200 g", price: "₹40" },
      { size: "500 g", price: "₹90" },
    ],
  },
  {
    name: "Pure Ghee",
    desc: "Slow-cooked from cultured cream over a small flame. Rich golden, traditional.",
    src: "/product-butter.png",
    badge: "Slow-cooked",
    variants: [
      { size: "250 ml", price: "₹420" },
      { size: "500 ml", price: "₹820" },
    ],
  },
  {
    name: "Nadan Moru",
    desc: "Traditional Kerala buttermilk. Lightly spiced, refreshing, perfect with rice.",
    src: "/product-cream.png",
    badge: "Naatan",
    variants: [
      { size: "500 ml", price: "₹25" },
      { size: "1 litre", price: "₹45" },
    ],
  },
];

const reviews = [
  {
    name: "Rahul",
    place: "Kottakkal",
    stars: 5,
    body: "Best milk in Edarikode. Whole family is on the daily delivery now.",
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
  {
    name: "Sneha",
    place: "Edarikode",
    stars: 4,
    body: "Nadan moru is wonderful with chor. Wish they delivered later in the day too.",
  },
  {
    name: "Fatima",
    place: "Kottakkal",
    stars: 5,
    body: "Picked up milk and curd directly from the farm. Friendly people, very clean.",
  },
  {
    name: "Vinod",
    place: "Valanchery",
    stars: 5,
    body: "Drove 20km to try the milk. Worth it. Now I go every weekend for ghee too.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="bg-cream-warm/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 py-20 md:py-32 text-center relative z-10">
          <Reveal>
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4 drop-shadow-sm">Our products</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Pure dairy, made <span className="text-green relative inline-block">
                every day
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-ink/75 font-medium">
              Four pure things, made fresh on our farm in Kottakkal. Pickup or
              delivery — your choice.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full bg-white shadow-sm border border-rule/50 text-green-dark">Cow Milk</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full bg-white shadow-sm border border-rule/50 text-green-dark">Curd</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full bg-white shadow-sm border border-rule/50 text-green-dark">Pure Ghee</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full bg-white shadow-sm border border-rule/50 text-green-dark">Nadan Moru</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT LIST — large rows */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <div className="flex flex-col gap-8 md:gap-10">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={100}>
                <article className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 overflow-hidden flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
                  <div className="relative w-full md:w-[35%] lg:w-[30%] aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-cream-warm/30 overflow-hidden flex-shrink-0 border-r border-white/50">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent z-10 pointer-events-none" />
                    <span className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full text-green-dark bg-white shadow-sm border border-rule/50">
                      {p.badge}
                    </span>
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      priority={i === 0}
                      className="object-contain p-10 transition-transform duration-1000 group-hover:scale-105 relative z-0 mix-blend-multiply"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                  </div>
                  <div className="p-8 md:p-10 lg:p-12 flex-1 flex flex-col justify-center relative z-20">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-green uppercase tracking-wide">{p.name}</h3>
                    <p className="mb-8 text-base md:text-lg leading-relaxed text-ink/80 font-medium max-w-3xl">{p.desc}</p>

                    <div className="pt-2">
                      <p className="text-xs text-muted uppercase tracking-widest font-black mb-4">
                        Available sizes
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {p.variants.map((v) => (
                          <div
                            key={v.size}
                            className="bg-white border-2 border-rule/30 text-ink px-5 py-2.5 rounded-xl text-sm font-bold flex items-baseline gap-2 shadow-sm transition-colors hover:border-green/30"
                          >
                            <span>{v.size}</span>
                            <span className="text-green/40">·</span>
                            <span className="text-green-dark">{v.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Order info banner */}
          <Reveal className="mt-16">
            <div className="rounded-3xl bg-cream-warm/50 border border-white p-8 md:p-10 grid md:grid-cols-3 gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
              <div>
                <p className="text-xs text-green font-black uppercase tracking-[0.15em] mb-2">
                  How to order
                </p>
                <p className="font-bold text-ink text-lg leading-snug">
                  Call, WhatsApp, or use the form.
                </p>
              </div>
              <div>
                <p className="text-xs text-green font-black uppercase tracking-[0.15em] mb-2">
                  Delivery
                </p>
                <p className="font-bold text-ink text-lg leading-snug">
                  Same-day across Kottakkal &amp; nearby.
                </p>
              </div>
              <div>
                <p className="text-xs text-green font-black uppercase tracking-[0.15em] mb-2">
                  Pickup
                </p>
                <p className="font-bold text-ink text-lg leading-snug">
                  At our farm, daily 5 AM – 8 PM.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 bg-cream-warm/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 relative z-10">
          <Reveal className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">Customer reviews</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">What customers say.</h2>
            <p className="mt-5 flex items-center justify-center gap-3">
              <span className="text-yellow-400 text-xl tracking-widest drop-shadow-sm">★★★★★</span>
              <span className="text-sm font-semibold text-muted bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-rule/50">
                4.9 / 5 from 412 customers
              </span>
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 150}>
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

          <Reveal className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 text-base md:text-lg">
              Order today
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
