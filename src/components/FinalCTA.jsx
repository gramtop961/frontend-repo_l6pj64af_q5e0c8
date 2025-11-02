import React from 'react';

export default function FinalCTA() {
  return (
    <section id="get-started" className="relative isolate overflow-hidden bg-gray-900 py-20 text-white">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="pointer-events-none absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-400 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Start Your Free Creative Flow Trial</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Automate the busywork, prioritize what matters, and protect your creative energy. No credit card required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-400/30 transition hover:bg-amber-300"
          >
            Get Started Free
          </a>
          <span className="text-sm text-white/60">7-day trial • Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
