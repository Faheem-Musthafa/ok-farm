import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Reveal from "../components/Reveal";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import {
  PRODUCTS_QUERY,
  TESTIMONIALS_QUERY,
  type Product,
  type Testimonial,
} from "@/sanity/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: "Products",
  description:
    "Fresh cow milk, curd, pure ghee, nadan moru, lassi & sambharam — all from OK Farm Fresh, Kottakkal.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — OK Farm Fresh",
    description:
      "Fresh cow milk, curd, pure ghee, nadan moru, lassi & sambharam — all from OK Farm Fresh, Kottakkal.",
    url: "/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — OK Farm Fresh",
    description:
      "Fresh cow milk, curd, pure ghee, nadan moru, lassi & sambharam — all from OK Farm Fresh, Kottakkal.",
  },
};

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function ProductsPage() {
  const [productsRes, testimonialsRes] = await Promise.all([
    sanityFetch({ query: PRODUCTS_QUERY }),
    sanityFetch({ query: TESTIMONIALS_QUERY }),
  ]);
  const products = productsRes.data as Product[] | null;
  const testimonials = testimonialsRes.data as Testimonial[] | null;

  const productsJsonLd = {
    "@context": "https://schema.org",
    "@graph": (products ?? []).map((p) => {
      const minPrice = (p.variants ?? []).reduce(
        (m, v) => Math.min(m, v?.price ?? Infinity),
        Infinity,
      );
      return {
        "@type": "Product",
        name: p.name,
        image: p.image
          ? urlFor(p.image).width(1200).height(1200).url()
          : undefined,
        brand: { "@type": "Brand", name: "OK Farm Fresh" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: isFinite(minPrice) ? minPrice : undefined,
          offerCount: (p.variants ?? []).length,
          availability: "https://schema.org/InStock",
          seller: { "@type": "LocalBusiness", name: "OK Farm Fresh" },
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productsJsonLd) }}
      />

      {/* HERO BANNER */}
      <section className="bg-cream-warm/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 py-14 sm:py-20 md:py-32 text-center relative z-10">
          <Reveal>
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4 drop-shadow-sm">Our products</span>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Pure dairy, made <span className="text-green relative inline-block">
                every day
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-ink/75 font-medium">
              Pure things, made fresh on our farm in Kottakkal. Pickup or
              delivery — your choice.
            </p>
            {products && products.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                {products.map((p) => (
                  <span
                    key={p._id}
                    className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full bg-white shadow-sm border border-rule/50 text-green-dark"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* PRODUCT LIST — large rows */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          {!products || products.length === 0 ? (
            <p className="text-center text-muted py-20">
              No products yet. Add one in the CMS at{" "}
              <Link href="/studio" className="underline text-green-dark">
                /studio
              </Link>
              .
            </p>
          ) : (
            <div className="flex flex-col gap-8 md:gap-10">
              {products.map((p, i) => (
                <Reveal key={p._id} delay={i * 80} variant={i % 2 === 0 ? "left" : "right"}>
                  <article className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 overflow-hidden flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
                    <div className="relative w-full md:w-[35%] lg:w-[30%] aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-cream-warm/30 overflow-hidden flex-shrink-0 border-r border-white/50">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent z-10 pointer-events-none" />
                      {p.badge && (
                        <span className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full text-green-dark bg-white shadow-sm border border-rule/50">
                          {p.badge}
                        </span>
                      )}
                      <div
                        className="absolute inset-0 animate-[float_8s_ease-in-out_infinite] will-change-transform"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        {p.image && (
                          <Image
                            src={urlFor(p.image).width(800).height(800).url()}
                            alt={p.name ?? "Product"}
                            fill
                            preload={i === 0}
                            className="object-contain p-10 transition-transform duration-1000 group-hover:scale-105 relative z-0 mix-blend-multiply"
                            sizes="(max-width: 768px) 100vw, 35vw"
                          />
                        )}
                      </div>
                    </div>
                    <div className="p-8 md:p-10 lg:p-12 flex-1 flex flex-col justify-center relative z-20">
                      <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-green uppercase tracking-wide">
                        {p.name}
                      </h3>
                      {p.description && (
                        <div className="mb-8 text-base md:text-lg leading-relaxed text-ink/80 font-medium max-w-3xl prose prose-sm">
                          <PortableText value={p.description} />
                        </div>
                      )}

                      <div className="pt-2">
                        <p className="text-xs text-muted uppercase tracking-widest font-black mb-4">
                          Available sizes
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {(p.variants ?? []).map((v, vi) => (
                            <div
                              key={`${p._id}-${vi}`}
                              className="bg-white border-2 border-rule/30 text-ink px-5 py-2.5 rounded-xl text-sm font-bold flex items-baseline gap-2 shadow-sm transition-colors hover:border-green/30"
                            >
                              <span>{v.size}</span>
                              <span className="text-green/40">·</span>
                              <span className="text-green-dark">₹{v.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

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
      {testimonials && testimonials.length > 0 && (
        <section className="py-14 sm:py-20 md:py-32 bg-cream-warm/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
          <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 relative z-10">
            <Reveal className="text-center max-w-xl mx-auto mb-16">
              <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">Customer reviews</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">What customers say.</h2>
              <p className="mt-5 flex items-center justify-center gap-3">
                <span className="text-yellow-400 text-xl tracking-widest drop-shadow-sm">★★★★★</span>
                <span className="text-sm font-semibold text-muted bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-rule/50">
                  4.9 / 5 from 412 customers
                </span>
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((r, i) => (
                <Reveal key={r._id} delay={(i % 3) * 120} variant="blur">
                  <figure className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 p-8 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] isolate hover-lift">
                    <span className="inline-block text-yellow-400 tracking-[0.2em] text-xl drop-shadow-sm mb-4">{"★".repeat(r.rating ?? 5)}</span>
                    <blockquote className="mb-6 text-ink/90 font-medium leading-relaxed flex-1 text-lg">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="flex items-center gap-4 pt-6 border-t border-rule/60">
                      <span className="w-12 h-12 rounded-full bg-green text-white font-black text-lg flex items-center justify-center shadow-inner overflow-hidden">
                        {r.avatar ? (
                          <Image
                            src={urlFor(r.avatar).width(96).height(96).url()}
                            alt={r.name ?? ""}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          (r.name ?? "?")[0]
                        )}
                      </span>
                      <div>
                        <p className="font-bold text-ink">{r.name}</p>
                        {r.location && (
                          <p className="text-xs font-semibold text-muted uppercase tracking-wider">
                            {r.location}
                          </p>
                        )}
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
      )}
    </>
  );
}
