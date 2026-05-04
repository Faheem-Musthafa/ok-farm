"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-green-soft border border-green/15 p-7 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-green text-white flex items-center justify-center mb-4">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mb-2">Message sent!</h3>
        <p className="text-ink/75">We&apos;ll get back to you the same day.</p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-[position:0_100%] bg-no-repeat pb-[2px] transition-[background-size] duration-300 hover:bg-[length:0_0] text-green font-semibold mt-5 inline-block"
        >
          Send another
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl border-2 border-rule/50 bg-cream-warm/30 text-ink placeholder:text-muted focus:outline-none focus:border-green focus:ring-4 focus:ring-green/10 transition-all duration-300 font-medium";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">Your name</span>
          <input
            className={inputClass}
            type="text"
            name="name"
            required
            placeholder="Anu Reji"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">Phone</span>
          <input
            className={inputClass}
            type="tel"
            name="phone"
            required
            placeholder="+91 ..."
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">Email</span>
        <input
          className={inputClass}
          type="email"
          name="email"
          required
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">
          What do you need?
        </span>
        <select className={inputClass} name="topic" defaultValue="" required>
          <option value="" disabled>
            Choose one
          </option>
          <option>Daily milk subscription</option>
          <option>One-time order</option>
          <option>Curd / Ghee / Moru</option>
          <option>Visit the farm</option>
          <option>Bulk / restaurant supply</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block">
        <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">Message</span>
        <textarea
          className={`${inputClass} resize-none`}
          name="message"
          rows={4}
          required
          placeholder="Tell us what you'd like — quantity, area, anything else."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 text-base md:text-lg w-full sm:w-auto disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-xl mt-2"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
