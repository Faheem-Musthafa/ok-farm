import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist on OK Farm Fresh.",
};

export default function NotFound() {
  return (
    <section className="min-h-[calc(100dvh-var(--nav-h))] flex items-center bg-cream-warm/40">
      <div className="w-full max-w-[720px] mx-auto px-4 md:px-7 py-14 sm:py-20 md:py-32 text-center">
        <span className="inline-block text-xs font-black tracking-[0.15em] text-green uppercase mb-4">
          404
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Page not <span className="text-green">found</span>.
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-ink/75 font-medium">
          The page you wanted has been moved or never existed. Try the homepage
          or browse our products.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl bg-green text-white shadow-xl hover:shadow-2xl hover:bg-green-500 transition-all duration-300 hover:-translate-y-[2px] text-base md:text-lg"
          >
            Go home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 font-sans font-bold px-7 py-4 rounded-xl border-2 border-rule bg-white text-ink hover:border-green hover:text-green transition-all duration-300 hover:-translate-y-[2px] text-base md:text-lg"
          >
            See products
          </Link>
        </div>
      </div>
    </section>
  );
}
