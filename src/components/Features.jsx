import React from 'react';
import { Zap, ListChecks, Plug, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Automate the Admin',
    desc: 'Offload repetitive, non-creative tasks like file handoffs, approvals, reminders, and status updates to AI-driven flows.'
  },
  {
    icon: ListChecks,
    title: 'Smart Prioritization',
    desc: 'Daily priorities that adapt to deadlines, effort, and creative energy so you ship your best work—without burnout.'
  },
  {
    icon: Plug,
    title: 'Seamless Integrations',
    desc: 'Connect your favorite tools in minutes—Design suites, PM platforms, storage, messaging, and more.'
  },
  {
    icon: BarChart3,
    title: 'Creative Output Analytics',
    desc: 'Understand what fuels your momentum with insights into focus time, delivery velocity, and workload balance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Designed for Creative Momentum</h2>
          <p className="mt-3 text-gray-600">
            MomentumFlow AI simplifies how you plan, produce, and deliver—so your best ideas make it to the finish line faster.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-amber-50 p-3 text-amber-600 ring-1 ring-amber-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
