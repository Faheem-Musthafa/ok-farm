export default function Loading() {
  return (
    <section className="min-h-[calc(100dvh-var(--nav-h))] flex items-center justify-center bg-cream-warm/40">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <span className="absolute inset-0 rounded-full border-4 border-green/20" />
          <span className="absolute inset-0 rounded-full border-4 border-green border-t-transparent animate-spin" />
        </div>
        <p className="text-sm font-bold tracking-widest text-green uppercase">
          Loading
        </p>
      </div>
    </section>
  );
}
