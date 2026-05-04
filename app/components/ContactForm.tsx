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
        <p>We&apos;ll get back to you the same day.</p>
        <button
          onClick={() => setStatus("idle")}
          className="under text-green font-semibold mt-5 inline-block"
        >
          Send another
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-rule bg-white text-ink placeholder:text-muted focus:outline-none focus:border-green focus:ring-2 focus:ring-green/15 transition";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm font-semibold mb-1.5">Your name</span>
          <input
            className={inputClass}
            type="text"
            name="name"
            required
            placeholder="Anu Reji"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold mb-1.5">Phone</span>
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
        <span className="block text-sm font-semibold mb-1.5">Email</span>
        <input
          className={inputClass}
          type="email"
          name="email"
          required
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
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
        <span className="block text-sm font-semibold mb-1.5">Message</span>
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
        className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
