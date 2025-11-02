import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'MomentumFlow AI reclaimed two hours a day for our design team. We ship more concepts without sacrificing quality.',
    author: 'Maya Bennett',
    role: 'Creative Director, Neon Canvas'
  },
  {
    quote:
      'Priorities finally make sense. The AI balances deadlines with the actual effort required—burnout dropped to near zero.',
    author: 'Jules Andrade',
    role: 'Senior Designer, Waveform Studio'
  },
  {
    quote:
      'Admin just happens in the background—file handoffs, approvals, reminders. We focus on the work that matters.',
    author: 'Dax Li',
    role: 'Head of Content, Orbit Agency'
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">What Creators Are Saying</h2>
          <p className="mt-3 text-gray-600">Real teams using MomentumFlow AI to protect their creative energy and ship better work.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-gray-800">{t.author}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
