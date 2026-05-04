import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "About",
  description:
    "About OK Farm Fresh, a family dairy in Edarikode, Kottakkal, Kerala.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — OK Farm Fresh",
    description:
      "About OK Farm Fresh, a family dairy in Edarikode, Kottakkal, Kerala.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — OK Farm Fresh",
    description:
      "About OK Farm Fresh, a family dairy in Edarikode, Kottakkal, Kerala.",
  },
};

const features = [
  {
    title: "Pure & unadulterated",
    body: "100% cow milk. No mixing, no preservatives, no shortcuts. Tested daily for purity.",
    icon: "🐄",
  },
  {
    title: "Same-day fresh",
    body: "Milked, bottled, and delivered the same day. Never stored, never reheated.",
    icon: "🌅",
  },
  {
    title: "Made the proper way",
    body: "Curd in earthen pots, ghee slow-cooked, moru by hand. Old methods, every day.",
    icon: "🥣",
  },
  {
    title: "Local family farm",
    body: "Run by our family in Palachiramade, Edarikode — looking after every cow personally.",
    icon: "🌿",
  },
];

const certs = [
  { label: "100% pure", note: "Cow milk only" },
  { label: "Locally made", note: "Edarikode farm" },
  { label: "Daily fresh", note: "Same-day milk" },
  { label: "Trusted", note: "412+ customers" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative bg-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 relative z-10 pt-14 sm:pt-20 pb-32 sm:pb-48 md:pt-32 md:pb-64">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em] drop-shadow-sm">
                About us
              </span>
              <h1 className="mt-4 text-white text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                A small family dairy in Kottakkal.
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium">
                We&apos;re OK Farm Fresh — a family-run dairy in Palachiramade,
                Edarikode. Pure cow milk, traditional curd, slow-cooked ghee,
                and naatan moru, all made fresh every single day.
              </p>
            </Reveal>
          </div>
        </div>
        {/* decorative arc */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-16 md:h-24 text-white drop-shadow-sm"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,60 C300,0 900,0 1200,60 L1200,60 L0,60 Z" fill="currentColor" />
        </svg>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-14 sm:py-20 md:py-32 relative bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.08)] group isolate">
                <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-20 pointer-events-none" />
                <Image
                  src="/about-family.png"
                  alt="At OK Farm Fresh"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">Our story</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Fresh milk, the way it should be.</h2>
              <div className="mt-6 space-y-5 text-base sm:text-lg md:text-xl leading-relaxed text-ink/75 font-medium">
                <p>
                  We started OK Farm Fresh because we wanted real milk —
                  the kind we grew up drinking, before it came in long-life
                  tetra packs and questionable pouches.
                </p>
                <p>
                  Today we run a small dairy in Palachiramade, looking after
                  our cows ourselves. We milk at 5 AM, bottle by 6, and have
                  it on its way to homes across Kottakkal before breakfast.
                </p>
                <p className="text-ink font-bold">
                  No middlemen. No mixing. No nonsense.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/products" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 text-base md:text-lg">
                  See our products
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-rule cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap text-ink bg-white hover:border-green hover:text-green shadow-sm hover:shadow-xl text-base md:text-lg">
                  Visit the farm
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY US — feature grid */}
      <section className="py-14 sm:py-20 md:py-32 bg-cream-warm/50 relative">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <Reveal className="max-w-xl mb-16">
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">Why us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">What makes us different.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120} variant={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 p-8 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-green-soft text-2xl flex items-center justify-center mb-6 shadow-inner animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.3}s` }}>
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                  <p className="text-ink/75 font-medium leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION-STYLE STRIP */}
      <section className="py-16 bg-white border-y border-rule">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certs.map((c, i) => (
              <Reveal key={c.label} delay={i * 100} variant="scale">
                <div className="bg-cream-warm/30 border border-rule/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:border-green/30 p-6 md:p-8 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-green-soft text-green flex items-center justify-center mb-4 shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-bold text-lg">{c.label}</p>
                  <p className="text-sm text-muted mt-1 font-medium">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — visit the farm */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white p-8 md:p-16 grid md:grid-cols-2 gap-10 items-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-400/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em] drop-shadow-sm">
                  Visit us
                </span>
                <h2 className="text-white mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Drop by the farm.</h2>
                <p className="mt-5 text-white/80 max-w-md text-lg font-medium leading-relaxed">
                  We&apos;re open every day from 5 AM to 8 PM. Yes, you can
                  meet the cows.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.google.com/maps/place/10%C2%B059%2755.1%22N+75%C2%B059%2729.5%22E/@10.9986343,75.9915314,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-white text-ink shadow-xl hover:shadow-2xl hover:bg-cream text-base md:text-lg"
                  >
                    Get directions
                  </a>
                  <a
                    href="tel:+919895056979"
                    className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-white/30 cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-transparent text-white hover:bg-white/10 hover:border-white text-base md:text-lg backdrop-blur-sm"
                  >
                    Call +91 98950 56979
                  </a>
                </div>
              </div>
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 z-10 group">
                <Image
                  src="/hero-farm.png"
                  alt="OK Farm Fresh"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
