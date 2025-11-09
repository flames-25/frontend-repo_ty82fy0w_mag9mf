import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For trying things out',
    features: ['Up to 1,000 requests/mo', 'Basic analytics', 'Community support'],
    cta: 'Start for free',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$19',
    description: 'For growing projects',
    features: ['100k requests/mo', 'Advanced analytics', 'Priority support', 'Webhooks'],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    description: 'For scale-ups and teams',
    features: ['Unlimited requests', 'SLA & SSO', 'Dedicated manager', 'Custom limits'],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-gradient-to-b from-violet-50 to-sky-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Fair plans that scale as you do. No hidden fees, ever.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur ${
                tier.highlight ? 'border-rose-300 shadow-rose-200' : 'border-slate-200'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-rose-500 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                {tier.price !== 'Free' && <span className="text-slate-500">/mo</span>}
              </div>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ${
                  tier.highlight
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:-translate-y-0.5'
                    : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
