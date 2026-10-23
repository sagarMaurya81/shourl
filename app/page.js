// app/page.js — Server Component (fully SSR — Googlebot reads every word)
import HomeForm from "./HomeForm";
import Link from "next/link";

export const metadata = {
  title: "ShoURL — Free URL Shortener | Shorten Links Instantly",
  description:
    "ShoURL is the #1 free URL shortener. Shorten any link in seconds with a custom alias. No sign-up needed. The best free alternative to Bitly, TinyURL & Rebrandly.",
  alternates: {
    canonical: "https://shourl-alpha.vercel.app",
  },
};

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Our URL shortener redirects users in under 100ms using global edge infrastructure. Zero lag, instant delivery.",
    keyword: "fast URL shortener",
  },
  {
    icon: "🎯",
    title: "Custom Aliases",
    desc: "Create branded short links with your own custom alias. shourl-alpha.vercel.app/your-brand — clean, memorable, and professional.",
    keyword: "custom short URL",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Every shortened link is stored securely. We never track personal data — just the redirect.",
    keyword: "secure URL shortener",
  },
  {
    icon: "💸",
    title: "100% Free Forever",
    desc: "ShoURL is completely free with no hidden costs, no premium tiers, and no account required to shorten URLs.",
    keyword: "free link shortener",
  },
  {
    icon: "📋",
    title: "One-Click Copy",
    desc: "Copy your new short URL to the clipboard instantly. Share it anywhere — social media, email, SMS, or QR codes.",
    keyword: "short link generator",
  },
  {
    icon: "🌐",
    title: "Works Everywhere",
    desc: "ShoURL works with any URL — YouTube, Instagram, Google Docs, long e-commerce links, and more.",
    keyword: "link shortener online",
  },
];

const steps = [
  {
    step: "01",
    title: "Paste Your Long URL",
    desc: 'Copy any long, messy URL and paste it into the ShoURL input field. Works with any website link.',
  },
  {
    step: "02",
    title: "Choose a Custom Alias",
    desc: 'Pick a short, memorable alias for your link. For example: "my-site", "sale2026", or your brand name.',
  },
  {
    step: "03",
    title: "Generate & Share",
    desc: 'Click "Generate Short Link" and your shortened URL is instantly ready to copy and share anywhere.',
  },
];

const faqs = [
  {
    q: "What is ShoURL?",
    a: "ShoURL is a free online URL shortener that converts long, complex links into short, clean URLs. It's fast, free, and requires no account or sign-up.",
  },
  {
    q: "Is ShoURL completely free?",
    a: "Yes. ShoURL is 100% free forever. There are no subscription plans, premium tiers, or hidden costs. You can shorten as many URLs as you want at no charge.",
  },
  {
    q: "How do I shorten a URL with ShoURL?",
    a: 'Simply paste your long URL into the input box, type a custom alias, and click "Generate Short Link". Your shortened URL is ready to share in seconds.',
  },
  {
    q: "Is ShoURL a good alternative to Bitly?",
    a: "Yes! ShoURL is one of the best free Bitly alternatives. Unlike Bitly, ShoURL requires no account, has no monthly link limits, and is completely free to use.",
  },
  {
    q: "Can I use ShoURL to shorten any URL?",
    a: "Yes. ShoURL works with any valid URL — YouTube links, Instagram posts, Google Drive files, long e-commerce URLs, and more.",
  },
  {
    q: "Is there a limit on how many URLs I can shorten?",
    a: "No. ShoURL has no limit on the number of URLs you can shorten. Create as many short links as you need, completely free.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 relative pt-20 pb-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full max-w-2xl z-10 space-y-6 text-center">
          {/* Hero badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase">
            ✦ Free URL Shortener
          </span>

          {/* Primary H1 — keyword-rich */}
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Shorten Any <span className="text-blue-500">URL</span> in Seconds
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            ShoURL is the fastest free URL shortener online. Create clean, branded short links instantly — no account required. The best alternative to Bitly and TinyURL.
          </p>

          {/* The interactive form (client component) */}
          <div className="text-left mt-4">
            <HomeForm />
          </div>

          {/* Social proof */}
          <p className="text-zinc-600 text-xs mt-2">
            ✓ Free forever &nbsp;·&nbsp; ✓ No sign-up &nbsp;·&nbsp; ✓ Custom aliases &nbsp;·&nbsp; ✓ Instant redirect
          </p>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-20 px-6" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 id="features-heading" className="text-3xl font-black text-white">
              Why Choose <span className="text-blue-500">ShoURL</span>?
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              ShoURL is built to be the most reliable, fast, and free URL shortener available. Here's what makes it stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <article
                key={f.title}
                className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-blue-500/40 transition-all group"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-6 border-t border-zinc-800/60" aria-labelledby="how-heading">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 id="how-heading" className="text-3xl font-black text-white">
              How to Shorten a <span className="text-blue-500">URL</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Shorten any link in 3 simple steps using ShoURL — the easiest free link shortener online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
                <span className="text-5xl font-black text-zinc-800 select-none">{s.step}</span>
                <h3 className="text-white font-bold">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison / Social Proof ── */}
      <section className="py-20 px-6 border-t border-zinc-800/60" aria-labelledby="compare-heading">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 id="compare-heading" className="text-3xl font-black text-white">
              The Best Free <span className="text-blue-500">Bitly Alternative</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Tired of Bitly's link limits or TinyURL's lack of custom aliases? ShoURL gives you everything — for free.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-zinc-400 border-b border-zinc-800">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-400">ShoURL ✦</th>
                  <th className="text-center py-3 px-4 font-semibold">Bitly (Free)</th>
                  <th className="text-center py-3 px-4 font-semibold">TinyURL</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                {[
                  ["100% Free", "✅", "⚠️ Limited", "✅"],
                  ["No Account Needed", "✅", "❌", "✅"],
                  ["Custom Aliases", "✅", "⚠️ 10/month", "⚠️ Paid only"],
                  ["Unlimited Links", "✅", "❌ 10/month", "✅"],
                  ["Instant Redirect", "✅", "✅", "✅"],
                ].map(([feat, shourl, bitly, tiny]) => (
                  <tr key={feat} className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-zinc-300">{feat}</td>
                    <td className="py-3 px-4 text-center">{shourl}</td>
                    <td className="py-3 px-4 text-center">{bitly}</td>
                    <td className="py-3 px-4 text-center">{tiny}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ Section (visible text matches JSON-LD) ── */}
      <section className="py-20 px-6 border-t border-zinc-800/60" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 id="faq-heading" className="text-3xl font-black text-white">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
            <p className="text-zinc-500">Everything you need to know about ShoURL — the free URL shortener.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-5 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all open:border-blue-500/30"
              >
                <summary className="cursor-pointer text-white font-semibold text-sm list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-zinc-500 text-lg group-open:rotate-45 transition-transform duration-200 shrink-0">+</span>
                </summary>
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-6 border-t border-zinc-800/60" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 id="cta-heading" className="text-3xl font-black text-white">
            Start Shortening <span className="text-blue-500">URLs</span> for Free
          </h2>
          <p className="text-zinc-500">
            Join thousands of users who trust ShoURL as their go-to free URL shortener. No account needed — just paste, alias, and go.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              Shorten a URL Now →
            </a>
            <Link
              href="/about"
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-full transition-all duration-300"
            >
              Learn About ShoURL
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
