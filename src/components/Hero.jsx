import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span className="text-xs font-medium tracking-wide text-white/90">AI-powered workflow for creators</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Unleash Your Creative Genius. <span className="text-amber-300">Automate</span> the Rest.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          MomentumFlow AI handles your workflows, task prioritization, and admin, so you can focus on what you do best: creating groundbreaking work.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-400/30 transition hover:bg-amber-300"
          >
            Start Your Free Creative Flow Trial
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Play className="h-4 w-4" />
            See How It Works (Video)
          </a>
        </div>
      </div>
    </section>
  );
}
