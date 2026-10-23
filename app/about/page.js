export const metadata = {
  title: "About ShoURL — The Free URL Shortener Built for Everyone",
  description:
    "Learn about ShoURL — a free, fast, and secure URL shortener built for creators, developers, and marketers. Shorten any link in seconds with no account required.",
  alternates: {
    canonical: "https://shourl-alpha.vercel.app/about",
  },
};

const pillars = [
  {
    title: "Lightning Fast",
    icon: "⚡",
    desc: "ShoURL's redirect engine resolves short links in under 100ms. Your audience never waits.",
  },
  {
    title: "Truly Secure",
    icon: "🔒",
    desc: "All links are stored with industry-standard encryption. We never track personal data.",
  },
  {
    title: "100% Free",
    icon: "💸",
    desc: "No hidden costs, no premium plans, no credit card. ShoURL is free for everyone, forever.",
  },
  {
    title: "Custom Aliases",
    icon: "🎯",
    desc: "Create branded short links with a custom alias that reflects your content or campaign.",
  },
  {
    title: "No Account Needed",
    icon: "✅",
    desc: "Shorten your first URL in seconds — no sign-up, no email, no friction.",
  },
  {
    title: "Built for Everyone",
    icon: "🌐",
    desc: "Whether you're a developer, marketer, teacher, or creator — ShoURL works for you.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-20 px-6 mt-10">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase">
            About ShoURL
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white italic leading-tight">
            Big links,{" "}
            <span className="text-blue-500 underline decoration-zinc-700">
              Small footprint.
            </span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg">
            ShoURL was built for creators, marketers, and developers who need clean, fast, and free URL shortening — without the complexity of enterprise tools.
          </p>
        </div>

        {/* Mission */}
        <section aria-labelledby="mission-heading" className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl space-y-4">
          <h2 id="mission-heading" className="text-2xl font-black text-white">Our Mission</h2>
          <p className="text-zinc-400 leading-relaxed">
            The internet is filled with long, ugly URLs that are hard to remember and impossible to share neatly. ShoURL's mission is simple: make link sharing effortless for everyone. We believe a powerful URL shortener should be free, fast, and accessible — not locked behind paywalls or account registrations.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            As a free alternative to Bitly, TinyURL, and Rebrandly, ShoURL gives you custom short links, instant redirects, and a clean interface — all at zero cost.
          </p>
        </section>

        {/* Feature pillars */}
        <section aria-labelledby="pillars-heading" className="space-y-8">
          <h2 id="pillars-heading" className="text-2xl font-black text-white text-center">
            What Makes ShoURL Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all space-y-2"
              >
                <div className="text-2xl">{p.icon}</div>
                <h3 className="text-blue-400 font-bold">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Who is it for */}
        <section aria-labelledby="who-heading" className="space-y-6">
          <h2 id="who-heading" className="text-2xl font-black text-white text-center">
            Who Uses ShoURL?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { who: "Developers & Programmers", use: "Shorten API docs, GitHub repo links, and deployment URLs for sharing in Slack or email." },
              { who: "Digital Marketers", use: "Create campaign-specific short URLs with custom aliases for A/B testing and tracking." },
              { who: "Content Creators", use: "Share clean, professional-looking links in YouTube descriptions, Instagram bios, and tweets." },
              { who: "Educators & Students", use: "Share Google Drive files, educational resources, and assignment links with short, clean URLs." },
            ].map((item) => (
              <div key={item.who} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-2">
                <h3 className="text-white font-bold">{item.who}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <p className="text-zinc-400">Ready to try the best free URL shortener?</p>
          <a
            href="/"
            className="inline-block px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
          >
            Start Shortening URLs for Free →
          </a>
        </div>

      </div>
    </main>
  );
}