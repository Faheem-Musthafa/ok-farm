"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[calc(100dvh-var(--nav-h))] flex items-center bg-cream-warm/40">
      <div className="w-full max-w-[720px] mx-auto px-4 md:px-7 py-20 md:py-32 text-center">
        <span className="inline-block text-xs font-black tracking-[0.15em] text-red uppercase mb-4">
          Something went wrong
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          We hit a <span className="text-green">bump</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink/75 font-medium">
          Try again, or go back home. If it keeps happening, give us a call —
          +91 98950 56979.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 transition-all duration-300 hover:-translate-y-[2px] text-base md:text-lg"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-rule bg-white text-ink hover:border-green hover:text-green transition-all duration-300 hover:-translate-y-[2px] text-base md:text-lg"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
