import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Designing fintech with calm pastels',
    excerpt: 'How soft color systems improve focus and trust in financial products.',
    date: 'Oct 2025',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'From checkout to loyalty in one flow',
    excerpt: 'Reducing friction across the purchase journey to boost conversions.',
    date: 'Sep 2025',
    tag: 'Growth',
  },
  {
    id: 3,
    title: 'Security that feels invisible',
    excerpt: 'Behind the scenes of our tokenization and device safety features.',
    date: 'Aug 2025',
    tag: 'Security',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-gradient-to-b from-rose-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 text-slate-600">Insights on product, growth, and security.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-sky-700 ring-1 ring-sky-200">{post.tag}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-slate-900 hover:underline">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
