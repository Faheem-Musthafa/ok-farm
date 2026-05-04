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
      <section className="bg-cream-warm/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 py-20 md:py-32 text-center relative z-10">
          <Reveal>
            <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4 drop-shadow-sm">Contact</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Order or visit our <span className="text-green relative inline-block">
                farm
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-ink/75 font-medium">
              Call, WhatsApp, or send us a message. We&apos;ll get back the same
              day — usually within an hour.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHANNEL CARDS */}
      <section className="py-16 md:py-24 relative bg-white">
        <div className="absolute inset-0 bg-green-50/50 pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 150}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(19,122,77,0.12)] hover:border-green/20 p-8 h-full block group shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-soft text-green flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                  <p className="font-extrabold text-ink text-2xl tracking-tight">{c.sub}</p>
                  <p className="text-sm font-medium text-ink/70 mt-3 mb-6">{c.note}</p>
                  <span className="text-green font-bold inline-flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                    {c.cta} <span className="text-lg">→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="pb-20 md:pb-32 bg-green-50/50">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            <Reveal className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-green/20 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Send us a message.</h2>
                <p className="mt-3 mb-8 text-lg text-ink/75 font-medium">
                  We&apos;ll write or call back as soon as we can.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <p className="text-xs text-muted uppercase tracking-widest font-black mb-3">
                  Address
                </p>
                <p className="font-bold text-ink text-lg leading-snug">
                  Palachiramade, Edarikode,
                  <br />
                  Kottakkal, Kerala 676501
                </p>
                <a
                  href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green font-bold mt-5 inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 hover:text-green-600 text-sm"
                >
                  Open in Maps <span className="text-lg">→</span>
                </a>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <p className="text-xs text-muted uppercase tracking-widest font-black mb-4">
                  Hours
                </p>
                <ul className="space-y-4 text-base font-medium">
                  <li className="flex justify-between items-center">
                    <span className="text-ink/70">Mon – Sat</span>
                    <span className="font-bold text-ink">
                      5 AM – 8 PM
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-ink/70">Sunday</span>
                    <span className="font-bold text-ink">
                      5 AM – 8 PM
                    </span>
                  </li>
                  <li className="flex justify-between items-center border-t border-rule/60 pt-4 mt-2">
                    <span className="text-ink/70">Open today</span>
                    <span className="font-bold text-green flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green animate-[pulse-dot_1.8s_ease-out_infinite] shadow-[0_0_8px_rgba(19,122,77,0.8)]" />
                      Now
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(19,122,77,0.3)] p-8 text-white border border-green-500/30 relative overflow-hidden isolate">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
                <p className="text-yellow-400 text-xs uppercase tracking-widest font-black mb-3 drop-shadow-sm">
                  Service area
                </p>
                <p className="font-bold text-lg leading-snug text-white">
                  Kottakkal · Edarikode · Tirurangadi · Manjeri · Valanchery
                </p>
                <p className="text-sm text-white/80 mt-3 font-medium">
                  Other areas — call to check.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP STRIP — link card with image */}
      <section className="pb-20 md:pb-32 bg-green-50/50">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-7">
          <Reveal>
            <a
              href="https://maps.google.com/?q=Palachiramade+Edarikode+Kottakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream-warm/40 border border-white rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(19,122,77,0.15)] hover:border-green/30 !p-0 block overflow-hidden relative aspect-[16/9] md:aspect-[21/7] group isolate"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center text-green-dark bg-white/40 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-500">
                <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-xl flex items-center justify-center mb-4 text-green">
                    <PinIcon />
                  </div>
                  <p className="font-extrabold text-2xl md:text-3xl tracking-tight text-ink drop-shadow-sm">Palachiramade, Edarikode</p>
                  <p className="text-lg font-medium text-ink/80 mt-1">Kottakkal, Kerala 676501</p>
                  <span className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-transparent transition-all duration-300 whitespace-nowrap bg-green text-white shadow-xl group-hover:bg-green-500 text-base mt-6">
                    Open in Google Maps <span className="text-lg">→</span>
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
