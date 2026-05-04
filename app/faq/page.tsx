import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "FAQ",
  description:
    "Common questions about OK Farm Fresh — milk delivery, pickup, pricing, and dairy quality.",
};

const faqs = [
  {
    q: "How fresh is the milk?",
    a: "Milk is hand-milked at 5 AM each morning, tested, and bottled within hours. Same-day delivery means you get it the same day it's drawn.",
  },
  {
    q: "Do you deliver to my area?",
    a: "We deliver across Kottakkal, Edarikode, Tirurangadi, Manjeri, and Valanchery. For other areas, call us — we'll check feasibility.",
  },
  {
    q: "Can I pick up directly from the farm?",
    a: "Yes. Visit Palachiramade, Edarikode, Kottakkal between 5 AM and 8 PM, any day. Drop us a message before so we can pack what you need.",
  },
  {
    q: "How is the ghee made?",
    a: "Slow-cooked from cultured cream over a low flame, the traditional way. Pure golden, no shortcuts, no additives.",
  },
  {
    q: "Is the milk really 100% pure?",
    a: "Yes. No mixing, no adulteration, no preservatives. What you see is what you get from our cows.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash on delivery, UPI, and bank transfer. We confirm payment after delivery or pickup.",
  },
  {
    q: "Can I subscribe to daily milk?",
    a: "Yes. Tell us the quantity and timing — we'll set up a daily route. Pause or stop anytime via WhatsApp.",
  },
  {
    q: "What if the product is bad on arrival?",
    a: "Contact us within 4 hours and we'll replace it or refund. Dairy is perishable — please tell us quickly.",
  },
  {
    q: "Do you supply restaurants and shops?",
    a: "Yes, we do bulk supply. Call +91 98950 56979 to discuss volumes and pricing.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-cream-warm/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 py-20 md:py-32 text-center relative z-10">
          <Reveal>
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">
              Frequently asked
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Questions, <span className="text-green relative inline-block">
                answered
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-ink/75 font-medium">
              Everything you might want to know before ordering.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full max-w-[860px] mx-auto px-4 md:px-7">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group bg-white/80 backdrop-blur-xl border border-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-green/20 hover:shadow-[0_12px_30px_rgb(19,122,77,0.08)] open:border-green/30 open:shadow-[0_12px_30px_rgb(19,122,77,0.10)]">
                  <summary className="cursor-pointer list-none px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-6">
                    <span className="font-extrabold text-lg md:text-xl text-ink tracking-tight">
                      {f.q}
                    </span>
                    <span className="flex-none w-9 h-9 rounded-full bg-green-soft text-green flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-7 text-ink/80 leading-relaxed text-base md:text-lg font-medium">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-16">
            <p className="text-ink/75 font-medium mb-5">
              Still have a question? Call us or send a message.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-xl bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 transition-all duration-300 hover:-translate-y-[2px] text-base md:text-lg"
            >
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
