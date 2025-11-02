import React from 'react';
import { Rocket, Brain, Clock, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Rocket,
    title: 'Connect Your Tools',
    desc: 'Plug in your design apps, project trackers, storage, and messaging. Setup takes minutes—no code required.'
  },
  {
    icon: Brain,
    title: 'Train Your Preferences',
    desc: 'Tell MomentumFlow how you like to work—deadlines, effort levels, focus windows—and it learns from every project.'
  },
  {
    icon: Clock,
    title: 'Auto‑Prioritize & Schedule',
    desc: 'Your daily plan updates in real time based on impact, dependencies, and available creative energy.'
  },
  {
    icon: CheckCircle2,
    title: 'Execute & Track Progress',
    desc: 'Automations run in the background while you create. See clear progress and celebrate more shipped work.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-gradient-to-b from-white to-amber-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">How MomentumFlow AI Works</h2>
          <p className="mt-3 text-gray-600">
            A streamlined path from idea to delivery—optimized by AI, shaped by your creative process.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  {i + 1}
                </span>
                <Icon className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
