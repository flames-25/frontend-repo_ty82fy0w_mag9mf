import React from 'react';
import { Lock, LogIn, UserPlus } from 'lucide-react';

export default function AuthCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-sky-50 to-rose-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <Lock className="h-3.5 w-3.5" />
              Secure by design
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Sign up free. Log in anywhere.
            </h3>
            <p className="mt-2 text-slate-600">
              Create an account to access your dashboard, manage payments, and sync across devices. No credit card required to
              start.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
                <UserPlus className="h-4 w-4" />
                Create account
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-200">
                <LogIn className="h-4 w-4" />
                Log in
              </button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <ul className="grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-center gap-2">• OAuth ready (Google, GitHub)</li>
              <li className="flex items-center gap-2">• 2FA & device approvals</li>
              <li className="flex items-center gap-2">• GDPR & SOC2 aligned</li>
              <li className="flex items-center gap-2">• Session & API tokens</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
