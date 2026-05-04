import Reveal from "../components/Reveal";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How OK Farm Fresh collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
              Privacy <span className="text-green">policy</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink/75 font-medium">
              Last updated 4 May 2026.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-7 prose-styled">
          <Reveal>
            <div className="space-y-8 text-ink/85 leading-relaxed text-base md:text-lg font-medium">
              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Who we are
                </h2>
                <p>
                  OK Farm Fresh is a family dairy in Palachiramade, Edarikode,
                  Kottakkal, Kerala 676501. Reach us at +91 98950 56979 or via
                  the contact form.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  What we collect
                </h2>
                <p>
                  When you submit our contact form we collect your name, phone,
                  email, and message. The form opens WhatsApp with a prefilled
                  message — your details only reach us when you press send in
                  WhatsApp.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  How we use it
                </h2>
                <p>
                  Only to reply to your enquiry, confirm orders, and arrange
                  delivery or pickup. We don&apos;t sell, rent, or share your
                  details with third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Cookies &amp; tracking
                </h2>
                <p>
                  This website uses only essential cookies needed for the site
                  to function. We do not run advertising or third-party tracking
                  scripts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Your rights
                </h2>
                <p>
                  You can ask us to delete your data, correct it, or stop
                  contacting you at any time. Call or WhatsApp us — we&apos;ll
                  action it the same day.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Updates
                </h2>
                <p>
                  We may revise this policy. The latest version will always be
                  on this page with the date above.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
