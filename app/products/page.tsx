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
      <section className="bg-cream-warm/40 border-b border-rule">
        <div className="container-x py-12 md:py-16 text-center">
          <Reveal>
            <span className="eyebrow">Our products</span>
            <h1>
              Pure dairy, made <span className="text-green">every day</span>.
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed">
              Four pure things, made fresh on our farm in Kottakkal. Pickup or
              delivery — your choice.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="chip">Cow Milk</span>
              <span className="chip">Curd</span>
              <span className="chip">Pure Ghee</span>
              <span className="chip">Nadan Moru</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT LIST — large rows */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 100}>
                <article className="card overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[4/3] bg-cream-warm/40">
                    <span className="absolute top-4 left-4 z-10 chip bg-white border border-rule">
                      {p.badge}
                    </span>
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      className="object-contain p-8 transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                    <p className="mb-5 leading-relaxed">{p.desc}</p>

                    <div className="border-t border-rule pt-4 mb-5">
                      <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-3">
                        Available sizes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.variants.map((v) => (
                          <div
                            key={v.size}
                            className="bg-green-soft text-green-dark px-3 py-1.5 rounded-lg text-sm font-semibold flex items-baseline gap-1.5"
                          >
                            <span>{v.size}</span>
                            <span className="text-green-dark">·</span>
                            <span>{v.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                      <Link
                        href="/contact"
                        className="btn btn-primary !py-2.5 text-sm flex-1 sm:flex-none"
                      >
                        Order now
                      </Link>
                      <a
                        href="https://wa.me/919895056979"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline !py-2.5 text-sm"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Order info banner */}
          <Reveal className="mt-12">
            <div className="rounded-2xl bg-green-soft border border-green/15 p-6 md:p-8 grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-green-dark uppercase tracking-wider font-semibold mb-1">
                  How to order
                </p>
                <p className="font-semibold">
                  Call, WhatsApp, or use the form.
                </p>
              </div>
              <div>
                <p className="text-xs text-green-dark uppercase tracking-wider font-semibold mb-1">
                  Delivery
                </p>
                <p className="font-semibold">
                  Same-day across Kottakkal &amp; nearby.
                </p>
              </div>
              <div>
                <p className="text-xs text-green-dark uppercase tracking-wider font-semibold mb-1">
                  Pickup
                </p>
                <p className="font-semibold">
                  At our farm, daily 5 AM – 8 PM.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24 bg-cream-warm/40">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Customer reviews</span>
            <h2>What customers say.</h2>
            <p className="mt-3">
              <span className="text-yellow text-lg">★★★★★</span>
              <span className="ml-2 text-sm text-muted">
                4.9 / 5 from 412 customers
              </span>
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 90}>
                <figure className="card p-6 h-full flex flex-col">
                  <span className="star">{"★".repeat(r.stars)}</span>
                  <blockquote className="mt-3 mb-5 text-ink leading-relaxed flex-1">
                    &ldquo;{r.body}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-rule">
                    <span className="w-9 h-9 rounded-full bg-green-soft text-green font-bold flex items-center justify-center text-sm">
                      {r.name[0]}
                    </span>
                    <div>
                      <p className="font-semibold text-ink text-sm">{r.name}</p>
                      <p className="text-xs text-muted">{r.place}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Link href="/contact" className="btn btn-primary">
              Order today
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
