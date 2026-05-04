import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact — OK Farm Fresh",
  description:
    "Reach OK Farm Fresh, Edarikode, Kottakkal. Phone +91 98950 56979. Open daily 5 AM – 8 PM.",
};

const channels = [
  {
    title: "Call us",
    sub: "+91 98950 56979",
    note: "We answer 5 AM – 8 PM, daily.",
    href: "tel:+919895056979",
    cta: "Call now",
    icon: <PhoneIcon />,
  },
  {
    title: "WhatsApp",
    sub: "+91 96332 75787",
    note: "Quickest way to order.",
    href: "https://wa.me/919633275787",
    cta: "Open WhatsApp",
    icon: <MessageIcon />,
  },
  {
    title: "Visit the farm",
    sub: "Edarikode, Kottakkal",
    note: "Open every day 5 AM – 8 PM.",
    href: "https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal",
    cta: "Get directions",
    icon: <PinIcon />,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-warm/40 border-b border-rule">
        <div className="container-x py-12 md:py-16 text-center">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>
              Order or visit our <span className="text-green">farm</span>.
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed">
              Call, WhatsApp, or send us a message. We&apos;ll get back the same
              day — usually within an hour.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHANNEL CARDS */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-5">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card p-7 h-full block group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-soft text-green flex items-center justify-center mb-5">
                    {c.icon}
                  </div>
                  <h3 className="mb-1">{c.title}</h3>
                  <p className="font-semibold text-ink text-lg">{c.sub}</p>
                  <p className="text-sm mt-2 mb-5">{c.note}</p>
                  <span className="text-green font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {c.cta} →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            <Reveal className="lg:col-span-3">
              <div className="card p-6 md:p-8">
                <h2>Send us a message.</h2>
                <p className="mt-2 mb-7">
                  We&apos;ll write or call back as soon as we can.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-2 space-y-5">
              <div className="card p-6">
                <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-2">
                  Address
                </p>
                <p className="font-semibold text-ink leading-snug">
                  Palachiramade, Edarikode,
                  <br />
                  Kottakkal, Kerala 676501
                </p>
                <a
                  href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green font-semibold mt-3 inline-block under text-sm"
                >
                  Open in Maps →
                </a>
              </div>

              <div className="card p-6">
                <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-3">
                  Hours
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted">Mon – Sat</span>
                    <span className="font-semibold text-ink">
                      5 AM – 8 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Sunday</span>
                    <span className="font-semibold text-ink">
                      5 AM – 8 PM
                    </span>
                  </li>
                  <li className="flex justify-between border-t border-rule pt-2 mt-2">
                    <span className="text-muted">Open today</span>
                    <span className="font-semibold text-green flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green pulse-dot" />
                      Now
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-green text-white border-green">
                <p className="text-yellow text-xs uppercase tracking-wider font-semibold mb-2">
                  Service area
                </p>
                <p className="font-semibold leading-snug text-white">
                  Kottakkal · Edarikode · Tirurangadi · Manjeri · Valanchery
                </p>
                <p className="text-sm text-white/80 mt-2">
                  Other areas — call to check.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP STRIP — link card with image */}
      <section className="pb-16">
        <div className="container-x">
          <Reveal>
            <a
              href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="card !p-0 block overflow-hidden relative aspect-[16/7] md:aspect-[16/5] bg-green-soft"
            >
              <div className="absolute inset-0 flex items-center justify-center text-green-dark">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center mb-3">
                    <PinIcon />
                  </div>
                  <p className="font-bold text-lg">Palachiramade, Edarikode</p>
                  <p className="text-sm">Kottakkal, Kerala 676501</p>
                  <span className="btn btn-primary mt-5 inline-flex !py-2.5">
                    Open in Google Maps →
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
