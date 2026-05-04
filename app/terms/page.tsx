import Reveal from "../components/Reveal";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you order from OK Farm Fresh, Edarikode, Kottakkal.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-cream-warm/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-7 py-20 md:py-28 text-center relative z-10">
          <Reveal>
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">
              Legal
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Terms of <span className="text-green">service</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink/75 font-medium">
              Last updated 4 May 2026.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-7">
          <Reveal>
            <div className="space-y-8 text-ink/85 leading-relaxed text-base md:text-lg font-medium">
              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Orders
                </h2>
                <p>
                  Orders are confirmed only after we reply via call or WhatsApp.
                  Submitting the contact form is an enquiry, not a binding
                  order.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Pricing &amp; payment
                </h2>
                <p>
                  Prices listed on this site are indicative and may change
                  without notice. Payment is on delivery or at pickup — cash,
                  UPI, or bank transfer. All prices include applicable taxes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Delivery
                </h2>
                <p>
                  Same-day delivery is offered across Kottakkal, Edarikode,
                  Tirurangadi, Manjeri, and Valanchery. Delivery windows depend
                  on milking and packing schedules. We will confirm a delivery
                  time when we accept your order.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Quality &amp; returns
                </h2>
                <p>
                  Dairy is perishable. If a product is spoiled or damaged on
                  arrival, contact us within 4 hours of delivery and we&apos;ll
                  replace it or refund. Past that window we&apos;re unable to
                  accept returns.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Liability
                </h2>
                <p>
                  We supply pure cow milk and traditional dairy. If you have
                  allergies or medical conditions, please consult your doctor
                  before consuming any of our products.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Contact
                </h2>
                <p>
                  Questions about these terms — call +91 98950 56979 or
                  WhatsApp +91 96332 75787.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
