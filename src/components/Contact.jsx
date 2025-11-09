import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // In a full app this would POST to your backend. Here we simulate success.
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full bg-gradient-to-b from-white to-violet-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Contact us</h2>
          <p className="mt-3 text-slate-600">Questions about pricing, features, or security? Were here to help.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-5">
          <form onSubmit={handleSubmit} className="sm:col-span-3 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">First name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Tell us what youre looking for..." />
              </div>
            </div>
            <button disabled={status==='loading'} type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/10 disabled:opacity-60">
              <Send className="h-4 w-4" />
              {status==='loading' ? 'Sending...' : status==='success' ? 'Message sent!' : 'Send message'}
            </button>
            {status === 'error' && (
              <p className="mt-2 text-sm text-rose-600">Something went wrong. Please try again.</p>
            )}
          </form>

          <div className="sm:col-span-2 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h4 className="text-sm font-semibold text-slate-900">Sales</h4>
              <p className="mt-1 text-sm text-slate-600">sales@pastelpay.com</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h4 className="text-sm font-semibold text-slate-900">Support</h4>
              <p className="mt-1 text-sm text-slate-600">support@pastelpay.com</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h4 className="text-sm font-semibold text-slate-900">Press</h4>
              <p className="mt-1 text-sm text-slate-600">press@pastelpay.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
