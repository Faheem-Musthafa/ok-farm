import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "About — OK Farm Fresh",
  description:
    "About OK Farm Fresh, a family dairy in Edarikode, Kottakkal, Kerala.",
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
        <div className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-yellow text-sm font-semibold uppercase tracking-widest">
                About us
              </span>
              <h1 className="mt-3 text-white">
                A small family dairy in Kottakkal.
              </h1>
              <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">
                We&apos;re OK Farm Fresh — a family-run dairy in Palachiramade,
                Edarikode. Pure cow milk, traditional curd, slow-cooked ghee,
                and naatan moru, all made fresh every single day.
              </p>
            </Reveal>
          </div>
        </div>
        {/* decorative arc */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-12 text-white"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C300,0 900,0 1200,60 L1200,60 L0,60 Z" fill="currentColor" />
        </svg>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/about-family.png"
                  alt="At OK Farm Fresh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Our story</span>
              <h2>Fresh milk, the way it should be.</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed">
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
                <p>
                  No middlemen. No mixing. No nonsense.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/products" className="btn btn-primary">
                  See our products
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Visit the farm
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY US — feature grid */}
      <section className="py-16 md:py-24 bg-green-soft">
        <div className="container-x">
          <Reveal className="max-w-xl mb-12">
            <span className="eyebrow">Why us</span>
            <h2>What makes us different.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="card p-7 h-full">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="mb-2">{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION-STYLE STRIP */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <div className="card p-5 md:p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-green-soft text-green flex items-center justify-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-bold">{c.label}</p>
                  <p className="text-xs text-muted mt-0.5">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — visit the farm */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <div className="rounded-2xl bg-ink text-white p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-yellow text-sm font-semibold uppercase tracking-widest">
                  Visit us
                </span>
                <h2 className="text-white mt-3">Drop by the farm.</h2>
                <p className="mt-4 text-white/80 max-w-md">
                  We&apos;re open every day from 5 AM to 8 PM. Yes, you can
                  meet the cows.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-white"
                  >
                    Get directions
                  </a>
                  <a
                    href="tel:+919895056979"
                    className="btn !bg-transparent !border-white/40 text-white hover:!bg-white/10"
                  >
                    Call +91 98950 56979
                  </a>
                </div>
              </div>
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
                <Image
                  src="/hero-farm.png"
                  alt="OK Farm Fresh"
                  fill
                  className="object-cover"
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
