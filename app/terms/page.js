export const metadata = {
  title: 'Terms of Service | ShoURL',
  description: 'Read the ShoURL terms of service. By using our free URL shortener, you agree to these terms.',
  alternates: { canonical: 'https://shourl-alpha.vercel.app/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="py-24 px-6 min-h-[80vh]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-white italic">
            Terms of <span className="text-blue-500">Service</span>
          </h1>
          <p className="text-zinc-400">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">Acceptable Use</h2>
            <p>ShoURL may only be used to shorten URLs for lawful purposes. You may not use ShoURL to distribute spam, malware, phishing links, or any content that violates applicable law.</p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">Link Removal</h2>
            <p>ShoURL reserves the right to remove any shortened link that violates these terms or is reported as abusive, without prior notice.</p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">Disclaimer</h2>
            <p>ShoURL is provided &quot;as is&quot; without warranties of any kind. We are not responsible for the content of destination URLs or any damages resulting from use of the service.</p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">Contact</h2>
            <p>For terms-related questions, contact us at <a href="mailto:sagar.code81@gmail.com" className="text-blue-400 hover:underline">sagar.code81@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
