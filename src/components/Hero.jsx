import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-12 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
          New • Pastel fintech experience
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Simple finance tools for modern brands
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Accept payments, manage cards, and grow revenue — all in a clean, minimalist suite designed with soft pastel aesthetics.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/15"
          >
            Get started
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white/80 px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            Talk to sales
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat label="Uptime" value="99.99%" />
          <Stat label="Fees" value="0.5%" />
          <Stat label="Global" value="190+" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-left shadow-sm backdrop-blur">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}
