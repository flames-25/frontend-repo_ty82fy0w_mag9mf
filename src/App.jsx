import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AuthCTA from './components/AuthCTA';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Simple navbar */}
      <header className="fixed inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl border border-t-0 border-slate-200/80 bg-white/80 px-6 py-3 backdrop-blur">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <span className="inline-grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-rose-200 to-sky-200 text-slate-800">∿</span>
            PastelPay
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a className="hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="hover:text-slate-900" href="#blog">Blog</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
            <a className="rounded-lg bg-slate-900 px-3 py-1.5 font-medium text-white shadow-sm" href="#contact">Get started</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col">
        <Hero />
        <Pricing />
        <AuthCTA />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} PastelPay, Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
