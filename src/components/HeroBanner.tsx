import { Link } from 'react-router-dom';

export const HeroBanner = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue via-brand-teal to-cyan-300 px-6 py-12 shadow-soft text-white sm:px-10">
      <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-white/15 blur-3xl" aria-hidden />
      <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
      <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            New season arrivals
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Shop electronics, books, and fashion with a calm, focused experience.
          </h1>
          <p className="text-base text-white/90 sm:text-lg">
            Discover curated picks, clear details, and a fast cart experience. No distractions, just the essentials.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/products"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-blue shadow-soft hover:bg-slate-100"
            >
              Browse products
            </Link>
            <Link
              to="/cart"
              className="rounded-full border border-white/50 px-5 py-2 text-sm font-semibold text-white hover:bg-white/15"
            >
              View cart
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="rounded-2xl bg-white/15 p-6 shadow-soft backdrop-blur">
            <div className="grid grid-cols-3 gap-3 text-sm font-semibold">
              <div className="rounded-xl bg-white/20 p-4 text-center">
                <p className="text-3xl">⭐</p>
                <p>Top rated</p>
              </div>
              <div className="rounded-xl bg-white/20 p-4 text-center">
                <p className="text-3xl">⚡</p>
                <p>Fast browse</p>
              </div>
              <div className="rounded-xl bg-white/20 p-4 text-center">
                <p className="text-3xl">🛍️</p>
                <p>Fresh picks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
