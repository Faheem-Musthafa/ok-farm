"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type Status = "idle" | "sending" | "sent";

type Fields = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const TOPICS = [
  "Daily milk subscription",
  "One-time order",
  "Curd / Ghee / Moru",
  "Visit the farm",
  "Bulk / restaurant supply",
  "Other",
];

const NAME_RE = /^[\p{L}\s.'-]{2,60}$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(field: keyof Fields, value: string): string | undefined {
  const v = value.trim();
  switch (field) {
    case "name":
      if (!v) return "Name required.";
      if (v.length < 2) return "Too short.";
      if (!NAME_RE.test(v)) return "Letters only.";
      return;
    case "phone": {
      if (!v) return "Phone required.";
      const digits = v.replace(/\D/g, "");
      const local = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
      if (local.length !== 10) return "Enter 10-digit Indian number.";
      if (!/^[6-9]/.test(local)) return "Must start with 6, 7, 8, or 9.";
      return;
    }
    case "email":
      if (!v) return "Email required.";
      if (!EMAIL_RE.test(v)) return "Invalid email.";
      if (v.length > 254) return "Too long.";
      return;
    case "topic":
      if (!v) return "Pick one.";
      if (!TOPICS.includes(v)) return "Invalid choice.";
      return;
    case "message":
      if (!v) return "Message required.";
      if (v.length < 10) return "At least 10 characters.";
      if (v.length > 1000) return "Max 1000 characters.";
      return;
  }
}

function validateAll(f: Fields): Errors {
  const errs: Errors = {};
  (Object.keys(f) as (keyof Fields)[]).forEach((k) => {
    const e = validate(k, f[k]);
    if (e) errs[k] = e;
  });
  return errs;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState<Fields>({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});

  function update(key: keyof Fields) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setFields((f) => ({ ...f, [key]: value }));
      if (touched[key]) {
        setErrors((prev) => ({ ...prev, [key]: validate(key, value) }));
      }
    };
  }

  function blur(key: keyof Fields) {
    return () => {
      setTouched((t) => ({ ...t, [key]: true }));
      setErrors((prev) => ({ ...prev, [key]: validate(key, fields[key]) }));
    };
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validateAll(fields);
    setErrors(errs);
    setTouched({
      name: true,
      phone: true,
      email: true,
      topic: true,
      message: true,
    });
    if (Object.keys(errs).length > 0) return;

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
          onClick={() => {
            setStatus("idle");
            setFields({ name: "", phone: "", email: "", topic: "", message: "" });
            setErrors({});
            setTouched({});
          }}
          className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-[position:0_100%] bg-no-repeat pb-[2px] transition-[background-size] duration-300 hover:bg-[length:0_0] text-green font-semibold mt-5 inline-block"
        >
          Send another
        </button>
      </div>
    );
  }

  const baseInput =
    "w-full px-5 py-3.5 rounded-xl border-2 bg-cream-warm/30 text-ink placeholder:text-muted focus:outline-none focus:ring-4 transition-all duration-300 font-medium";

  function inputClass(key: keyof Fields) {
    const hasErr = touched[key] && errors[key];
    return `${baseInput} ${
      hasErr
        ? "border-red bg-red-soft/30 focus:border-red focus:ring-red/15"
        : "border-rule/50 focus:border-green focus:ring-green/10"
    }`;
  }

  function ErrorText({ field }: { field: keyof Fields }) {
    if (!touched[field] || !errors[field]) return null;
    return (
      <span
        id={`${field}-error`}
        role="alert"
        className="mt-1.5 block text-sm font-semibold text-red"
      >
        {errors[field]}
      </span>
    );
  }

  function ariaProps(key: keyof Fields) {
    const hasErr = touched[key] && errors[key];
    return {
      "aria-invalid": hasErr ? true : undefined,
      "aria-describedby": hasErr ? `${key}-error` : undefined,
    } as const;
  }

  const messageLen = fields.message.length;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">
            Your name
          </span>
          <input
            className={inputClass("name")}
            type="text"
            name="name"
            value={fields.name}
            onChange={update("name")}
            onBlur={blur("name")}
            placeholder="Anu Reji"
            autoComplete="name"
            maxLength={60}
            {...ariaProps("name")}
          />
          <ErrorText field="name" />
        </label>
        <label className="block">
          <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">
            Phone
          </span>
          <input
            className={inputClass("phone")}
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={update("phone")}
            onBlur={blur("phone")}
            placeholder="+91 98XXX XXXXX"
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            {...ariaProps("phone")}
          />
          <ErrorText field="phone" />
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">
          Email
        </span>
        <input
          className={inputClass("email")}
          type="email"
          name="email"
          value={fields.email}
          onChange={update("email")}
          onBlur={blur("email")}
          placeholder="you@example.com"
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          {...ariaProps("email")}
        />
        <ErrorText field="email" />
      </label>

      <label className="block">
        <span className="block text-sm font-bold mb-2 tracking-wide text-ink/80 uppercase">
          What do you need?
        </span>
        <select
          className={inputClass("topic")}
          name="topic"
          value={fields.topic}
          onChange={update("topic")}
          onBlur={blur("topic")}
          {...ariaProps("topic")}
        >
          <option value="" disabled>
            Choose one
          </option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <ErrorText field="topic" />
      </label>

      <label className="block">
        <span className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold tracking-wide text-ink/80 uppercase">
            Message
          </span>
          <span
            className={`text-xs font-semibold ${
              messageLen > 1000 ? "text-red" : "text-muted"
            }`}
            aria-live="polite"
          >
            {messageLen} / 1000
          </span>
        </span>
        <textarea
          className={`${inputClass("message")} resize-none`}
          name="message"
          rows={4}
          value={fields.message}
          onChange={update("message")}
          onBlur={blur("message")}
          placeholder="Tell us what you'd like — quantity, area, anything else."
          maxLength={1000}
          {...ariaProps("message")}
        />
        <ErrorText field="message" />
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
